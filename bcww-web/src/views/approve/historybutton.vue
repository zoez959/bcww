<template>
  <div id="historybutton">
    <el-form :model="form" class="form" ref="form" label-width="100px" >

      <el-timeline style="width: 320px; height: 620px; overflow: auto">
        <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
          <el-card>
            <h4>{{ item.title }}</h4>
            <el-button>回溯该版本</el-button>
          </el-card>
        </el-timeline-item>
      </el-timeline>

<!--      <el-form-item label="历史版本" style="margin-top: 20px">-->
<!--        <el-select v-model="form.filetitle">-->
<!--          <el-option label="10:00:00 version1" value="0"></el-option>-->
<!--          <el-option label="11:00:00 version2" value="1"></el-option>-->
<!--          <el-option label="12:00:00 version3" value="2"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->

      <el-form-item>
        <el-row style="margin-top: 30px; margin-right:15px; float: right">
          <el-button @click="onSubmit00">取消</el-button>
          <el-button type="success" @click="onSubmit">确认修改</el-button>
        </el-row>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

export default {
  name: 'historybutton',
  data() {
    return {
      timeline: [
        {
          updateTime: '2023/10/14 10:00:00',
          title: 'Version3',
        },
        {
          updateTime: '2023/10/14 10:00:00',
          title: 'Version2',
        },
        {
          updateTime: '2023/10/14 10:00:00',
          title: 'Version1',
        }
      ]
    }
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 2px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
