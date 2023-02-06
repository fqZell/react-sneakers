import formatMoney from "../../utils/formatMoney";
import { HeartItem, PlusIcon } from "../Icons/icons";



const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="product__action">
                <HeartItem size={22} />
            </div>

            <img src={product.preview} alt={product.title} />

            <h3>{product.title}</h3>

            <div className="product__footer">
                <div className="price">
                    <span className="text">Цена:</span>
                    <span className="value">{formatMoney(product.price)}</span>
                </div>

                <button>
                    <PlusIcon size={26}/>
                </button>
            </div>
        </div>
    )
}

export default Product;