import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

  const loginhandleClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    signIn(email, password)
    .then((result) => {
      e.target.reset();
      navigate("/")
        console.log(result);
    })
    .catch(error => console.error(error))
  };

  const googleHandle = () => {
    signInWithGoogle()
    .then((result) => {
      console.log(result.user);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 mt-5 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={loginhandleClick}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>
                New User So Pleace{" "}
                <Link to="/registration">
                  <a className="link link-info">Create Your Account</a>
                </Link>
              </p>
              <button onClick={googleHandle} className=" btn btn-ghost">Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
