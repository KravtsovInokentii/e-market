import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


const arr = [
 { title: 'English Bulldog', price: 600, imageUrl: "/img/dog/dog1.png"},
 { title: 'Collie', price: 900, imageUrl: "/img/dog/dog2.png"}, 
 { title: 'Harrier', price: 300, imageUrl: "/img/dog/dog3.png"}, 
 { title: 'Tibetan mastiff', price: 1000, imageUrl: "/img/dog/dog4.png"}, 
];

function App() {
  
  return (
    <div className="wrapper clear">
      {/* <div>
        <center>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={() => minus()}>-</button>
        </center>
      </div> */}
    <Drawer /> 
    <Header />
     
     <div className = "content p-40">
       <div className="d-flex align-center justify-between mb-40">
         <h1>All available puppies</h1>
         <div className="search-block d-flex">
         <img width={30} height={30}  src="/img/search.png" alt="Search"/>
         <input placeholder="Search ..." />
         </div>
       </div>
       

       <div className="d-flex">
       {arr.map((obj) => (
         <Card 
         title ={obj.title}
         price= {obj.price} 
         imageUrl={obj.imageUrl}
         onHeart={() => console.log('Добавили в закладки')}
         onPlus={() => console.log('Нажали плюс')}
         />
       ))}
     
      
      
       </div>
       
     </div>
    </div>
  );
}

export default App;
