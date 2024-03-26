import React, {useContext} from 'react';
import {storageUrl} from "../../../services/api/consts";
import addButton from "../../../icons/addButton.png";
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";

const CurrentTrack = () => {
    const {musicStore} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className={musicStore.currentTrack ? 'current__track' : 'hidden'}>
            <img
                src={musicStore.currentTrack && storageUrl + (musicStore.currentTrack.imageFile || "images/track-img.jpeg")}
                alt=""
                className='track__img'/>
            {musicStore.currentTrack &&
                <div className='track__name'>
                            <span
                                onClick={() => navigate(`/playlist/${musicStore.currentTrack?.album.id}`)}
                                className={musicStore.currentTrack.originalTitle.length > 20 ? "scrolling" : ""}>{musicStore.currentTrack.originalTitle}</span>
                    <span>{musicStore.currentTrack.animeTitle}</span>
                </div>
            }
            <img src={addButton} alt="" className='add__track' onClick={(e) => e.stopPropagation()}/>
        </div>
    );
};

export default CurrentTrack;