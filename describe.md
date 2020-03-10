## 引入组件
# import Echarts from 'components/echarts';
<Echarts 
    chartType = {...} 绘画类型
    style = {{...}} 自定义style
    option = {{...}} 自定义配置，具体配置看echarts文档
    data = {} 数据驱动
    xAxis = {} 时间轴
/>

# 四种传入方式
1. 直接绘画，传入x轴、数值直接完成
<Echarts chartType="line" data={[]} xAxis={[]}/>

2. 多条绘画，在原有基础上
<Echarts chartType="line" data={[{name:'第一条',data:[]},{name:'第二条',data:[]}]} xAxis={[]}/>

3. 在默认基础上更改
<Echarts chartType="line" option={...}/>

4. 不依赖任何，自定义
<Echarts option={...}/>


# 类型 chartType
# chartType = 'xx-xx-xx'
{
    line:{
        line: 默认-折线图,
        area:面积图,
        stacked:堆叠
    },
    bar:{
        bar: 默认-柱状图,
        stacked:堆叠,
        transverse: 条形图
    },
    pie:{
        pie: 默认-饼图,
    },
    scatter:{
        scatter: 默认-点图,
    },
    radar:{
        radar: 默认-雷达图
    }
}