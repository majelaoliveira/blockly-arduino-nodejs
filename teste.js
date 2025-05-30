const { Board, Led } = require("johnny-five");

const board = new Board({
  port: "/dev/ttyACM0" // Substitua se necessário
});

board.on("ready", () => {
  const led = new Led(13); // Porta digital 13 (com LED onboard no Arduino Uno/Nano)
  led.on(); // Acende o LED
  console.log("LED ligado manualmente");
});
