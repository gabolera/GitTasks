'use strict';

const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", 'https://unpkg.com/axios@0.18.0/dist/axios.min.js');
const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
head.insertBefore(script, head.lastChild);

import axios from 'axios';

var route = window.location.pathname;
var result = route.split('/');
var user = result[1];
var repository = result[2];
var route = result[3];

if (route == 'git_teste') {
    console.clear();
    console.log('renderizando tabela de tarefas');
} else if (user != '' && repository != '') {
    var menu_top_git = document.querySelector('.UnderlineNav ul');
    menu_top_git.innerHTML = menu_top_git.innerHTML + '<li class="d-flex"><a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" href="' + window.location.href + '/git_teste/" style=""><svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg><span data-content="Insights">Uepa</span><span title="Not available" class="Counter "></span></a></li>';
} else {
    console.log('oi');
}

function isset(accessor) {
    try {
        if (accessor() !== undefined && accessor() !== null) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false
    }
}


function printTasks(user, ) {

}