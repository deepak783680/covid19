import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  // eslint-disable-next-line
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Total", "Recovered", "Deaths", "Active"],
        datasets: [
          {
            
            backgroundColor: [
              "rgba(0, 77, 153)",
              "rgba(30, 102, 49)",
              "rgba(255, 51, 51)",
              "rgba(204, 153, 0)",
            ],
          
            data: [
              confirmed.value,
              recovered.value,
              deaths.value,
              confirmed.value - (recovered.value + deaths.value),
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
         
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{barChart}</div>
  );
};

export default Chart;
