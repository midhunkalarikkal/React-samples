import React, { forwardRef, useRef } from 'react';

const ForwardRef = () => {
    const inputRef = useRef();

    const focusInput = () => {
      inputRef.current.focus(); // Focus the input field directly
    };
  
    return (
      <div>
        <InputField ref={inputRef} placeholder="Type here..." />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
}

export default ForwardRef;


// Child component using forwardRef
const InputField = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

