<!--<template>-->
<!--  <div class="components-container board">-->
<!--    <Kanban :key="1" :list="list1" :group="group" class="kanban A" header-text="绩效A"  />-->
<!--    <Kanban :key="2" :list="list2" :group="group" class="kanban B" header-text="绩效B"  />-->
<!--    <Kanban :key="3" :list="list3" :group="group" class="kanban C" header-text="绩效C"  />-->
<!--    <Kanban :key="4" :list="list4" :group="group" class="kanban D" header-text="绩效D"  />-->
<!--    <Kanban :key="5" :list="list5" :group="group" class="kanban E" header-text="绩效E"  />-->

<!--  </div>-->

<!--</template>-->
<!--<script>-->
<!--import Kanban from '@/components/Kanban'-->

<!--export default {-->
<!--  name: 'DragKanbanDemo',-->
<!--  components: {-->
<!--    Kanban-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      group: 'member',-->
<!--      list1: [-->
<!--        { name: '员工'},-->
<!--        { name: '员工1'},-->
<!--        { name: '员工123'},-->
<!--        { name: '员工1234'},-->
<!--        { name: '员工12344'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工4'}-->
<!--      ],-->
<!--      list2: [-->
<!--        { name: '员工5'},-->
<!--        { name: '员工6'},-->
<!--        { name: '员工7'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--      ],-->
<!--      list3: [-->
<!--        { name: '员工8'},-->
<!--        { name: '员工9'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'}-->
<!--      ],-->
<!--      list4: [-->
<!--        { name: '员工10'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--      ],-->
<!--      list5: [-->
<!--        { name: '员工11'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--        { name: '员工2'},-->
<!--        { name: '员工3'},-->
<!--      ],-->
<!--      centerDialogVisible: false,-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onCenterDialogVisible(){-->
<!--      this.centerDialogVisible=true;-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style lang="scss">-->
<!--.board {-->
<!--  min-width: 1200px;-->
<!--  height: 600px;-->
<!--  margin-left: 20px;-->
<!--  display: flex;-->
<!--  justify-content: space-around;-->
<!--  flex-direction: row;-->
<!--  align-items: flex-start;-->
<!--}-->
<!--.kanban {-->
<!--  &.A {-->
<!--    height: 600px;-->
<!--    overflow: auto;-->
<!--    .board-column-header {-->
<!--      background: #4A9FF9;-->
<!--      //position: fixed;-->
<!--    }-->
<!--  }-->
<!--  &.B {-->
<!--    height: 600px;-->
<!--    overflow: auto;-->
<!--    .board-column-header {-->
<!--      background: #f9944a;-->
<!--    }-->
<!--  }-->
<!--  &.C {-->
<!--    height: 600px;-->
<!--    overflow: auto;-->
<!--    .board-column-header {-->
<!--      background: #2ac06d;-->
<!--    }-->
<!--  }-->
<!--  &.D {-->
<!--    height: 600px;-->
<!--    overflow: auto;-->
<!--    .board-column-header {-->
<!--      background: #9da408;-->
<!--    }-->
<!--  }-->
<!--  &.E {-->
<!--    height: 600px;-->
<!--    overflow: auto;-->
<!--    .board-column-header {-->
<!--      background: #5a5e66;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->

<template>
  <div id="app">
    <el-table :data="tableData" border style="width: 100%" ref="table">
      <el-table-column
        fixed
        type="index"
        align="center"
        :index="1">
        <template #header>
          <el-popover
            placement="bottom"
            :width="600"
            :visible="visible"
          >
            <!-- 配置列面板 -->
            <transition name="fade">
              <div>
                <div>选择显示字段</div>
                <div>
                  <el-checkbox v-model="showColumn.date" disabled>日期</el-checkbox>
                  <el-checkbox v-model="showColumn.name">姓名</el-checkbox>
                  <el-checkbox v-model="showColumn.provinces">省份</el-checkbox>
                  <el-checkbox v-model="showColumn.city">市区</el-checkbox>
                  <el-checkbox v-model="showColumn.adreess">地址</el-checkbox>
                  <el-checkbox v-model="showColumn.zipCode">邮编</el-checkbox>
                </div>
              </div>
            </transition>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button size="mini" type="primary" plain @click="saveColumn">确定</el-button>
            </div>
            <template #reference>
              <i
                class="el-icon-setting"
                style="font-size: 22px; cursor: pointer"
                @click="visible = true"
              ></i>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="150"
        v-if="showColumn.date"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
        v-if="showColumn.name"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120"
        v-if="showColumn.provinces"
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120"
        v-if="showColumn.city"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        minWidth="300"
        v-if="showColumn.adreess"
      >
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120"
        v-if="showColumn.zipCode"
      >
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="100" align="center">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
          >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      // 列的配置化对象，存储配置信息
      showColumn: {
        date: true,
        name: true,
        provinces: true,
        city: true,
        adreess: true,
        zipCode: true,
      },
    };
  },
  mounted() {
    // 发请求得到showColumnInitData的列的名字
    if(localStorage.getItem("columnSet")){
      this.showColumn = JSON.parse(localStorage.getItem("columnSet"))
    }else{
      this.showColumn = {
        date: true,
        name: true,
        provinces: true,
        city: true,
        adreess: true,
        zipCode: true,
      };
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    saveColumn() {
      localStorage.setItem("columnSet",JSON.stringify(this.showColumn))
      this.visible = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
/* 控制淡入淡出效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
