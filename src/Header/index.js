import "./style.css";


const Header = ({ trackerLogo }) => (
    <header>
        <h1 className="header"><img src={trackerLogo} className="trakerImage" alt="Gym Tracker Logo"></img> </h1>
    </header>
);

export default Header;