import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Feb",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Mar",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Apr",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Jun",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Jul",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Aug",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Sept",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Nov",
    uv: 1400,
    pv: 900,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Dec",
    uv: 1400,
    pv: 580,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "May",
    uv: 1400,
    pv: 880,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Oct",
    uv: 1400,
    pv: 670,
    amt: 1700,
    cnt: 380,
  },
];

export default function RevenueChart() {
  return (
    <ComposedChart width={704} height={330} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" barSize={30} fill="#413ea0" />
      <Line type="doubletone" dataKey="pv" stroke="#ff7300" />
    </ComposedChart>
  );
}
