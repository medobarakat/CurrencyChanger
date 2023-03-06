import React , {useEffect , useState}from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
const Chart = (country) => {
    useEffect(()=>{
        renderData()
    },[country])

    const [data,setData] = useState([])
    const [key,setKey] = useState("")


    const renderData = ()=>{
        console.log(country)
        if(country.country === "US"){
            setData(usdData)
            setKey("USA")
        }else if(country.country === "GB"){
            setData(Britindata)
        }else if(country.country === "JP"){
            setData(Jpydata)
        }else if(country.country === "EG"){
            setData(Egydata)
        }else if(country.country === "SA"){
            setData(Sardata)
        }
    }

    const usdData = [
        {
          name: "2010",
          currency: 1000,
        },
        {
          name: "2011",
          currency: 2500,
        },
        {
          name: "2012",
          currency: 3100,
        },
        {
          name: "2013",
          currency: 4280,
        },
        {
          name: "2014",
          currency: 5090,
        },
        {
          name: "2015",
          currency: 6390,
        },
        {
          name: "2016",
          currency: 7490,
        },
      ];
    
      const Britindata = [
        {
          name: "2010",
          currency: 2000,
        },
        {
          name: "2011",
          currency: 3500,
        },
        {
          name: "2012",
          currency: 2100,
        },
        {
          name: "2013",
          currency: 4280,
        },
        {
          name: "2014",
          currency: 2090,
        },
        {
          name: "2015",
          currency: 6390,
        },
        {
          name: "2016",
          currency: 9490,
        },
      ];
    
      const Jpydata = [
        {
          name: "2010",
          currency: 200,
        },
        {
          name: "2011",
          currency: 300,
        },
        {
          name: "2012",
          currency: 210,
        },
        {
          name: "2013",
          currency: 420,
        },
        {
          name: "2014",
          currency: 290,
        },
        {
          name: "2015",
          currency: 639,
        },
        {
          name: "2016",
          currency: 940,
        },
      ];
      const Egydata = [
        {
          name: "2010",
          currency: 21,
        },
        {
          name: "2011",
          currency: 22,
        },
        {
          name: "2012",
          currency: 20,
        },
        {
          name: "2013",
          currency: 42,
        },
        {
          name: "2014",
          currency: 29,
        },
        {
          name: "2015",
          currency: 69,
        },
        {
          name: "2016",
          currency: 94,
        },
      ];
      const Sardata = [
        {
          name: "2010",
          currency: 231,
        },
        {
          name: "2011",
          currency: 421,
        },
        {
          name: "2012",
          currency: 205,
        },
        {
          name: "2013",
          currency: 562,
        },
        {
          name: "2014",
          currency: 292,
        },
        {
          name: "2015",
          currency: 691,
        },
        {
          name: "2016",
          currency: 949,
        },
      ];







  return (
    <LineChart
    width={500}
    height={300}
    data={
        data
    }
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
    <Line type="monotone" dataKey="currency" stroke="#82ca9d" />
  </LineChart>
  )
}

export default Chart