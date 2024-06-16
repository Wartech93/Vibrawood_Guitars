import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Link } from 'react-router-dom'


function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (category) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: category,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-10 lg:mx-20 h-auto pt-4 secondaryFont">
      {categories.map((category, index) => (
        <Link key={index} to='/shop' onClick={()=> handleClick(category.name)} className="font-semibold text-white flex flex-col text-center items-center justify-center p-4 hover:underline hover:drop-shadow-xl">
          <img
            src={`/images/${category.image}`}
            alt={category.name}
            className="w-full rounded-2xl shadow-lg h-56 md:h-64 lg:h-72 object-cover mb-4"
          />
          <h3 className="text-xl md:text-2xl">
            {category.name.toUpperCase()}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default CategoryMenu;
