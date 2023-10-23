const messageInput = document.getElementById("newMessageInput");
const chatContainer = document.getElementById("chatScreen");
const allMessages = document.getElementById("messages");
const sendMessageButton = document.getElementById("sendMessage");
const incomingMessages = document.getElementsByClassName("incomingMessage");
const outgoingMessages = document.getElementsByClassName("outgoingMessage");
const outgoingMessageTemplate = outgoingMessages[0].cloneNode(true);

sendMessageButton.addEventListener("click", function()
{
    const timestamp = currentTime();
    var newOutgoingMessage = outgoingMessageTemplate.cloneNode(true);
    console.log(timestamp);
    console.log(outgoingMessageTemplate);
    console.log(allMessages);
    if(timestamp[3] === 1)
        newOutgoingMessage.children[0].innerHTML = timestamp[0] + ":" + timestamp[1] + "<sub>AM</sub>";
    else
        newOutgoingMessage.children[0].innerHTML = timestamp[0] + ":" + timestamp[1] + "<sub>PM</sub>";
    newOutgoingMessage.children[1].innerHTML = messageInput.value;
    allMessages.insertAdjacentElement("beforeend", newOutgoingMessage);
    messageInput.value = "";
    allMessages.scrollTop = allMessages.scrollHeight;
});

messageInput.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        const timestamp = currentTime();
        var newOutgoingMessage = outgoingMessageTemplate.cloneNode(true);
        console.log(timestamp);
        console.log(outgoingMessageTemplate);
        console.log(allMessages);
        if(timestamp[3] === 1)
            newOutgoingMessage.children[0].innerHTML = timestamp[0] + ":" + timestamp[1] + "<sub>AM</sub>";
        else
            newOutgoingMessage.children[0].innerHTML = timestamp[0] + ":" + timestamp[1] + "<sub>PM</sub>";
        newOutgoingMessage.children[1].innerHTML = messageInput.value;
        allMessages.insertAdjacentElement("beforeend", newOutgoingMessage);
        messageInput.value = "";
        allMessages.scrollTop = allMessages.scrollHeight;
    }
})

window.addEventListener("load", function()
{
    // scroll chat to most recent
    allMessages.scrollTop = allMessages.scrollHeight;
})