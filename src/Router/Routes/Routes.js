import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import CardDetails from '../../Pages/CardDetails/CardDetails';
import AllServices from '../../Pages/Home/AllServices/AllServices';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyReviews from '../../Pages/MyReviews/MyReviews';
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
                path: '/carddetails/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
        ]
    }

]);

export default router;