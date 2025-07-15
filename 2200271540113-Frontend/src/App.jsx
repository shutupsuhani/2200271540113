import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
} from "@mui/material";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      setError("Please enter a URL");
      return;
    }

    try {
      // Validate URL format
      new URL(longUrl); // will throw if invalid

      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
      const data = await res.json();

      if (data.ok) {
        setShortUrl(data.result.full_short_link);
        setError("");
      } else {
        setError("Failed to shorten. Try a different URL.");
      }
    } catch (error) {
      setError("Invalid URL format.",error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Enter Long URL"
          variant="outlined"
          fullWidth
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button variant="contained" onClick={handleShorten}>
          Shorten
        </Button>
      </Box>

      {shortUrl && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">Shortened URL:</Typography>
          <Typography
            sx={{
              backgroundColor: "#f4f4f4",
              padding: 1,
              borderRadius: 1,
              mt: 1,
              wordWrap: "break-word",
            }}
          >
            {shortUrl}
          </Typography>
          <Button variant="outlined" sx={{ mt: 1 }} onClick={handleCopy}>
            Copy
          </Button>
        </Box>
      )}

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        message="Copied to clipboard!"
      />
    </Container>
  );
}

export default App;
