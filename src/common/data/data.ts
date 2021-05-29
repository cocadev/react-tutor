const breakpointColumnsObj = {
  default: 5,
  1860: 4,
  1630: 3,
  1280: 2,
  800: 1,
};

const lineChart = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const incomeBarData = [
  {
    name: 'Oct',
    uv: 25,
    pv: 60,
  },
  {
    name: 'Nov',
    uv: 80,
    pv: 30,
  },
  {
    name: 'Dec',
    uv: 40,
    pv: 20,
  },
  {
    name: 'Jan',
    uv: 20,
    pv: 20,
  },
  {
    name: 'Feb',
    uv: 10,
    pv: 40,
  },
];

const pieData = [
  { name: 'Theme', value: 400 },
  { name: 'Template', value: 300 },
  { name: 'Pending', value: 300 },
];

const COLORS = ['#6c5cd2', '#e4e4e4', '#f9b7f5'];

const BarData = [
  { name: 'Page A', users: 100, New_Users: 240 },
  { name: 'Page B', users: 300, New_Users: 150 },
  { name: 'Page C', users: 200, New_Users: 400 },
  { name: 'Page D', users: 100, New_Users: 250 },
  { name: 'Page E', users: 90, New_Users: 300 },
  { name: 'Page E', users: 200, New_Users: 200 },
];

const AffiliateBarData = [
  {
    name: 'Graphics',
    uv: 25,
    pv: 60,
  },
  {
    name: 'Theme',
    uv: 80,
    pv: 30,
  },
  {
    name: 'Template',
    uv: 40,
    pv: 20,
  },
];

const smallBarData = [
  { name: 'Jan', users: 20 },
  { name: 'Feb', users: 60 },
  { name: 'Mar', users: 80 },
  { name: 'Apr', users: 65 },
  { name: 'May', users: 20 },
];

const LineData = [
  {
    name: 'Oct',
    series_1: 5,
    series_2: 14,
  },
  {
    name: 'Nov',
    series_1: 20,
    series_2: 20,
  },
  {
    name: 'Dec',
    series_1: 40,
    series_2: 35,
  },
  {
    name: 'Jan',
    series_1: 30,
    series_2: 4,
  },
];

export {
  breakpointColumnsObj,
  lineChart,
  incomeBarData,
  pieData,
  COLORS,
  smallBarData,
  AffiliateBarData,
  BarData,
  LineData,
};
