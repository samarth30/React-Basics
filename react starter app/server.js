const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'samarth', lastName: 'gugnani'},
    {id: 2, firstName: 'sanchit ', lastName: 'dawar'},
    {id: 3, firstName: 'arpit', lastName: 'singla'},
    {id: 4, firstName: 'raghav', lastName: 'sharma'},
    {id: 5, firstName: 'parveen', lastName: 'ludo'},
    {id: 5, firstName: 'api', lastName: 'kakkar'}

  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);