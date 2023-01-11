import React, {useEffect, useState} from 'react';

const Primitive = () => {
    const [data, setData] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 100)
    }, [])

    const onClick = () => setToggle(prevState => !prevState)

    return (
        <div>
            {data && <div>AsyncDiv</div>}
            <h1>Hello World</h1>
            <button onClick={onClick} data-testid={'toggle-btn'}>Click me</button>
            {
                toggle && <div data-testid={'toggle-elem'}>Toggled</div>
            }
            <h1 data-testid={'value-elem'}>{inputValue}</h1>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}
                   data-testid={'value-input'} placeholder={'Type'}/>
        </div>
    );
};

export default Primitive;