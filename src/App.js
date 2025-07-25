import React from "react";
import {Route,Routes} from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header";
import Drawer from './components/Drawer'
import Home from "./pages/Home";
import Favorites from './pages/Favorites'
import AppContext from "./contex";




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
         if (favorite.find((favObj) => Number(favObj.id) === Number (obj.id))) {
          axios.delete(`https://687e2c00c07d1a878c31991e.mockapi.io/favorite/${obj.id}`);
         setFavotite((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    
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

  const isItemAdded = (id) => {
    return cartItem.some((obj) => Number(obj.id) === Number(id));
  }



  return (
<AppContext.Provider value={{  items, cartItem, favorite, isItemAdded, onAddToFavorite, setCartOpened, setCartItems }}>
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
<Favorites />
}/>
</Routes>

   
    </div>
</AppContext.Provider>
  );
}

export default App;






































































































































































































































































































// import React from "react";
// import axios from "axios";

// import Info from "./Info";
// import AppContext from "../contex";


// function Drawer({ onClose, onRemove, items = [] }) {
//   const {cartItems ,setCartItems} = React.useContext(AppContext);
//   const [orderId, setOrderId] = React.useState(null);
// const [isOrderComplete, setisOrderComplete] = React.useState(false);

// const onClickOrder =  async () => {
// try { 
//     const {data} = await  axios.post('/orders',cartItems);
//   setOrderId(data.id);
//   setisOrderComplete(true);
//   setCartItems([]);

// } catch (error) {
//   alert ('Неудалось создать заказ :(');

// }


// };

//   return (
//     <div className="overlay">
//       <div className="drawer">
//         <h2 className="d-flex justify-between mb-30 ">
//           Корзина
//           <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" />
//         </h2>
       

//           <div className="items ">
//         {items.length > 0 ? (
//         <div className="d-flex flex-column ">
//            { items.map((obj) => (
//               <div key={obj.id} className="cartItem d-flex align-center mb-20">
//                 <img
//                   src={obj.imageUrl}
//                   alt={obj.title}
//                   className="cartItemImg"
//                   style={{
//                     width: "70px",
//                     height: "70px",
//                     objectFit: "contain",
//                   }}
//                 />
//                 <div className="mr-20 flex">
//                   <p className="mb-5">{obj.title}</p>
//                   <b> {obj.price} руб.</b>
//                 </div>

//                 <img 
//                   onClick={() => onRemove(obj.id)}
//                   className="removeBtn cu-p"
//                   src="/img/btn-remove.svg"
//                   alt="fdf"
//                 />
//               </div>
//             ))}
//                 <div className="cartTotalBlock">
//           <ul>
//             <li>
//               <span>Итого:</span>
//               <div></div>
//               <b> 21 498 руб.</b>
//             </li>
//             <li className="d-flex">
//               <span>Налог 5%:</span>
//               <div></div>
//               <b>1074 руб.</b>
//             </li>
//           </ul>
//           <button onClick={onClickOrder} className="greenButton">Оформить заказ  </button>
//         </div>
//         </div>
     
//         ) : (
//           <Info title={isOrderComplete ? "Заказан оформлен!" :"Корзина пустая"}
//           description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерский доставке`: " Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." }
//           image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}/>
    
//         )}
//              </div>
    
//       </div>
//     </div>
//   );
// }
// export default Drawer;
