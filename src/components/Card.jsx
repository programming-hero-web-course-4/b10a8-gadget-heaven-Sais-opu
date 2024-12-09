import { useLoaderData, useParams } from "react-router-dom";
import Data from "./Data";

const Card = () => {
    const data=useLoaderData()
    const { category } = useParams()
    console.log(data)
    return (
        <div className="grid grid-cols-3">
            {data.map(data =><Data key={data.product_id} data={data}></Data>)}
        </div>
    );
};

export default Card;