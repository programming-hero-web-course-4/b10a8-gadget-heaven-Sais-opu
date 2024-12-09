import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        
        <div className='flex flex-col gap-7'>
            {/* button */}
            {categories.map(category => <Link key={category.category} to={`/category/${category.category}`}>{category.category}</Link>)}
            {/* <Link to='/Laptops'>Laptops</Link>
            <Link to='/Phones'>Phones</Link>
            <Link to='/Accessories'>Accessories</Link>
            <Link to='/Smart Watches'>Smart Watches</Link> */}
        </div>
    );
};

export default Categories;