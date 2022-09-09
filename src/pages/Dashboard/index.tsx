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
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import SideBar, { DrawerHeader } from '../../components/Sidebar';
import { AttachMoney, ShoppingCart, ShoppingBasket } from '@mui/icons-material';
import ReactApexChart from 'react-apexcharts';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const pieSeries = [44, 55, 41, 17, 15];

const series = [
  {
    data: [44, 55, 41, 64, 22, 43, 21],
  },
  {
    data: [53, 32, 33, 52, 13, 44, 32],
  },
];

const options = {
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff'],
    },
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
  },
};

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

const Container = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'row',
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

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
        <Container rowSpacing={2} columnSpacing={2} wrap="wrap" container>
          <Grid item xs={10.8} sm={11} md={4}>
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                padding: '5%',
              }}
            >
              <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  style={{
                    backgroundColor: '#FA9019',
                    display: 'flex',
                    height: '4em',
                    width: '4em',
                    borderRadius: '100%',
                    justifyContent: 'center',
                    outlineWidth: '12px',
                    WebkitMaskImage: 'circle, white 100%, black 100%',
                    outlineColor: 'rgba(250, 144, 25, 0.249)',
                    outlineStyle: 'solid',
                  }}
                >
                  <AttachMoney
                    style={{
                      color: 'white',
                      alignSelf: 'center',
                      width: '60%',
                    }}
                  />
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    marginLeft: '5%',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>Total Sales</Typography>
                  <Typography
                    sx={{ fontWeight: '600', color: '#474747' }}
                    variant="h5"
                    color={''}
                    component="div"
                  >
                    $19,626,058.20
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={10.8} sm={11} md={4}>
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                padding: '5%',
              }}
            >
              <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  style={{
                    backgroundColor: '#2FB516',
                    display: 'flex',
                    height: '4em',
                    width: '4em',
                    borderRadius: '100%',
                    justifyContent: 'center',
                    outlineWidth: '12px',
                    outlineColor: 'rgba(46, 182, 22, 0.249)',
                    outlineStyle: 'solid',
                  }}
                >
                  <ShoppingCart
                    style={{
                      color: 'white',
                      alignSelf: 'center',
                      width: '60%',
                    }}
                  />
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    marginLeft: '5%',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>Total Orders</Typography>
                  <Typography
                    sx={{ fontWeight: '600', color: '#474747' }}
                    variant="h5"
                    color={''}
                    component="div"
                  >
                    3290
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={10.8} sm={11} md={4}>
            <Box
              sx={{
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                padding: '5%',
              }}
            >
              <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  style={{
                    backgroundColor: '#3167EB',
                    display: 'flex',
                    height: '4em',
                    width: '4em',
                    borderRadius: '100%',
                    justifyContent: 'center',
                    outlineWidth: '12px',
                    outlineColor: 'rgba(49, 103, 235, 0.249)',
                    outlineStyle: 'solid',
                  }}
                >
                  <ShoppingBasket
                    style={{
                      color: 'white',
                      alignSelf: 'center',
                      width: '60%',
                    }}
                  />
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    marginLeft: '5%',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>Total Products</Typography>
                  <Typography
                    sx={{ fontWeight: '600', color: '#474747' }}
                    variant="h5"
                    color={''}
                    component="div"
                  >
                    322
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Container container mt={7} spacing={3}>
          <Grid item xs={11} md={8}>
            <Box
              height={'100%'}
              sx={{ boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300 }}
            >
              <ReactApexChart
                options={options}
                series={series}
                height={430}
                type={'bar'}
              />
            </Box>
          </Grid>

          <Grid
            item
            sm={11}
            md={4}
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <Box
              justifyContent={'center'}
              alignItems={'center'}
              height={'100%'}
              sx={{ boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300 }}
            >
              <Typography>asd</Typography>

              <ReactApexChart
                options={{
                  legend: { position: 'bottom' },
                  plotOptions: {
                    pie: {
                      donut: {
                        labels: {
                          show: true,
                          total: { show: true },
                        },
                      },
                    },
                  },
                }}
                series={pieSeries}
                height={475}
                type="donut"
              />
            </Box>
          </Grid>
        </Container>
        <Grid item xs={4} spacing={5} mt={10}>
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
