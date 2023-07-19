/**Page header */
function Header(props){
    return(
        <header className="header">
            <h1 className="title">Benni's Bountiful Bookstore</h1>
            <h3 className="title">Where Box Sets Reign Supreme</h3>
            <nav>
                <button><a>HOME</a></button>
                <button><a href="./">INVENTORY</a></button>
                
            </nav>
        </header>

    );

}

export default Header;