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
        <div class="todo" v-for="(task, index) in current" :key="task.id">
            <div class="todo__head">
                <div @click="changeStatus(index)" v-show="task.done" class="doneIcon grow pointer">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="todo__actions">
                    <i @click="editTodo(index)" class="fas fa-pen-square editLogo grow pointer"></i>
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
export default {
  name: 'Active',
  components: {
  },
  data: () => ({
    date: 'January 13, 2022',
    incomplete: 3,
    current: [],
    list: [{
          "id": 1,
          "title":"Learn HTML I",
          "done":true, 
          "description": "Learn HTML-I till 11th, and then move forward.",
          "author": "Vikrant Negi",
          "createdDate": "10/01/2022",
          "finishedDate": "11/01/2022",
      }, {
          "id": 2,
          "title":"Learn CSS",
          "done":true, 
          "description": "Learn CSS till 12th, and then move forward.",
          "author": "Vikrant Negi",
          "createdDate": "10/01/2022",
          "finishedDate": "12/01/2022",
      }, {
          "id": 3,
          "title":"Responsive design",
          "done":false, 
          "description": "Learn Responsive design till 15th, and then move forward.",
          "author": "Vikrant Negi",
          "createdDate": "10/01/2022",
      }, {
          "id": 4,
          "title":"Learn Git",
          "done":false, 
          "description": "Learn Git till 18th, and then move forward.",
          "author": "Vikrant Negi",
          "createdDate": "10/01/2022",
      }, {
          "id": 5,
          "title":"Learn JavaScript I",
          "done":true, 
          "description": "Learn JavaScript-I till 13th, and then move forward.",
          "author": "Vikrant Negi",
          "createdDate": "10/01/2022",
          "finishedDate": "13/01/2022",
      }, {
          "id": 6,
          "title":"Learn JavaScript II",
          "done":false, 
          "description": "Learn JavaScript-II till 20th, and then move forward.",
          "author": "Vikrant Negi",
          "createdDate": "10/01/2022",
      },
    ],
  }),
  methods: {
    changeStatus: function(index){
      this.current[index].done = !this.current[index].done
    },
    deleteTodo: function(index){
      this.current.splice(index, 1);
    },
    editTodo: function(){

    }
  },
  created(){
    this.current = this.list.filter(task => !task.done)
    this.incomplete = this.current.length
  },
  updated(){
    this.incomplete = this.current.length
  }
}
</script>
