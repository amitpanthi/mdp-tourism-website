<template>
    <div class="content-container">
        <HomeMain/>
        <ImageText/>
        <WorldMap/>
        <ThreeImage/>
        <Footer/>
    </div>
</template>

<script lang="ts">
import HomeMain from '@/components/HomeMain.vue';
import ImageText from '@/components/ImageText.vue';
import WorldMap from '@/components/WorldMap.vue';
import ThreeImage from '@/components/ThreeImage.vue';
import Footer from '@/components/Footer.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        HomeMain,
        ImageText,
        WorldMap,
        ThreeImage,
        Footer
},
})

export default class Home extends Vue {}
</script>

<style lang="scss">

</style>