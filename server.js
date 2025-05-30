const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Firmata = require('firmata');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const board = new Firmata('/dev/ttyACM0'); // ajuste para a porta do seu Arduino

board.on('ready', () => {
  console.log('Arduino conectado via Firmata!');

  io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('ligar_led', () => {
      board.digitalWrite(13, board.HIGH);
      console.log('LED ligado');
    });

    socket.on('desligar_led', () => {
      board.digitalWrite(13, board.LOW);
      console.log('LED desligado');
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

