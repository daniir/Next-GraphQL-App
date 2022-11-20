type DeleteBtn = {
    id: string
}

export default function DeleteBtn({ id }: DeleteBtn){

    console.log(id);

    return (
      <button className="btn btn-danger btn-sm badge rounded-pill">
        <i className="bi bi-trash3"></i>
      </button>
    );
};