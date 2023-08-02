import "./Header.css";
import Logo_Nombre from "./logo-nombre/Logo_Nombre.jsx"
import Menu from "./menu/Menu.jsx"


function Header() {
    return (
        <>
            <div className="header-header">
                <Logo_Nombre />
                <Menu />
            </div>

        </>
    );
}

export default Header;