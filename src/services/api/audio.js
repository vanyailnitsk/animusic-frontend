import {$host} from "./index";

export const createSoundtrackFromFile = async (formData) => {
    const {data} = await $host.post('soundtracks/create-from-file', formData);
    return data;
}

export const createSoundtrackFromYoutube = async (formData) => {
    const {data} = await $host.post('soundtracks/create-from-youtube', formData);
    return data;
}

