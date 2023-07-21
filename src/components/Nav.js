import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <nav>
        <button><Link to="/">HOME</Link></button>
        <button><Link to="/Store">INVENTORY</Link></button>
      </nav>
    </div>
  );
};