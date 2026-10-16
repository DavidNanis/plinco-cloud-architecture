const express = require('express');
const router = express.Router();
const breaker = require('../middlewares/circuitBreaker');

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    service: 'Plinco S.A.S. API Core',
    uptime: process.uptime()
  });
});

router.get('/data', async (req, res) => {
  try {
    const result = await breaker.fire();
    res.json({
      system: 'Plinco S.A.S.',
      circuitBreakerState: breaker.opened ? 'OPEN' : 'CLOSED',
      data: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;