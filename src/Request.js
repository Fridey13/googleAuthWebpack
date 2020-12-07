export default class Request {
    constructor(path) {
        const basicUrl = 'https://localhost:44304'// or port :44386
        this.path = basicUrl + path;
        this.data = {}
        this.axios = require('axios')
    }

    axiosGet(path = this.path) {
        let axios = require('axios')
        let config = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6ImxvY2FsIiwicHJvdmlkZXJJZCI6IjJiZDZlMzkzLTQwYTMtNGViMy05M2JlLTNlMTUwMjRkZDRmOCIsImV4cCI6MTYwNzM3OTY2MywiaXNzIjoiZ2xvYmFsY2xvdWR0ZWFtIiwiYXVkIjoiZ2xvYmFsY2xvdWR0ZWFtIn0.7S6V8A8YYzEXJJ65w9uP2OsTDEPwQ5vE1MinVNx95j0'
            }
        }
        console.log('axios is', axios)
        console.log('Get path is ', path)
        axios.get(path, config).then(resp => {
            console.log('data:',resp.data)
            let data = document.getElementById('text')
            data.innerText = JSON.stringify(resp.data)
        }).catch(error => console.log(error));
    }

    axiosPost(data, path = this.path) {
        console.log('Post path is ', path)
        this.axios.post(path, data)
            .then(resp => {
                console.log('DataPost', resp)
                this.data = resp
            }).catch(error => console.log(error))
        return this.data;
    }

    axiosDelete(path = this.path) {
        console.log('path is ', path)
        this.axios.delete(this.path)
            .then(resp => {
                console.log('DataPost', resp)
                this.data = resp
            }).catch(error => console.log(error))
        return this.data;
    }
}