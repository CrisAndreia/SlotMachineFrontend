'use client'; 

import React, { useState } from 'react';
import SlotMachine from '../components/SlotMachine';
import BetForm from '../components/BetForm';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from '../styles/theme';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';

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
  const router = useRouter;
  const [reels, setReels] = useState<string[]>(['🍒', '🍋', '🍉']); // Type of the bet slot items
  const [balance, setBalance] = useState<number>(100); // Transforming the type in numbers
  const [message, setMessage] = useState<string>(''); // Transforming the state in a string

  //Function for the bet
  const handleBet = async (betAmount: number): Promise<void> => {
    if (betAmount > balance) {
      setMessage('Insufficient balance!');
      console.log('Bet amount:', betAmount);
      console.log('Response data:', balance);
      return;
    }

    try {
      //API Request
      const response = await fetch('http://localhost:8080/api/slot-machine/play', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "userId":"123",
          "betAmount":1}),
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
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header /> 
        <Container maxWidth="md" sx={{ py: 4 }}>
          
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            Slot Machine Game
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" gap={4} mt={4}>
            <SlotMachine reels={reels} />
            <BetForm onBet={handleBet} />
            {message && (
              <Alert severity={message.includes('Insufficient') ? 'error' : 'success'}>
                {message}
              </Alert>
            )}
          </Box>
        </Container>
      </ThemeProvider>
  );
}
/*<Typography variant="h5" align="center" gutterBottom>
        Balance: ${balance.toFixed(2)}
      </Typography>
      <Container maxWidth="md" sx={{ py: 4 }}>
          </Container>
      */