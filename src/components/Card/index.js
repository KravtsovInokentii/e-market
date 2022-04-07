import React from 'react';
import styles from './Card.module.scss';




function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false); 
    

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }
  
    return (
        <div className={styles.card}> 
        <div className={styles.heart} onClick={props.onHeart}>
         <img src="/img/heart 1.png" alt="Heart"/>
         </div>
         <img width={250} height={150} src={props.imageUrl} alt="Dog"/>
         <h5>{props.title}</h5>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>{props.price} $</b>
           </div>
           
             <img className={styles.plus} onClick={onClickPlus} width={30} height={30} src={isAdded ? "/img/btn-checked.png" : "/img/btn-plus.png"} alt="Plus"/>
           
         </div>
       </div>
    );
}



export default Card;
