import { useContext } from "react";
import { CartContext, FavoriteContext } from "../../pages/Root"
import formatMoney from "../../utils/formatMoney";
import { HeartItem, PlusIcon } from "../Icons/icons";



const Product = ({ product }) => {

    const { addToFavorite } = useContext(FavoriteContext);

    const {addToCart} = useContext(CartContext)

    return (
        <div className="product">
            <button className="product__action" onClick={addToFavorite.bind(this, product)}>
                <HeartItem size={22} />
            </button>

            <img src={product.preview} alt={product.title} />

            <h3>{product.title}</h3>

            <div className="product__footer">
                <div className="price">
                    <span className="text">Цена:</span>
                    <span className="value">{formatMoney(product.price)}</span>
                </div>

                <button onClick={addToCart.bind(this, product)}>
                    <PlusIcon size={26}/>
                </button>
            </div>
        </div>
    )
}

export default Product;