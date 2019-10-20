<template>
  <CalendarView v-bind:calendar="calendar" />
</template>

<script>
import CalendarView from '../components/CalendarView'
import scheduleMock from '../data/scheduleMock'
import { WEEK } from '../global'

let { EVEN, ODD } = WEEK

export default {
  name: 'Index',
  components: {
    CalendarView
  },
  data () {
    return {
      calendar: scheduleMock.EVEN
    }
  }
}
</script>
