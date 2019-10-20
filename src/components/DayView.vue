<template>
  <div class="dayview">
    <!-- <div class="event 1">
        <div class="container">
          <h2><span>D743</span> Алгоритмы и структуры данных</h2>
          <h3>Остроухова Светлана Николаевна</h3>
          <h3>Лекционные занятия</h3>
        </div>
    </div> -->
    <EventCard v-for="event in events" v-bind:event="event" />
  </div>
</template>

<script>
import EventCard from './EventCard'

export default {
  name: 'DayView',
  components: {
    EventCard
  },
  props: ['events']
}
</script>
