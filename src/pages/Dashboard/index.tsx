import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chart } from 'react-google-charts';
import { Grid } from '@mui/material';
import SideBar, { DrawerHeader } from '../../components/Sidebar';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const data = [
  ['Year', 'Sales', 'Expenses'],
  ['Jan', 1000, 400],
  ['Feb', 1170, 460],
  ['Mar', 660, 1120],
  ['Apr', 1030, 540],
  ['May', 1030, 540],
  ['June', 1030, 540],
  ['Jul', 1030, 540],
  ['Aug', 1030, 540],
  ['Sep', 1030, 540],
  ['Oct', 1030, 540],
  ['Nov', 1030, 540],
  ['Dec', 1030, 540],
];

export const options = {
  legend: { position: 'none' },
  responsive: true,
  chart: {
    title: 'Sales statistics',
  },
  colors: ['#2C7BE5', '#D2DDEC'],
  width: 500,
};

export const pieData = [
  ['Website growth', 'Hours per Day'],
  ['Social Media', 11],
  ['Affiliate visitors', 2],
  ['Purchased visitors', 2],
  ['By advertisement', 2],
];

export const pieOptions = {
  legend: { position: 'bottom', maxLines: 3 },
  pieHole: 0.9,
  responsive: true,
  title: 'Visitors',
  colors: ['#2C7BE5', '#CDD2FD', '#96C0FF', '#CCF0D1'],
  width: 500,
};

export default function MiniDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ p: 3 }} width={'100%'}>
        <DrawerHeader />
        <Box
          sx={{
            height: 100,
          }}
        >
          <Typography
            sx={{ fontWeight: '600', color: '#474747' }}
            variant="h5"
            color={''}
            component="div"
          >
            Dashboard
          </Typography>
        </Box>
        <Grid container >
          <Grid item xs={5}>
            <Chart
              chartType="Bar"
              height='400px'
              width='700px'
              data={data}
              options={options}
            />
          </Grid>

          <Grid item xs={5}>
            <Chart
              height='400px'
              width='700px'
              chartType="PieChart"
              data={pieData}
              options={pieOptions}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} spacing={5}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </Box>
  );
}
