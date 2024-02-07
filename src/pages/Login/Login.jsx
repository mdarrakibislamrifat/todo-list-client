import Lottie from "lottie-react";
import animate from '../../../public/Animation - 1700488396904.json'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error,setError]=useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
        
        e.target.reset();
        navigate('/');
        toast.success("Successfully Login!")
      })
      .catch((error) => {
        setError(error.message);
      });
  };

    return (
        <div className="hero min-h-screen bg-base-200">
          
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Toaster position="top-center" reverseOrder={false} />
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <Lottie animationData={animate}></Lottie>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div>
            <p>You are new? Please <Link className="text-green-500 font-bold underline" to='/registration-route'>Registration</Link></p>
        </div>
        <p className="text-red-500">{error}</p>
        <div className="form-control mt-6"><button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;