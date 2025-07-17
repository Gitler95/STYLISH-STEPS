import React from 'react'
import styles from './Card.module.scss';

 function Card({id, title, imageUrl, price, onFavorite,onPlus}) {
  const [isAdded, setiAdded]=React.useState();
  const onClickPlus=()=>{
    onPlus({id, title, imageUrl, price,});
    setiAdded(!isAdded);
  }
 
  
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img\heart-unliked.svg" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5> {title} </h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span> Цена:</span>
          <b>{price} руб.</b>
        </div>
       
          <img className={styles.plus}  onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" :"/img/btn-plus.svg"} /> 
      
      </div>
    </div>
  );
}

export default Card;
