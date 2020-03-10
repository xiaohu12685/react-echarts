import chartTypeWarehouse from './chartTypeWarehouse';
import _ from 'lodash';
/**
 * 是否自定义
 * @param {*} option 
 */
export const getIsCustom = (option) => JSON.stringify(option) !== '{}' ? option : false;

/**
 * 校验chartType是否合法
 * @param {string} chartType 
 */
export const checkType = (chartType: string) => {
    let _cTypes = chartType.includes('-') ? (chartType.match(/[a-z]{1,}/) || '') : chartType;
    return chartTypeWarehouse[_cTypes] ? false : true;
};

/**
 * 组装Option
 */
export const getOption = (type: any = false, chartType: string = '', xAxis: Array<any> = [], data: Array<any> = []) => {
    let _cTypes = chartType.includes('-') ? (chartType.match(/[a-z]{1,}/) || '') : chartType;
    if (type) {
        let options = chartTypeWarehouse[_cTypes] ? chartTypeWarehouse[_cTypes]({ chartType }) : {}
        return _.merge(options, type);
    } else {
        return chartTypeWarehouse[_cTypes] ? chartTypeWarehouse[_cTypes]({ chartType, xAxis, data }) : {}
    }
};
