import { useForm } from "react-hook-form";
import { FaFileExport } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/useAxiosPublic";


const UpdateTask = () => {
    const items=useLoaderData();
    const {_id,name,type,typePrior}=items || {}
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = UseAxiosPublic();

  const onSubmit = async (data) => {
    const taskItem = {
        name: data.name,
        type: data.type,
        typePrior:data.typePrior
        
      };
      const res = await axiosPublic.patch(`/allTodo/v1/v2/${_id}`, taskItem);
      if (res.data.modifiedCount>0) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: `${data.name} is updated`,
          icon: "success",
        });
      }
    
  };
    return (
        <div>
        
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Todo Name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder=" name" defaultValue={name}
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Todo Type*</span>
              </label>
              <select
                defaultValue={type}
                {...register("type", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </div>
          </div>

          <div className="flex gap-6">
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Todo Priority*</span>
              </label>
              <select
                defaultValue={typePrior}
                {...register("typePrior", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <button className="btn mt-6">
            Update Todo <FaFileExport className="ml-2"></FaFileExport>{" "}
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateTask;