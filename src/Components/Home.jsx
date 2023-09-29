import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {

    const authData = useContext(AuthContext);
    // console.log(authData);
    return (
        <div>
            <h2>its home: {authData.name}</h2>
        </div>
    );
};

export default Home;