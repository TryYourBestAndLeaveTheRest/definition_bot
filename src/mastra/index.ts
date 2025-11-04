import { Mastra } from "@mastra/core/mastra";
import { definitionAgent } from "./agents/definition-agent";
import { a2aAgentRoute } from "./routes/agent-routes";

export const mastra = new Mastra({
  agents: { definitionAgent },
  server:{
    apiRoutes: [a2aAgentRoute],
    build:{
        swaggerUI:true,
        openAPIDocs:true
    }
  }
});