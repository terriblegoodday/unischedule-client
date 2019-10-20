<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="left-bar">
          <div class="study-groups">
            <button class="study-group primary">Б8118</button>
            <button class="study-group">Б8104</button>
          </div>
        </div>
        <div class="right-bar">
          <label class="weekselector even primary"><input type="radio" name="week" id="even">Четная</label>
          <label class="weekselector noneven"><input type="radio" name="week" id="noneven">Нечетная</label>
          <input class="search" type="search" placeholder="Поиск по занятиям">
          <button class="settings">Добавить занятие</button>
        </div>
      </div>
      <div class="calendar-container">
          <div class="weekdays-view">
            <div class="weekday monday">Понедельник</div>
            <div class="weekday tuesday">Вторник</div>
            <div class="weekday wednesday">Среда</div>
            <div class="weekday thursday">Четверг</div>
            <div class="weekday friday">Пятница</div>
            <div class="weekday saturday">Суббота</div>
          </div>
        </div>
    </div>
  </header>
</template>

export default {
  name: "Header"
}
