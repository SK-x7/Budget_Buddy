import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 1398,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Apr",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "may",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Jun",
    Expense: 6000,
    Income: 3800,
  },
  {
    name: "Jul",
    Expense: 3000,
    Income: 4300,
  },
  {
    name: "Aug",
    Expense: 10000,
    Income: 4300,
  },
  {
    name: "Sep",
    Expense: 5000,
    Income: 4300,
  },
  {
    name: "Oct",
    Expense: 100,
    Income: 4300,
  },
  {
    name: "Nov",
    Expense: 3490,
    Income: 4300,
  },
  {
    name: "Dec",
    Expense: 4590,
    Income: 2500,
  },
];

export default class BBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-area-chart-ix341";

  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Expense"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Area
              type="monotone"
              dataKey="Income"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </>
    );
  }
}
