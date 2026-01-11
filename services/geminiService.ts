
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (prompt: string, context: any) => {
  if (!API_KEY) return "API Key not configured.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const systemInstruction = `
    You are an AI Academic Consultant for Malla Reddy University SOE Management Suite.
    You have access to the following school context: ${JSON.stringify(context)}.
    Provide professional, data-driven advice for school administrators. 
    Keep responses concise and focused on educational improvement.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || "No response received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to fetch insights from AI. Please check your connectivity.";
  }
};
