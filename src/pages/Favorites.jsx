import React  from "react";
import Card from "../components/Card";
import AppContext  from "../contex";

function Favorites() {
const {favorite,  onAddToFavorite } = React.useContext(AppContext);


  return (
    <div className="content  p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Тут мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorite.map((item, id) => (
          <Card
            key={item.id}
       
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
