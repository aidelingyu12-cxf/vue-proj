<template>
  <div>
    <template>
      <nav />
      <sideBbar />
      <content />
    </template>
  </div>
</template>

<script>
import content from './common/content'
import nav from './common/nav'
import sideBbar from './common/side-bar'
export default {
  name: 'main',
  components: {
    Content

  }
}
</script>