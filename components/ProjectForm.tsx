import { useForm } from '../hooks/useForm';

const projectForm = {
  name: '',
  description: '',
};

export default function ProjectForm(){

  const {
    form,
    handlerChange,
    handlerSubmit
  } = useForm(projectForm);


    return (
      <form onSubmit={handlerSubmit}>
        <div className='row justify-content-center'>
          <div className='mb-3'>
            <label htmlFor='formName' className='form-label'>
              Name
            </label>
            <input
              className='form-control w-25'
              type='text'
              name='name'
              id='formName'
              value={form.name}
              onChange={handlerChange}
            />
          </div>
          <div className='col align-self-center'>
            <div className='mb-3'>
              <label htmlFor='formDescription' className='form-label'>
                Description
              </label>
              <input
                className='form-control w-50'
                type='text'
                name='description'
                id='formDescription'
                value={form.description}
                onChange={handlerChange}
              />
            </div>
          </div>
          <div>
            <button type='submit' className='btn btn-primary'>
              Create
            </button>
          </div>
        </div>
      </form>
    );
};