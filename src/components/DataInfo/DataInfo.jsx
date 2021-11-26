import * as React from 'react';
import "./DataInfo.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgressPrimary = styled(LinearProgress)(({ theme }) => ({
    height: 25,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 8  ,
      backgroundColor: theme.palette.mode === 'light' ? '#94f48a' : '#308fe8',
    },
  }));
  const BorderLinearProgressSecondary = styled(LinearProgress)(({ theme }) => ({
    height: 25,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 8  ,
      backgroundColor: theme.palette.mode === 'light' ? '#f2ab62' : '#308fe8',
    },
  }));
  const BorderLinearProgressTernary = styled(LinearProgress)(({ theme }) => ({
    height: 25,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 8  ,
      backgroundColor: theme.palette.mode === 'light' ? '#9fc5e8' : '#308fe8',
    },
  }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'white',
      border:'none',
      width: 200,
      color: "gray",
      fontWeight: "bold",
      fontFamily: 'Source Sans Pro',
      fontSize: 18,
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontFamily: 'Source Sans Pro',
      backgroundColor: "white",
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, createdAt, reportedBy, stats, bar) {
    return {name, createdAt, reportedBy, stats, bar};
  }
  
  const rows = [
    createData('Proyecto1', "Jue, 18 Nov", "Osvaldo Rodriguez", "En progreso ", <BorderLinearProgressPrimary variant= "determinate" value={75} />),
    createData('Proyecto2', "Jue, 18 Nov", "Osvaldo Rodriguez", "En progreso ", <BorderLinearProgressSecondary variant= "determinate" value={48} />),
    createData('Proyecto3', "Jue, 18 Nov", "Osvaldo Rodriguez", "En progreso ", <BorderLinearProgressTernary variant= "determinate" value={90} />),
    
    
  ];
  
  export default function DataInfo() {
    return (
    <div className="elementWrapper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ACTUALIZACIONES RECIENTES</StyledTableCell>
              <StyledTableCell align="left">CREADO</StyledTableCell>
              <StyledTableCell align="left">REPORTADO POR&nbsp;</StyledTableCell>
              <StyledTableCell align="left">STATS&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Progreso&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.createdAt}</StyledTableCell>
                <StyledTableCell align="left">{row.reportedBy}</StyledTableCell>
                <StyledTableCell align="left">{row.stats}</StyledTableCell>
                <StyledTableCell align="left">{row.bar}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
  }