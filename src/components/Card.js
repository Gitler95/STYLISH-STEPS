function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img\heart-unliked.svg" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5> {props.title} </h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span> Цена:</span>
          <b>{props. price}</b>
        </div>
        <button className="button" onClick={()=> alert (123)}>
          <img width={11} height={11} src="/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
