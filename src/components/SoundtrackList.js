import React from 'react';
import Soundtrack from "./Soundtrack";

const SoundtrackList = ({soundtracks}) => {
    return (
        <div>
            {soundtracks.map((soundtrack,index) => (
                <Soundtrack
                    key={soundtrack.id}
                    soundtrackData={soundtrack}
                    playlist={soundtracks}
                    index={index}
                />
            ))}
        </div>
    );
};

export default SoundtrackList;