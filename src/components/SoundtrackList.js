import React from 'react';
import Soundtrack from "./Soundtrack";

const SoundtrackList = ({soundtracks}) => {
    return (
        <div>
            <h2>Soundtrack List</h2>
            {soundtracks.map((soundtrack) => (
                <Soundtrack key={soundtrack.id} soundtrackData={soundtrack} />
            ))}
        </div>
    );
};

export default SoundtrackList;