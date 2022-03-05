import { Fragment, useRef, useState } from 'react';
import '../App.css';
import Items from './Item';

const MainData = () => {

    const [content , cncontent] = useState('');
    const [todo , settodo] = useState([{id: 0 , text: 'Example' , done : true}]);

    const todoNum = useRef(1); // 기본값 1 부터 시작
    // useRef 함수형에서 자주 쓰이는 훅 여러 DOM을 다루기 위해 혹은 컴포넌트 안에서 조회 수정을 위해 사용
    // 이유 1 . useRef 가 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다.
    // 이유 2 . 일반적인 컴포넌트는 렌더링이 된 이후에 값을 조회할 수 있으나 useRef 는 바로 조회할 수 있습니다.
    // 수정과 조회는 todoNum.current 로 사용
    function handleChange(e) {
        cncontent(e.target.value);
    }

    const handleSubmit = () => {
        if(content){       
            const todo_make = {
            id: todoNum.current ,
            text: content ,
            done: true
        };
        settodo(todo.concat(todo_make));
        todoNum.current += 1;
    }
    }

    const Remover = (id) => { // filter 로 특정 조건을 만족하는 값만 다시 재 배열한다. 
        settodo(todo.filter((todo) => todo.id !== id)) // 모든 todo 값 중 자신의 id 를 뺀 모든 값
    }

    const Toogle = (id) => {
        settodo(
        todo.map((todo) => {
        //     if(todo.id === id) {
        //         todo.done = !todo.done;
        //     }
        //     return todo;
        return todo.id === id ? { ...todo, done: !todo.done } : todo; // 체크한 요소를 찾습니다. 찾으면 새로운 객체를 생성
        })
        )
    }

    return(
    <Fragment>
        <div className='Boxes'>
            <div className='Boxes_inner'>
            <span id="Font">일정 관리</span>
            <hr></hr>
            </div>
                <input className='Input_data' placeholder="input here" onChange={handleChange}></input>
                <button className='Input_Bt' onClick={handleSubmit}>추가</button>
            { /* todo.map((data) => (<Items className='TodoItem' data={data.text } key={data.id}/>))*/ }
            <Items data={todo} onRemover={Remover} OnToogle={Toogle}></Items>
        </div>
        
    </Fragment>
    )
}

export default MainData;