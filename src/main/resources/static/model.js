function setConnected(connected) {
    //document.getElementById('response').innerHTML = '';
}

function connect() {
    var socket = new SockJS('/hello');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function(greeting){
            showGreeting(JSON.parse(greeting.body));
            //showGreeting(greeting.body);
        });
    });
}

function disconnect() {
    stompClient.disconnect();
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage(typeMessage) {
    if (typeMessage === 'login') {
        stompClient.send("/app/hello", {}, JSON.stringify(getAuthMessage()));
    }else  if (typeMessage === 'registration') {
        stompClient.send("/app/hello", {}, JSON.stringify(getRegMessage()));

    }
}

function getAuthMessage() {
    var message = { 'type': '', 'seqence_id': '', data: {'email': '', 'password': ''} };
    message.type = 'LOGIN_CUSTOMER';
    message.seqence_id = generateHexString(36);
    message.data.email = document.getElementById('email').value;
    message.data.password = document.getElementById('password').value;

    return message;
}

function getRegMessage() {
    var message = { 'type': '', 'seqence_id': '', data: {'name': '','email': '', 'password': ''} };
    message.type = 'NEW_CUSTOMER';
    message.seqence_id = generateHexString(36);
    message.data.name = document.getElementById('regName').value;
    message.data.email = document.getElementById('regEmail').value;
    message.data.password = document.getElementById('regPassword').value;

    return message;
}

function showGreeting(message) {
    if (message.type == "CUSTOMER_API_TOKEN") {
        var incomeData = JSON.parse(message.data.users);
        showUsers(incomeData);
    }else if (message.type == "CUSTOMER_ERROR") {
        alert(message.data.error_description);
    }
}

function generateHexString(length) {
    var ret = "";
    while (ret.length < length) {
        ret += Math.random().toString(16).substring(2);
    }
    return ret.substring(0,length);
}


function user1() {
    var users = document.getElementById('players');

    var lies =  users.childNodes.length;
    for (var i = 0; i < lies; i++) {
        users.removeChild(users.childNodes[0]);
    }

    var user = document.createElement('li');
    user.appendChild(document.createTextNode("user1"));
    users.appendChild(user);
    user = document.createElement('li');
    user.appendChild(document.createTextNode("user2"));
    users.appendChild(user);
}