import express, { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

/**
 * Creates and configures an Express application.
 *
 * This function sets up the Express application with the following:
 * - Serves static files from the `public` directory.
 *
 * @returns {Application} The configured Express application instance.
 */
export function createApp(): Application {
  const app = express();

  // Middleware
  //Here we are configuring express to use body-parser as middle-ware.
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Cors for cross origin allowance
  app.use(cors());
  // Serve static files
  app.use(express.static(path.join(__dirname, '../../public')));

  // Routes

  app.post('/addData', (req, res) => {
    const newEntry = {
      date: req.body.date,
      temp: req.body.temp,
      content: req.body.content,
    };
    res.send(newEntry);
  });
  app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  return app;
}
