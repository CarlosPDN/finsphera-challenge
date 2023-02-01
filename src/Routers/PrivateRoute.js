import { Navigate} from "react-router-dom";
import useAuth from "../Auth/useAuth";


const PrivateRoute = ({hasRole: role, children }) => {
     const { user } = useAuth();
     console.log(user.role)
     if (role && user?.role !== role) return <Navigate to="/projects" />;

     if (!user) return <Navigate to="/login" />;
     return children;
};

export default PrivateRoute;