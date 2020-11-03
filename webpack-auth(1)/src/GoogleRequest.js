export default class GoogleRequest{
    googleSignIn() {
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
            'redirect_uri': 'https://localhost:44304/auth/signin-google',
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

    googleAxiosLogin(){
        let axios = require('axios')

        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        let client_id = '608292150723-2sfdrmmbq7mgjgipt5vc49r0pfu3f6lt.apps.googleusercontent.com';
        var params = {
            'client_id': client_id,
            'redirect_uri': 'https://localhost:44337/auth/google-login',
            'response_type': 'token',
            'scope': 'https://www.googleapis.com/auth/cloud-platform',
            'include_granted_scopes': 'true',
            'state': 'pass-through value'
        };

        axios.get(oauth2Endpoint, {
            params: params
        }).then(res => console.log(res)).catch(error => console.log(error))
    }
}
