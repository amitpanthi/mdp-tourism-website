<template>
    <div class="content-wrapper">
        <div class="gallery-header">
        <Header />
        <img class="gallery-main" src="../assets/images/gallery/gallery-main-1.jpg" alt="">
        <h1 id="g-title">Gallery</h1>
        </div>
        <div class="gallery-content">
            <div class="gallery-row">
                <div class="gallery-item" v-for="item in gallery_items_r1" v-bind:key="item">
                    <div class="image">
                        <img class="gallery-img" v-bind:src="item.img_src" v-bind:alt=item.caption>
                    </div>
                    <div class="image-title">
                        <p class="img-title-text"> {{ item.caption }} </p>
                    </div>
                </div>
            </div>
            <div class="gallery-row">
                <div class="gallery-item" v-for="item in gallery_items_r2" v-bind:key="item">
                    <div class="image">
                        <img class="gallery-img" v-bind:src="item.img_src" v-bind:alt=item.caption>
                    </div>
                    <div class="image-title">
                        <p class="img-title-text"> {{ item.caption }} </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        Header,
        Footer
},
})

export default class Home extends Vue {
    data(): any{
        return{
            gallery_items_r1: [
            {
                img_src: require('../assets/images/gallery/gallery-1.jpg'),
                caption: 'Outdoor Pursuits'
            },
            {
                img_src: require('../assets/images/gallery/gallery-2.jpg'),
                caption: 'Golf'
            },
            {
                img_src: require('../assets/images/gallery/gallery-3.jpeg'),
                caption: 'Lifestyle'
            },
        ],

        gallery_items_r2: [
            {
                img_src: require('../assets/images/gallery/gallery-4.jpg'),
                caption: 'Landscapes'
            },
            {
                img_src: require('../assets/images/gallery/gallery-5.jpg'),
                caption: 'Clubhouses'
            },
            {
                img_src: require('../assets/images/gallery/gallery-6.jpg'),
                caption: 'Wellness'
            },
        ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/_global-styles.scss";

.gallery-content{
    padding-top: 7.5%
}

.gallery-row {
    @include createFlex(row);
    width: 100%;
}

.gallery-item{
    flex: 1;
}

.gallery-img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.image-title{
    font-family: $galleryFont;
    color: #fff;
    background-color: #000;
    font-size: 1.4rem;
}

.img-title-text{
    margin: 0px;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.gallery-main{
    @include fixImgWithNav;
}
    
#g-title{
    @include pageTitleStyles
}

Header{
    z-index: 2
}
</style>