import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { BackButton } from './BackButton';

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box width={80}>
          <BackButton />
        </Box>
        <Typography variant="h6" textAlign="center">
          Pokedex
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
