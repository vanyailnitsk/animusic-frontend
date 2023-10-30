import React, { useState } from 'react';
import '../style/AddSoundtrack.css'
const AddSoundtrack = () => {
    const [fileUploadVisible, setFileUploadVisible] = useState(false);
    const [youtubeUploadVisible, setYoutubeUploadVisible] = useState(false);

    const showFileUpload = () => {
        setFileUploadVisible(true);
        setYoutubeUploadVisible(false);
    };

    const showYoutubeUpload = () => {
        setFileUploadVisible(false);
        setYoutubeUploadVisible(true);
    };
    return (
        <div className="add-soundtrack-main">
            <input className="original-title" type="text" placeholder=" Original title"/>
            <input className="anime-title" type="text" placeholder=" Anime Track Title"/>
            <input className="anime" type="text" placeholder=" Anime"/>
            <div className="track-type">
                <span>Choose playlist</span>
                <select className="select">
                    {/*<option value="opening">Opening</option>*/}
                    {/*<option value="ending">Ending</option>*/}
                    {/*<option value="theme">Theme</option>*/}
                    {/*<option value="scene-song">Scene Song</option>*/}
                </select>
            </div>
            <div className="method-of-adding">
                <button onClick={showFileUpload} className={fileUploadVisible ? 'from-file' : 'from-youtube'}>From file</button>
                <button onClick={showYoutubeUpload} className={youtubeUploadVisible ? 'from-file' : 'from-youtube'}>From YouTube</button>
            </div>
            <div className="methods-container">
            {fileUploadVisible && (
                <div className="file-upload">
                    <input type="file" />
                </div>
            )}

            {youtubeUploadVisible && (
                <div className="youtube-upload">
                    <input type="text" placeholder=" YouTube Link" />
                </div>
            )}
            </div>
            <div className="create"><button>Create</button></div>
        </div>
    );
};

export default AddSoundtrack;