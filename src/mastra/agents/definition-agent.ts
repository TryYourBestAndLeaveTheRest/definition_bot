import { Agent } from "@mastra/core/agent";
// import { definitionTool } from "../tools/definition-tool";

export const definitionAgent = new Agent({
  name: "Definition Agent",
  instructions: `
    You are a helpful assistant that provides short, clear definitions of terms.
    When a user asks for a definition, respond with a concise and accurate explanation.
    Avoid unnecessary details or examples unless requested.
  `,
  model: "groq/llama-3.1-8b-instant",
//   tools: { definitionTool },
});
