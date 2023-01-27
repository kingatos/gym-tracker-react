import "./style.css";

const Header = ({ title, subtitle }) => (
    <header>
        <h1 className="header">{title}</h1>
        <h2 className="subHeader">{subtitle} </h2>
    </header>
);

export default Header;