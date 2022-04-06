function Header() {
    return (

    <header className="d-flex justify-between align-center p-40" >
    <div className="d-flex align-center ">
     <img width={50} height={50} src="/img/dog-logo.png" alt="Dog-logo" />
    <div>
        <h3 className="text-uppercase">React Puppies</h3>
        <h5>Puppy shop</h5>
    </div>
    </div>
     <ul className="d-flex">
    <li className="mr-30">
     <img width={20} height={20} src="/img/cart.png" alt="Cart"/>
     <span>1300 $.</span>
    </li>
     <li>
      <img width={30} height={30} src="/img/user.png" alt="User" />
     </li>
    </ul>
        </header>
    );

}
export default Header;
