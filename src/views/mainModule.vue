<template>
  <div>
    <template>
      <navBar/>
      <sideBbar/>
      <content/>
    </template>
  </div>
</template>

<script>
import content from './common/content'
import navBar from './common/nav-bar'
import sideBbar from './common/side-bar'
export default {
  name: 'mainModule',
  components: {
    navBar,
    sideBbar,
    content
  }
}
</script>