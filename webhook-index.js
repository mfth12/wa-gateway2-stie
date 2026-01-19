import express from 'express';

const app = express();
const PORT = 8181;

/**
 * Middleware agar body JSON terbaca
 */
app.use(express.json());

/**
 * Log semua request masuk (biar kelihatan jelas)
 */
app.use((req, res, next) => {
  console.log('------------------------------------');
  console.log(`[${new Date().toISOString()}]`);
  console.log(`${req.method} ${req.originalUrl}`);
  console.log('Headers:', req.headers);
  next();
});

/**
 * Webhook SESSION
 * wa-gateway akan POST ke: /session
 */
app.post('/session', (req, res) => {
  console.log('SESSION PAYLOAD:');
  console.dir(req.body, { depth: null });

  res.status(200).json({ ok: true });
});

/**
 * Webhook MESSAGE
 * wa-gateway akan POST ke: /message
 */
app.post('/message', (req, res) => {
  console.log('MESSAGE PAYLOAD:');
  console.dir(req.body, { depth: null });

  res.status(200).json({ ok: true });
});

/**
 * Catch-all (biar tahu kalau path salah)
 */
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`Webhook listener running on http://localhost:${PORT}`);
});
