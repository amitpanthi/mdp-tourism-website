<template>
    <div class="content-wrapper">
        <div class="gallery-header">
        <Header />
        <img class="gallery-main" src="../assets/images/gallery/gallery-main-1.jpg" alt="">
        <h1 id="g-title">Gallery</h1>
        </div>
        <div class="gallery-content">
            <div class="gallery-row">
                <div class="gallery-item">
                    <div class="image">
                        <img class="gallery-img" src="../assets/images/gallery/gallery-1.jpg" alt="Outdoor Pursuits">
                    </div>
                    <div class="image-title">
                        <p class="img-title-text">Outdoor Pursuits</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="image">
                        <img class="gallery-img" src="../assets/images/gallery/gallery-2.jpg" alt="Golf">
                    </div>
                    <div class="image-title">
                        <p class="img-title-text">Golf</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="image">
                        <img class="gallery-img" src="../assets/images/gallery/gallery-3.jpeg" alt="Lifestyle">
                    </div>
                    <div class="image-title">
                        <p class="img-title-text">Lifestyle</p>
                    </div>
                </div>
            </div>
            <div class="gallery-row">
                <div class="gallery-item">
                    <div class="image">
                        <img class="gallery-img" src="../assets/images/gallery/gallery-4.jpg" alt="Landscapes">
                    </div>
                    <div class="image-title">
                        <p class="img-title-text">Landscapes</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="image">
                        <img class="gallery-img" src="../assets/images/gallery/gallery-5.jpg" alt="Clubhouses">
                    </div>
                    <div class="image-title">
                        <p class="img-title-text">Clubhouses</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="image">
                        <img class="gallery-img" src="../assets/images/gallery/gallery-6.jpg" alt="Wellness">
                    </div>
                    <div class="image-title">
                        <p class="img-title-text">Wellness</p>
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

export default class Home extends Vue {}
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