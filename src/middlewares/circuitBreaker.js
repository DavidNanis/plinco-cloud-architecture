const CircuitBreaker = require('opossum');

async function externalServiceCall() {
  if (Math.random() < 0.15) {
    throw new Error("Error simulado en el servicio externo de Plinco S.A.S.");
  }
  return { status: "OK", message: "Conexión a servicio de datos exitosa" };
}

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 10000
};

const breaker = new CircuitBreaker(externalServiceCall, options);

breaker.fallback(() => ({
  status: "DEGRADED",
  message: "El servicio externo de Plinco S.A.S. no responde. Se activa respuesta de contingencia (Circuit Breaker Abierto)."
}));

module.exports = breaker;