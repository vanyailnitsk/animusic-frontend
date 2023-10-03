import React from 'react';
import Soundtrack from "./Soundtrack";
import "../style/SoundtrackList.css"

const SoundtrackList = ({soundtracks}) => {
    return (
        <div className="main-soundtracklist">
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