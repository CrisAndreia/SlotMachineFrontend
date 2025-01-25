import React, { useState } from "react";
import Button from '@mui/material/Button';

//Define the props interface
interface BetFormProps {
    onBet: (betAmount: number) => void; //This function is called when the user places a bet
}

const BetForm: React.FC<BetFormProps> = ({ onBet }) => {
    const [betAmount, setBetAmount] = useState<number>(0); //State to store the bet amount

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setBetAmount(value); // Update the state
      };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (betAmount > 0){
            onBet(betAmount); //Calls the function onBet and passes the ber amount as props
        }
        else {
            alert('Please enter a valid bet amount'); // Validation
        }
    };

    return (
        <div className="bet-form flex flex-col items-center gap-4">
        <label htmlFor="betAmount" className="text-lg">Enter your bet:</label>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
            id="betAmount"
            type="number"
            value={betAmount}
            onChange={handleChange}
            min="1"
            step="1"
            className="border-2 border-gray-400 rounded-lg p-2"
            />
            <Button  type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-4">
            Place Bet
            </Button >
        </form>
        </div>
    );
};
export default BetForm;