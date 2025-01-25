/*import React, { useState } from 'react';
import SlotMachine from '../../components/SlotMachine';
import BetForm from '../../components/BetForm';

// Props types that are sent to the component BetForm
interface BetFormProps {
  onBet: (betAmount: number) => void;
}

interface SlotMachineData {
  reels: string[];
  newBalance: number;
  message: string;
  error?: string; 
}

export default function Home() {
  const [reels, setReels] = useState<string[]>(['🍒', '🍋', '🍉']); // Type of the bet slot items
  const [balance, setBalance] = useState<number>(100); // Transforming the type in numbers
  const [message, setMessage] = useState<string>(''); // Transforming the state in a string
  const API_URL = 'http://localhost:8080/api';


  //Function for the bet
  const handleBet = async (betAmount: number): Promise<void> => {
    if (betAmount > balance) {
      setMessage('Insufficient balance!');
      return;
    }

    try {
      //API Request
      const response = await fetch('API_URL/slot-machine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ betAmount }),
      });

      const data: SlotMachineData = await response.json(); // Transform the type coming from the api

      if (response.ok) {
        setReels(data.reels); // Update the rolls with the results
        setBalance(data.newBalance); // Update the balance
        setMessage(data.message); // Message victory/fail
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error connecting to backend:', error);
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Slot Machine Game</h1>
      <p className="text-lg">Balance: ${balance.toFixed(2)}</p>
      <SlotMachine reels={reels} />
      <BetForm onBet={handleBet} />
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}
*/