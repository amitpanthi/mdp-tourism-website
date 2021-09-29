<template>
    <div class="content-wrapper">
        <div class="gallery-header">
        <Header />
        <img class="gallery-main" src="@/assets/images/gallery/gallery-main-1.jpg" alt="">
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

<script type="module" src="./Gallery.ts"></script>