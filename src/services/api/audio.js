import {$host} from "./index";

export const createSoundtrack = async (formData) => {
    const {data} = await $host.post('audio/create-from-file', formData);
    return data;
}

