import App from "@/App";
import Login from "@/components/Login";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
            path:'/login',
            element: <Login/>
        }
    ]
}])
export default routes