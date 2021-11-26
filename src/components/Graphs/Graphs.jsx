import "./Graphs.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, RadarChart, PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,Legend, Sector, PieChart, Pie} from 'recharts';
import React, { useCallback, useState } from "react";

export default function Graphs() {
    const data = [
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
      const data2 = [
        {
          "subject": "Math",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ]
      const data3 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
      ];
      
      const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          startAngle,
          endAngle,
          fill,
          payload,
          percent,
          value
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";
      
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#333"
            >{`PV ${value}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill="#999"
            >
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
      };
      const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
      
    return (
        
        <div className="elementWrapper">
            <div className="graphContainer"> 
            <AreaChart
        width={500}
        height={400}
        data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
            </div>
            <div className="graphContainer">
            <RadarChart outerRadius={90} width={300} height={400} data={data2}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
            </div>
            <div className="graphContainer">
            <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data3}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
            </div>
        </div>
        
    )
}