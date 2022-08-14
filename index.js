const app = require('./app');
require('dotenv').config();
require('express-async-errors');
const ProductRouter = require('./router/ProductsRouter');
const SalesProductsRoute = require('./router/SalesProductsRouter');

app.use('/products', ProductRouter);
app.use('/sales', SalesProductsRoute);

app.use((err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  // if (!code) return res.status(500).json({ message: 'deu ruim!' });
  // if (res.status(NaN)) return res.status(500).json({ message: 'Voce ' });
  return res.status(code).json({ message });
});

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
