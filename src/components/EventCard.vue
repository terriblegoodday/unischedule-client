<template>
  <div class='event'>
    <div v-if='event != null || event != undefined' class='container' @click='eventClicked'>
      <h2><span>{{event.place}}</span> {{event.description}}</h2>
      <h3 class='teacher'>{{event.teacher.fullName}}</h3>
      <h3>{{event.formattedType}}</h3>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventbus'

export default {
  name: 'EventCard',
  props: ['event'],
  methods: {
    eventClicked: function () {
      EventBus.$emit('showModalWith', this.event)
    }
  }
}
</script>
