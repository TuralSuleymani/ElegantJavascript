export default class RestAPI {
    async queryDataAsync(url) {
        return await fetch(url)
            .then(rspns => rspns.json());
    }
    async commandDataAsync(url, params) {
        await fetch(url, params)
            .then(response => response.json())
    }
}