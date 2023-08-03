<template>
  <div class="admin-editor-container">
    <!--    <github-corner class="github-corner" />-->

    <!--    <panel-group @handleSetLineChartData="handleSetLineChartData"/>-->

    <el-row :gutter="20">
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 8}" :xl="{span: 6}"
              style="margin-bottom:30px;">
        <panel-group/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 10}" :xl="{span: 6}"
              style="margin-bottom:30px; margin-top: 15px">
        <RaddarChart/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 8}" style="margin-right: 10px">
        <el-input placeholder="请输入搜索内容"/>
      </el-col>
      <el-button>搜索</el-button>
      <el-button>下载</el-button>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <transaction-table/>
      </el-row>
    </el-row>

    <!--    <el-row :gutter="8">-->
    <!--      &lt;!&ndash;      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <transaction-table />&ndash;&gt;-->
    <!--      &lt;!&ndash;      </el-col>&ndash;&gt;-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}"-->
    <!--              style="margin-bottom:30px;">-->
    <!--        <box-card/>-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}"-->
    <!--              style="margin-bottom:30px;">-->
    <!--        <box-card/>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'


export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    // TodoList,
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
