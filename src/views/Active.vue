<template>
  <div class="active">
    <div class="headHome">
      <div class="homeDate">{{ date }}</div>
      <div class="tasksStatus">{{ incomplete }} Unfinished </div>
    </div>
    <div class="homeContent">
      <div class="homeContent__head">My Tasks</div>
    </div>
    <div class="homeContent__tasks">
        <div class="todo" v-for="(task, index) in todosFiltered" :key="task.id">
            <div class="todo__head">
                <div class="todo__actions">
                    <i @click="editTodo(task)" class="fas fa-pen-square editLogo grow pointer"></i>
                    <i @click="deleteTodo(index)" class="fas fa-trash deleteLogo grow pointer"></i>
                </div>
            </div>
            <div class="todo__title">{{ task.title }}</div>
            <div class="todo__description">{{ task.description }}</div>
            <div class="todo__data">
                <div class="todo__author">{{ task.author }}</div>
                <div class="todo__date">{{ task.createdDate }}</div>
            </div>
            <div class="todo__mark" v-if="!task.done">
                <input type="checkbox" class="finishCheckbox" v-model="task.done">
                <label for="checkbox">Mark as Finished</label>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  import ToDoData from '../assets/todo'
export default {
  name: 'Active',
  components: {
  },
  data: () => ({
    date: 'January 13, 2022',
    incomplete: 0,
    current: [],
    list: ToDoData,
  }),
  computed: {
    todosFiltered(){
      return this.current.filter(task => !task.done)
    }
  },
  methods: {
    deleteTodo: function(index){
      this.current.splice(index, 1)
    },
    editTodo: function(task){
      this.$router.push({name: 'Add', params: task})
    }
  },
  created(){
    this.current = this.list.filter(task => !task.done)
    this.incomplete = this.list.filter(task => !task.done).length
  },
  updated(){
    this.incomplete = this.list.filter(task => !task.done).length
  }
}
</script>
