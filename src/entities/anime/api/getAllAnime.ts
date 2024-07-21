import {$host} from "@/shared/api";

export const getAllAnime = async () => {
    const {data} = await $host.get('anime');
    return {data};
}