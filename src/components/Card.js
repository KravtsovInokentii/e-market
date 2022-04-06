

function Card(props) {
    return (
        <div className="card">
        <div className="heart">
         <img src="/img/heart 1.png" alt="Heart"/>
         </div>
         <img width={250} height={150} src={props.imageUrl} alt="Dog"/>
         <h5>{props.title}</h5>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>{props.price} $</b>
           </div>
           <button className="button">
             <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
           </button>
         </div>
       </div>
    );
}
/* <div className="card">
<img width={250} height={150} src="/img/dog/dog2.png" alt="Dog"/>
<p>Collie</p>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена:</span>
    <b>300$</b>
  </div>
  <button className="button">
    <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
  </button>
</div>
</div>

<div className="card">
<img width={250} height={150} src="/img/dog/dog3.png" alt="Dog"/>
<p>Harrier</p>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена:</span>
    <b>900$</b>
  </div>
  <button className="button">
    <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
  </button>
</div>
</div>

<div className="card">
<img width={250} height={150} src="/img/dog/dog4.png" alt="Dog"/>
<p>Tibetan mastiff</p>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена:</span>
    <b>1000$</b>
  </div>
  <button className="button">
    <img width={11} height={11} src="/img/plus.png" alt="Plus"/>
  </button>
</div>
</div> */



export default Card;
