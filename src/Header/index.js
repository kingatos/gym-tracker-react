import "./style.css";


const Header = ({ trackerLogo, subtitle }) => (
    <header>
        <h1 className="header"><img src={trackerLogo} className="trakerImage" alt="Gym Tracker Logo"></img> </h1>
        <h2 className="subHeader">{subtitle} </h2>
    </header>
);

export default Header;