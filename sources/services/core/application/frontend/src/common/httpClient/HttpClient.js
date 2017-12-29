export default class HttpClient {

    constructor() {
        if (sessionStorage.getItem('cuiAuthenticationToken') == null) {
            sessionStorage.setItem('cuiAuthenticationToken', '');
        }
    }

    sendGet(url) {
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", url);
            request.setRequestHeader("Accept", "application/json");
            request.setRequestHeader("CUI-Authentication-Token", sessionStorage.getItem('cuiAuthenticationToken'));
            request.onload = () => {
                this.handleResponse(request, resolve, reject);
            };
            request.onerror = () => {
                this.handleResponse(request, resolve, reject);
            };
            request.send();
        });

        return result;
    }

    sendPut(url, data) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("PUT", url);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.setRequestHeader("CUI-Authentication-Token", sessionStorage.getItem('cuiAuthenticationToken'));
            request.onload = () => {
                this.handleResponse(request, resolve, reject);
            };
            request.onerror = () => {
                this.handleResponse(request, resolve, reject);
            };
            request.send(JSON.stringify(data));
        });
    }

    sendPost(url, data, isFormData) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("POST", url);
            if (!isFormData) {
                request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                data = JSON.stringify(data)
            }
            request.setRequestHeader("CUI-Authentication-Token", sessionStorage.getItem('cuiAuthenticationToken'));
            request.onload = () => {
                this.handleResponse(request, resolve, reject, isFormData);
            };
            request.onerror = () => {
                this.handleResponse(request, resolve, reject, isFormData);
            };
            request.send(data);
        });
    }

    sendDelete(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("DELETE", url);
            request.setRequestHeader("CUI-Authentication-Token", sessionStorage.getItem('cuiAuthenticationToken'));
            request.onload = () => {
                this.handleResponse(request, resolve, reject);
            };
            request.onerror = () => {
                this.handleResponse(request, resolve, reject);
            };
            request.send();
        });
    }

    handleResponse(request, resolve, reject, isFormData) {
        if (request.readyState != 4)
            return;

        let response = { 
            status: request.status,
            jsonObject: {}
        };
        if (request.status == 200) {
            if (request.responseText != "") {
                response.jsonObject = JSON.parse(request.responseText);
            }
            resolve(response);
        } else if (request.status == 204) {
            resolve(response);
        } else if (request.status == 401) {
            PubSub.publish('uiEvent.users.authentication.requested');
            reject(response);
        } else {
            reject(response);
        }
    }
}