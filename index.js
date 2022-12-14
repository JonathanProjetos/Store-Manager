const app = require('./app');
require('dotenv').config();
require('express-async-errors');
const ProductRouter = require('./router/ProductsRouter');
const SalesProductsRoute = require('./router/SalesProductsRouter');

app.use('/products', ProductRouter);
app.use('/sales', SalesProductsRoute);

app.use((err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  console.log(code, message);
  return res.status(code).json({ message });
});

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
