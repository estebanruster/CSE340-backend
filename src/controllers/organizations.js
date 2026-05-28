// Import any needed model functions
import { getAllOrganizations } from '../models/organizations.js';

// Define any controller functions
const showOrganizationsPage = async (req, res) => {
    /*Using the import from organiztions.js; making a call to
    the function that queries all the organizations in the db*/
    const organizations = await getAllOrganizations();

    const title = 'Our Partner Organizations';
    res.render('organizations', { title, organizations });
};

// Export any controller functions
export { showOrganizationsPage };