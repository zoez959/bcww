<template>
  <el-table :data="staffdata" style="width: 100%;padding-top: 15px;">
    <el-table-column prop="id" label="员工OA" min-width="155" sortable>
    </el-table-column>

    <el-table-column prop="name" label="员工姓名" width="155" align="center" sortable>
    </el-table-column>

    <el-table-column prop="belongs" label="所属部门" width="155" align="center" sortable>
    </el-table-column>

    <el-table-column prop="level" label="当前职级" width="155" align="center" sortable>
    </el-table-column>

    <el-table-column prop="cont" label="积分总值" width="155" align="center" sortable>
    </el-table-column>

    <el-table-column prop="matter" label="是否犯过事" width="150" align="center">
            <template slot-scope="{row}">
              <el-tag :type="row.status | statusFilter">
                {{ row.status }}
              </el-tag>
            </template>
    </el-table-column>

    <el-table-column
      prop="up"
      label="能否晋升"
      width="100"
      align="center"
      :filters="[
        { text: '可以', value: '可以' },
        { text: '不可以', value: '不可以' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template slot-scope="{row}">
        <el-tag
          :type="row.tag === '可以' ? '' : 'success'"
          disable-transitions>
          {{row.tag}}
        </el-tag>
      </template>
    </el-table-column>

    <!--    <el-table-column :render-header="renderHeader">-->
    <!--      <template slot-scope="scope">-->
    <!--        <el-checkbox-->
    <!--          v-model="scope.row.ownerchecked"-->
    <!--          @change="changeOwner"-->
    <!--        />-->
    <!--      </template>-->
    <!--    </el-table-column>-->


    <!--    <el-table-column  type="selection" width="100" align="center"/>-->

    <!--    <el-table-column label="晋升与否" width="195" align="center">-->
    <!--      <template #default="scope">-->
    <!--        <el-button size="small" type="danger" @click="handleEdit(scope.$index, scope.row)"-->
    <!--        >下降-->
    <!--        </el-button-->
    <!--        >-->
    <!--        <el-button-->
    <!--          size="small"-->
    <!--          type="success"-->
    <!--          @click="handleDelete(scope.$index, scope.row)"-->
    <!--        >晋升-->
    <!--        </el-button-->
    <!--        >-->
    <!--      </template>-->
    <!--    </el-table-column>-->
  </el-table>
</template>



<script>
import {transactionList} from '@/api/remote-search'

const staffdata = [
   {id: '0001', name:'Tom', belongs:'信息技术总部', level: '3A', cont: 30, matter:true}
  ]


export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 10)
    }
  },
  data() {
    return {
      staffdata: staffdata
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.staffdata = response.data.items.slice(0, 8)
      })
    },
    // renderHeader(h) {
    //   return h('div', [
    //     h('input', {
    //       style: 'margin-right:5px',
    //       attrs: {
    //         id: 'check1',
    //         type: 'checkbox'
    //       },
    //       on: {
    //         change: ($event) => {
    //           // $event 表示当前点击的 checkbox 元素本身
    //           // 遍历整个表格数据设置每一行的ownerchecked状态和表头的复选框状态一致，实现批量选中和取消功能
    //           this.tableData.forEach((item) => {
    //             this.$set(item, 'ownerchecked', $event.target.checked)
    //           })
    //         }
    //       }
    //     }),
    //     h('span', '晋升勾选')
    //   ])
    // },
    // // 点击每一行时判断是否勾选表头的全选
    // remderOwnerCheck() {
    //   const check = document.getElementById('check1')
    //   check.checked = this.tableData.every((i) => i.ownerchecked)
    // },
    // changeOwner() {
    //   this.remderOwnerCheck()
    // }
  }
}
</script>
