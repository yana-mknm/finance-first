import React, { Component } from 'react';
import Chart from "./chart";
import * as Papa from 'papaparse'

class Charts extends Component {
  // const [chartData, setChartData] = useState();
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  getChartData(data) {
    console.log(data)
    const labels = data[0];
    // Ajax calls here
    this.setState({
      chartData: {
        labels: labels,
        datasets: [
          {
            label: 'Population',
            data: data[1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  changeHandler = (event) => {
    var self = this;
    Papa.parse(event.target.files[0], {
      complete: function (results) {
        self.getChartData(results.data);
      }
    });
  };

  render() {
    return (
      <div className="charts-container">
        <div className="charts-container__header">
          <h2 className="charts-header__text">Графіки</h2>
          <div className="charts-button__container">
              <input
                  name="file-upload-field"
                  type="file"
                  className="file-upload-field"
                  value=""
                  accept=".csv"
                  onChange={(el) => this.changeHandler(el)}
              />
          </div>
        </div>
          {!!Object.keys(this.state.chartData).length && (
            <Chart
                chartData={this.state.chartData}
                location="Massachusetts"
                legendPosition="bottom"
            />
          )}
      </div>
    );
  }
}

export default Charts;
