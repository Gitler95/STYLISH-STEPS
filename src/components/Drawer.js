function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" />
        </h2>

          <div className="items ">
        {items.length > 0 ? (
        <div>
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
          <button>Оформить заказ</button>
        </div>
        </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenButton">
              <img
                className="arrow-card"
                width={20}
                src="/img/arrow.png"
                alt="Arrow"
              />
              Вернуться назад
            </button>
          </div>
        )}
             </div>
    
      </div>
    </div>
  );
}
export default Drawer;
