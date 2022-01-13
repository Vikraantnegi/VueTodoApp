<template>
    <div class="navBar">
      <router-link class="homeLogo grow" to="/"><i class="fas fa-list-alt ToDologo"></i> Get It Done!</router-link>
      <div class="rightNav">
        <router-link class="addTodo grow" to="/add"><i class="fas fa-plus ADDLogo"></i> Add To-Do!</router-link>
        <div class="user">
          <i class="fas fa-user-circle userIcon"></i>
          <div class="username">Vikrant Negi</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default{
        name: 'NavBar',
        props: {
            user: String
        },
    }
</script>

<style scoped>
.navBar{
  padding: 30px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.navBar a{
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
}
.rightNav{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.ToDologo, .userIcon{
  font-size: 30px;
}
.homeLogo, .addTodo, .user{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.homeLogo{
  color: #42b983 !important;
}
.addTodo{
  border: 1px solid #FFFFFF;
  padding: 12px 20px;
  border-radius: 8px;
}
.ADDLogo{
  font-size: 20px;
}
.username{
  font-weight: 600;
}
</style>
<style>
.grow:hover{
  transition: all .2s ease-in-out;
  transform: scale(1.1);
}
.pointer{
  cursor: pointer;
}
</style>