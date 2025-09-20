import React from 'react';
import Plot from 'react-plotly.js';

function createChart(container) {
  return(
    <Plot
      data={[
        {
        x: [1, 2, 3, 4, 5, 6, 7, 8],
        y: [10, 15, 13, 17, 20, 25, 30, 35],
        type: 'scatter',
        mode: 'lines',
        line: {color: 'green'},
        }
      ]}
      layout={{
        width: 320,
        height: 240,
        title: '',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        xaxis: {
          showgrid: false,
          zeroline: false,
          showticklabels: false,
        },
        yaxis: {
          showgrid: false,
          zeroline: false,
          showticklabels: false,
        },
        margin: {l: 0, r: 0, t: 0, b: 0},
      }}
  config={{displayModeBar: false, staticPlot: true}}
    />
  )
}

export default createChart