import { useState } from "react";
import Product from "./Product";
import products from "./data";

/**Table display of Inventory */
function Inventory(props){
    
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
    });
    //if this map is not set to a variable and is
    //created in the return, then does not require
    //a return call in the map

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

            <button className="addProducts" onClick={handleAddProduct}>Add New Product</button>
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
        

    );

}

export default Inventory;