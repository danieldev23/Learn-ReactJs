import React, { useState } from 'react';

// stateless functional component: component nhưng không sử dụng state
// stateful functional component:component có sử dụng state
// const Toggle = () => {
//     return (
//         <div className='toggle'>
            
//         </div>
//     );
// };

// const Toggle2 = () => {
//     // const [count, setCount] = useState();
//     return (
//         <div className='toggle'>

//         </div>
//     )
// }
function Toggle() {
    // 1. Enable state: useState(initial value);
    // 2. Initialize state: useState(false);
    // 3. Reading state: 
    // 4. Update state
    const [on, setOn] = useState(false);
    console.log(on, setOn);
}
export default Toggle;