
// eslint-disable-next-line no-undef
const client = io().connect();

const renderChat = msg => {
    const selectChat = document.querySelector("#chat");
    const htmlCreate = msg.map(i => {
        return `
        <li>
        <span>${i.email}</span> 
        <span>${i.fecha} :</span> 
        <span>${i.mensaje}</span> 
        </li>     
        `;
    });
    selectChat.innerHTML = htmlCreate.join("");
};

// eslint-disable-next-line no-unused-vars
const addNewMessages = evt => {
    const emailChat = document.querySelector("#email").value;
    const mensajeChat = document.querySelector("#mensaje").value;

    const hourConnection = new Date().toLocaleTimeString();
    if (!emailChat || !mensajeChat) {
        alert("faltan datos");
    } else {
        const id = new Date().getTime();
        const chatInfo = {
            id,
            emailChat,
            hourConnection,
            mensajeChat
        };

        client.emit("NEW_MESSAGE_TO_SERVER", chatInfo, id => {
            console.log(id);
        });

        document.querySelector("#mensaje").value = "";
        return false;
    }
};

client.on("UDPATE_DATA", data => {
    renderChat(data.mensajesChat);
});
