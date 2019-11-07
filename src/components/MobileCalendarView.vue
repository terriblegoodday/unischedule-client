<template>
  <main>
    <div class="calendar-view">
      <div class="timemeter">
          <div class="event 1">
              <p class="start-time">08:30</p>
              <p class="class-number">1</p>
              <p class="end-time">10:00</p>
          </div>
          <div class="event 2">
              <p class="start-time">10:10</p>
              <p class="class-number">2</p>
              <p class="end-time">11:40</p>
          </div>
          <div class="event 3">
              <p class="start-time">11:50</p>
              <p class="class-number">3</p>
              <p class="end-time">13:20</p>
          </div>
          <div class="event 4">
              <p class="start-time">13:30</p>
              <p class="class-number">4</p>
              <p class="end-time">15:00</p>
          </div>
          <div class="event 5">
              <p class="start-time">15:10</p>
              <p class="class-number">5</p>
              <p class="end-time">16:40</p>
          </div>
          <div class="event 6">
              <p class="start-time">16:50</p>
              <p class="class-number">6</p>
              <p class="end-time">18:30</p>
          </div>
          <div class="event 7">
              <p class="start-time">18:40</p>
              <p class="class-number">7</p>
              <p class="end-time">20:20</p>
          </div>
          <div class="event 8">
              <p class="start-time">20:30</p>
              <p class="class-number">8</p>
              <p class="end-time">22:00</p>
          </div>
      </div>
      <DayView :events="calendar[day].classes" />
    </div>
  </main>
</template>

<script>
import DayView from './DayView'

export default {
  name: 'CalendarView',
  components: {
    DayView
  },
  props: ['calendar', 'classes', 'day']
}
</script>
