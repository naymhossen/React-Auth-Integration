import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivetRoute = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    if(loding){
        return <span className="loading loading-bars loading-lg"></span>

    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate> ;
};

export default PrivetRoute;


PrivetRoute.propTypes = {
    children: PropTypes.node
}
