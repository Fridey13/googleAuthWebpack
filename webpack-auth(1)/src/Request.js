export default class Request {
    constructor(path) {
        const basicUrl = 'https://localhost:44386'
        this.path = basicUrl + path;
        this.data = {}
        this.axios = require('axios')
        this.print = (message) => console.log(message)
    }

    async axiosGet(toastr) {

        console.log('path is ', this.path)
        let something = await this.axios.get(this.path);
        this.print(something.data)
        return this.data;
    }

    axiosPost(data, toastr) {
        console.log('path is ', this.path)
        this.axios.post(this.path, data)
            .then(resp => {
                console.log('DataPost', resp)
                this.data = resp
            })
            .catch(error => this.print(error))
        return this.data;
    }
}