import React from "react";
import '../Assets/Charts.css';
import SideBar from "../Elements/SideBar";
import { ResponsiveContainer,BarChart,Bar,Tooltip,CartesianGrid,XAxis,YAxis
        ,Legend, LineChart, Line } from 'recharts';

const productData = [
    {
        product : "Uncle Chips",
        stock : 90,
        expiry : 75
    },
    {
        product : "Doritoes",
        stock : 50,
        expiry : 90
    },
    {
        product : "Coco Cola",
        stock : 69,
        expiry : 30
    },
    {
        product : "Pringles",
        stock : 30,
        expiry : 55
    },
    {
        product : "Peanut Butter",
        stock : 90,
        expiry : 75
    },
]

const Charts = () =>{
    return(
        <>
        <SideBar />
            <div className="Charts">
                 <div className="General-text">
                    General Charts
                </div>
                <hr />
                
                <div className="Bar-chart">
                    <p>Bar Chart</p>
                    <ResponsiveContainer width="95%" aspect={3}>
                        <BarChart 
                          width = {500}
                          height = {300}
                          data = {productData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity="0.7" />
                        <XAxis dataKey="product"/>
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor:'white' }}/>
                        <Legend />
                            <Bar dataKey="stock" fill="rgba(59, 135, 255,0.5)" />
                            <Bar dataKey="expiry" fill="rgba(221, 189, 255,0.5)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="line-chart">
                    <p>
                        Line Chart
                    </p>
                    <div>
                    <ResponsiveContainer width="7+0%" aspect={3}>
                    <LineChart data={productData} width = {500} height = {500} margin={{top:15 , right: 30
                     }}>
                        <CartesianGrid strokeDasharray={5} vertical={false} />
                        <XAxis dataKey="product"
                        />
                            <Line  dataKey="stock" stroke="green" 
                            />
                            <Line dataKey="expiry" stroke="cyan"/>
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor:'#f1f1f1'}} />
                        <Legend />
                    </LineChart>
        </ResponsiveContainer>
                    </div>
                     
                </div> 
            </div>
        </>
    )
}

export default Charts;