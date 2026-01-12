// in this file we going to setup the main router for the application

import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import App from '../../App.jsx';    

//importing the pages to be linked in the router

import HomePage from '../../pages/Home/HomePage'
import AboutPage from '../../pages/About/AboutPage'
import PortfolioPage from '../../pages/Portfolio/PortfolioPage'
import SkillsPage from '../../pages/Skills/SkillPage';
import ContactPage from '../../pages/Contact/ContactPage'


// generating the router object providing array of 'path - page' pairs.
// this helps store the mapping of each path to their respective pages to
// be loaded when we visit that path in website.

const my_router = createBrowserRouter(
    [
        {
            element:<App />,
            children:[
                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/about",
                    element: <AboutPage />
                },
                {
                    path: "/portfolio",
                    element: <PortfolioPage />
                },
                {
                    path: "/Skills",
                    element: <SkillsPage />
                },
                {
                    path:"/Contact",
                    element:<ContactPage />
                }
                
            ]
        }
    ]

);

export default my_router;
