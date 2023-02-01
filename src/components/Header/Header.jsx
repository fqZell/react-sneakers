import { NavLink } from "react-router-dom";

const CardButton = () => {
    return (
        <button>Корзина: <span>1205 руб.</span></button>
    )
}

const Header = () => {
    return (
        <header className="header">
            <div className="logo">

            </div>

            <nav className="nav">
                <CardButton />
                <NavLink to="/favorites">Избранное</NavLink>
                <NavLink to="/orders">Заказы</NavLink>

            </nav>
        </header>
    );
}

export default Header;