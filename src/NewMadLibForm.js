import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewMadLibForm({ createMadLib }) {
    const [formData, setFormData] = useState({
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    });
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    
    const gatherInput = evt => {
        evt.preventDefault();
        createMadLib({ ...formData, id: uuid() });
        setFormData({ noun: "", noun2: "", adjective: "", color: ""});
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="noun"></label>
                    <input 
                        onChange={handleChange}
                        placeholder="noun"
                        type="text"
                        name="noun"
                        id="noun"
                        value={formData.noun}
                    />
                </div>
                <div>
                    <label htmlFor="noun2"></label>
                    <input
                        onChange={handleChange}
                        placeholder="noun2"
                        type="text"
                        name="noun2"
                        id="noun2"
                        value={formData.noun2}
                    />
                </div>
                <div>
                    <label htmlFor="adjective"></label>
                    <input
                        onChange={handleChange}
                        placeholder="adjective"
                        type="text"
                        name="adjective"
                        id="adjective"
                        value={formData.adjective}
                    />
                </div>
                <div>
                    <label htmlFor="color"></label>
                    <input
                        onChange={handleChange}
                        placeholder="color"
                        type="text"
                        name="color"
                        id="color"
                        value={formData.color}
                    />
                </div>
                <button id="newMadLibButton">Create!</button>
            </form>
        </div>
    );
};

export default NewMadLibForm;