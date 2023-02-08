import { useContext, useEffect } from "react";
import { CartContext, ModalContext } from "../../pages/Root";
import { useRef } from "react";
import CartItem from "../CartItem/CartIem";
import formatMoney from "../../utils/formatMoney";
import cartTotal from "../../utils/cartTotal";
import calculatePercent from "../../utils/calculatePercent";

const CartModal = () => {

    const {isModalActive, toggleModal} = useContext(ModalContext); 

    const cart = useContext(CartContext);

    const overlayRef = useRef();

    const total = cartTotal(cart.cartItems);
    const totalPercent = calculatePercent(total, 5);

    const closeModal = (event) => {
        if (event.target === overlayRef.current) {
            toggleModal();
        }
    }

    useEffect(() => {
        if (isModalActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => document.body.style.overflow = "";
    }, [isModalActive])

    return (
        <div ref={overlayRef} onClick={(e) => closeModal(e)} className={`${isModalActive ? "overlay active" : "overlay"}`}>
            <div className="modal">
                <header className="modal-header">
                    <h2>Корзина</h2>
                </header>

                <div className="modal-body">
                    <div className="cart-items">
                        {
                            cart.cartItems.map((item) => {
                                return <CartItem key={item.id} item={item} />
                            })
                        }
                    </div>
                </div>

                <footer className="modal-footer">
                    <div className="total">

                        <div className="row">
                            <span className="text">Итого:</span>
                            <div className="underline"></div>
                            <span className="price">{formatMoney(total)}</span>
                        </div>

                        <div className="row">
                            <span className="text">Налог 5%:</span>
                            <div className="underline"></div>
                            <span className="price">{formatMoney(totalPercent)}</span>
                        </div>

                        <button className="button w100">
                            Оформить заказ
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default CartModal;