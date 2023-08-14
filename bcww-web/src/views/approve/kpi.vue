<template>
  <div class="app-container">
    <div class ="config" style="margin-bottom: 25px">

<!--      <el-button type="primary" @click="dialog = true">修改配置项</el-button>-->
      <el-button type="primary" @click="dialog = true">初始文件上传</el-button>
      <el-button type="primary" @click="dialog = true">下载</el-button>

      <el-button type="warning" class="botton1" @click="drawer = true">修改配置项</el-button>
      <el-drawer
        title="修改配置项"
        size= 40%
        :visible.sync="drawer"
        :with-header="true">
        <div id="App">
          <configbutton></configbutton>
        </div>
      </el-drawer>

    </div>

    <el-table ref="dragTable" v-loading="listLoading" :data="list" row-key="id" border fit highlight-current-row
              style="width: 100%" height="800"
              :row-class-name="tableRowClassName">

      <el-table-column align="center" label="初始排名" width="100" fixed>
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180px" align="center" label="姓名" fixed>
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" label="所在部门">
        <template slot-scope="{row}">
          <span>中后端研发部</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" label="所在部门">
        <template slot-scope="{row}">
          <span>中后端研发部</span>
        </template>
      </el-table-column>


      <el-table-column width="110px" label="当前绩效">
        <template slot-scope="{row}">
          <span>B</span>
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="所需绩效">
        <template slot-scope="{row}">
          <span>A</span>
        </template>
      </el-table-column>


      <el-table-column align="center" label="积分总值" width="95">
        <template slot-scope="{row}">
          <span>{{ row.pageviews }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Drag" width="80">
        <template slot-scope="{}">
          <svg-icon class="drag-handler" icon-class="drag"/>
        </template>
      </el-table-column>
    </el-table>
    <div class="show-d">
      <el-tag>初始排名 :</el-tag>
      {{ oldList }}
    </div>
    <div class="show-d">
      <el-tag>调整后排名 :</el-tag>
      {{ newList }}
    </div>
  </div>
</template>

<script>
import {fetchList} from '@/api/article'
import Sortable from 'sortablejs'
import configbutton from '@/views/approve/configbutton.vue';



export default {
  name: 'DragTable',
  components: { configbutton },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 280
      },
      sortable: null,
      oldList: [],
      newList: [],
      // 抽屉
      name: 'App',
      components: {configbutton}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const {data} = await fetchList(this.listQuery)
      this.list = data.items
      this.total = data.total
      this.listLoading = false
      this.oldList = this.list.map(v => v.id)
      this.newList = this.oldList.slice()
      this.$nextTick(() => {
        this.setSort()
      })
    },
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function (dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          this.list.splice(evt.newIndex, 0, targetRow)

          // for show the changes, you can delete in you code
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    },
    // 增加表格底纹逻辑 是否需要数据行数输入？？？
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  }
}
</script>

<style>
.sortable-ghost {
  opacity: .8;
  color: #fff !important;
  background: #42b983 !important;
}
</style>

<style scoped>
.icon-star {
  margin-right: 2px;
}

.drag-handler {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.show-d {
  margin-top: 15px;
}

.el-table .warning-row {
  background: #9da408;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
