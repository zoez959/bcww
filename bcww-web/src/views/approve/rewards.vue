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
