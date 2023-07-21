import Nav from "./Nav";
/**Page header */
function Header(props){
    return(
        <header className="header">
            <h1 className="title">Benni's Bountiful Bookstore</h1>
            <h3 className="title">Where Box Sets Reign Supreme</h3>
            <Nav/>
            
        </header>

    );

}

export default Header;