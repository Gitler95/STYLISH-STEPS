import Card from "../components/Card/";

function Home({items, cartItem, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart, isLoading
}){
  const renderItems = () => {
    const filtredItems = items.filter((items) =>
              items.title
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
            );
            return (isLoading ? [...Array(8)] : filtredItems)
            .map((item, index) => (
              <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                added={cartItem.some(obj => Number(obj.id) === Number(item.id))}
                loading={isLoading}
                {...item}
              />
            ))
  };


    return(
           <div className="content  p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Поиск по запросу"${searchValue}"` : "Все кроссовки"}{" "}
          </h1>
          <div className="search-block d-flex align-center">
            <img
              width={20}
              height={20}
              src="/img\search_17435482.png"
              alt="Search"
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

     <div className="d-flex flex-wrap"> {renderItems()}</div>    
      </div>
    )
}
export default Home;