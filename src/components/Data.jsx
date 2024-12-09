

const Data = ({ data }) => {
    const { product_title, product_image } = data || {};

    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img className="w-full h-48 overflow-hidden object-cover" src={product_image} alt="" />
                    <p>{product_title }</p>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Data;
