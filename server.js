const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware global para interpretar JSON
app.use(express.json());

// Rotas da API
app.use('/api', userRoutes);

// Endpoint de saúde da aplicação
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Connect funcionando corretamente',
    status: 'online'
  });
});

// Tratamento de rota inexistente
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint não encontrado'
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`API Connect executando em http://localhost:${PORT}`);
});
