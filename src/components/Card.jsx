
import { useLoaderData, useParams } from "react-router-dom";
import Data from "./Data";
import { useEffect, useState } from "react";

const Card = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [cate, setCate] = useState([]);

    useEffect(() => {
        const filter = [...data].filter(item => item.category === category);
        setCate(filter);
    }, [category, data]);

    return (
        <div className="grid grid-cols-3">
            {cate.map((item) => (
                <Data key={item.product_id} data={item} />
            ))}
        </div>
    );
};

export default Card;
