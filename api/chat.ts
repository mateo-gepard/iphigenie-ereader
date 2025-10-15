import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { messages, context, text, actNumber, sceneNumber } = req.body;

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: 'Messages array is required' });
      return;
    }

    console.log('🤖 OpenAI API Request:', {
      context,
      textLength: text?.length || 0,
      actNumber,
      sceneNumber,
      messagesCount: messages.length
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_tokens: 2000,
      temperature: 0.7,
    });

    const result = {
      explanation: response.choices[0]?.message?.content || '',
      context,
      actNumber,
      sceneNumber,
      fromCache: false,
      cacheSource: 'none'
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('❌ OpenAI API Error:', error);
    
    if (error instanceof Error) {
      res.status(500).json({ 
        error: 'Failed to get explanation', 
        details: error.message 
      });
    } else {
      res.status(500).json({ 
        error: 'Unknown error occurred' 
      });
    }
  }
}
