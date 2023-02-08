import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import CartModal from "../components/CartModal/CartModal";
import Header from "../components/Header/Header";
import useCart from "../hooks/useCart";
import useFavorite from "../hooks/useFavorite";

export const ModalContext = createContext({});
export const CartContext = createContext({});
export const FavoriteContext = createContext({});

const Root = () => {

    const [isModalActive, setIsModalActive] = useState(false);

    const cart = useCart([]);
    const favorite = useFavorite([]);

    console.log(favorite.favorites);

    const toggleModal = setIsModalActive.bind(this, !isModalActive);

    return (
        <FavoriteContext.Provider value={favorite}>
            <CartContext.Provider value={cart}>
                <ModalContext.Provider value={{isModalActive, toggleModal}}>
                    <div className="layout">
                        <Header />
                        <main>
                            <Outlet />
                        </main>

                        <CartModal />
                    </div>
                </ModalContext.Provider>
            </CartContext.Provider>
        </FavoriteContext.Provider>
    );
}

export default Root;