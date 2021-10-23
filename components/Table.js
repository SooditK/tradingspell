import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { makeStyles, withStyles } from "@material-ui/styles";

function createData(name, worth) {
  return { name, worth };
}

const useStyles = makeStyles({
  root: {
    fontSize: "1.2rem",
  },
  table: {
    fontSize: "1.2rem",
  },
  boldLine: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

// const useStyles = makeStyles({
//   root: {
//     fontSize: "1.2rem",
//   },
//   table: {
//     fontSize: "1.2rem",
//   },
//   boldLine: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//   },
// });

const rows = [
  createData("Candlestick Basics", "₹499/-"),
  createData("Basics of Price Action", "₹1499/-"),
  createData("Expectancy Rate (Building an Edge over Market)", "₹2499/-"),
  createData("Market Cycle", "₹2499/-"),
  createData("Trending Market & Law of Trend", "₹2499/-"),
  createData("Price Action Tutorial", "₹2499/-"),
  createData("Candlestick Patterns & Entry/Exits", "₹4999/-"),
  createData("Gap Filling Strategy", "₹4999/-"),
  createData("Breakout Strategy & Chart Patterns", "₹4999/-"),
  createData("Bounce Trading Strategy", "₹4999/-"),
  createData("Volume Analysis", "₹4999/-"),
  createData("Risk Management", "₹4999/-"),
  createData("Indicators", "₹4999/-"),
  createData("Stock Selection for Intraday, Swing & Long Term", "₹5999/-"),
  createData("Trade Management", "₹5999/-"),
  createData("Long Term Trading + Earning Analysis", "₹10999/-"),
  createData("Trading Psychology & Mindset", "Priceless"),
  createData("How to Build Trading System", "Priceless"),
  createData("Advanced Technical Analysis", "Priceless"),
  createData("Trading Screeners", "Priceless"),
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#FBBF24",
    },
  },
}))(TableRow);

const BasicTable = () => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.boldLine}>
              DELIVERABLES IN MTAP(2.0)
            </TableCell>
            <TableCell className={classes.boldLine} align="right">
              WORTH
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((index) => (
            <StyledTableRow key={index.name}>
              <TableCell className={classes.table} component="th" scope="row">
                {index.name}
              </TableCell>
              <TableCell className={classes.table} align="right">
                {index.worth}
              </TableCell>
              <TableCell className={classes.table} align="right">
                {index.fat}
              </TableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <TableCell className={classes.boldLine}>Total</TableCell>
            <TableCell className={classes.boldLine} align="right">
              ₹68485/-
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
