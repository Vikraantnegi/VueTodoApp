<template>
  <div class="add">
    <div class="headAdd">
      <div class="homeDate">Add To-Do</div>
    </div>
    <div class="homeContent">
      <div class="homeContent__head">New Tasks</div>
    </div>
    <div class="addForm">
      <div class="TitleForm">
        <label class="TitleLabel">Title </label>
        <input v-model="title" class="TitleInput" placeholder="Add Title here..." />
      </div>
      <div class="DescriptionForm">
        <label class="DescriptionLabel">Description </label>
        <textarea v-model="message" class="DescriptionInput" placeholder="Add Description here..." />
      </div>
      <div class="addTodoButton grow pointer" @click="addTask"><i class="fas fa-plus ADDLogo"></i> Add New Task!</div>
    </div>
  </div>
</template>

<script>
import ToDoData from '../assets/todo'
export default{
  name: 'Add',
  data: () => ({
    title: '',
    message: '',
    list: ToDoData,
  }),
  methods: {
    addTask: function(){
      if(this.title && this.message){
        var d = new Date();
        var object = {
          "id": ToDoData.length+1,
          "title": this.title,
          "done": false, 
          "description": this.message,
          "author": "Vikrant Negi",
          "createdDate": `${d.getDate() + '/' + d.getMonth()+1 + '/' + d.getFullYear()}`,
        }
        ToDoData.push(object)
        this.$router.push({ name: 'Home' })
        this.title=""
        this.message=""
      }
    }
  }
}
</script>

<style>
.headAdd{
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(87, 87, 103, 0.4);
}
.addForm, .TitleForm, .DescriptionForm{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.addForm{
  padding: 0 40px;
  margin-bottom: 40px;
}
.TitleForm, .DescriptionForm{
  gap: 5px;
  width: 40%;
}
.TitleLabel, .DescriptionLabel{
  font-weight: 700;
  font-size: 24px;
}
.TitleInput, .DescriptionInput{
  border: none;
  outline: none;
  padding: 7px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}
.addTodoButton{
  border: 1px solid #FFFFFF;
  padding: 12px 20px;
  border-radius: 8px;
  width: fit-content;
}
</style>