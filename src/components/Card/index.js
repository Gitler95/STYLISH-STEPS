import React from "react";
import ContentLoader from "react-content-loader"

import AppContext from "../../contex";

import styles from "./Card.module.scss";

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading=false}) {
  const {isItemAdded} = React.useContext(AppContext);

   const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
   
    onPlus({ id, title, imageUrl, price });
   
  };

  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      {
        loading ? ( <ContentLoader 
    speed={32}
    width={150}
    height={265}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <rect x="0" y="164" rx="5" ry="5" width="150" height="15" /> 
    <rect x="149" y="71" rx="0" ry="0" width="2" height="2" /> 
    <rect x="153" y="72" rx="0" ry="0" width="2" height="2" /> 
    <rect x="216" y="215" rx="0" ry="0" width="2" height="1" /> 
    <rect x="213" y="220" rx="0" ry="0" width="0" height="22" /> 
    <rect x="0" y="0" rx="10" ry="10" width="150" height="155" /> 
    <rect x="0" y="186" rx="5" ry="5" width="100" height="15" /> 
    <rect x="-4" y="234" rx="5" ry="5" width="80" height="25" /> 
    <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
  </ContentLoader> ):( 
    <>
          <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ?  "/img/heart-liked.svg" : "/img/heart-unliked.svg" }/>
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5> {title} </h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span> Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
        />
      </div>
  </>
  
     ) }
  </div>
  );
}

export default Card;
