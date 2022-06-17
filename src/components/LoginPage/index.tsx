import { useState } from 'react';
import type { FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CommureLogo } from '../CommureLogo';
import { loginRequest } from './loginApi';
import type { LoginConfig } from './loginApi';

interface LoginPageProps {
  requestConfig: LoginConfig;
  forgotRoute?: string;
}

const theme = createTheme();

export function LoginPage({ requestConfig, forgotRoute }: LoginPageProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setLoading(true);
    await loginRequest({
      username: data.get('username') as string,
      password: data.get('password') as string,
      remember: !!data.get('remember'),
    }, requestConfig);
    setLoading(false);
    navigate(requestConfig.redirectPath, { replace: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <CommureLogo />
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              variant="standard"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Grid container sx={{ alignItems: 'center', mt: 2, mb: 2 }}>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox name="remember" id="remember" value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Link href={forgotRoute} variant="body1">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ textTransform: 'none' }}
              disabled={loading}
            >
              {loading ? <CircularProgress /> : 'Login'}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
