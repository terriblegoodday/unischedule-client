<template>
<button @click='didPressClose'>
  <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Artboard" transform="translate(-422.000000, -27.000000)">
              <g id="Group-5" transform="translate(422.000000, 27.000000)">
                  <rect id="Rectangle" fill-opacity="0.5" fill="#D8D8D8" x="0" y="0" width="40" height="40" rx="20"></rect>
                  <g id="Group-4" transform="translate(11.000000, 11.000000)" stroke="#979797" stroke-linecap="square" stroke-width="2">
                      <line x1="0.5" y1="0.5" x2="17.5" y2="17.5" id="Line"></line>
                      <line x1="0.5" y1="0.5" x2="17.5" y2="17.5" id="Line-Copy" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) "></line>
                  </g>
              </g>
          </g>
      </g>
  </svg>
</button>
</template>

<script>
export default {
  component: "CloseButton",
  methods: {
    didPressClose: function() {
      this.$emit('didPressClose')
    }
  }
}
</script>