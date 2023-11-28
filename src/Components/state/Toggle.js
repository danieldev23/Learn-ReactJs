import React, { useState } from 'react';
import './ToggleStyle.css';
// stateless functional component: component nhưng không sử dụng state
// stateful functional component:component có sử dụng state
// Initialized value: boolean(true, false), number(1,2,3,4,5), string("Danieldev"), undefined, null, [1,2,3,4], {title: "Javascript Developer"}
function Toggle() {
    const [on, setOn] = useState(false);
    console.log(on);
    // 1. Enable state: useState(initial value);
    // 2. Initialize state: useState(false);
    // 3. Reading state: 
    // 4. Update state
    // state changes -> re-render
    const handleToggle = () => {
        // setOn(callback) -> setOn()
        setOn((on) => !on);
    }
    return (
        <div>
        <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`} ></div>
        </div>

        {/* <div className='toggle-control'>
        <div className='toggle-on' onClick={() => setOn(true)}>On</div>
        <div className='toggle-off' onClick={() => setOn(false)}>Off</div>
        </div> */}
        </div>
    );
}
export default Toggle;