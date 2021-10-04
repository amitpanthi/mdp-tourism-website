<template>
<div>
    <experiences-vid />
    <AboutL2R v-bind:descriptionHeadO='d1' v-bind:descriptionHeadT="d2" v-bind:descriptionContent='dc' v-bind:imgOne='i1' v-bind:imgTwo='i2' />
    <SingleImage v-bind:mainImage='sim1' />
    <AboutR2L v-bind:descriptionHeadO='d1' v-bind:descriptionHeadT="d2" v-bind:descriptionContent='dc' v-bind:imgOne='i1' v-bind:imgTwo='i2' />
    <ExploreBanner v-bind:bannerHeader='ow' />
    <Carousel />
    <OverlappingImages v-bind:bgImage='imag' v-bind:dTitle='dtitle' v-bind:desc='desc' v-bind:buttonText='explore' v-bind:gradient="gradient"/>
    <OverlappingImagesL v-bind:bgImage='imag' v-bind:dTitle='dtitle' v-bind:desc='desc' v-bind:buttonText='explore' v-bind:gradient="gradient"/>
</div>
</template>

<script lang="ts">
import ExperiencesVid from '@/components/ExperiencesVid/ExperiencesVid.vue'
import { Options, Vue } from 'vue-class-component';
import AboutL2R from '@/components/AboutL2R/AboutL2R.vue';
import SingleImage from '@/components/SingleImage/SingleImage.vue'
import AboutR2L from '@/components/AboutR2L/AboutR2L.vue'
import ExploreBanner from '@/components/ExploreBanner/ExploreBanner.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import OverlappingImages from '@/components/OverlappingImages/OverlappingImages.vue'
import OverlappingImagesL from '@/components/OverlappingImagesL/OverlappingImagesL.vue'

@Options({
    components: {
        ExperiencesVid,
        AboutL2R,
        SingleImage,
        AboutR2L,
        ExploreBanner,
        Carousel,
        OverlappingImages,
        OverlappingImagesL
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
            ow: 'Our Worlds',
            desc: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.",
            dtitle: "Golf",
            imag: require('@/assets/images/experiences/golf.jpg'),
            explore: "Explore",
            gradient: 1
        }
    }
}
</script>