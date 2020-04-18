<template>
  <div id="app">
    <VideoPlayer/>
  </div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer'
import '@/assets/bootstrap.css'
import '@/assets/styles.css'

export default {
  name: 'App',
  components: {
    VideoPlayer
  }
}
</script>
