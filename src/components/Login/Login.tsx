import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDUgMjQiPgogICAgPGc+CiAgICAgICAgPHBhdGggZmlsbD0iIzI2MkUzMCIgZD0iTTExLjg5OSAyNEg4Ljc0TDcuNDE4IDEwLjc3NSA1LjkxMiAyNEgyLjc5MUwwIDBoMy42NzJsMS4xNzUgMTUuMTM1TDYuMjggMGgyLjgyOGwxLjIxMiAxNS4xMzVMMTEuNzE1IDBoMy40MTV6TTE5LjgyNiAyNGgzLjY1MlYwaC0zLjY1MnpNMzMuNDI4IDIwLjQ2OGg0LjQzNVYyNGgtOC42NDZ2LTEuMjYxbDQuNjU5LTE5LjIwN2gtNC4zOThWMGg4LjYwOXYxLjI2MnpNNDMuMzA0IDI0VjBoNy44MjZ2My40NmgtNC4wOTR2Ni41NThoMi43MTd2My4yOGgtMi43MTd2Ny4xMzVoNC4wOTRWMjR6Ij48L3BhdGg+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5M0Q0NCIgZD0iTTU3LjM5MSAyNFYwaDIuNTR2MjEuNTE0aDQuNzY1VjI0ek03MC45NTcgMjRoMi42MDhWMGgtMi42MDh6TTg4LjM5IDI0TDg0LjQgMTEuODU2IDgzLjI3IDh2MTZoLTIuNFYwaDIuMjk0bDMuNjM3IDEyLjMyNCAxLjA2IDMuODkyVjBoMi40djI0ek05Ny4wNDMgMjRWMGg3LjgyN3YyLjQxNUg5OS43djhoMy43Mjl2Mi4zNDJIOTkuN3Y4LjgyOWg1LjE2OVYyNHoiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
          className="sc-itybZL kibNzV"
        />
        <br />
        <Typography component="h1" variant="h5">
          Welcome Wizeliner!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in with your Wizeline email account
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;