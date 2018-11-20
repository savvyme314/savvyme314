var username = prompt('What is your Name?');
var greet = function greet() {

    if (username === '') {
        username = prompt('what is your name foreal this time?')

        greet();
    } else {
        alert('hello' + username);
    }
}