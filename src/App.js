import React from "react";
import {Route,Routes} from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header";
import Drawer from './components/Drawer'
import Home from "./pages/Home";
import Favorites from './pages/Favorites'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItem, setCartItems] = React.useState([]);
  const [favorite, setFavotite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
 async function fetchData() {
  setIsLoading(true);
 const cardRespone = await axios.get("https://6877a243dba809d901f04598.mockapi.io/Card")     
 const favoriteRespone = await axios.get("https://687e2c00c07d1a878c31991e.mockapi.io/favorite")
const itemsResponse = await axios.get("https://6877a243dba809d901f04598.mockapi.io/items") 

setIsLoading(false);
      setItems(itemsResponse.data);
      setCartItems(cardRespone.data);
      setFavotite(favoriteRespone.data );
 }
   fetchData ();
 }, []);

  const onAddToCart = async (obj) => {
    if (cartItem.find((items) => Number(items.id) === Number (obj.id))){
      axios.delete(`https://6877a243dba809d901f04598.mockapi.io/Card/${obj.id}`);
      setCartItems(prev => prev.filter((items) => Number (items.id) !== Number(obj.id)));
    } else {
 axios.post("https://6877a243dba809d901f04598.mockapi.io/Card",obj)
 setCartItems((prev) => [...prev, obj]);
    }
 
    try {
      const res = await axios.post("https://687e2c00c07d1a878c31991e.mockapi.io/favorite", obj);
      setFavotite(prev => [...prev, res.data]);
    } catch (err) {
     
    }
  };
  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://6877a243dba809d901f04598.mockapi.io/Card/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
   
    }
  };
      const onAddToFavorite = async (obj) => {

   try{
         if (favorite.find((favObj) => favObj.id === obj.id)) {
          axios.delete(`https://687e2c00c07d1a878c31991e.mockapi.io/favorite/${obj.id}`);
         
        } else {
        const { data } = await axios.post('https://687e2c00c07d1a878c31991e.mockapi.io/favorite',obj);
          setFavotite((prev) => [...prev, data]);
        }


   } catch (error) {
    alert('Не удалось добавить в фавориты');
   }
   
  

   
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };




  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItem}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
<Routes>

<Route path="/" element={
  <Home items={items}
  cartItem={cartItem}
  searchValue={searchValue} 
  setSearchValue={setSearchValue}
   onChangeSearchInput={onChangeSearchInput}
   onAddToFavorite={onAddToFavorite}
   onAddToCart={onAddToCart}
   isLoading={isLoading}
   /> 
}/>
</Routes>
<Routes>

<Route path="/favorite" element={
<Favorites items={favorite} onAddToFavorite={onAddToFavorite}/>
}/>
</Routes>

   
    </div>
  );
}

export default App;
