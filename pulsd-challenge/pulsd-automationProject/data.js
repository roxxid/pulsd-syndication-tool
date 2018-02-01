var theUrl = "http://localhost:8080/api/events/";

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            document.body.className = 'ok';
            console.log(request.responseText);
        } else if (!isValid(this.response) && this.status == 0) {
            document.body.className = 'error offline';
            console.log("The computer appears to be offline.");
        } else {
            document.body.className = 'error';
        }
    }
};
request.open("GET", theUrl, true);
request.send(null);