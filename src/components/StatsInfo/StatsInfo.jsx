import "./StatsInfo.css"
import Avatar from '@mui/material/Avatar';
import { PieChart, Pie, Sector, Cell, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AvatarGroup } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

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
      pv: 5000,
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
    { name: 'Group A', value: 85 },
    { name: 'Group B', value: 15 },
  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

export default function StatsInfo() {
    return (
        <div className="statsInfo">
            <h2 className="statsTitle"> Estadísticas </h2>
            <div className="statsProjects">
                <Avatar src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(3328).png" alt="icon" variant="rounded"/>
                <Avatar src="https://images.squarespace-cdn.com/content/v1/542bd2a6e4b0852297eb5f88/1456192644917-BO2PZNF7A30SBI55KPPL/Chon2.jpg?format=1500w" alt="icon" variant="rounded"/>
                <Avatar src="https://yt3.ggpht.com/d0Obn2GZNDXqUc15SPYJDbomDic17Ysv2VlQOj2imo9WgCk8hy8M-6nHWsJ3YKLahTUk4FKlQDk=s900-c-k-c0x00ffffff-no-rj" alt="icon" variant="rounded"/>
            </div>
            <div className="statsChart">
                <h3 className="chartTitle"> Entusiasmo del equipo </h3>
                    <AreaChart width={390} height={300} data={data} margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}>
                        <Area type="monotone" dataKey="pv" stroke="#e91e63" strokeWidth={2} fill ="#f48bae"/>
                    </AreaChart>
            </div>
            <div className="statsChart">
                <h3 className="chartTitle"> Conformidad del equipo </h3>
                    <PieChart width={390} height={300}>
                        <Pie
                            data={data2}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                    </PieChart>
            </div>
            <div className="linearProgress">
                <h3 className="chartTitle"> Satisfacción del equipo </h3>
                    <div className="linearProgressDescription">
                        <AvatarGroup max={1}>
                            <Avatar alt="member" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" variant="circular" />
                        </AvatarGroup>
                        <div className="progressBar">
                            <div className="progressBarPrimary"></div>
                        </div>
                        <AvatarGroup max={1}>
                            <Avatar alt="member" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" variant="circular" />
                        </AvatarGroup>
                        <AvatarGroup max={1}>
                            <Avatar alt="member" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" variant="circular" />
                        </AvatarGroup>
                    </div>
                    
            </div>



                
             
        </div>
    )
}