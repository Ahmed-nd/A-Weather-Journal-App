import { Server } from 'node:http';
import { serverConfig, createApp } from './';
import { withErrorHandler } from '../utils/asyncHandler';
/**
 * Creates and starts the HTTP server with WebSocket support.
 *
 * This function performs the following steps:
 * 1. Creates the Express application.
 * 3. Starts the HTTP server on the configured port.
 *
 * @returns {Promise<Server>} A promise that resolves to the started server instance.
 *
 * @example
 * ```typescript
 * createServer()
 *   .then(server => {
 *     console.log('Server is running');
 *   })
 *   .catch(error => {
 *     console.error('Failed to start server:', error);
 *   });
 * ```
 */
export async function createServer(): Promise<Server> {
  return withErrorHandler(async () => {
    const app = createApp();
    const server = new Server(app);
    return new Promise<Server>((resolve, reject) => {
      server
        .listen(serverConfig.port, () => {
          resolve(server);
        })
        .on('error', (error: Error) => {
          reject(error);
        });
    });
  }, 'Failed to create and start the server');
}
