<template>
  <div class="app-container">
    <div class ="config" style="margin-bottom: 25px">
      <el-row style="margin-bottom: 5px">
        <el-col :span="12">
          <el-button type="warning" @click="drawer1 = true" style="width: 400px" icon="el-icon-edit" round>阈值面板</el-button>
        </el-col>
        <el-col :span="9" style="text-align: right">
          <el-upload
            action="string"
            class="upload-excel"
            :http-request="Uploadexcel"
            :show-file-list="false"
          >
            <el-button type="primary" style="width:120px" >上传初始文件</el-button>
          </el-upload>
        </el-col>
        <el-col :span="3" style="text-align: right">
          <el-button type="primary" @click="dialog = true" style="width:120px">下载</el-button>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="dialog = true" style="width: 120px">变量选择</el-button>

        </el-col>
        <el-col :span="9" style="text-align: right">
          <el-button type="primary" @click="dialog = true" style="width:120px">确定修改</el-button>
        </el-col>
        <el-col :span="3" style="text-align: right">
          <el-button type="primary" @click="drawer2 = true" style="width:120px">历史版本</el-button>
        </el-col>
      </el-row>

      <el-drawer
        title="修改配置项"
        size= 40%
        :visible.sync="drawer1"
        :direction ='direction1'
        :with-header="false">
        <div id="App">
          <configbutton></configbutton>
        </div>
      </el-drawer>

      <el-drawer
        title="历史版本回溯"
        size= 25%
        :visible.sync="drawer2"
        :direction ='direction2'
        :with-header="true">
        <div id="App2">
          <historybutton></historybutton>
        </div>
      </el-drawer>

    </div>

    <el-table ref="dragTable" v-loading="listLoading" :data="list" row-key="originalRank" border fit highlight-current-row
              style="width: 100%" height="620px"
              :row-class-name="tableRowClassName">

      <el-table-column width="50px" type="index" label="索引" align="center" fixed>
      </el-table-column>

      <el-table-column width="110px" prop= 'originalRank' label="初始排名" align="center" sortable>
      </el-table-column>

      <el-table-column min-width="110px" align="center" prop='name' label="姓名">
      </el-table-column>

      <el-table-column width="110px" prop='aduser' label="OA账号">
      </el-table-column>

      <el-table-column width="150px" prop='subDepartment' label="所在部门">
      </el-table-column>

      <!--      <el-table-column width="110px" prop='PointTwo' label="两年前it积分">-->
      <!--      </el-table-column>-->

      <!--      <el-table-column width="110px" prop='PointOne' label="一年前it积分">-->
      <!--      </el-table-column>-->

      <!--      <el-table-column width="110px" prop='PointNow' label="今年it积分">-->
      <!--      </el-table-column>-->

      <!--      <el-table-column width="110px" prop='perfPoint' label="公司积分">-->
      <!--      </el-table-column>-->

      <!--      <el-table-column width="110px" prop='perfUp' label="绩效能否调升">-->
      <!--      </el-table-column>-->

      <!--      <el-table-column width="110px" prop='minPerf' label="所需最小绩效">-->
      <!--      </el-table-column>-->

      <el-table-column width="110px" prop="grade" label="职级">
      </el-table-column>

      <el-table-column class-name="status-col" prop="schoolRecruit" label="是否校招生" width="110">
      </el-table-column>

      <el-table-column prop="adjustYear" label="职级调整记录" width="110">
      </el-table-column>

      <el-table-column align="center" label="拖拽" width="80">
        <template>
          <i class="el-icon-rank"></i>
        </template>
      </el-table-column>
    </el-table>

    <!--    // 点击确定后向后端传输调整后排名-->
<!--    <el-upload-->
<!--      action="string"-->
<!--      class="upload-rankchange"-->
<!--      :http-request="rankChange"-->
<!--    >-->
      <el-button type="primary" @click="uploadRank" style="width: 120px; margin-top: 10px">确定</el-button>

<!--    </el-upload>-->


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
import Sortable from 'sortablejs'
import configbutton from './configbutton.vue';
import historybutton from './historybutton.vue'
// import {getPerformanceInfo} from "@/api/kpi";
import dialog from "element-ui/packages/dialog";
import {saveVersionData} from "@/api/kpi";

export default {
  name: 'DragTable',
  computed: {
    dialog() {
      return dialog
    }
  },
  components: { configbutton, historybutton },
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
        limit: 10
      },
      sortable: null,
      oldList: [],
      newList: [],
      // 抽屉1
      components: {configbutton, historybutton},
      drawer1: false,
      direction1: 'ttb',
      // 抽屉2
      drawer2: false,
      direction2: 'rtl',
      // Version
      version: 0,
      timeLine: null,

    }
  },
  created() {
    this.getList()
    // this.initVersion()
  },
  methods: {
    async initVersion() {
      // 请求后端成功
      // this.timeLine = [
      //   {
      //     timestamp: '2023/10/14 10:00:00',
      //     title: 'Version3',
      //   },
      //   {
      //     timestamp: '2023/10/14 10:00:00',
      //     title: 'Version2',
      //   },
      //   {
      //     timestamp: '2023/10/14 10:00:00',
      //     title: 'Version1',
      //   }
      // ]
    },
    async getList() {
      this.listLoading = true
      // const {data} = await getPerformanceInfo()
      // if (data.code === 200 && data.success) {
      //   this.$message.success('查询成功！')
      //   this.list = data.result
      //   this.total = data.result.length
      //   test
      let stafflist = [
        {originalRank: 2, aduser:'b1', name:'bb' },
        {originalRank: 1, aduser:'a1', name:'aa' },
        {originalRank: 3, aduser:'c1', name:'cc' }
      ]
      this.list = stafflist
      this.total = stafflist.length
      this.list.sort((a, b) => a.originalRank - b.originalRank)
      this.listLoading = false
      this.oldList = this.list.map(v => v.originalRank)
      this.newList = this.oldList.slice()
      this.$nextTick(() => {
        this.setSort()
      })
      // } else {
      //   this.$message.error('查询失败！');
    // }
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
    // 增加表格底纹逻辑 是否需要数据行数输入
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 0) {
        return 'A-row' ;
      } else if (rowIndex === 1) {
        return 'B-row' ;
      }else if (rowIndex === 2){
        return 'C-row'
      }else if (rowIndex === 3){
        return 'D-row'
      }
      return 'E-row';
    },
    Uploadexcel(file, fileList) {
      console.log('file', file, fileList);
      const formData = new FormData();
      formData.append('file', file.file);

      fetch('/configCenterApi/zztest/originalPerformance/importExcel', {
        method: "post",
        body: formData,
      })
        .then((res) => {
          if (res.status === 200 && res.ok) {
            this.$message.success('上传成功！');
          }
        })
        .catch((_) => {
          this.$message.error('上传失败！');
        })
    },
    // 点击确定后 上传修改后排名
    uploadRank: function (){
      // console.log(this.list);
      var param = {
        version: this.Version,
        stashPerformanceList:[],
      }
      for (let i=0; i<this.list.length; i++) {
        param.stashPerformanceList[i] = {
          aduser: this.list[i].aduser,
          rank: i+1,
        }
      }
      console.log(param)
      saveVersionData(param).then((res) => {
        if (res.status === 200 && res.ok && res.data.code === 200 && res.data.success) {
          this.$message.success('当前version保存成功！');
          version ++;
        }else {
          this.$message.error('当前version保存失败！');
        }
      })
        // .catch((_) => {
        //   this.$message.error('当前version保存失败！');
        // })

    },
    testfunc() {
      let tmpMa = {}
      for (let i = 0; i < this.list.length;i++) {
        let key = this.list[i].aduser
        tmpMa[key] = this.list[i]
      }
      let res = {
        data: {
          result: {
            rank: {
            }
          }
        }
      }
      let rank = res.data.result.rank
      let newList = []
      for (let key in rank) {
        newList[rank[key] - 1] = tmpMa[key]
      }
      this.list = newList
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

.show-d {
  margin-top: 15px;
}

.el-table .A-row {
  background: rgba(211, 225, 246, 0.98);
}

.el-table .B-row {
  background: rgba(204, 227, 192, 0.99);
}

.el-table .C-row {
  background: rgba(169, 169, 169, 0.99);
}

.el-table .D-row {
  background: rgba(231, 189, 205, 0.39);
}

.el-table .E-row {
  background: rgba(212, 180, 243, 0.98);
}

</style>
