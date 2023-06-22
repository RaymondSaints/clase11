import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js"
import { Server } from "socket.io";

const app =express();

const httpserver= app.listen(8080,()=> console.log("server on"))



app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/',viewRouter)

/* 
socketServer.on//escuchar y recibir
socketServer.emit//hablar y enviar */

/* socketServer.on('connection', socket=>{
    console.log("Nuevo cliente")

    socket.on('message', data=>{
        console.log(data)
    })

    socket.emit("evento_para_un_socket","mensaje para que lo reciba el socket")

}) */

const io = new Server(httpserver)

let message=[];
io.on('connection',socket=>{
    console.log("tenemos un cliente")

    socket.on('message', data =>{
        message.push(data)
        io.emit('messageLogs', message)
        console.log(data)
        socket.broadcast.emit('messageLogs', messages)
    })
})

/* const server =app.listen(8080,()=>console.log("Server arriba")) */