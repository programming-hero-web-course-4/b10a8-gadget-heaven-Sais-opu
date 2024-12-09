

// export default Details;
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


const Details = () => {
    const { product_id } = useParams(); 
    const data = useLoaderData();

    console.log("Product ID from Params:", product_id); // Debugging

    // Directly compare strings
    const product = data ? data.find(item => item.product_id === product_id) : null;

    console.log("Matched Product:", product); // Debugging

    if (!product) {
        return <div>Product not found</div>;
    }

    const { product_title, product_image, price } = product || {};
    console.log("Price:", price); // Debugging

    return (
        <div className="max-w-md mx-auto p-4 border">
            <img className="object-cover border mb-4" src={product_image} alt={product_title} />
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="text-xl">Price: {price}</p>
        </div>
    );
};

export default Details;


