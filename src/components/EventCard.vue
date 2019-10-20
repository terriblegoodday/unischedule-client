<template>
  <div class="event">
    <div v-if="event != null" class="container">
      <h2><span>{{event.place}}</span> {{event.description}}</h2>
      <h3>{{event.teacher.fullName}}</h3>
      <h3>Лабораторные занятия</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ['event']
}
</script>
