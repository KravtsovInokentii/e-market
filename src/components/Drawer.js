
function Drawer() {
    return (
        <div style = {{display: 'none'}} className="overLay">
 <div className="drawer">
    <h2 className="d-flex justify-between mb-30 ">
    Basket <img className="removeBtn cu-p" src="/img/remove.png" alt="Remove"/>
    </h2>

<div className="items">
    <div className="cartItem d-flex align-center justify-between mb-30 ">
    <div
    style={{ backgroundImage: 'url(/img/dog/dog2.png)' }} 
    className="cartItemImg"></div>
    <div className="mr-20" >
    <p className="mb-5">Type of shepherd dog Collie</p>
    <b>300$</b>
    </div>
            <img className="removeBtn" src="/img/remove.png" alt="Remove"/>
          </div>



          <div className="cartItem d-flex align-center justify-between ">
            <div
             style={{ backgroundImage: 'url(/img/dog/dog4.png)' }} 
            className="cartItemImg"></div>
            <div className="mr-20" >
            <p className="mb-5">Type of shepherd dog Tibetan mastiff</p>
            <b>1000$</b>
            </div>
            <img className="removeBtn" src="/img/remove.png" alt="Remove"/>
            </div>
    </div>
    <div className="cartTotalBlok">
    <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>1500$</b>
            </li>
            <li>
                <span>Tax 5%:</span>
                <div></div>
                <b>50$</b>
            </li>
    </ul>
    <button className="greenButton">
              Checkout <img src="/img/arrow.png" alt="Arrow"/>
    </button>
      </div>
      </div>
 </div>
  )
}

export default Drawer;
