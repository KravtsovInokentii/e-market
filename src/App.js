
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


const arr = [
 { name: 'English Bulldog', price: 500} 
];

function App() {
  return (
    <div className="wrapper clear">
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
       {/* {arr.map((obj) => (
        <Card />
       ))} */}
      <Card 
      title ="English Bulldog" 
      price= {600} 
      imageUrl="/img/dog/dog1.png" />
      
      <Card 
      title ="Harrier" 
      price= {900} 
      imageUrl="/img/dog/dog2.png" />
      
      <Card 
      title ="Collie" 
      price= {300} 
      imageUrl="/img/dog/dog3.png" />
      
      <Card 
      title ="Tibetan mastiff" 
      price= {1000} 
      imageUrl="/img/dog/dog4.png" />
      
       </div>
       
     </div>
    </div>
  );
}

export default App;
