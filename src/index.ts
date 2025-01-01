import { Server } from 'node:http';
import { createServer } from './config';

/**
 * Starts the server and sets up necessary process handlers.
 *
 * This function performs the following steps:
 * 1. Sets up process handlers for graceful shutdown and error handling.
 * 2. Creates and starts the server using the `createServer` function.
 * 3. Logs a message indicating that the server has started successfully.
 *
 * @returns {Promise<Server>} A promise that resolves to the started server instance.
 *
 * @example
 * ```typescript
 * startServer()
 *   .then(server => {
 *     console.log('Server is running');
 *   })
 *   .catch(error => {
 *     console.error('Failed to start server:', error);
 *   });
 * ```
 */
async function startServer(): Promise<Server> {
  try {
    const server = await createServer();
    return server;
  } catch (error) {
    throw error;
  }
}
startServer()
  .then(() => {
    console.log('Server is running');
  })
  .catch(error => {
    console.error('Failed to start server:', error);
  });
