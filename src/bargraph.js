// import React, { PureComponent } from "react";
// import styles from "./index.module.css";
// import {
//   BarChart,
//   Bar,
//   //   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ReferenceLine,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     Expense: 4000,
//     Income: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     Expense: -3000,
//     Income: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     Expense: -2000,
//     Income: -9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     Expense: 2780,
//     Income: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     Expense: -1890,
//     Income: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     Expense: 2390,
//     Income: -3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     Expense: 3490,
//     Income: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl =
//     "https://codesandbox.io/s/bar-chart-with-positive-negative-i3b8b";

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           className={styles.barchart}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <Legend wrapperStyle={{ top: 100, left: 25, fontSize: "0.1rem" }} />
//           <CartesianGrid
//             className={styles.barchart_cgrid}
//             strokeDasharray="3 3"
//           />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <ReferenceLine y={0} stroke="#000" />
//           <Bar dataKey="Income" fill="#8884d8" />
//           <Bar dataKey="Expense" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }

// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ReferenceLine,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     Expense: 4000,
//     Income: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     Expense: -3000,
//     Income: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     Expense: -2000,
//     Income: -9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     Expense: 2780,
//     Income: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     Expense: -1890,
//     Income: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     Expense: 2390,
//     Income: -3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     Expense: 3490,
//     Income: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl =
//     "https://codesandbox.io/s/bar-chart-with-positive-negative-i3b8b";

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={5}
//           height={3}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis height={3} width={2} dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <ReferenceLine y={0} stroke="#000" />
//           <Bar dataKey="Income" fill="#8884d8" />
//           <Bar dataKey="Expense" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Expense: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Expense: 6500,
    Income: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Expense: 8000,
    Income: 9800,
    amt: 2500,
  },
  {
    name: "July",
    Expense: 6300,
    Income: 2000,
    amt: 2100,
  },
  {
    name: "Aug",
    Expense: 8900,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    Expense: 6000,
    Income: 7300,
    amt: 2100,
  },
  {
    name: "Oct",
    Expense: 2000,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    Expense: 3490,
    Income: 7000,
    amt: 2100,
  },
  {
    name: "Dec",
    Expense: 3490,
    Income: 4900,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#8884d8" />
            <Bar dataKey="Expense" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
