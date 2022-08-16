const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://sed.ucol.mx/app/api/getItems/';

const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
