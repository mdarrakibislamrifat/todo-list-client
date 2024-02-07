
import { Link } from "react-router-dom";
import SubLayout from "../../layout/SubLayout";

const ErrorPage = () => {
    return (
        
            <SubLayout>
                <div >
            

            <div  className="flex justify-center items-center">
            <img className="rounded-xl " src="https://i.ibb.co/K9dgxr8/404.gif" alt="" />
            </div>
            <div className='flex justify-center mt-4'>
                <Link to='/'><button className='btn btn-primary'>Go Home</button></Link>
                
            </div>
        </div>
            </SubLayout>
        
    );
};

export default ErrorPage;