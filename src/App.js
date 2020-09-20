import React, { Component } from "react";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { SearchForm } from "./components/form/Form";
import Chart from "./components/chart/chart";
import { AppHeader } from "./components/header/header";

export default function App() {
  const BASE_URL = "https://api.github.com/repos/";
  const [dateFrom, setdDateFrom] = React.useState(new Date());
  const [dateTo, setDateTo] = React.useState(new Date());
  const [interval, setInterval] = React.useState("");
  const [target, setTarget] = React.useState([]);

  const data = [
    {
      target: "Тип 1",
      datapoints: [
        [44640, 1577826000000],
        [20876, 1580504400000],
        [2976, 1583010000000],
        [0, 1585688400000],
        [0, 1588280400000],
        [0, 1590958800000],
      ],
    },
    {
      target: "Тип 2",
      datapoints: [
        [0, 1577826000000],
        [20875, 1580504400000],
        [2976, 1583010000000],
        [0, 1585688400000],
        [0, 1588280400000],
        [0, 1590958800000],
      ],
    },
    {
      target: "Тип 3",
      datapoints: [
        [0, 1577826000000],
        [27836, 1580504400000],
        [2976, 1583010000000],
        [0, 1585688400000],
        [0, 1588280400000],
        [0, 1590958800000],
      ],
    },
    {
      target: "Тип 4",
      datapoints: [
        [0, 1577826000000],
        [13917, 1580504400000],
        [2976, 1583010000000],
        [0, 1585688400000],
        [0, 1588280400000],
        [0, 1590958800000],
      ],
    },
  ];

  const makeData = (rawData, target) => {
   
   
    const targetData = rawData.filter(function (serie)  {return target.indexOf(serie.target) > -1} );
  //  console.log(pointsY);
  let pointsX = prepareDataX(targetData);
  //  console.log(pointsX);
    
   const chartData = prepareDataY(targetData, pointsX)
   //const chartData =targetData.map((target) => {target.datapoints[i]})

  };

  const prepareDataX = (data) => {
    let points = [];
    data[0].datapoints.forEach((arr) => {
      let date = new Date(arr[1] * 1000);
      points.push({
        date: date,
      });
    });
    return points;
  };

  const prepareDataY = (data, pointsX) => {
     console.log(data)
     const cleanData = []
    data.forEach((arr) => {
     // console.log(arr)
     
      const {target, datapoints} = arr
      datapoints.forEach((point)=>{
        console.log(point[0])
        cleanData.point = point[0]
        cleanData.target = target
      })
    });

    console.log(cleanData);
    return data;
  };

  const onChart = async (res) => {
    let response = JSON.parse(res);
  };

  const onSubmitForm = async (values) => {
    setdDateFrom(values.dateFrom);
    setDateTo(values.dateTo);
    setTarget(values.target);
    setInterval(values.interval);
    await new Promise((r) => setTimeout(r, 500));
  //  let response = await fetch(`${BASE_URL}${values.dateTO}`);
  //  let commits = await response.json();

    console.log(`interval is :${interval}`)
    alert(JSON.stringify(values, null, 2));
    makeData(data, values.target);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <AppHeader />
        <h1>Hello world!</h1>
        <SearchForm onSubmit={onSubmitForm} interval={interval} />
        <Chart data={data} />
      </div>
    </MuiPickersUtilsProvider>
  );
}
