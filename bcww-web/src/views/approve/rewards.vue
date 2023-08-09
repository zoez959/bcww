<template>
  <div class="components-container board">
    <Kanban :key="1" :list="list1" :group="group" class="kanban A" header-text="绩效A cnt=" />
    <Kanban :key="2" :list="list2" :group="group" class="kanban B" header-text="绩效B" />
    <Kanban :key="3" :list="list3" :group="group" class="kanban C" header-text="绩效C" />
    <Kanban :key="4" :list="list4" :group="group" class="kanban D" header-text="绩效D" />
    <Kanban :key="5" :list="list5" :group="group" class="kanban E" header-text="绩效E" />
  </div>
</template>
<script>
import Kanban from '@/components/Kanban'

export default {
  name: 'DragKanbanDemo',
  components: {
    Kanban
  },
  data() {
    return {
      group: 'member',
      list1: [
        { name: '员工1', from: '中后端研发', needgrade: '需要：A' },
        { name: '员工2', from: '中后端研发', needgrade: '需要：A' },
        { name: '员工3', from: '中后端研发', needgrade: '需要：A' },
        { name: '员工4', from: '中后端研发', needgrade: '需要：A' }
      ],
      list2: [
        { name: '员工5', from: '中后端研发', needgrade: '需要：A' },
        { name: '员工6', from: '中后端研发', needgrade: '需要：A' },
        { name: '员工7', from: '中后端研发', needgrade: '需要：A' }
      ],
      list3: [
        { name: '员工8', from: '中后端研发', needgrade: '需要：A' },
        { name: '员工9', from: '中后端研发', needgrade: '需要：A' }
      ],
      list4: [
        { name: '员工10', from: '中后端研发', needgrade: '需要：A' },
      ],
      list5: [
        { name: '员工1', from: '中后端研发', needgrade: '需要：A' }
      ]
    }
  }
}
</script>
<style lang="scss">
.board {
  width: 1200px;
  margin-left: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  &.A {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.B {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.C {
    .board-column-header {
      background: #2ac06d;
    }
  }
  &.D {
    .board-column-header {
      background: #9da408;
    }
  }
  &.E {
    .board-column-header {
      background: #5a5e66;
    }
  }
}
</style>

