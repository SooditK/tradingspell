import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";

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

const rows = [
  createData("Grouping of Candles", "₹399/-"),
  createData("S/R & Supply Demand", "₹499/-"),
  createData("Trendlines & Curves", "₹499/-"),
  createData("Timeframe", "₹999/-"),
  createData("Counter Trendlines Concept", "₹999/-"),
  createData("Price Action", "Priceless"),
  createData("What moves a Price(Psychology)", "Priceless"),
  createData("Technical Analysis", "Priceless"),
  createData("Pro Tradingview Tutorial", "Priceless"),
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "rgb(243, 244, 246)",
    },
  },
}))(TableRow);

export default function BasicTable() {
  const classes = useStyles();
  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.boldLine}>DELIVERABLES</TableCell>
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
                {/* <Divider /> */}
              </TableCell>
              <TableCell className={classes.table} align="right">
                {index.fat}
              </TableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <TableCell className={classes.boldLine}>Total</TableCell>
            <TableCell className={classes.boldLine} align="right">
              ₹3395/-
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
