import Inventory from "./Inventory";
import Header from "./Header";


function Store(props){

    return(
        <div>
            <Header/>
            <div className="inventory">
                <h1 className="title extraMargin">Inventory</h1>
                <Inventory/>
            </div>
        </div>
    );

};

export default Store;