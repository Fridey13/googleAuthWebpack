import Post from './Post'
import Request from "./Request";
import './styles/styles.css'
import toastr from 'toastr'
import {toastrOptions} from "./constants";
import GoogleRequest from './GoogleRequest';

const post = new Post('Webpack post title')

let request = new Request('/statistic')
toastr.options = toastrOptions


let btn = document.getElementsByClassName('getRequest')
console.log(new GoogleRequest().googleSignIn)
    btn.onСlick = new GoogleRequest().googleSignIn()
console.log(btn)