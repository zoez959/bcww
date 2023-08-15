<template>
  <div id="configbutton">
    <el-form :model="form" class="form" ref="form" label-width="100px" style="margin-left:20px">
      <el-row>
        <el-col :span="12">
          <div style="font-weight: bold ; margin-top:20px; margin-left: 20px; margin-bottom: 20px">绩效分配：</div>
        </el-col>
        <el-col :span="12">
          <div style="font-weight: bold ; margin-top:20px; margin-left: 20px; margin-bottom: 20px">绩效规则：</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="A级人数">
            <el-input v-model="input0" placeholder="默认阈值：20" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="B级人数">
            <el-input v-model="input1" placeholder="默认阈值：60" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="A3以下">
            <el-input v-model="iinput0" placeholder="默认上调阈值：6" style="width: 200px; margin-right:10px"></el-input>
            <el-input v-model="iinput1" placeholder="默认下调阈值：-8" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="C级人数">
            <el-input v-model="input2" placeholder="默认阈值：120" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="D级人数">
            <el-input v-model="input3" placeholder="默认阈值：40" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="AS">
            <el-input v-model="iinput2" placeholder="默认上调阈值：10" style="width: 200px; margin-right:10px"></el-input>
            <el-input v-model="iinput3" placeholder="默认下调阈值：-6" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="E级人数">
            <el-input v-model="input4" placeholder="默认阈值：60" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="VP">
            <el-input v-model="iinput4" placeholder="默认上调阈值：15" style="width: 200px; margin-right:10px"></el-input>
            <el-input v-model="iinput5" placeholder="默认下调阈值：-4" style="width: 200px"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!--      <el-form-item label="历史版本" style="margin-top: 50px">-->
      <!--        <el-select v-model="form.filetitle">-->
      <!--          <el-option label="10:00:00 version1" value="0"></el-option>-->
      <!--          <el-option label="11:00:00 version2" value="1"></el-option>-->
      <!--          <el-option label="12:00:00 version3" value="2"></el-option>-->
      <!--        </el-select>-->
      <!--      </el-form-item>-->

      <el-form-item>
        <el-row style="margin-top: 10px; margin-right:15px; float: right">
          <el-button @click="onSubmit00">取消</el-button>
          <el-button type="success" @click="onSubmit">确认修改</el-button>
        </el-row>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

export default {
  name: 'configbutton',
  data() {
    return {
      input0: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      iinput0: '',
      iinput1: '',
      iinput2: '',
      iinput3: '',
      iinput4: '',
      iinput5: '',
      // form: {
      //   filetitle: '当前版本'
      // },
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
