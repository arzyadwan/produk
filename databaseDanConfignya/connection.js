const mysql = require("mysql2");
//konfig koneksi ke db
const dbConfig = {
    host: "35.219.10.159",
    user: "andi",
    password: "Ari421@&!",
    database: "db_produk",
  };
  
  const db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
      return;
    }
    console.log("Connected to MySQL database!");
  });
  

  module.exports = db;