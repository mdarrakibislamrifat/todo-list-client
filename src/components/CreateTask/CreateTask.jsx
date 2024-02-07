import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaFileExport } from "react-icons/fa";

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const typePrior = form.typePrior.value;
    

    const product = {
      
      name,
     type,
     typePrior
    };

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully Add Cart!");
        }
      });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleAddTodo}>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Todo Name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder=" name"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Todo Type*</span>
              </label>
              <select
                defaultValue="default"
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
                defaultValue="default"
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
            Add Todo <FaFileExport className="ml-2"></FaFileExport>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
