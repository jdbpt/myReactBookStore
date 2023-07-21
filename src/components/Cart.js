
function Cart({ cartItems }){
    return(
        <div>
            <h2 className="cartTitle">Cart</h2>
            <ul>
                {cartItems.map((item, index)=>(
                    <li key={index}>{item.title} - Quantity: {item.quantity} </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default Cart;