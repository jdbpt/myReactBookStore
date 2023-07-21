import { useState } from "react";
import Product from "./Product";
import products from "./data";
import Cart from "./Cart";

/**Table display of Inventory */
function Inventory(props){
    //*********useState**********8
    const [productList, setProductList] = useState(products);

    //function to add new products based on premade product
    // const addProducts = (newProduct)=>{
        
    //     setProductList([...productList, newProduct]);
    // };

    /**add products to productList using handleInputChange and handleAddProduct button*/
    const [newProduct, setNewProduct] = useState(
        {
            title: "",
            price: "",
            author: "",
            publisher: "",
            publishDate: "",
            pageCount: "",
            iSBN10: "",
            description: "",
            src: "",
            alt: "",
        }
    );
    /**adding cart list to the store */
    const [cartItems, setCartItems] = useState([]);

    //****************button handlers*************/
    /**handleChange */
    const handleInputChange = (event)=>{
        setNewProduct({
            ...newProduct, [event.target.name]: event.target.value
        });
    };
        //handleAddProduct
    const handleAddProduct = () => {
        if(newProduct.title && newProduct.price){
            setProductList([...productList, {...newProduct}]);
            setNewProduct({
                title: "",
                price: "",
                author: "",
                publisher: "",
                publishDate: "",
                pageCount: "",
                iSBN10: "",
                description: "",
                src: "",
                alt: "",
            });
        }
    };

    /**Remove product function by title */
    const handleRemoveProduct = (productTitle) => {
        setProductList(productList.filter((product)=> product.title !== productTitle));
    };
    
    const handleAddToCart = (product) => {
        //for any item in the cartItems array, does that object.title property equal the product passed to handleAddToCart
        //(which is newProduct.title).  If it does, then save the product to existing product, else saves undefined to existing product
        const existingProduct = cartItems.find((item) => item.title === product);
        console.log(product + " This is the newProduct title: " + newProduct.title );
        console.log("this is the existing Product " + existingProduct);
        //if existing product is not undefined, then if for any object in cartItems does it match the object in existingProduct
        //if it does then keep that items, and just increment its quantity by 1, else map the item
        if(existingProduct){
            const updatedCartItems = cartItems.map((item)=> item === existingProduct ? {...item, quantity: item.quantity +1} : item);
            setCartItems(updatedCartItems);
            console.log("I am existing" + existingProduct.title);

        } else{
            //if existingProduct is undefined, then setCartItems (add a new entry (object) to the cartItems array
            // with a title property = to the product which is
            //the newProduct.title, and set its quantity to 1)
            setCartItems([...cartItems, {title: product, quantity: 1}]);
            console.log("I am yet to exist " + product);
            console.log(cartItems);
        }
    };
   
    //**************map functions****************
    const displayProducts = productList.map((product, index)=>{
        return(<Product title={product.title}
                 price={product.price}
                 author={product.author}
                 publisher={product.publisher}
                 publishDate={product.publishDate}
                 pageCount={product.pageCount}
                 iSBN10={product.iSBN10}
                 description={product.description}
                 src={product.src}
                 alt={product.alt}
                 key={index}
                 />)
    });//end displayProducts

    //**************Inventory return statement*******/
    return(
        <>
            {/* <button className="addProducts" onClick={() => 
            {  
                addProducts({title: "One Piece Box Set 3", 
                             price: 115.05,
                             author: "Eiichiro Oda",
                             publisher: "VIZ Media LLC",
                             publishDate: "October 4, 2016",
                             pageCount: 5036,
                             iSBN10: "1421590522",
                             description: "vol. 47-70",
                             src: "",
                             alt: "One Piece Box Set 3",
                             }) ;

                console.log(productList);
            }
            }>
                Add New Product
            </button> */}
            <div className="cart-items">
                <Cart cartItems={cartItems}/>
            </div>
            <div className="allInvInputs">
                <input type="text" name="title" placeholder="Title" value={newProduct.title} onChange={handleInputChange}/>
                <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange}/>
                <input type="text" name="author" placeholder="Author" value={newProduct.author} onChange={handleInputChange}/>
                <input type="text" name="publisher" placeholder="Publisher" value={newProduct.publisher} onChange={handleInputChange}/>
                <input type="text" name="publishDate" placeholder="Published Date" value={newProduct.publishDate} onChange={handleInputChange}/>
                <input type="number" name="pageCount" placeholder="Page Count" value={newProduct.pageCount} onChange={handleInputChange}/>
                <input type="text" name="iSBN10" placeholder="ISBN-10" value={newProduct.iSBN10} onChange={handleInputChange}/>
                <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange}/>
                <input type="text" name="src" placeholder="Image Source" value={newProduct.src} onChange={handleInputChange}/>
                <input type="text" name="alt" placeholder="Alt Text" value={newProduct.alt} onChange={handleInputChange}/>
            </div>
            <div className="flexbox">
                <button className="addProducts font18" onClick={handleAddProduct}>Add New Product</button>
                <button className="removeProducts font18" onClick={()=> handleRemoveProduct(newProduct.title)}>Remove Product</button>
                <button className="addToCart font18" onClick={()=> handleAddToCart(newProduct.title)}>Add to Cart</button>

            </div>

            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Published Date</th>
                    <th>Page Count</th>
                    <th>ISBN-10</th>
                    <th>Description</th>
                </tr>
                </thead>
               
                <tbody>

                {displayProducts}
                </tbody>
            </table>

          
            
        </>
        

    );//end of Return

};//end of Inventory function

export default Inventory;