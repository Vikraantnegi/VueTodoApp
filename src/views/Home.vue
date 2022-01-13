<template>
  <div class="home">
    <div class="headHome">
      <div class="homeDate">{{ date }}</div>
      <div class="tasksStatus">{{ incomplete }} Unfinished, {{ completed }} Finished </div>
    </div>
    <div class="homeContent">
      <div class="homeContent__head">My Tasks</div>
      <div class="homeContent__buttons">
        <div @click="filter('all')" class="filterButton grow">
          All Tasks
        </div>
        <div @click="filter('incomplete')" class="filterButton grow">
          Incomplete Tasks
        </div>
        <div @click="filter('completed')" class="filterButton grow">
          Completed Tasks
        </div>
      </div>
      <div class="homeContent__tasks">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    date: 'January 13, 2022',
    incomplete: 3,
    completed: 3,
  }),
  methods: {
    filter: function(val){
      console.log(val)
    }
  },
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
  overflow-y: auto;
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
  border: 1px solid #FFFFFF;
  border-radius: 8px;
}
</style>