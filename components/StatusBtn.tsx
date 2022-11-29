type StatusBtn = {
    status: boolean
}

export default function StatusBtn({ status }: StatusBtn){
    return (
      <button className="btn btn-success btn-sm badge rounded-pill">
        <i className="bi bi-check-circle"></i>
      </button>
    );
};