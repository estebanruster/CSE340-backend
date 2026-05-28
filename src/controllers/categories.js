// Import any needed model functions
import { getAllCategories } from '../models/categories.js';

// Define any controller functions
const showCategoriesPage = async (req, res) => {
    /*Using the import from categories.js; making a call to
    the function that queries all the categories in the db*/
    const categories = await getAllCategories();
    //Test
    //console.log(categories);

    const title = 'Categories';
    res.render('categories', { title, categories });
};

// Export any controller functions
export { showCategoriesPage };