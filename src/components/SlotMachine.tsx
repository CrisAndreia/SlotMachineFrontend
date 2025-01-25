import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//Defining the interface to props
interface SlotMachineProps{
    reels: string[]; //await a string array, representing the rolls icons
}

const SlotMachine: React.FC<SlotMachineProps> = ({ reels }) => {
  return (
    <Box className="slot-machine">
      <Box className="reels" display="flex" flexDirection="column" gap={4} justifyContent="center" mt={4}>
        {reels.map((icon, index) => (
          <Box key={index} className="reel" display="flex" flexDirection="column" gap={6} justifyContent="center">
            <Typography
              variant="h1" // Usando h1 para um tamanho grande
              sx={{
                fontSize: '4rem', // Aumentando o tamanho dos emojis
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.2)', // Efeito de destaque ao passar o mouse
                },
              }}
            >
              {icon}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SlotMachine;