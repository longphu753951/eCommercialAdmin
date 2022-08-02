import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Stack,
  Button,
  Box,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="background-login"
    >
      <Card
        elevation={12}
        sx={{
          width: '25%',
          minWidth: 300,
          borderRadius: '7px',
        }}
      >
        <CardContent>
          <Box my={3}>
            <Typography
              sx={{ fontWeight: '600', textAlign: 'center', color: '#474747' }}
              variant="h4"
              color={''}
              component="div"
            >
              Log in
            </Typography>
            <Typography
              sx={{ fontWeight: '400', textAlign: 'center', color: '#292929' }}
              variant="subtitle1"
              color={''}
            >
              Sign in on the admin page
            </Typography>
          </Box>
          <Stack spacing={3}>
            <TextField
              size="small"
              id="demo-helper-text-aligned"
              label="Name"
            />
            <TextField
              size="small"
              type={'password'}
              id="demo-helper-text-aligned"
              label="Password"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Remember password"
            />
            <Button variant="contained" sx={{ paddingY: 1.3, borderRadius: 2 }}>
              Log In
            </Button>
            <Link style={{ textAlign: 'center', fontSize: 16 }} to={''}>
              Forgot password
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
