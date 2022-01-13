<template>
  <div class="completed">
    <div class="headHome">
      <div class="homeDate">{{ date }}</div>
      <div class="tasksStatus">{{ completed }} Finished </div>
    </div>
    <div class="homeContent">
      <div class="homeContent__head">My Tasks</div>
    </div>
    <div class="homeContent__tasks">
        <div class="todo" v-for="(task, index) in todosFiltered" :key="task.id">
            <div class="todo__head">
                <div @click="changeStatus(index)" v-show="task.done" class="doneIcon grow pointer">
                    <i class="fas fa-check-circle"></i>
                </div>
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
  name: 'Completed',
  components: {
  },
  data: () => ({
    date: 'January 13, 2022',
    completed: 0,
    current: [],
    list: ToDoData,
  }),
  computed: {
    todosFiltered(){
      return this.current.filter(task => task.done)
    }
  },
  methods: {
    changeStatus: function(index){
      this.current[index].done = !this.current[index].done
    },
    deleteTodo: function(index){
      this.current.splice(index, 1);
    },
    editTodo: function(task){
      this.$router.push({name: 'Add', params: task})
    }
  },
  created(){
    this.current = this.list.filter(task => task.done)
    this.completed = this.current.length
  },
  updated(){
    this.completed = this.current.length
  }
}
</script>
