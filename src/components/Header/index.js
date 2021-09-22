import { burn } from "../../assets";
import "./style.css"
const Header = () => {
    return (
        <header className="header">
            <div className="company-logo">
                <img src="https://img.icons8.com/ios/50/000000/company.png" alt="company logo"/>
            </div>
            {/* admin */}
            <div className="admin-panel">
                <div className="admin-activity">
                </div>
                <div className="admin-profile">
                    <button className="admin-active">
                    <img src={burn} alt="admin profile"/>
                    </button>
                    <div className="admin-profile-image">
                    </div>
                </div>
            </div>
         </header>
    );
};

export default Header;