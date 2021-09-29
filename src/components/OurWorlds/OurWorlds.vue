<template>
    <div class="content-wrapper">
        <div class="gallery-header">
        <Header />
        </div>
        <div class="worlds-gallery">
            <div class="worlds-item" v-for="item in worlds" v-bind:key="item">
                <img class="worlds-img" v-bind:src="item.src" v-bind:alt="item.caption">
                <p class="worlds-caption"> {{ item.caption }} </p>
                <p class="worlds-location"> {{ item.loc }} </p>
            </div> 
        </div>
        <Footer />
    </div>
</template>

<script type="module" src="./OurWorlds.ts"></script>