<template>
  <div :class="{'modal-open': currentEvent}" id="app" >
    <vue-progress-bar></vue-progress-bar>
    <Header v-on:changeGroup="didChangeGroup" v-on:changeWeek="didChangeWeek" 
      v-on:changeDay="didChangeDay"
      :isWeekEven="isWeekEven" 
      :currentGroup="currentGroup" 
      :currentDay="currentDay"
      :groups="groups" 
      :isMobile="mobile" />
    <CalendarView v-show="!mobile" :calendar="calendar" :classes="calendar" />
    <MobileCalendarView v-show="mobile" :calendar="calendar" :classes="calendar" :day="currentDay" />
    <EventView v-bind:event="currentEvent" />
  </div>
</template>

<script>
import defaults from './defaults'
import gql from 'graphql-tag'
import CalendarView from './components/CalendarView'
import EventView from './components/EventView'
import EventBus from './eventbus'
import Header from './components/Header'
import MobileCalendarView from './components/MobileCalendarView'

export default {
name: 'App',
  components: {
    CalendarView,
    EventView,
    Header,
    MobileCalendarView
  },
  data () {
    return {
      currentDay: 0,
      currentEvent: null,
      isWeekEven: defaults.DEFAULTWEEK,
      calendar: [],
      groups: {},
      currentGroup: defaults.CURRENTGROUP,
      mobile: defaults.MOBILECONDITION
    }
  },
  created () {
    addEventListener('resize', () => {
      this.mobile = innerWidth <= 720
    })
  },
  methods: {
    didChangeWeek: function() {
      this.isWeekEven = !this.isWeekEven
    },
    didChangeGroup: function(group) {
      this.currentGroup = group
    },
    didChangeDay: function(day) {
      this.currentDay = day
    }
  },
  apollo: {
    groups: {
      query: gql`
        query GetClasses {
          groups: getAllGroups {
            code
            id
          }
        }
      `,
      fetchPolicy: 'cache-and-network'
    },
    calendar: {
      query: gql`
        query GetCalendar($weekType: WeekType!, $groupId: Int!) {
          calendar: getCalendar(groupId: $groupId, weekType: $weekType) {
            number
            classes {
              id
              type
              place
              description
              number
              weekDay
              week
              
              teacher {
                fullName
                department
              }

              formattedType @client
              time @client
            }

          }
        }
      `,
      variables () {
        return {
          weekType: this.isWeekEven ? "EVEN" : "ODD",
          groupId: parseInt(this.currentGroup.id) || 1
        }
      },
      watchLoading (isLoading) {
        if (isLoading) this.$Progress.start();
        else this.$Progress.finish();
      },
      fetchPolicy: 'cache-and-network'
    }
  },
  mounted: function() {
    EventBus.$on('showModalWith', (event) => {
      this.currentEvent = event
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --blue-primary-color: #0096d5;
  --blue-active-color: #00A2E7;
}

html,
body {
  width: 100%;
  margin: 0;
  height: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Droid Sans", "Helvetica Neue";
  -webkit-font-smoothing: antialised;
}

.modal-open {
  height: 100%;
  overflow: auto;
}

#app {
  width: 100%;
}

.navbar {
  background: rgba(255, 255, 255);
  height: 68px;
  z-index: 250;
  width: 100%;
}

.navbar .container {
  margin: auto 25px;
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navbar .brand {
  font-size: 24px;
  font-weight: 800;
}

.navbar .left-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.study-groups {
  margin-right: 25px;
}

.study-groups .study-group {
  margin-right: 10px;
}

.study-groups .study-group span {
  margin-left: 10px;
}

.study-groups .study-group {
  border: none;
  height: 40px;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 600;
  background: rgba(0, 0, 0, .1);
  padding-right: 12px;
  padding-left: 12px;
  box-sizing: border-box;
  outline: none;
  cursor: default;
}

.study-groups .study-group:focus {
  background: rgba(0, 0, 0, .13);
  cursor: text;
}

.settings {
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.settings:hover {
  background: rgba(0,0,0,.09);
}

.search {
  text-indent: 8px;
  border-radius: 20px;
  border: none;
  height: 40px;
  background: rgba(0, 0, 0, .08);
  -webkit-appearance: none;
  margin-right: 15px;
  font-size: 18px;
  padding-left: 12px;
  padding-right: 12px;
}

.search:focus {
  outline: none;
  background-color: rgba(0,0,0,.1);
}

.search::placeholder {
  font-weight: 600;
}

.navbar .right-bar {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

main .container {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;
}

main .container h2 {
  margin-top: 0;
}

.study-group h2 {
  display: inline;
}

.study-groups-container {
  margin-bottom: 50px;
}

.study-groups-container .study-group,
.teachers-container .teacher {
  border: 1px solid rgba(0, 0, 0, .1);
  padding: 15px;
  border-radius: 15px;
  position: relative;
}

.favourites-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}

.classroom-ghost {
  margin-bottom: 0;
  display: block;
  visibility: hidden;
}

.classroom {
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  bottom: 15px;
}

.classroom span {
  border-radius: 10px;
  padding: 0 10px;
  background: rgba(0, 0, 0, .1);
  font-weight: 600;
  margin-left: 3px;
}

.study-groups .study-group.primary {
  background: var(--blue-primary-color);
  color: #ffffff;
}

.event {
  border-left: 1px solid rgba(0, 0, 0, .1);
  height: 200px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  box-sizing: border-box;
  position: relative;
}

.timemeter {
  color: #4a4a4a;
}

.timemeter .event {
  padding-left: 25px;
  padding-right: 10px;
}

.timemeter .class-number {
  line-height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
  text-align: right;
  font-size: 26px;
  width: 65px;
}

.event {
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 5px;
}

.event .start-time {
  position: relative;
  top: 10px;
  margin-top: 0;
}

.event .end-time {
  position: absolute;
  bottom: 10px;
  margin-bottom: 0;
}

.dayview {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  width: 100%;
}

.event .container {
  box-shadow: 0 3px 15px 0 rgba(220,220,220,0.50);
  width: 100%;
  height: 190px;
  padding: 10px;
  box-sizing: border-box;
  background: rgba(24, 151, 211, .75);
  color: white;
  border-radius: 6px;
  border-left: 5px solid rgba(24, 151, 211);
  cursor: pointer;
  word-wrap: break-word;
}

.event .container h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.event .container h3 {
  font-size: 16px;
  color: rgba(255, 255, 255, .9);
  margin-top: 5px;
  margin-bottom: 5px;
}

.dayview.active {
  background: #F2FAFE;
}

.calendar-view {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.navbar {
  height: 100px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.navbar .calendar-container {
  height: 32px;
  margin-left: 75px;
}

.calendar-container .weekdays-view {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.weekdays-view .weekday {
  flex-grow: 1;
  line-height: 32px;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  width: 100%;
  font-weight: 600;
  overflow: hidden;
}

.weekdays-view .space {
  width: 75px;
}

.center-bar {
  height: 40px;
}

.button {
  display: inline-block;
  line-height: 40px;
  border: none;
  height: 40px;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 600;
  background: rgba(0, 0, 0, .1);
  padding-right: 20px;
  user-select: none;
  -webkit-user-select: none;
  padding-left: 20px;
}

.button:active, .button:focus {
  outline: none;
  background: rgba(0, 0, 0, .13);
}

.button.shadow {
  box-shadow: 0 2px 10px 0 rgba(220,220,220,0.50);
}

.weekselector:active {
  background: rgba(0, 0, 0, .13);
}

.weekselector.even {
  border-radius: 20px 0 0 20px;
  padding-right: 15px;
}

.weekselector.noneven {
  border-radius: 0 20px 20px 0;
  padding-left: 15px;
}

.weekselector input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.button.primary {
  background: var(--blue-primary-color);
  color: white;
}

.button.primary:active, .button.primary:focus {
  background: var(--blue-active-color);
}

main {
  margin-top: 100px;
} 

.dropdown-inner {
  border-radius: 8px;
  overflow: hidden;
  font-size: 18px;
  box-sizing: border-box;
  box-shadow: 0 2px 15px 0 rgba(0,0,0,.15);
}

.item-container {
  font-weight: 600;
  padding-right: 12px;
  padding-left: 12px;
}

.item-container p {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  cursor: pointer;
}

.active-item p {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 12px;
  margin-bottom: 12px;
}

.event .container h2 {
  font-size: 1.2vw;
}
.event .container h3 {
  font-size: 1.1vw;
}

.weekday-switcher {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  height: 32px;
}

.weekday-switcher .dayselector {
  user-select: none;
  -webkit-user-select: none;
  text-align: center;
  padding-top: 5px;
  font-weight: 600;
  border-radius: 16px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  height: 32px;
  box-sizing: border-box;
}

.dayselector.primary {
  background-color: var(--blue-primary-color);
  color: white;
  box-shadow: 0 3px 15px 0 rgba(0,0,0,0.12);
}

.dayselector input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

@media screen and (max-width: 1440px) {
  .favourites-grid {
    grid-template-columns: repeat(3, 1fr);
  }

}

@media screen and (max-width: 900px) {
  .brand {
    display: none;
  }
  .study-groups {
    margin-left: 0;
  }
  .weekdays-view .weekday {
    font-size: 12px;
  }
  .event .container {
    padding: 5px;
  }
}

@media screen and (max-width: 720px) {
  main {
    margin-top: 111px;
  }
  .favourites-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .search {
    display: none;
  }
  .navbar .calendar-container {
    margin-left: 0;
  }
  .navbar .calendar-container {
    margin-top: 3px;
  }
  .navbar {
    height: 110px;
  }
  .weekday-switcher .dayselector {
    flex-basis: 100%;
  }
  .event .container h2 {
    font-size: 6vw;
  }
  .event .container h3 {
    font-size: 5vw;
  }
  .event .container .teacher {
    display: none;
  }
}

@media screen and (max-width: 520px) {
  .favourites-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .settings {
    display: none;
  }
  .dropdown-container {
    width: 80px;
  }
  .study-group {
    width: 80px !important;
  }
}

@media screen and (max-width: 360px) {
  main {
    margin-top: 92px;
  }
  .navbar {
    height: 92px;
  }
  .navbar .container {
    height: 50px;
  }
  .dropdown-container {
    width: 60px;
  }
  .study-group {
    font-size: 12px !important;
    height: 30px !important;
    width: 60px !important;
    line-height: 30px;
  }
  .button {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
  }
  .dayselector {
    font-size: 12px;
  }
}
</style>
