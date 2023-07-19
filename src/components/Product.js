/**Product with name and price */
function Product(props){
    return(
        <tr>
            <td>{props.title}<br/> <img src={props.src} alt={props.alt}/></td>
            <td>${props.price}</td>
            <td>{props.author}</td>
            <td>{props.publisher}</td>
            <td>{props.publishDate}</td>
            <td>{props.pageCount}</td>
            <td>{props.iSBN10}</td>
            <td>{props.description}</td>
        </tr> 
    );
};

export default Product;