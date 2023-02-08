import { useContext, useEffect, useState } from "react";
import { SearchIcon } from "../components/Icons/icons";
import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";
import PRODUCTS from "../data/products";
import { FavoriteContext } from "./Root";

const HomePage = () => {

    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    // const {favorites} = useContext(FavoriteContext);

    // useEffect(() => {
    //     setProducts((prev) => [...prev, ...favorites]);
    // }, [favorites.length]);

    const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }

    console.log(query);

    return (
        <>
            <Slider />
            

            <section className="section">
                <header className="section-header">
                    <h2 className="section__title">
                        Все кроссовки
                    </h2>

                    <div className="search-box">
                        <div className="icon">
                            <SearchIcon size={18} />
                        </div>

                        <input 
                        value={query} 
                        onChange={(e) => onChangeQuery(e)}
                        type="text" placeholder="Поиск..." 
                        />
                    </div>
                </header>

                <div className="products">

                    {
                        filteredProducts.length ? 
                            filteredProducts.map((product) => {
                                return (
                                    <Product key={product.id} product={product} />
                                );
                            })

                            :

                            <h2>По вашему запросу "{query}" ничего не найдено!</h2>
                    }

                </div>
            </section>
        </>
    )
}

export default HomePage;