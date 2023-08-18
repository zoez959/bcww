// method 1 直接读取展示在下面表格中
<!--<template>-->
<!--  <div>-->
<!--    <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick">-->
<!--&lt;!&ndash;    <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">&ndash;&gt;-->
<!--&lt;!&ndash;      Drop excel file here or&ndash;&gt;-->
<!--      <el-button :loading="loading" style="width:120px" type="primary" @click="handleUpload">-->
<!--        上传初始文件-->
<!--      </el-button>-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import XLSX from 'xlsx'-->

<!--export default {-->
<!--  props: {-->
<!--    beforeUpload: Function, // eslint-disable-line-->
<!--    onSuccess: Function// eslint-disable-line-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      loading: false,-->
<!--      excelData: {-->
<!--        header: null,-->
<!--        results: null-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    generateData({ header, results }) {-->
<!--      this.excelData.header = header-->
<!--      this.excelData.results = results-->
<!--      this.onSuccess && this.onSuccess(this.excelData)-->
<!--    },-->
<!--    handleDrop(e) {-->
<!--      e.stopPropagation()-->
<!--      e.preventDefault()-->
<!--      if (this.loading) return-->
<!--      const files = e.dataTransfer.files-->
<!--      if (files.length !== 1) {-->
<!--        this.$message.error('Only support uploading one file!')-->
<!--        return-->
<!--      }-->
<!--      const rawFile = files[0] // only use files[0]-->

<!--      if (!this.isExcel(rawFile)) {-->
<!--        this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')-->
<!--        return false-->
<!--      }-->
<!--      this.upload(rawFile)-->
<!--      e.stopPropagation()-->
<!--      e.preventDefault()-->
<!--    },-->
<!--    handleDragover(e) {-->
<!--      e.stopPropagation()-->
<!--      e.preventDefault()-->
<!--      e.dataTransfer.dropEffect = 'copy'-->
<!--    },-->
<!--    handleUpload() {-->
<!--      this.$refs['excel-upload-input'].click()-->
<!--    },-->
<!--    handleClick(e) {-->
<!--      const files = e.target.files-->
<!--      const rawFile = files[0] // only use files[0]-->
<!--      if (!rawFile) return-->
<!--      this.upload(rawFile)-->
<!--    },-->
<!--    upload(rawFile) {-->
<!--      this.$refs['excel-upload-input'].value = null // fix can't select the same excel-->

<!--      if (!this.beforeUpload) {-->
<!--        this.readerData(rawFile)-->
<!--        return-->
<!--      }-->
<!--      const before = this.beforeUpload(rawFile)-->
<!--      if (before) {-->
<!--        this.readerData(rawFile)-->
<!--      }-->
<!--    },-->
<!--    readerData(rawFile) {-->
<!--      this.loading = true-->
<!--      return new Promise((resolve, reject) => {-->
<!--        const reader = new FileReader()-->
<!--        reader.onload = e => {-->
<!--          const data = e.target.result-->
<!--          const workbook = XLSX.read(data, { type: 'array' })-->
<!--          const firstSheetName = workbook.SheetNames[0]-->
<!--          const worksheet = workbook.Sheets[firstSheetName]-->
<!--          const header = this.getHeaderRow(worksheet)-->
<!--          const results = XLSX.utils.sheet_to_json(worksheet)-->
<!--          this.generateData({ header, results })-->
<!--          this.loading = false-->
<!--          resolve()-->
<!--        }-->
<!--        reader.readAsArrayBuffer(rawFile)-->
<!--      })-->
<!--    },-->
<!--    getHeaderRow(sheet) {-->
<!--      const headers = []-->
<!--      const range = XLSX.utils.decode_range(sheet['!ref'])-->
<!--      let C-->
<!--      const R = range.s.r-->
<!--      /* start in the first row */-->
<!--      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */-->
<!--        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]-->
<!--        /* find the cell in the first row */-->
<!--        let hdr = 'UNKNOWN ' + C // <&#45;&#45; replace with your desired default-->
<!--        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)-->
<!--        headers.push(hdr)-->
<!--      }-->
<!--      return headers-->
<!--    },-->
<!--    isExcel(file) {-->
<!--      return /\.(xlsx|xls|csv)$/.test(file.name)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.excel-upload-input{-->
<!--  display: none;-->
<!--  z-index: -9999;-->
<!--}-->
<!--.drop{-->
<!--  border: 2px dashed #bbb;-->
<!--  width: 600px;-->
<!--  height: 160px;-->
<!--  line-height: 160px;-->
<!--  margin: 0 auto;-->
<!--  font-size: 24px;-->
<!--  border-radius: 5px;-->
<!--  text-align: center;-->
<!--  color: #bbb;-->
<!--  position: relative;-->
<!--}-->
<!--</style>-->

// method 2
<template>
  <el-upload action="string"
    accept='.xlsx'
    :http-request='lead'
  >
    <el-button
      type="primary"
      style="width: 120px"
    >导入Excel
    </el-button>
  </el-upload>

</template>

<script>
import xlsx from 'xlsx'
import request from '@/utils/request'

export default {
  // 定义数据模板
  data() {
    return {
      changeCnToEn: {
        '姓名': 'name',
        '年龄': 'age',
      },
      tableLIst: []
    }
  },
  methods: {
    // 把文件按照二进制方式读取
    readFile(file) {
      return new Promise(resolve => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = ev => {
          resolve(ev.target.result)
        }
      })
    },
// 导入文件
    async inputFile(e) {
      console.log(e)
      this.lead(e);
      return;
      this.inputFileName = e.name
      let file = e.raw
      console.log('e', e);
      if (!file) return
      // console.log(file)
      // 读取file文件的内容(转换为json格式)
      let data = await this.readFile(file)
      console.log(data) //解析出的二进制文件
      // type :'binary' 类型为二进制
      let eleData = xlsx.read(data, {type: "binary"})
      // console.log(eleData)
      let eleDataSheet = eleData.Sheets[eleData.SheetNames[0]]
      eleData = xlsx.utils.sheet_to_json(eleDataSheet) // 将解析出的数据转换为json格式（xlsx自带的方法）
      // eleData = eleData.length >1? eleData[1] : eleData[0]
      // console.log(eleData)
      const arr = []
      console.log(Object.keys(this.changeCnToEn))
      eleData.forEach(item => {
        const userInfo = {}
        //  console.log(Object.keys(item))
        Object.keys(item).forEach(key => {
          userInfo[this.changeCnToEn[key]] = item[key]
        })
        // console.log(userInfo)
        arr.push(userInfo)
      })
      this.tableLIst = arr
      console.log(arr) // 数组对象 就是Excel里的数据
      setTimeout(() => {
        this.lead(e)
      }, 500)
    },
    // 请求后端接口
    lead(file) {
      // const leadData = {
      //   // '姓名': 'aaa', // this.tableLIst 表格数据
      //   file,
      // }
      const formData = new FormData()
      formData.append('file', file)
      request({
        url: '/configCenterApi/zztest/originalPerformance/importExcel',
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        params: formData
      }).then(res => {
        console.log(res, 'res');
      })
    }
  }
}
</script>



// method 3
<!--<template>-->
<!--  <div>-->
<!--    <el-button type="primary" @click="importStudentExcel()" >导入初始文件</el-button>-->

<!--    <el-dialog title="导入" v-model="importDialogVisible" width="45%">-->
<!--      <input ref="file" type="file" accept=".xlsx,.xls" style="display: none;" @change="uploadFile">-->
<!--      <el-button type="primary" icon="el-icon-upload" @click="clickFile">选择文件</el-button>-->
<!--    </el-dialog>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import xlsx from 'xlsx'-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      importDialogVisible: false,-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    importStudentExcel() {-->
<!--      this.importDialogVisible = true;-->
<!--    },-->
<!--    // 选择文件事件-->
<!--    clickFile() {-->
<!--      this.$refs.file.dispatchEvent(new MouseEvent('click'))-->
<!--    },-->
<!--    // 上传文件-->
<!--    async uploadFile() {-->
<!--      const file = this.$refs.file.files-->
<!--      var extName = file[0].name.substring(file[0].name.lastIndexOf('.')).toLowerCase()-->
<!--      if (extName === '.xlsx' || extName === '.xls') {-->
<!--        var formData = new FormData()-->
<!--        formData.append('file', file[0])-->
<!--        request.post("http://172.16.126.90:10032/configCenterApi/zztest/originalPerformance/importExcel", formData).then(res => {-->
<!--          if (res.code === '200') {-->
<!--            this.$message({-->
<!--              type: 'success',-->
<!--              message: '数据导入成功!'-->
<!--            })-->
<!--          } else {-->
<!--            this.$message({-->
<!--              type: "error",-->
<!--              message: res.msg-->
<!--            })-->
<!--          }-->
<!--        })-->
<!--      } else {-->
<!--        this.$message.error('数据导入失败，请使用正确的xlsx模板文件')-->
<!--      }-->
<!--      this.importDialogVisible = false;-->
<!--      this.load();-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->
