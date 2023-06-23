const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
}

class Api {

    constructor({ dataUrl }) {
        this._dataUrl = dataUrl;

    }

    getUsers() {
        return fetch(`${this._dataUrl}/users`, {
            headers: {
                "Content-Type": "application/json"    
            },
        }).then(onResponce);
    }
}

    const config = {
        dataUrl: 'https://jsonplaceholder.typicode.com',
    }
    
    const api = new Api(config)
    
    export default api