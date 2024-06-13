import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';


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

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-10 lg:mx-20 h-auto pt-4 secondaryFont">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col text-center items-center justify-center p-4">
          <img
            src={`/images/${category.image}`}
            alt={category.name}
            className="w-full rounded-2xl shadow-lg h-56 md:h-64 lg:h-72 object-cover mb-4"
          />
          <h3 className="hover:border-b-4 text-xl md:text-2xl font-semibold text-amber-50">
            {category.name.toUpperCase()}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CategoryMenu;
