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
    new Request()
        .axiosPost({
        email: inputText('email'),
        password: inputText('password')
    }, inputText('address'))
})

buttonEvent('button-logout', () => {
    new Request('/auth/logout').axiosDelete();
})

buttonEvent('signin-byAddress', () => {
    new Request(inputText('address')).axiosPost({email: "test@test.com", password:"string"})
})


//==========================================================================================//
//==========================================================================================//

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

