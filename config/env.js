const config = {
  nodeEnv: process.env.NODE_ENV || "webserver",
  port: process.env.PORT || 3000,
  hostname: process.env.HOSTNAME || "localhost",
  //jwtKey : process.env.JWTKEY || "my_secret_key"
};

module.exports = config;
//                     
                    