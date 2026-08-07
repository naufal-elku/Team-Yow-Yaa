import qs from 'qs'
import {BACKEND_API_FRONT, BACKEND_API_HOST} from './host'

export const requestPost = (action, data, options = {}) => {
    const { base = "host" } = options;
    const baseUrl =
        base === "front" ? BACKEND_API_FRONT : BACKEND_API_HOST;
    return(
        fetch(baseUrl +action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                // 'Cache-Control': 'no-cache'
            },
            body: qs.stringify(data)
        })
            .catch((error) => {
                console.error(error);
            })
            .then((response) => response.json())
    )
}
