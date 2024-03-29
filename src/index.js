// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const doctorRoutes = require('./routes/doctor.routes');


// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

doctorRoutes.forEach((route)=>{
    fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();
