import React from "react";

function Story({ id, handleRemove, noun, noun2, adjective, color }) {
    const remove = () => {
        handleRemove(id)
    };
    return (
        <div>
            <h3>There was a {color} {noun} who loved a {adjective} {noun2}</h3>
            <button onClick={remove}>x</button>
        </div>
    );
}

export default Story;