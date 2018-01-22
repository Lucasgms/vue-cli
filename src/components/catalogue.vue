<template>
<div class="catalogue">
  <h2 class="catalogue--title">{{ title }}</h2>
  <swiper :options="swiperOption" class="catalogue--slider">
        <swiper-slide v-for="movie in movies" :key="movie.name">
          <card :movie="movie" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import card from './card';

export default {
  name: 'Catalogue',
  components: {
    card,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      title: 'Principais filmes',
      movies: [{
        name: 'The Martian',
        category: 'Comédia',
        year: '1930',
        img: 'http://s3.foxfilm.com/foxmovies/production/films/104/images/gallery/martian-gallery3-gallery-image.jpg',
        description: 'During a manned mission to Mars, Astronaut Mark Watney (Matt Damon) is presumed dead after a fierce storm and left behind by his crew.',
        rate: 8.1,
      },
      {
        name: 'The Venusian',
        category: 'Comédia',
        year: '1930',
        img: 'http://s3.foxfilm.com/foxmovies/production/films/104/images/gallery/martian-gallery3-gallery-image.jpg',
        description: 'During a manned mission to Mars, Astronaut Mark Watney (Matt Damon) is presumed dead after a fierce storm and left behind by his crew.',
        rate: 8.1,
      },
      {
        name: 'The Venusian 1',
        category: 'Comédia',
        year: '1930',
        img: 'http://s3.foxfilm.com/foxmovies/production/films/104/images/gallery/martian-gallery3-gallery-image.jpg',
        description: 'During a manned mission to Mars, Astronaut Mark Watney (Matt Damon) is presumed dead after a fierce storm and left behind by his crew.',
        rate: 8.1,
      },
      {
        name: 'The Venus 2',
        category: 'Comédia',
        year: '1930',
        img: 'http://s3.foxfilm.com/foxmovies/production/films/104/images/gallery/martian-gallery3-gallery-image.jpg',
        description: 'During a manned mission to Mars, Astronaut Mark Watney (Matt Damon) is presumed dead after a fierce storm and left behind by his crew.',
        rate: 8.1,
      }],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";
  @import "../styles/components/catalogue";
</style>
