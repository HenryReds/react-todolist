import './TodoCounter.css'

function TodoCounter(props) {
    return (
        <h1 className='TodoCounter'>
            Has completado <span>{props.completed}</span> 
            de <span>{props.total}</span> TODOS
        </h1>
    );
  }

  export { TodoCounter };