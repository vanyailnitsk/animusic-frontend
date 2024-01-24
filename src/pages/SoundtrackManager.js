import React from 'react';
import AddSoundtrack from "../modals/AddSoundtrack";
import '../styles/SoundtrackManager.css'
const SoundtrackManager = () => {
    return (
        <div className="soundtrack-manager-container">
            <AddSoundtrack/>
        </div>
    );
};

export default SoundtrackManager;