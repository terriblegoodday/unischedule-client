<template>
  <header>
    <div class='navbar'>
      <div class='container'>
        <div class='left-bar'>
          <div class='study-groups'>
            <vue-input-dropdown :items='formattedGroups'
                                :picked='didChangeGroup'
                                :options='dropdownOptions'
                                :selected='currentGroup.code' />
          </div>
        </div>
        <div class='center-bar'>

        </div>
        <div class='right-bar'>
          <label class='button weekselector even' :class='{ primary: isWeekEven }'><input checked type='radio' name='week' id='EVEN' @change='didChangeWeek'>Четная</label>
          <label class='button weekselector noneven' :class='{ primary: !isWeekEven }'><input type='radio' name='week' :value='false' id='NONEVEN' @change='didChangeWeek'>Нечетная</label>
        </div>
      </div>
      <div class='calendar-container'>
        <div v-if='!isMobile' class='weekdays-view'>
          <div class='weekday monday'>Понедельник</div>
          <div class='weekday tuesday'>Вторник</div>
          <div class='weekday wednesday'>Среда</div>
          <div class='weekday thursday'>Четверг</div>
          <div class='weekday friday'>Пятница</div>
          <div class='weekday saturday'>Суббота</div>
        </div>
        <div v-else class='weekday-switcher'>
          <label class='dayselector' :class='{ primary:  currentDay == 0}'><input value='0' type='radio' name='day' id='MON' @change='didChangeDay'>ПН</label>
          <label class='dayselector' :class='{ primary:  currentDay == 1}'><input value='1' type='radio' name='day' id='TUE' @change='didChangeDay'>ВТ</label>
          <label class='dayselector' :class='{ primary:  currentDay == 2}'><input value='2' type='radio' name='day' id='WED' @change='didChangeDay'>СР</label>
          <label class='dayselector' :class='{ primary:  currentDay == 3}'><input value='3' type='radio' name='day' id='THU' @change='didChangeDay'>ЧТ</label>
          <label class='dayselector' :class='{ primary:  currentDay == 4}'><input value='4' type='radio' name='day' id='FRI' @change='didChangeDay'>ПТ</label>
          <label class='dayselector' :class='{ primary:  currentDay == 5}'><input value='5' type='radio' name='day' id='SAT' @change='didChangeDay'>СБ</label>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['isWeekEven', 'groups', 'currentGroup', 'isMobile', 'currentDay'],
  data: function () {
    return {
      dropdownOptions: {
        width: '200px',
        height: '40px',
        inputClass: 'study-group',
        dropdownClass: 'dropdown-inner',
        placeholder: 'Группа',
        itemContainerClass: 'item-container',
        activeItemClass: 'active-item'
      }
    }
  },
  methods: {
    getGroupByCode: function (code) {
      if (this.groups != null || this.groups != undefined) { return this.groups.filter((element) => element.code == code)[0] }
      else return 1
    },
    didChangeWeek: function () {
      this.$emit('changeWeek', 'week')
    },
    didChangeGroup: function (group) {
      this.$emit('changeGroup', this.getGroupByCode(group))
    },
    didChangeDay: function (val) {
      this.$emit('changeDay', val.srcElement.value)
    }
  },
  computed: {
    formattedGroups: function () {
      if (this.groups.map != null) return this.groups.map((group) => group.code)
    }
  }
}
</script>
