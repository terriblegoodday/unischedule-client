
<template>
  <transition name="" v-if="event != null">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h1>{{ event.description }}</h1>
            <CloseButton class="close-button" v-on:didPressClose="closeWindow" height="40px" width="40px" />
          </div>

          <div class="modal-body">
            <table class="info-table">
              <tr>
                <th>Тип занятия: </th><th class="value">{{ event.formattedType }}</th>
              </tr>
              <tr>
                <th>Аудитория: </th><th class="value">{{ event.place }}</th>
              </tr>
              <tr>
                <th>Время: </th><th class="value">{{ event.time }}</th>
              </tr>
              <tr>
                <th>Преподаватель: </th><th class="value">{{ event.teacher.fullName }}</th>
              </tr>
              <tr><th></th><th></th></tr>
              <tr class="rate-class">
                <th>Оценить занятие: </th><th><VueStars /></th>
              </tr>
            </table>
            <textarea class="text-input" placeholder="Напишите отзыв о занятии" />
            <div class="suggested-feedback">
              <h3>Что вам особенно понравилось?</h3>
              <span class="green">Подача материала</span>
              <span class="green">Преподаватель</span>
            </div>
          </div>

          <div class="modal-footer">
            <button class="button shadow primary modal-default-button" @click="closeWindow">
              Оставить отзыв
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import EventBus from '../eventbus'
import CloseButton from './CloseButton'
import VueStars from './VueStars'

export default {
  name: "EventView",
  components: {
    CloseButton,
    VueStars
  },
  props: ["event"],
  methods: {
    closeWindow: function () {
      EventBus.$emit('showModalWith', null)
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  overflow-y: scroll;
  vertical-align: middle;
}

.modal-container {
  transform: translate(-50%, -50%);
  top: 50%;
  /* bottom: 0; */
  max-height: 90%;
  max-width: 500px;
  position: absolute;
  overflow-y: scroll;
  width: 100%;
  margin: 0px auto;
  left: 50%;
  padding: 5px 26px;
  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 0 2px 15px 0 rgba(0,0,0,.15);
  box-shadow: 0 2px 15px 0 rgba(0,0,0,.15);
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.modal-header {
  position: relative;
}

.modal-header h1 {
  overflow: hidden;
  word-wrap: break-word;
}

.modal-body {
  margin: 30px 0;
  margin-bottom: 20px;
}

.modal-default-button {
  float: right;
}

.text-input {
  margin-top: 10px;
  min-height: 80px;
  max-height: 100%;
  height: 40px;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 400;
  background: rgba(0,0,0,.1);
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0;
  overflow: scroll;
  resize: vertical;
}

.text-input:focus, .text-input:active {
  background: rgba(0,0,0,.13);
  outline: none;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-footer {
  padding-bottom: 15px;
  height: 40px;
}

.close-button {
  float: right;
  position: absolute;
  top: 0; 
  right: 0;
  z-index: 10999;
  padding: 0;
  background: none;
  border: none;
}

.close-button:active, .close-button:focus {
  filter: brightness(.9);
  outline: none;
}

.info-table th {
  text-align: left;
  padding-right: 10px;
  padding-bottom: 8px;
  font-weight: 400;
  color: #4a4a4a;
}

.info-table .value {
  font-weight: 600;
  color: black;
}

.vue-stars label .active {
  background-color: none;
}

.rate-class {
  padding-top: 40px;
}

.suggested-feedback {
  margin-top: 20px;
  line-height: 20px;
}

.suggested-feedback span {
  font-size: 14px;
  margin-right: 5px;
  margin-bottom: 10px;
  background: rgba(0,0,0,.1);
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 16px;
  display: inline-block;
  color: #4a4a4a;
  box-shadow: 0 1px 7.5px 0 rgba(0,0,0,.075);
}

.suggested-feedback .green {
  background-color: rgba(0, 166, 139, .25);
}

.suggested-feedback .red {
  background-color: rgba(255, 17, 95, .25);
}

@media (max-width: 720px) {
  .modal-container {
    transform: translate(-50%);
    top: unset;
    bottom: 0;
  }

}

</style>