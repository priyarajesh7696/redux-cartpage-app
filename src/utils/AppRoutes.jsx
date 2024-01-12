
import  Cartpage  from '../Cartpage';
import { Navigate } from 'react-router-dom'

const AppRoutes = [
   
    {
        path:'',
        exact:true,
        element:<Cartpage/>
    },
   
    {
        path:'*',
        exact:false,
        element:<Navigate to="/"/>
    }
]

export default AppRoutes