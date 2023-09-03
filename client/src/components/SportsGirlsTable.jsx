import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";


export const SportsGirlsTable = () => {
  const [scores, setscores] = useState({
    '1': [ 70, 40, 20, 100 ],
    '2': [ 100, 0, 40, 70 ],
    '3': [ 70, 40, 20, 100 ],
    '4': [ 70, 40, 20, 100 ],
    '5': [ 100, 0, 40, 70 ],
    '6': [ 70, 40, 20, 100 ],
    '7': [ 40, 100, 0, 70 ],
    '8': [ 70, 20, 40, 100 ],
    '9': [ 100, 40, 20, 70 ],
    '10': [ 40, 70, 20, 100 ],
    '11': [ 10, 50, 20, 35 ],
    '12': [ 0, 40, 70, 100 ],
    '13': [ 80, 200, 0, 140 ],
    '14': [ 84, 210, 147, 42 ],
    '15': [ 300, 60, 210, 120 ]
  });
  const Theme = createTheme({
    typography: {
      fontSize: 14,
    },
    palette: {
      mode: "light",
      background: { 
        paper: "#f6b276", 
      },
    },
  });
  const gameNames = [
    "CRICKET",
    "FOOTBALL",
    "DODGE BALL",
    "VOLLEYBALL",
    "BASKETBALL",
    "BADMINTON",
    "TENNIS",
    "TABLE TENNIS",
    "CARROM",
    "CHESS",
    "SQUASH",
    "WEIGHTLIFTING",
    "ESPORTS",
    "AQUATICS",
    "ATHLETICS",
  ].map((el) => el.toUpperCase());
  const blockNames = ["ARYABHATTA", "BHASKARA", "MAITREYI", "GARGI"];
  const tableHeaders = ["Block", "Points"].map((el) => el.toUpperCase());
  let itemRows = [];
  for (var event = 0; event < 15; event++) {
    let game = gameNames[event];
    const rows = scores[event + 1];

    const item = (
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#390035",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "#390035",
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            {game}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ xs: {minWidth: 650 } }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#390035",
                      background: "#ffa555",
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                      borderColor: "#ffb87a"
                    }}
                  >
                    {tableHeaders[0]}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#390035",
                      background: "#ffa555",
                      textAlign: { xs: "center", sm: "right" },
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                      borderColor: "#ffb87a"
                    }}
                  >
                    {tableHeaders[1]}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                      background: "#ffa555",
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {blockNames[i]}
                    </TableCell>
                    <TableCell align="right">{row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    );
    itemRows.push(item);
  }
  

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "60%" },
        margin: "5rem auto",
        padding: '0px',
      }}
    >

      <ThemeProvider theme={Theme}>
        <CssBaseline />
        {itemRows}
      </ThemeProvider>
    </Box>
  );
}
