import {Groq} from "groq-sdk"

const GROQ = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey: GROQ,
  dangerouslyAllowBrowser: true,
})

export const requestToGroqAI =  async (content) => {
    const reply = await groq.chat.completions.create({
        messages: [
            {
            role:"user",
            content,
            },
        ],
        model: "llama3-8b-8192",
    });
    return reply.choices[0].message.content;
};