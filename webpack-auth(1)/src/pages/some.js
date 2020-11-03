//FOR LOCAL SIGN IN
let localSignIn = {
    "email": "email@email.com", // for localSignIn
    "password": "password", // for localSignIn
    "expires_in": 239475, // If the access token expires, the server should reply with the duration of time the access token is granted for. Default 12 hour.
    "allowAllService": false, //boolean access to all services => optional
    "scope": ["https://someDomain/...", "..."] // add access for specific services to allow => optional
}

//FOR GOOGLE EXTERNAL LOGIN
let googleSignIn = {
    "access_token": "..someHash", // return google after redirect
    "expires_in": 239475, // If the access token expires, the server should reply with the duration of time the access token is granted for. Default 12 hour.
    "allowAllService": false, //boolean access to all services => optional
    "scope": ["https://someDomain/...", "..."] // add access for specific services to allow => optional
}

//For Facebook External Login
let facebookSignIn = {
    "access_token": "..someHash", // return facebook after redirect
    "expires_in": 239475, // If the access token expires, the server should reply with the duration of time the access token is granted for. Default 12 hour.
    "allowAllService": false, //boolean access to all services => optional
    "scope": ["https://someDomain/...", "..."] // add access for specific services to allow => optional
}

let getGroupByDialogInfo = {
    "agent_id": "das4rdfd23",
    "tag_id": "lsdfkfjh3h488yh"
}



D