export default function TaskForm(){
    return (
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="tName" className="visually-hidden">
            Task name
          </label>
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="tName"
            value="Task name"
          />
        </div>
        <div className="col-auto">
          <label htmlFor="tValue" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="tValue"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
    );
};