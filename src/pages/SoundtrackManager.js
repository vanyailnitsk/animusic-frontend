import React from 'react';
import AddSoundtrack from "../modals/AddSoundtrack";
import '../style/SoundtrackManager.css'
const SoundtrackManager = () => {
    return (
        <div className="soundtrack-manager-container">
            <AddSoundtrack/>
        </div>
    );
};

export default SoundtrackManager;