export function setCookie() {
    if(document.cookie.indexOf('lyutailscookie')==-1) {
        document.cookie = 'lyutailscookie=1';
    }
    // else {
    //     alert('you refreshed');
    // }
}
