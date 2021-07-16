<template>
  <svg viewBox="0 0 100 100" class="blob">
    <defs>
      <linearGradient id="prefix__a" x1="0" x2="1" y1="1" y2="0">
        <stop stop-color="rgba(227.856, 100.757, 40.603, 1)" offset="0%" />
        <stop stop-color="rgba(133.757, 67.034, 255, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#prefix__a)"
      d="M15-27.2c3.3 3.2 4.1 9.4 5.6 14.5s3.6 8.9 7.2 14.8 8.7 13.9 7 18.5c-1.8 4.7-10.2 6.1-17.1 10-6.9 4-12.3 10.6-18.9 12.6-6.5 2-14.2-.6-18.9-5.8-4.7-5.3-6.5-13.2-10.3-19.8-3.9-6.7-9.8-12.2-9.3-17.3.6-5.1 7.7-9.9 12.9-14.3s8.4-8.4 12.5-11.1c4.1-2.7 9.2-4.1 14.7-4.7 5.4-.7 11.3-.6 14.6 2.6z"
      transform="translate(50 50)"
      style="transition: all 0.3s ease 0s"
    />
  </svg>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class BlobOne extends Vue {}
</script>

<style scoped>
.blob {
  position: absolute;
  top: -50rem;
  right: -50rem;
}
</style>
