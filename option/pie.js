import _axis from './axis';
import _defaultColor from './defaultColor';
import _ from 'lodash';
export default function (params = {}) {
    const { xAxis = [], data = [] } = params;
    let options = {
        ..._defaultColor,
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: []
        }]
    }
    if (typeof data[0] !== 'object') {
        options.series[0].data = xAxis.map((item, index) => {
            return {
                name: item,
                value: data[index] 
            }
        });
    } else {
        options.series = {
            ...options.series[0],
            data: xAxis.map((item, index) => {
                const newData = data[0] || {};
                const value = newData.data || {};
                return {
                    name: item,
                    value: value[index]
                }
            })
        }
    }
    return options;
}