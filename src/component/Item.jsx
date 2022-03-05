import { Fragment } from "react";

const Items = ({data , onRemover , OnToogle}) => {
    return(
        <Fragment>
        {data.map((todo) => (<div className="TodoItem" key={todo.id}>
            <input type="checkbox" className="TodoItem_Check" onClick={() => OnToogle(todo.id)}></input>
            <span className={todo.done ? "todoText" : "todoText_Done"}>{todo.text}</span>
            <button className="deleteButton" onClick={() => onRemover(todo.id)}>제거</button>
            </div>))}
        </Fragment>
    )
} /* 키를 자식 컴버넌트 마다 넣어줘야한다. 불필요한 리렌더링 방지 또한 동일키를 넘기면 에러가 나기에 id를 붙여준다. */

export default Items;