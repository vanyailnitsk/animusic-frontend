import React from 'react';
import Soundtrack from "./Soundtrack";
import "../style/SoundtrackList.css"
import {observer} from "mobx-react-lite";

const SoundtrackList = observer(({soundtracks}) => {
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
});

export default SoundtrackList;