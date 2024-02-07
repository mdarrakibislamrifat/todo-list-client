import Navbar from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import TaskPage from "./TaskPage/TaskPage";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-4">
                <Banner></Banner>
            </div>
            <div className="mt-4 mb-8">
                <TaskPage></TaskPage>
            </div>
        </div>
    );
};

export default Home;