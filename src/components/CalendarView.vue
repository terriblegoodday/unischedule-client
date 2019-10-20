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
              <p class="start-time">16:40</p>
              <p class="class-number">6</p>
              <p class="end-time">18:30</p>
          </div>
      </div>
      <DayView v-for="day in calendar" v-bind:events="day" />
      
      <!-- <div class="dayview monday">
        <div class="event 1">
            <div class="container">
              <h2><span>D743</span> Алгоритмы и структуры данных</h2>
              <h3>Остроухова Светлана Николаевна</h3>
              <h3>Лекционные занятия</h3>
            </div>
        </div>
        <div class="event 2">
            <div class="container">
                <h2><span>D743</span> Алгоритмы и структуры данных</h2>
                <h3>Остроухова Светлана Николаевна</h3>
                <h3>Лабораторные занятия</h3>
              </div>
          </div>
        <div class="event 3">

        </div>
        <div class="event 4">

        </div>
        <div class="event 5">

        </div>
        <div class="event 6">

        </div>
      </div> -->
      <!-- <div class="dayview tuesday">
        <div class="event 1">

        </div>
        <div class="event 2">

        </div>
        <div class="event 3">

        </div>
        <div class="event 4">

        </div>
        <div class="event 5">

        </div>
        <div class="event 6">

        </div>
      </div>
      <div class="dayview wednesday active">
        <div class="event 1">

        </div>
        <div class="event 2">
          <div class="container">
              <h2><span>D743</span> Алгоритмы и структуры данных</h2>
              <h3>Остроухова Светлана Николаевна</h3>
              <h3>Лабораторные занятия</h3>
          </div>
        </div>
        <div class="event 3">

        </div>
        <div class="event 4">
          <div class="container">
              <h2><span>L607</span> Английский для профессиональных / специфических целей (English for Specific Purposes / ESP)</h2>
              <h3>Ардеева Галина Леонидовна</h3>
              <h3>Практические занятия</h3>
          </div>
        </div>
        <div class="event 5">
        </div>
        <div class="event 6">

        </div>
      </div>
      <div class="dayview thursday">
        <div class="event 1">

        </div>
        <div class="event 2">

        </div>
        <div class="event 3">

        </div>
        <div class="event 4">
          <div class="container">
              <h2><span>D743</span> Алгоритмы и структуры данных</h2>
              <h3>Остроухова Светлана Николаевна</h3>
              <h3>Лабораторные занятия</h3>
          </div>
        </div>
        <div class="event 5">

        </div>
        <div class="event 6">

        </div>
      </div>
      <div class="dayview friday">
        <div class="event 1">
          <div class="container">
              <h2><span>D743</span> Алгоритмы и структуры данных</h2>
              <h3>Остроухова Светлана Николаевна</h3>
              <h3>Лабораторные занятия</h3>
          </div>
        </div>
        <div class="event 2">

        </div>
        <div class="event 3">

        </div>
        <div class="event 4">

        </div>
        <div class="event 5">

        </div>
        <div class="event 6">

        </div>
      </div>
      <div class="dayview saturday">
        <div class="event 1">
          <div class="container">
              <h2><span>D743</span> Алгоритмы и структуры данных</h2>
              <h3>Остроухова Светлана Николаевна</h3>
              <h3>Лабораторные занятия</h3>
          </div>
        </div>
        <div class="event 2">

        </div>
        <div class="event 3">

        </div>
        <div class="event 4">

        </div>
        <div class="event 5">

        </div>
        <div class="event 6">

        </div>
      </div> -->
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
  props: ['calendar']
}

</script>
