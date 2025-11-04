import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const definitions: Record<string, string> = {
  "AI": "Artificial Intelligence: the simulation of human intelligence by machines.",
  "API": "Application Programming Interface: a set of rules for interacting with software.",
  "HTTP": "HyperText Transfer Protocol: the foundation of data communication for the web.",
  // Add more terms as needed
};

export const definitionTool = createTool({
  id: 'get-definition',
  description: 'Get a short, clear definition of a term',
  inputSchema: z.object({
    term: z.string().describe('The term to define'),
  }),
  outputSchema: z.object({
    definition: z.string(),
  }),
  execute: async ({ context }) => {
    const term = context.term.trim();
    const definition = definitions[term] || `No definition found for '${term}'.`;
    return { definition };
  },
});
