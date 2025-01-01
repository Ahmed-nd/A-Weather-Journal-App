/**
 * Represents the server configuration.
 */
export interface ServerConfig {
  port: number;
  env: string;
  cors: {
    origin: string;
    methods: string[];
  };
}
