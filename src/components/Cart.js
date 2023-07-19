
function Cart({ cartItems }){
    return(
        <div>
            <h1 className="cartTitle">Cart</h1>
            <ul>
                {cartItems.map((item)=>{
                    return(<li>{item.title} - Quantity: {item.quantity}</li>);
                })}
            </ul>
        </div>
    );
};

export default Cart;