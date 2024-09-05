import "dotenv/config";
import "reflect-metadata";
import { DB_PORT, PORT } from "./config/envs";
import app from "./server";
import { AppDataSource } from "./config/data-source";

// Usar el puerto de entorno o el predeterminado (3001)

AppDataSource
  .initialize()
  .then(() => {
    console.log(`Database connected on port ${DB_PORT}`);  // Asegúrate de que esto esté bien

    // Iniciar el servidor una vez que la base de datos esté conectada
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.log("Error connecting to the database:", error);
  });