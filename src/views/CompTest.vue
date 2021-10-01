<template>
<div>
    <AboutL2R v-bind:descriptionHeadO='d1' v-bind:descriptionHeadT="d2" v-bind:descriptionContent='dc' v-bind:imgOne='i1' v-bind:imgTwo='i2' />
    <SingleImage v-bind:mainImage='sim1' />
    <AboutR2L v-bind:descriptionHeadO='d1' v-bind:descriptionHeadT="d2" v-bind:descriptionContent='dc' v-bind:imgOne='i1' v-bind:imgTwo='i2' />
    <ExploreBanner v-bind:bannerHeader='ow' />
    <Carousel />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AboutL2R from '@/components/AboutL2R/AboutL2R.vue';
import SingleImage from '@/components/SingleImage/SingleImage.vue'
import AboutR2L from '@/components/AboutR2L/AboutR2L.vue'
import ExploreBanner from '@/components/ExploreBanner/ExploreBanner.vue'
import Carousel from '@/components/Carousel/Carousel.vue'

@Options({
    components: {
        AboutL2R,
        SingleImage,
        AboutR2L,
        ExploreBanner,
        Carousel
    }
})
export default class CompTest extends Vue {
    data(){
        return{
            d1: 'Hey',
            d2: 'There',
            dc: 'Hi',
            i1: require('@/assets/images/home/im-1.jpg'),
            i2: require('@/assets/images/home/im-2.jpg'),
            sim1: require('@/assets/images/gallery/gallery-main-1.jpg'),
            ow: 'Our Worlds'
        }
    }
}
</script>