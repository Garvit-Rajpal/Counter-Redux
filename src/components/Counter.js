import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/Slices/cartSlice';

const Counter = () => {

    const val=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
  return (
    <div className='w-screen h-screen'>
        <button onClick={()=>dispatch(increment())}>
            Increment
        </button>

        <div>
         {val}
        </div>

        <button onClick={()=>dispatch(decrement())}>
            decrement
        </button>
    </div>
  );
}

export default Counter