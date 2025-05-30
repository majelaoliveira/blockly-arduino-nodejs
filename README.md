# Projeto Blockly + Arduino com Node.js e Firmata

Este projeto é uma aplicação web que integra o ambiente de programação visual **Blockly** com o controle de um Arduino Uno via **Node.js**, utilizando a biblioteca **Johnny-Five** e o protocolo **Firmata**.

---

## O que é este projeto?

Uma plataforma simples para programar Arduino através de blocos visuais no navegador, eliminando a necessidade de escrever código manualmente. O projeto oferece:

- Interface front-end baseada no Blockly, com blocos nativos (lógica, loops, matemática, variáveis, textos, procedimentos) e blocos personalizados para controlar o Arduino.
- Comunicação em tempo real entre navegador e servidor via **Socket.io**.
- Servidor Node.js que recebe comandos do Blockly e executa ações no Arduino usando Johnny-Five e Firmata.
- Exemplo prático de ligar e desligar o LED integrado do Arduino usando blocos.

---

## Conteúdo do projeto

- **index.html**: página web que carrega o Blockly com toolbox completo e interface para enviar comandos ao Arduino.
- **server.js**: servidor Node.js com Express para servir a página e Socket.io para comunicação em tempo real com o cliente; gerencia o Arduino via Johnny-Five.
- **package.json**: arquivo de configuração do Node.js que lista as dependências necessárias.
- Pasta **node_modules** (após `npm install`): bibliotecas do Node.js utilizadas.
- Recursos do Blockly integrados via CDN.

---

## Para que serve?

Este projeto serve como base para quem deseja:

- Aprender a usar Blockly para criar programas visuais.
- Controlar dispositivos físicos (como Arduino) a partir de uma interface web.
- Desenvolver aplicações IoT educacionais, robótica e prototipagem rápida com programação visual.
- Experimentar integração entre front-end visual e hardware real usando Node.js.

---

## Como usar?

1. Conecte seu Arduino Uno e instale o firmware Firmata (`StandardFirmata`) via Arduino IDE.
2. Clone este repositório.
3. Rode `npm install` para instalar as dependências.
4. Execute `node server.js` para iniciar o servidor.
5. Abra o navegador em `http://localhost:3000`.
6. Use os blocos para controlar o LED do Arduino em tempo real.

---

## Tecnologias utilizadas

- [Blockly](https://developers.google.com/blockly)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Johnny-Five](http://johnny-five.io/)
- [Firmata](https://github.com/firmata/protocol)

---

## Licença

Projeto de código aberto para fins educacionais e de prototipagem.

---

Se quiser, personalize este README para incluir mais detalhes do seu projeto!

