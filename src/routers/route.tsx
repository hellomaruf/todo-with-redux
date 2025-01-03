import App from "@/App";
import Login from "@/components/Login";
import Tasks from "@/components/tasks";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
            index: true,
            element:<Tasks/>
        },
        {
            path:'/login',
            element: <Login/>
        }
    ]
}])
export default routes