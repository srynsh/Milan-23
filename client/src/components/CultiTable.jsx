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

export const CultiTable = () => {
  const [scores, setscores] = useState({
    '1': [
      3, 9, 30, 21, 9,
      3, 3,  3,  3, 3,
      3, 3
    ],
    '2': [
       4, 4, 28, 48, 4,
       4, 4,  0,  4, 4,
      16, 0
    ],
    '3': [
      5, 35, 5, 40, 10,
      5,  5, 5,  5, 20,
      5,  0
    ],
    '4': [
       10, 10, 10, 20, 10,
       70, 10, 10, 10, 40,
      100, 10
    ],
    '5': [
        0, 70, 10, 40, 10,
       10, 20,  0, 10, 10,
      100,  0
    ],
    '6': [
       0, 10, 20, 40, 100,
      10,  0,  0,  0,  10,
      10, 70
    ],
    '7': [
      20, 0, 0,  5, 0,
      50, 5, 0, 10, 5,
      35, 5
    ],
    '8': [
       5,  0, 5, 35, 10,
      20,  5, 5,  5,  5,
       5, 50
    ],
    '9': [
       4, 4, 4,  4, 4,
      40, 4, 8, 28, 4,
      16, 4
    ],
    '10': [
      2, 2, 14, 8,  2,
      2, 2,  2, 2, 20,
      2, 4
    ],
    '11': [
       6,  6, 0, 6,  6,
       0, 24, 6, 6, 60,
      42,  6
    ],
    '12': [
       3, 15, 3, 3, 3,
       3, 21, 3, 3, 3,
      39,  3
    ],
    '13': [
       2, 2, 4, 8, 20,
       2, 0, 2, 2,  4,
      14, 2
    ],
    '14': [
      100, 0, 10, 20, 70,
       10, 0, 10, 10,  0,
       40, 0
    ],
    '15': [
       5, 50, 5, 5,  5,
      10,  5, 5, 5, 35,
      20,  5
    ],
    '16': [
      3, 3, 21,  3, 3,
      6, 3, 12, 30, 3,
      3, 0
    ],
    '17': [
      70, 10, 10, 100, 20,
      10, 10, 10,  10, 10,
      40, 10
    ],
    '18': [
      40, 10, 20, 100, 10,
      70,  0,  0,  10, 10,
      10,  0
    ]
  
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
    "SOLO DANCE",
"DUO-TRIO DANCE",
"GROUP DANCE",
"PANDORAS BOX OF DRAMA",
"STILL FRAME PHOTOGRAPHY",
"THE LOW EFFORT COMPETITION",
"BMC CODENAMES",
"DUMB CHARADES",
"GENERAL QUIZ",
"NOT SO SORRY",
"BATTLE OF BANDS",
"SOLO SINGING",
"MINI POETRY JAM",
"JUNK ART SHOW",
"NAVARASA NATANA",
"RAP BATTLE",
"TREASURE HUNT",
"FASHION SHOW"
  ].map((el) => el.toUpperCase());
  const blockNames = [
    "ARYABHATTA",
    "BHASKARA",
    "MAITREYI",
    "GARGI",
    "CHARAKA",
    "SUSURUTA",
    "KAUTILYA",
    "VYASA",
    "BRAHMAGUPTA",
    "VARAHAMIHIRA",
    "RAMANUJA",
    "KAPILA",
  ];
  const tableHeaders = ["Block", "Points"].map((el) => el.toUpperCase());
  let itemRows = [];
  for (var event = 0; event < 18; event++) {
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
