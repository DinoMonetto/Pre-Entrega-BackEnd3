import express from 'express';
import mocksRouter from './routes/mocks.router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/mocks', mocksRouter);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Servidor en escucha
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
