import React, { useState } from 'react';

function LikeButton() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count} people like this recipe</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );

}

export default LikeButton
