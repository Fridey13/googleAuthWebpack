import constants from "./helpers/constants";

export default class GoogleRequest{
    SignIn() {
        // Google's OAuth 2.0 endpoint for requesting an access token
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        let client_id = '608292150723-2sfdrmmbq7mgjgipt5vc49r0pfu3f6lt.apps.googleusercontent.com';
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);

        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {
            'client_id': client_id,
            'redirect_uri': constants('WITH_METHOD', 'auth/signin-google',44304),
            'response_type': 'code', // token, offline => code - authorized key, token => access token, offline => access token, refresh token!
            // request => code(response) => request(code) => access token(response) => request(access token) => oAuth model(response)(profile user);
            'scope': 'https://www.googleapis.com/auth/cloud-platform',
            // scope => services was we will get access
            'include_granted_scopes': 'true',
            // user information access
            'state': 'pass-through value'};

        // Add form parameters as hidden input values.
        for (var p in params) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', p);
            input.setAttribute('value', params[p]);
            form.appendChild(input);
        }

        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
        console.log(form)
    }

    /// Method which send 'GET' request to server for authorization user
    AxiosLogin(){
        let axios = require('axios');
        let oauth2Endpoint = 'https://localhost:44339/Account/GoogleLogin';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Method'] = '*';
        console.log()
        axios.get(oauth2Endpoint).then(res => console.log(res)).catch(error => console.log(error))
    }
}
