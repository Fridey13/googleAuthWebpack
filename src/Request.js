export default class Request {
    constructor(path) {
        const basicUrl = 'https://localhost:44304'// or port :44386
        this.path = basicUrl + path;
        this.data = {}
        this.axios = require('axios')
    }

    axiosGet(path = this.path) {
        console.log('path is ', this.path)
        this.axios.get(this.path)
            .then(resp => {
                console.log('axios get response :', resp)
                this.data = resp
            }).catch(error => console.log(error));
        return this.data;
    }

    axiosPost(data, path = this.path) {
        console.log('path is ', this.path)
        this.axios.post(path, data)
            .then(resp => {
                console.log('DataPost', resp)
                this.data = resp
            }).catch(error => console.log(error))
        return this.data;
    }

    axiosDelete(path = this.path) {
        console.log('path is ', this.path)
        this.axios.delete(this.path)
            .then(resp => {
                console.log('DataPost', resp)
                this.data = resp
            }).catch(error => console.log(error))
        return this.data;
    }
}