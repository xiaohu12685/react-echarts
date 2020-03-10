import React, { Component } from 'react';
import echarts from 'echarts';
import { getIsCustom, checkType, getOption } from './methods'; 
export default class index extends Component {
    constructor(props) {
        super(props);
        this.myChart = null;
    }

    perform = () => {
        const { chartType = '', option = {}, xAxis = [], data = [] } = this.props;
        if (checkType(chartType) && chartType) return console.error('chartType不合法');
        const isCustom = getIsCustom(option);
        let _options = getOption(isCustom, chartType, xAxis, data);
        this.myChart.setOption(_options, true);
    }

    componentDidMount() {
        this.myChart = echarts.init(this.chartDom);
        this.perform();
    }

    componentDidUpdate() {
        this.perform();
    }

    componentWillUnmount() {
        if (this.myChart) {
            echarts.dispose(this.chartDom);
            this.myChart = null;
        }
    }

    render() {
        const { style = {} } = this.props;
        return (
            <div style={{ width: 500, height: 300, ...style }} ref={(ev) => this.chartDom = ev}></div>
        )
    }
}
