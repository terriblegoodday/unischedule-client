<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  },
  name: 'App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body {
  width: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialised;
}

.navbar {
  background: rgba(255, 255, 255, .9);
  -webkit-backdrop-filter: blur(25px);
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

.study-groups .study-group,
.settings {
  border: none;
  height: 40px;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 600;
  background: rgba(0, 0, 0, .1);
  padding-right: 12px;
  padding-left: 12px;
}

.study-groups .study-group,
.settings {
  background: rgba(0,0,0,.1);
  outline: none;
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

@media screen and (max-width: 1024px) {
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
}

@media screen and (max-width: 736px) {
  .favourites-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .search {
    display: none;
  }
}

@media screen and (max-width: 512px) {
  .favourites-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .settings {
    display: none;
  }
}

.study-groups .study-group.primary {
  background: #0096d5;
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
  width: 100%;
}

.event .container {
  width: 100%;
  height: 190px;
  padding: 10px;
  box-sizing: border-box;
  background: rgba(24, 151, 211, .75);
  color: white;
  border-radius: 6px;
  border-left: 5px solid rgba(24, 151, 211);
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
}

.weekdays-view .space {
  width: 75px;
}

.center-bar {
  height: 40px;
}

.weekselector {
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

.weekselector.even {
  border-radius: 20px 0 0 20px;
  padding-right: 15px;
  margin-right: -3px;
}

.weekselector.noneven {
  border-radius: 0 20px 20px 0;
  padding-left: 15px;
  margin-right: 15px;
}

.weekselector input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.weekselector.primary {
  background: #0096d5;
  color: white;
}

main {
  margin-top: 100px;
}
</style>
