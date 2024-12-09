import { NavLink } from "react-router-dom";

const Data = ({ data }) => {
    const { product_title, product_image,price } = data || {};

    return (
        <div className="hero  ">
            <div className="hero-content ">
                <div className="max-w-md border p-4 ">
                    <img className=" overflow-hidden object-cover border" src={product_image} alt="" />
                    <p className="text-xl font-semibold">{product_title }</p>
                    <p >
                        Price:{price}
                    </p>
                    <NavLink><button className="btn btn-primary">Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Data;
