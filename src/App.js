import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { title: "Мужские кроссовки Nike Brazer Mid Suede", price: 12999 ,imageUrl:'/1.jpg'},
    {title: "Мужские кроссовки Nike Air Max 270", price: 15000, imageUrl:'/2.jpg'},
      { title: "Мужские кроссовки Nike Brazer Mid Suede", price: 8499 ,imageUrl:'/3.jpg'},
        { title: "Мужские кроссовки Puma X Aka Boku", price: 9000 , imageUrl:'/4.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      <div className="content p-40" />
      <div className="d-flex align-center justify-between mb-40">
        <h1> Все кроссовки</h1>
        <div className="search-block d-flex">
          <img
            width={20}
            height={20}
            src="/img\search_17435482.png"
            alt="Search"
          />
          <input placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex">
       
    
        
        {arr.map((obj) => (
               <Card 
        title={obj.title}
        price={obj.price}
       imageUrl={obj.imageUrl}
        />  
        ))} 
      </div>
      <div className="d-flex">{}</div>
    </div>
  );
}

export default App;
