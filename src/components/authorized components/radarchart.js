import React from 'react';
import { Radar, Chart } from 'react-chartjs-2';
import { RadialLinearScale } from 'chart.js/auto';  // or wherever the scale is located


export default function Radarchart(){
  const data = {
    labels: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'],
    datasets: [
      {
        label: 'Person A',
        data: [3, 5, 1, 6, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Person B',
        data: [5, 7, 3, 6, 8],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
  };
  

  return (
    <div style={{ width: '50%' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

