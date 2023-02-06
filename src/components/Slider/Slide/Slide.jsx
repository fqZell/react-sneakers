import { NavLink } from "react-router-dom";
import slide from "../../../assets/slide.png";

const Slide = () => {
    return ( 
        <div style={{
            backgroundColor: "#F4EFE9"
        }} className="slide">

            <div className="part">

                <h2>
                    Stan Smith,<br />Forever!
                </h2>

                <NavLink className="button button--xl" to="/">
                    Купить
                </NavLink>

            </div>

            <img src={slide} alt="Slide" />

        </div>
    );
}

export default Slide;