import _axis from './axis';
import _tooltip from './tooltip';
import _defaultColor from './defaultColor';
import { Attribute } from './dynamicProperties';
import _ from 'lodash';
export default function (params = {}) {
    const { chartType = '', xAxis = [], data = [] } = params;
    let options = {
        ..._defaultColor,
        ..._tooltip,
        ..._axis,
        series: [{
            data: [],
            type: 'bar',
            barMaxWidth: 20
        }]
    }
    options.xAxis.data = xAxis;
    options = _.merge(options, Attribute(options,chartType));
    if (typeof data[0] !== 'object') {
        options.series[0].data = data;
    } else {
        options.series = data.map(item => {
            return {
                ...options.series[0],
                data: item.data
            }
        })
    }
    return options;
}