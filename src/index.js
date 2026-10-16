const express = require('express');
const config = require('./config/config');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
app.use(express.json());

app.use('/api/v1', apiRoutes);

app.get('/', (req, res) => {
  res.send('Servidor de Plinco S.A.S. Operativo. Visita /api/v1/health para el diagnóstico de salud.');
});

app.listen(config.port, () => {
  console.log(`[Plinco Cloud Service] Servidor iniciado en puerto ${config.port}`);
});