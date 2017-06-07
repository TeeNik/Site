class HTTP {
    constructor() {
        if (HTTP.__instance) {
            return HTTP.__instance;
        }
        HTTP.__instance = this;
    }

    request(address='', type='', body){
        let req = {
            method: type,
            mode:'cors',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        };
        if(body) {
            console.log(body);
            req.body = JSON.stringify(body);
        }
        return fetch(address, req);
    }
}

window.HTTP = HTTP;
