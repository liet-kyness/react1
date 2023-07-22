import React, {useState} from "react";
import NewMadLibForm from "./NewMadLibForm";
import Story from "./Story";

function MadLibs() {
    const [story, setStory] = useState([]);
    const create = newStory => {
        setStory(story => [...story, newStory]);
    };
    const remove = id => {
        setStory(story => story.filter(str => str.id !== id));
    };
    const madLibComponents = story.map(str => (
        <Story
            key={str.id}
            id={str.id}
            noun={str.noun}
            noun2={str.noun2}
            adjective={str.adjective}
            color={str.color}
            handleRemove={remove}
        />
    ));
    return (
        <div>
            <NewMadLibForm createMadLib={create} />
            {madLibComponents}
        </div>
    )
}

export default MadLibs;