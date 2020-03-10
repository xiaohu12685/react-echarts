import _axis from './axis';
import _defaultColor from './defaultColor';
import _ from 'lodash';
export default function (params = {}) {
    const { xAxis = [], data = [] } = params;
    let options = {
        ..._defaultColor,
        tooltip: {},
        radar: {
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                }
            },
            indicator: []
        },
        series: [{
            type: 'radar',
            data: []
        }]
    }
    if (typeof data[0] !== 'object') {
        const max = _.max(data);
        options.radar.indicator = xAxis.map((item, index) =>({name: item, max}));
        options.series[0].data = [{ value: data }]
    } else {
        let newData = [];
        options.series[0].data = data.map(item => {
            newData = newData.concat(item.data);
            return { value: item.data };
        })
        const max = _.max(newData);
        options.radar.indicator = xAxis.map((item, index) =>({name: item, max}));
    }
    return options;
}