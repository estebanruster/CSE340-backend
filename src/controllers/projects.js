// Import any needed model functions
import { getAllProjects, getUpcomingProjects, getProjectDetails } from '../models/projects.js';

const NUMBER_OF_UPCOMING_PROJECTS = 5;

// Define any controller functions
const showProjectsPage = async (req, res) => {
    /*Using the import from projects.js; making a call to
    the function that queries all the projects in the db*/
    const projects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);

    const title = 'Upcoming Service Projects';
    res.render('projects', { title, projects });
};

const showProjectDetailsPage = async (req, res) => {
    const id = req.params.id;
    const projectDetails = await getProjectDetails(id);

    const title = 'Project Details';
    res.render('project', { title, projectDetails });
};

// Export any controller functions
export { showProjectsPage, showProjectDetailsPage };