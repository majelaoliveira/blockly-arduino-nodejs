const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const five = require('johnny-five');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const board = new five.Board();

board.on('ready', () => {
  console.log('Arduino pronto!');

  const led = new five.Led(13);
  const sensor = new five.Sensor({
    pin: "A0",
    freq: 500
  });

  io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('ligar_led', () => {
      led.on();
      socket.emit('status_led', { estado: 'ligado' });
      console.log('LED ligado');
    });

    socket.on('desligar_led', () => {
      led.off();
      socket.emit('status_led', { estado: 'desligado' });
      console.log('LED desligado');
    });
  });

  sensor.on('data', () => {
    io.emit('sensor_data', sensor.value);
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

