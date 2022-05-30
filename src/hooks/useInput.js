import { useState } from 'react';

const useInput = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const valueInputHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const clear = () => {
        setEnteredValue('');
    };

    return {
        value: enteredValue,
        valueInputHandler,
        clear
    };
};

export default useInput;