<template>
    <div class="box5">
        <div class="title">
            <p>未来七天游客数量趋势图</p>
            <img src="../../images/dataScreen-title.png" alt="">
        </div>
        <div class="charts" ref='line'></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
//获取图形图标的节点
let line = ref();
onMounted(() => {
    let mycharts = echarts.init(line.value);
    //设置配置项
    mycharts.setOption({
        //标题组件
        title: {
            text: '访问量'
        },
        //x|y轴
        xAxis: {
            //图形图标在x轴均匀分布展示
            type: 'category',
            //两侧不留白
            boundaryGap: false,
            //分割线不要
            splitLine: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            //轴线的设置
            axisLine: {
                show: true
            },
            //刻度
            axisTick: {
                show: true
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            //轴线的设置
            axisLine: {
                show: true
            },
            //刻度
            axisTick: {
                show: true
            }
        },
        grid: {
            left: 40,
            top: 0,
            right: 20,
            bottom: 20
        },
        //系列
        series: [
            {
                type: 'line',
                data: [420, 1740, 366, 1299, 2221, 890, 1200],
                //平滑曲线的设置
                smooth: true,
                //区域填充样式
                areaStyle: {
                    opacity: 1,
                    //右下左上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(24, 144, 255, .5)'
                        },
                        {
                            offset: 0.3,
                            color: 'rgba(24, 144, 255, 0.2)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(24, 144, 255, 0)'
                        }
                    ])
                },
            }
        ]
    })
})
</script>

<style scoped lang="scss">
.box5 {
    width: 100%;
    height: 100%;
    background: url(../../images/dataScreen-main-cb.png) no-repeat;
    background-size: 100% 100%;
    margin: 0px 20px;

    .title {
        margin-left: 10px;

        p {
            color: white;
            font-size: 20px;
        }
    }

    .charts {
        height: calc(100% - 40px);
    }

}
</style>