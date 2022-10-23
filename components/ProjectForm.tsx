import { useForm } from '../hooks/useForm';

const projectForm = {
  name: '',
  description: '',
};

export default function ProjectForm(){

  const {
    form,
    errorMsg,
    loading,
    handlerChange,
    handlerSubmit
  } = useForm(projectForm);


    return loading ? (
      <div>
        <p>...loading...</p>
      </div>
    ) : (
      <form onSubmit={handlerSubmit}>
        <div className="row justify-content-center">
          <div className="mb-3">
            <label htmlFor="formName" className="form-label">
              Name
            </label>
            <input
              className="form-control w-25"
              type="text"
              name="name"
              placeholder="Add a project name"
              id="formName"
              value={form.name}
              onChange={handlerChange}
            />
            {
              errorMsg && <p className="text-danger">{errorMsg}</p>
            }
          </div>
          <div className="col align-self-center">
            <div className="mb-3">
              <label htmlFor="formDescription" className="form-label">
                Description
              </label>
              <textarea
                className="form-control w-50"
                name="description"
                id="formDescription"
                rows={3}
                value={form.description}
                onChange={handlerChange}
              ></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </form>
    ); 
};