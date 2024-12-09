

const Data = ({data}) => {
    const {product_title}=data || {}
    return (
        <div>
            
            {product_title}
        </div>
    );
};

export default Data;