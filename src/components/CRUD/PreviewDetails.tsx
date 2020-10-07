import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  Table,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
} from "@material-ui/core";

interface userDetails {
  name: string;
  email: string;
  number: string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const PreviewDetails: React.FunctionComponent = (props) => {
  const rows = [
    { name: "Frozen yoghurt", cal: 159, fat: 6.0, crab: 24, prot: 4.0 },
    { name: "Ice cream sandwich", cal: 237, fat: 9.0, crab: 37, prot: 4.3 },
    { name: "Eclair", cal: 262, fat: 16.0, crab: 24, prot: 6.0 },
    { name: "Cupcake", cal: 305, fat: 3.7, crab: 67, prot: 4.3 },
    { name: "Gingerbread", cal: 356, fat: 16.0, crab: 49, prot: 3.9 },
  ];
  const classes = useStyles();
  return (
    <TableContainer component={Card}>
      <Table style={{ width: "60%", margin: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email Adress</StyledTableCell>
            <StyledTableCell align="right">Mobile Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cal}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PreviewDetails;
