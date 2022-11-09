import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AllServices from '../../Pages/Home/AllServices/AllServices';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';


const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allservice',
                element: <AllServices></AllServices>
            },
            {
                path: '/carddetails',
                element: <AllServices></AllServices>
            },
        ]
    }

]);

export default router;