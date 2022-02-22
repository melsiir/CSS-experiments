// const { Chart } = require("chart.js");




async function dataChart() {
const data = await tempData() 
const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 0, 400);

gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
gradient.addColorStop(1, "rgba(0, 210, 255, 0.3)");

const mainData = {
  labels: data.years,
  datasets: [
    {
      label: "tempeture change from 1880 to present",
      data: data.degrees,
      fill: true,
      backgroundColor: gradient,
    },
  ],
};

const config = {
  type: "line",
  data: mainData,
  options: {
    hitRadius: 30,
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return value + '°';
          },
        },
      },
    },
  },
};
const myChart = new Chart(ctx, config);
}


async function tempData() {
  let years = []
let degrees = []
  const file = await fetch("./data/ZonAnn.Ts+dSST.csv");
  const data = await file.text();
  const table = data.split('\n').slice(1)
  table.forEach(row => {
    const colunm = row.split(',')
    const year = colunm[0]
    years.push(year)
    const glob = colunm[1]
    degrees.push(parseFloat(glob) + 14)
  })
  return { years, degrees }
}

dataChart()
