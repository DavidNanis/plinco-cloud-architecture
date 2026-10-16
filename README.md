# Plinco S.A.S. - Sistema de Software Orientado a la Nube

## Descripción del Proyecto
Prototipo funcional de arquitectura de software para Plinco S.A.S., diseñado bajo patrones de computación en la nube y principios UML.

## Patrones Implementados
- **API Gateway Pattern:** Centralización de rutas.
- **Circuit Breaker:** Tolerancia a fallos con Opossum.
- **Health Endpoint Monitoring:** Diagnóstico continuo del servicio.

## Instrucciones de Ejecución Local
1. Instalar dependencias: `npm install`
2. Iniciar servidor: `npm start`
3. Probar endpoint de salud: `http://localhost:3000/api/v1/health`