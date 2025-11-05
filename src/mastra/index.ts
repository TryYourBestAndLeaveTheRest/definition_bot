import { Mastra } from "@mastra/core/mastra";
import { definitionAgent } from "./agents/definition-agent";
import { a2aAgentRoute } from "./routes/agent-routes";
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';

export const mastra = new Mastra({
  agents: { definitionAgent },
    storage: new LibSQLStore({ url: ":memory:" }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'debug',
  }),
  server:{
    apiRoutes: [a2aAgentRoute],
    build:{
        swaggerUI:true,
        openAPIDocs:true
    }
  }
});