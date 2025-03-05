import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar>
        <Image 
            src="/images/casino-logo.png"
            alt="Casino Logo"
            width={40} 
            height={40}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => handleNavigation('/')}
        >
        </Typography>

        {/* Botões de navegação */}
        <Box>
          <Button style={{ color: '#ffffff'}} onClick={() => handleNavigation('/casino')}>
            Casino
          </Button>
          <Button style={{ color: '#ffffff'}} onClick={() => handleNavigation('/login')}>
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
