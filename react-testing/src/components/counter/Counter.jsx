import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterSlice";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)
    const onIncrement = () => {
        dispatch(increment( ))
    }
    const onDecrement = () => {
        dispatch(decrement())
    }
    return (
        <>
            <h1 data-testid={'value-title'}>Value = {value}</h1>
            <button data-testid={'increment-btn'} onClick={onIncrement}>Increment</button>
            <button data-testid={'decrement-btn'} onClick={onDecrement}>Decrement</button>
        </>
    );
};

export default Counter;