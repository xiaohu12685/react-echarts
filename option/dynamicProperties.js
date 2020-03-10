export const Attribute = (options, str) => {
    let _options = {
        xAxis: {},
        yAxis: {},
        series: [{}]
    };
    if (str.includes('area')) _options.series[0].areaStyle = {};
    if (str.includes('stacked')) _options.series[0].stack = '堆叠';
    if (str.includes('transverse')) {
        _options.xAxis = {
            ...options.yAxis,
            type:'value'
        };
        _options.yAxis = {
            ...options.xAxis,
            type:'category'
        };
    }
    return _options;
}