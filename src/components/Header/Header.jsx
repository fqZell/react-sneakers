import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const CardButton = () => {
    return (
        <button>
            <i class="fa-solid fa-cart-shopping">
            </i><span>1205 руб.</span>
        </button>
    )
}

const Header = () => {
    return (
        <header className="header">

            <NavLink className="logo__link" to="/">
                <div className="logo">
                    <img src={logo} alt="logo" />

                    <div>
                        <h1>React Sneakers</h1>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </NavLink>

            <nav className="nav">
                <CardButton />
                <NavLink to="/favorites"><i class="fa-solid fa-heart"></i></NavLink>
                <NavLink to="/orders"><i class="fa-solid fa-user"></i></NavLink>

            </nav>
        </header>
    );
}

export default Header;