import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      screenWidth: null,
    }
  }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }

  render() {
    return (
      <div className="charts-items__container">
          <div className="charts-items__item">
              <Bar
                  data={this.state.chartData}
                  options={{
                      aspectRatio: 1,
                      responsive: true,
                      maintainAspectRatio: false,
                      title: {
                          display: this.props.displayTitle,
                          text: 'Largest Cities In ' + this.props.location,
                          fontSize: 25
                      },
                      legend: {
                          display: this.props.displayLegend,
                          position: this.props.legendPosition
                      }
                  }}
              />
          </div>

          <div className="charts-items__item">
                <Line
                  data={this.state.chartData}
                  options={{
                      aspectRatio: 1,
                      responsive: true,
                      maintainAspectRatio: false,
                    title: {
                      display: this.props.displayTitle,
                      text: 'Largest Cities In ' + this.props.location,
                      fontSize: 25
                    },
                    legend: {
                      display: this.props.displayLegend,
                      position: this.props.legendPosition
                    }
                  }}
                />
          </div>
          <div className="charts-items__item">
            <Pie
              data={this.state.chartData}
              options={{
                  aspectRatio: 1,
                  responsive: true,
                  maintainAspectRatio: false,
                title: {
                  display: this.props.displayTitle,
                  text: 'Largest Cities In ' + this.props.location,
                  fontSize: 25
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                }
              }}
            />
          </div>
      </div>
    )
  }
}

export default Chart;
