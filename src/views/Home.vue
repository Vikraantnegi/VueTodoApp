<template>
  <div class="home">
    <div class="headHome">
      <div class="homeDate">{{ date }}</div>
      <div class="tasksStatus">{{ incomplete }} Unfinished, {{ completed }} Finished </div>
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
</style>