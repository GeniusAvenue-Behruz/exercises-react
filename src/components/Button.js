import React, { useState, useEffect } from 'react'

function Button({ content = 'Button', clickable = false }) {
    const [clicks, setClicks] = useState(0);
    useEffect(() => {
        if (clickable) {
            console.log(clicks + " Clicked");
        }
    }, [clicks, clickable]);


    return (
        <button onClick={() => setClicks(clicks + 1)} className='btn relative max-w-14 rounded-md text-center w-full py-1 bg-gray-200' style={{ position: 'relative' }}>
            {content}
            {clickable && clicks > 0 && (
                <span className="bg-slate-300 w-6 h-6 absolute -top-2 -right-3 rounded-full">{clicks}</span>
            )}
        </button>
    )
}

export default Button
