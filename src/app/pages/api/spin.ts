import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { bet } = req.body;

    try {
      // Altere para o endpoint do seu backend
      const backendResponse = await axios.post('http://localhost:8080/api/slot-machine/play', { bet });
      res.status(200).json(backendResponse.data);
    } catch (error) {
      console.error('Error communicating with backend:', error);
      res.status(500).json({ message: 'Error communicating with backend' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
