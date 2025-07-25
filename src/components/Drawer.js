import React from "react";
import axios from "axios";

import Info from "./Info";
import AppContext from "../contex";


function Drawer({ onClose, onRemove, items = [] }) {
  const {cartItems ,setCartItems} = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
const [ isOrderComplete, setisOrderComplete] = React.useState(false);
const [ isLoading, setIsLoading] = React.useState(true);

const onClickOrder =  async () => {
    try { 
      setIsLoading(true);
      const { data } = await axios.post('https://687e2c00c07d1a878c31991e.mockapi.io/orders', {
        items: cartItems,
      });
      // await axios.put("https://6877a243dba809d901f04598.mockapi.io/Card", [] );
      setOrderId(data.id);
      setisOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert ('Неудалось создать заказ :(');
    }
 setIsLoading(false);
};

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" />
        </h2>
       

        {items.length > 0 ? (
     <div className="d-flex flex-column flex">
          <div className="items ">
           { items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
                <img
                  src={obj.imageUrl}
                  alt={obj.title}
                  className="cartItemImg"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b> {obj.price} руб.</b>
                </div>

                <img 
                  onClick={() => onRemove(obj.id)}
                  className="removeBtn cu-p"
                  src="/img/btn-remove.svg"
                  alt="fdf"
                />
              </div>
            ))}
                <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b> 21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button  onClick={onClickOrder} className="greenButton">Оформить заказ  </button>
        </div>
        </div>
             </div>
        ) : (
          <Info title={isOrderComplete ? "Заказан оформлен!" :"Корзина пустая"}
          description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерский доставке`: " Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." }
          image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}/>
    
        )}
    
      </div>
    </div>
  );
}
export default Drawer;
