<template>
  <div class="content">
    <div class="leaderbord">
      <div data-mvc-banner="leaderboard"></div>
    </div>
    <div class="container">
      <div class="header">
        <span><h1>As Melhores Lives da Quarentena</h1></span>
      </div>
      <div class="row">
          <div class="container-video col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <iframe id="iframe-video" width="100%" height="100%" :src="(this.activeVideo ? this.activeVideo.youtubeURL : '')" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h2>{{(this.activeVideo ? this.activeVideo.title : '')}}</h2>
          </div>
          <div class="banner-rectangle col-sm-12">
            <div class="medium-rectangle-middle" data-mvc-banner="medium-rectangle"></div>
          </div>
          <div class="col-sm-8 col-md-4 col-lg-4 col-xl-4">
            <div class="playlist">
              <div class="banner-side">
                <div class="medium-rectangle" data-mvc-banner="medium-rectangle"></div>
              </div>
              <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class="thumbnail">
                  <div class="thumbnail-img">
                  <img :title="video.title" :alt="video.title" :src="video.thumbnail" />
                  </div>
                  <div class="thumbnail-info">
                  <h2>{{video.title}}</h2>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 sky-wide">
            <div data-mvc-banner="sky-wide"></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { page } from 'vue-analytics'

let videos = [
  {
    id: 1,
    title: 'Marília Mendonça,Zé Neto & Cristiano,Maiara & Maraísa,Léo Santana,Dilsinho',
    slug: 'marília-ze-neto-cristiano',
    thumbnail: 'https://i.ytimg.com/vi/Wx1tVvXF4Io/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw',
    youtubeURL: 'https://www.youtube.com/embed/Wx1tVvXF4Io',
    creator: 'Marília Mendonça,Zé Neto & Cristiano,Maiara & Maraísa,Léo Santana,Dilsinho',
    likes: 0,
    views: 0
  },
  {
    id: 2,
    title: 'Bruno e Marrone',
    slug: 'bruno-e-marrone',
    thumbnail: 'https://i.ytimg.com/vi/kURJHBpUwzw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w',
    youtubeURL: 'https://www.youtube.com/embed/kURJHBpUwzw',
    creator: 'Bruno e Marrone',
    likes: 0,
    views: 0
  },
  {
    id: 3,
    title: 'Jorge e Mateus',
    slug: 'jorge-e-mateus',
    thumbnail:
      'https://i.ytimg.com/vi/q5Ee0NFNiVE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w',
    youtubeURL: 'https://www.youtube.com/embed/q5Ee0NFNiVE',
    creator: 'Jorge e Mateus',
    likes: 0,
    views: 0
  },
  {
    id: 4,
    title: 'César Menotti e Fabiano',
    slug: 'cesar-menotti-e-fabiano',
    thumbnail:
      'https://i.ytimg.com/vi/xxZlDxj3wqE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w',
    youtubeURL: 'https://www.youtube.com/embed/xxZlDxj3wqE',
    creator: 'César Menotti e Fabiano',
    likes: 0,
    views: 0
  },
  {
    id: 5,
    title: 'Gustavo Lima',
    slug: 'gustavo-lima',
    thumbnail:
      'https://i.ytimg.com/vi/WaPBJ_vXcoA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw',
    youtubeURL: 'https://www.youtube.com/embed/WaPBJ_vXcoA',
    creator: 'Gustavo Lima',
    likes: 0,
    views: 0
  }
]

export default {
  name: 'VideoPlayer',
  data () {
    return {
      videos,
      activeVideo: videos[-1]
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    chooseVideo (video) {
      // SET VIDEO AS ACTIVE VIDEO
      this.activeVideo = video
      // INCREASE THE VIDEOS VIEWS BY 1
      video.views += 1
      // track GA
      page(`/${video.slug}`)
      this.scrollToTop()
    },
    addLike () {
      this.activeVideo.likes += 1
    }
  },
  mounted: function () {
    this.activeVideo = videos[0]
  }
}
</script>
