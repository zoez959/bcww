<template>
  <div class="dashboard-editor-container">
    <!--    <github-corner class="github-corner" />-->

    <panel-group @handleSetLineChartData="handleSetLineChartData"/>

<!--    绩效积分-->
    <el-row style="background:#fff; padding:16px 16px 0; margin-bottom:32px;">
      <el-col :xs="24" :sm="24" :lg="24">
        <line-chart :chart-data="lineChartData"/>
      </el-col>
    </el-row>

<!--&lt;!&ndash;    晋级积分&ndash;&gt;-->
<!--    <el-row style="background:#fff; padding:16px 16px 0; margin-bottom:32px;">-->
<!--      <el-col :xs="24" :sm="24" :lg="24">-->
<!--        <line-chart :chart-data="lineChartData2"/>-->
<!--      </el-col>-->
<!--    </el-row>-->

    <!--个人积分结构待调整-->
    <el-row :gutter="32">
      <!--      <el-col :xs="12" :sm="12" :lg="6">-->
      <!--        <div class="chart-wrapper">-->
      <!--          <panel-group />-->
      <!--        </div>-->
      <!--      </el-col>-->
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          加分构成
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          扣分构成
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          奖励排行榜
          <box-card/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8"
              style="height: 280px;
                     width: 360px;
                     cursor: pointer;
                    font-size: 12px;
                    position: relative;
                    overflow: hidden;
                    color: #666;
                    background: #fff;
                    margin-right:30px;
                    margin-left:15px">
        <div class="chart-wrapper">
          滚动奖励
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8"
              style="height: 280px;
                     width: 360px;
                     cursor: pointer;
                    font-size: 12px;
                    position: relative;
                    overflow: hidden;
                    color: #666;
                    background: #fff;">
        <div class="chart-wrapper">
          滚动惩罚
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          惩罚排行榜
          <box-card/>
        </div>
      </el-col>
    </el-row>
  </div>


</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
