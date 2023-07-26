import Header from "../components/Header";
function Home(){
    return(
        <div className="homeBkrd">
            <Header/>
            <div className="home extraMargin">
            
                <h1 className="center">The Landing Page</h1>
               
                <p className="center">Welcome to Benni's Bountiful Bookstore internal site where the book sets are bold, bountiful, and bodacious.</p>
                
               
                <div className="about">
                <h2>About</h2>
                    <p>Benni's began with a big dream in 2023: that books are best sold in sets and that a bookstore should stock them 
                        only at their best.  Book sets run supreme here and we only stock quality which is Benni's behest!
                        Whether we are providing boxes and collections personalized with that Benni bump up, mass market, 
                        or in gift and special collectors sets. People come here for the book bounty and stay for our 
                        Benni's Boxers: aka you, our beloved Benni family!
                        Get out there and be bountiful!  
                    </p>
                </div>

                <div className="highlights">
                    <h2>Highlights About Benni's</h2>
                    <ul>
                        <li>In house printing and reprinting with sustainable paper sourcing
                        and non toxic inks*</li>
                        <li>Access to books that are generally no longer in print</li>
                        <li>Offer of some collections and box sets at some discounts</li>
                        <li>Personalizable box sets and collects</li>
                        <li>Book lights, journals, book marks, book covers, and many other book accessories</li>
                        <li>Only print books sold</li>
                        <li>International Delivery*</li>
                    </ul>
                </div>


                <div className="vision">
                    <h2>Vision</h2>
                    <p>Our boxes and book collections open up a world of pleasure to be revisited for years to come in
                        a presentation that just keeps getting better with time.
                    </p>
                </div>
                
                <div className="mission">
                    <h2>Mission</h2>
                    <ul>
                    <li>To leave no member of a series unread</li> 
                    <li>To provide collections that open up a world of adventure</li>
                    <li>To show that print books are affordable</li>
                    <li>To bring sustainability to printing and reprints</li>
                    <li>To let no book fall out of print if its contents are not out of style</li>
                    <li>Offering international books in original language and translated versions</li>

                    </ul>
                </div>

                <p className="caveatHome">*Not all boxes and collections sustainably printed if mass market or not able to print in house<br/>
                    *Shipping delays and/or inabilities to any location with US embargos, as able alerted at check out
                </p>

            </div>
            
        </div>
    )
}

export default Home;