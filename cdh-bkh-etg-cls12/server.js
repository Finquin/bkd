
const app = require("./app");
const { Server: HttpServer } = require("http");
const { Server: IoServer } = require("socket.io");
/* llamamos a la variable de entorno env.PORT */
const Contenedor = require("./src/services/contenedor.wechat");

const chatMessages = new Contenedor("./mensajes.json");

const httpServer = new HttpServer(app);
const io = new IoServer(httpServer);

io.on("connection", async socket => {
    const mensajesChat = await chatMessages.getAll();

    const mensajesUdpate = {
        msg: "ok",
        mensajesChat
    };

    console.log("\x1b[033\x1b[36m", "Se contectó un usuario\n");

    socket.emit("UDPATE_DATA", mensajesUdpate);

    socket.on("NEW_MESSAGE_TO_SERVER", async (chatInfo) => {
        mensajesChat.push(chatInfo);
        await chatMessages.save({
            id: chatInfo.id,
            email: chatInfo.emailChat,
            mensaje: chatInfo.mensajeChat,
            fecha: chatInfo.hourConnection
        });
    });
});

const PORT = process.env.PORT || 3000;

require("dotenv").config();
console.clear();

/* Le indicamos donde tiene que escuchar nuestro servidor */
httpServer.listen(PORT, () => {
    console.info("\x1b[033\x1b[32m", `server running in port ${PORT}\n`);
});

console.log("======================================");
console.log(`Selecciono el template ${process.env.TEMPLATE}`);
console.log("======================================\n");
