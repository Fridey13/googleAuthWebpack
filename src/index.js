import Post from './Post'
import Request from "./Request";
import './styles/styles.css'
import GoogleRequest from './GoogleRequest';
import constants from "./helpers/constants";

const post = new Post('Webpack post title')

buttonEvent('login', () => {
    new Request('/auth/local').axiosPost({
        email: inputText('email'),
        password: inputText('password')
    })
})

buttonEvent('login-dev', () => {
    let address = inputText('address')
    let method = getComponent('select')
    let callback = GetRequestMethod(method)
    if(method === 'Post'){
        let credentials = {
            email: inputText('email'),
            password: inputText('password')
        }
        callback(credentials,address)
    }
    else{
        callback(address)
    }
})

buttonEvent('button-logout', () => {
    new Request('/auth/logout').axiosDelete();
})


//==========================================================================================//
//==========================================================================================//

function GetRequestMethod(method){
    if(method === 'GET') return new Request().axiosGet;
    if(method === 'POST') return new Request().axiosPost;
    if(method === 'DELETE') return new Request().axiosDelete;
}

function getComponent(id){
    let value = document.getElementById(id).value
    if(value === undefined || value === null || value === ''){
        console.log('Error');
        return '';
    }
    return value;
}


//Get input text by input class name
function inputText(className){
    let value = document.getElementsByClassName(className)[0].value
    if(value === undefined || value === null || value === ''){
        console.log('Error');
        return '';
    }
    return value;
}

//Add handler to button by button class name
function buttonEvent(className, callback) {
    let button = document.getElementsByClassName(className)[0]
    button.addEventListener('click',() => callback())
}

