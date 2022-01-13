<template>
  <div class="home">
    <div class="headHome">
      <div class="homeDate">{{ date }}</div>
      <div class="tasksStatus">{{ incomplete }} Unfinished, {{ completed }} Finished </div>
    </div>
    <div class="homeContent">
      <div class="homeContent__head">My Tasks</div>
      <div class="homeContent__buttons">
        <div @click="filter('all')" class="filterButton grow pointer">
          All Tasks
        </div>
        <div @click="filter('incomplete')" class="filterButton grow pointer">
          Incomplete Tasks
        </div>
        <div @click="filter('completed')" class="filterButton grow pointer">
          Completed Tasks
        </div>
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
  </div>
</template>

<script>
  import ToDoData from '../assets/todo'
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    date: 'January 13, 2022',
    filterVal: '',
    incomplete: 0,
    completed: 0,
    list: ToDoData,
  }),
  computed: {
    todosFiltered(){
      if(this.filterVal === 'all'){
        return this.list;
      } else if(this.filterVal === 'incomplete'){
        return this.list.filter(task => task.done === false)
      } else if(this.filterVal === 'completed'){
        return this.list.filter(task => task.done === true)
      }
      return this.list
    },
  },
  methods: {
    filter: function(val){
      this.filterVal = val;
    }, 
    changeStatus: function(index){
      var current = this.list.filter(task => task.done === true)
      current[index].done = !current[index].done
    },
    deleteTodo: function(index){
      this.list.splice(index, 1);
    },
    editTodo: function(task){
      this.$router.push({name: 'Add', params: task})
    }
  },
  created(){
    if(Object.keys(this.$route.params).length){
      this.list = this.$route.params.list
      console.log(this.list)
    }
    this.incomplete = this.list.filter(task => !task.done).length
    this.completed = this.list.filter(task => task.done).length
  },
  updated(){
    this.incomplete = this.list.filter(task => !task.done).length
    this.completed = this.list.filter(task => task.done).length
  }
}
</script>

<style>
.headHome{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(87, 87, 103, 0.4);
}
.homeDate{
  font-weight: bold;
  font-size: 32px;
}
.tasksStatus{
  font-weight: 600;
  font-size: 18px;
  color: #575767
}
.homeContent{
  padding: 20px 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.homeContent__head{
  font-weight: bold;
  font-size: 28px;
}
.homeContent__buttons{
  display: flex;
  flex-direction: row;
  padding: 0 30px;
  gap: 20px;
}
.filterButton{
  padding: 12px 16px;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  color: #FFFFFF;
}
.homeContent__tasks{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin: 20px 20px 40px 20px;
}
.todo{
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 240px;
    color: #141419;
    border-radius: 16px;
    padding: 20px;
    gap: 5px;
}
.todo__head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.doneIcon{
    color: #00D100;
    font-size: 20px;
}
.todo__actions{
    display: flex;
    flex-direction: row;
    margin-left: auto;
    gap: 5px;
    align-items: center;
}
.editLogo{
    color: #DD8F0E;
    font-size: 24px;
}
.deleteLogo{
    color: #f00e0e;
    font-size: 20px;;
}
.todo__title{
    font-weight: 600;
    text-align: center;
    font-size: 20px;
}
.todo__description{
    font-weight: 500;
    font-size: 18px;
    color: rgba(20,20,25, 0.9);
    height: 100px;
}
.todo__data{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    color: #575767;
    padding: 0px 5px;
}
.todo__mark{
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    color: grey;
    margin-top: 10px;
    margin-right: 5px;
    gap: 5px;
}
</style>