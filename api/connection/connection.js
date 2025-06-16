require("dotenv").config(); // Carga las variables de entorno
const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
  console.error("❌ Falta la env var DATABASE_URL");
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Si usas la External Connection String en vez de la interna, descomenta:
  // ssl: { rejectUnauthorized: false }
});

pool
  .connect()
  .then((client) => {
    console.log("✅ Conectado a PostgreSQL (Render)");
    client.release();
  })
  .catch((err) => {
    console.error("❌ Error al conectar con PostgreSQL:", err);
  });

module.exports = pool;
