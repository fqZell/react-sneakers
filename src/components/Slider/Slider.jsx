import { useState } from "react";
import Slide from "./Slide/Slide";

import banner from "../../assets/slide.png"

const initialItemsState = [
    {
        id: 1,
        background: "#F4EFE9",
        title: "New adidas - Stan Smith",
        banner: banner,
        button: {
            url: "/",
            text: "Предзаказать"
        }
    },
    {
        id: 2,
        background: "#FFF",
        title: "Nike Air Force one by fqZell",
        banner: "https://kicksmania.ru/wp-content/uploads/2022/06/nike-air-force-1-low-white.jpg",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
    {
        id: 3,
        background: "#FFF",
        title: "Adidas Stan Smith",
        banner: "https://cross-city.ru/upload/iblock/348/adidas-stan-smith-belye_img.jpg",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
    {
        id: 4,
        background: "#efefef",
        title: "New Balance 574 - The Best",
        banner: "https://newbalance.ru/upload/resize_cache/iblock/71c/992_992_2/ml574eq2_nb_02_i.jpg",
        button: {
            url: "/",
            text: "Предзаказать"
        }
    },
]

const Slider = () => {

    const [items, setItems] = useState(initialItemsState);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);

    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);

    return (
        <section className="slider">
            <div className="wrapper">
                <div className="slides">
                    <Slide slide={items[currentIndex]} />
                </div>

                <div className="controls">
                    <button onClick={prev} className="prev">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button onClick={next} className="next">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Slider;