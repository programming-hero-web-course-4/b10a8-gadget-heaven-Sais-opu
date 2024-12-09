import { Link, NavLink } from 'react-router-dom';
import Banner from './Banner';
import BannerU from './BannerU';

const Categories = ({categories}) => {
    return (
        <div>
            
            <div className='flex flex-col gap-7'>
                {/* button */}
                {categories.map(category => <NavLink key={category.category} to={`/category/${category.category}`} className={({isActive})=>`${isActive?'bg-purple-700':''}`}>{category.category}</NavLink>)}
            </div>
        </div>
    );
};

export default Categories;