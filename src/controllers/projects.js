// Import any needed model functions
import { getAllProjects } from '../models/projects.js';

// Define any controller functions
const showProjectsPage = async (req, res) => {
    /*Using the import from projects.js; making a call to
    the function that queries all the projects in the db*/
    const projects = await getAllProjects();

    const title = 'Service Projects';
    res.render('projects', { title, projects });
};

// Export any controller functions
export { showProjectsPage };