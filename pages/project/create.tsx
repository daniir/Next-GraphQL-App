export default function Create(){
    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <div className="mb-3">
              <label htmlFor="formName" className="form-label">
                Name
              </label>
              <input
                className="form-control w-25"
                type="text"
                name="name"
                id="formName"
              />
            </div>
            <div className="col align-self-center">
              <div className="mb-3">
                <label htmlFor="formDescription" className="form-label">
                  Description
                </label>
                <input
                  className="form-control w-50"
                  type="text"
                  name="description"
                  id="formDescription"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};