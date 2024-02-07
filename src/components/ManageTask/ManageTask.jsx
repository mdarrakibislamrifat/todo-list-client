
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";


const ManageTask = () => {
  
  const axiosPublic = UseAxiosPublic();

  const { data: tasks = [] ,refetch} = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get('allTodo');
      return res.data;
    }
  });

  const handleMakeComplete=task=>{
    axiosPublic.patch(`/users/admin/${task._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                title: `${task.name} is an complete Now!`,
                
                icon: "success"
              });
        }
    })
}

  const handleDeleteTask = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`allTodo/${task._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Task is delete",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4 ">
        <h2 className="text-3xl text-blue-500 font-semibold">All Todo</h2>
        <h2 className="text-3xl text-blue-500 font-semibold">
          Total tasks : {tasks.length}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Complete/Incomplete</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.name}</td>
                  <td> {task.type==='incomplete' ? <button onClick={()=>handleMakeComplete(task)}
                        
                        className="btn btn-sm text-white bg-indigo-500"
                      >
                        {task.type}
                      </button> : task.type==='complete'? <button onClick={()=>handleMakeInComplete(task)}
                        
                        className="btn btn-sm text-white bg-indigo-500"
                      >
                        {task.type}
                      </button> : ''}</td>
                  <td>{task.typePrior}</td>

                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                  <Link to={`/dashboard/update/${task._id}`}>
                    <button className="btn btn-ghost btn-lg">
                      <FaEdit className="text-green-600"></FaEdit>
                    </button>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
