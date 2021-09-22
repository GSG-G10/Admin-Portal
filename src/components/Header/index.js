import { Link } from "react-router-dom";
import { burn } from "../../assets";
import "./style.css"
const Header = () => {
    return (
        <header className="header">
            <Link className="company-logo" to="/">
                <img src="https://img.icons8.com/ios/50/000000/company.png" alt="company logo"/>
            </Link>
            {/* admin */}
            <div className="admin-panel">
                <div className="admin-activity">
                </div>
                <div className="admin-profile">
                    <Link className="admin-active" to="/active">
                    <img src={burn} alt="admin profile"/>
                    </Link>
                    <Link to="/active" className="admin-profile-image">
                    </Link>
                </div>
            </div>
         </header>
    );
};

export default Header;