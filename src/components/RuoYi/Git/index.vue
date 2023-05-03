<template>
  <div>
    <svg-icon icon-class="github" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'RuoYiGit',
  data() {
    return {
      url: 'https://gitee.com/e0cia'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>
