import Inventory from "./Inventory";
import Header from "./Header";


function Store(props){

    return(
        <div>
            <Header/>
            <div className="inventory">
                <h2 className="title extraMargin">Inventory</h2>
                <Inventory/>
            </div>
        </div>
    );

};

export default Store;