const express = require('express');
const app = express();
const PORT = 3000;
const APP_NAME = 'App 2';

app.get('/', (req, res) => {
  // نطبع رسالة في الـ logs للتأكد من أن الطلب وصل لهذا التطبيق
  console.log(`Request received by ${APP_NAME}`);
  res.send(`Hello from ${APP_NAME}!`);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
});