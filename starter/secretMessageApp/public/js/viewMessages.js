/** 
const getMessages = () => {
const messagesRef = firebase.database().ref();
messagesRef.on("value", (snapshot) => {
    const data = snapshot.val()
    console.log(data)
    for (let key in data) {
        const message = data[key];
        console.log(message);
    }
})
}

const findMessage = (myPass) => {
const messagesRef = firebase.database().ref();
messagesRef.on("value", (snapshot) => {
    const data = snapshot.val()
    console.log(data)
    for (let key in data) {
        const message = data[key];
        console.log(message);
        if (myPass == message.passcode){
            renderMessage(message)
        }
    }
})
}
**/

document.querySelector("#viewMsg").addEventListener("click", (e) =>{
const userPasscodeGuess = document.querySelector("#passcode").value

const messagesRef = firebase.database().ref()
messagesRef.on("value", (snapshot) => {
    const data = snapshot.val();
    for (let key in data){
        if (data[key].password == userPasscodeGuess){
            display(data[key])
        }
    }
})

})

function display (mess) {
    document.querySelector("#message").innerHTML = mess.message;
}