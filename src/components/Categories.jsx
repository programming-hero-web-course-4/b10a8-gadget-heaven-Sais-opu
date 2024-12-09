import { Link, NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        
        <div className='flex flex-col gap-7'>
            {/* button */}
            {categories.map(category => <NavLink key={category.category} to={`/category/${category.category}`} className={({isActive})=>`${isActive?'bg-purple-700':''}`}>{category.category}</NavLink>)}
        </div>
    );
};

export default Categories;