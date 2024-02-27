const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implemente os ouvintes de eventos do Node aqui
    },
    viewportWidth: 1200,
    viewportHeight: 900,
    baseUrl: "http://lojaebac.ebaconline.art.br/"
  }
});