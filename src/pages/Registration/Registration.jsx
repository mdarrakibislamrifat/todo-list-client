import Lottie from 'lottie-react';
import { AiFillGoogleCircle } from "react-icons/ai";
import animate from '../../../public/Animation - 1700488396904.json'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
const provider=new GoogleAuthProvider();

const Registration = () => {
    const {createUser,googleSignIn}=useContext(AuthContext);
    const [error,setError]=useState('');
    const navigate = useNavigate();

const handleRegister=(e)=>{
e.preventDefault();
const form=e.target;

const email=form.email.value;
const password=form.password.value;

setError('');

if (
    !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{6,}).*$/.test(password)
  ) {
    setError(
      "Please provide more than 6 characters,one capital letter and a special character"
    );
  } else {
    createUser(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        toast.success("Successfully Register!");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

}


const handleGoogle = () => {
    googleSignIn(provider).then(() => {
        toast.success("Successfully Register!")
       navigate('/')
      .catch((error) => {
        console.log(error.message);
      });
    });
  };



    return (
        <div className="hero min-h-screen bg-base-200">
             <Toaster position="top-center" reverseOrder={false} />
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <Lottie animationData={animate}></Lottie>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <p className="text-red-400">{error}</p>
        <div>
            <p>You are already registered? Please <Link className="text-green-500 font-bold underline" to='/login-route'>Login</Link></p>
        </div>
        <div className='text-center mt-2'>
            <button onClick={handleGoogle} className='btn'><AiFillGoogleCircle className='text-4xl'/></button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register Now!</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Registration;