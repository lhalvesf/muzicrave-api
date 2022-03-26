module.exports = {
  //...
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024 // Defaults to 200mb
      }
    },
    gzip: {
      enabled: true,
    },
    cors: {
      origin: '*',
      headers: '*'
    },
  },
  //...
};