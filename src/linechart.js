/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan-feb",
    Expense: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: "Mar-apr",
    Expense: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: "May-jun",
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: "july-aug",
    Expense: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: "sept-aug",
    Expense: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    name: "nov-dec",
    Expense: 2390,
    Income: 3800,
    amt: 2500,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class LineChart1 extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/line-chart-with-customized-label-hs5b7";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Income"
            stroke="#8884d8"
            label={<CustomizedLabel />}
          />
          <Line type="monotone" dataKey="Expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
