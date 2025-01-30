const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
