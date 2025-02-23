import React from "react";

function Count(){
    let [count, countFn] = React.useState(0)
    
        const add = () => countFn(++count);
        const min = () => countFn(--count);
    
    
        return (
            <nav>
                <div>
                    <button onClick={add}>+</button>
    
                    <span style={{ color: 'red', fontSize: '24px' }}>
                        {count}
                    </span>
    
                    <button onClick={min}>-</button>
                </div>
               
    
            </nav>
        )
}

export default Count