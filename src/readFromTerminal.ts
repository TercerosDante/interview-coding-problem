import { createInterface } from 'readline/promises';

export const readFromTerminal = async (query: string): Promise<string> => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    const answer = await rl.question(query);
    return answer.trim();
  } finally {
    await rl.close();
  }
};
