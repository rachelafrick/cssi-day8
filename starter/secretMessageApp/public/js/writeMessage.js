const messagesRef = firebase.database().ref();

messagesRef.push({
message: "this was made with JavaScript",
password: "JavaScript"

});