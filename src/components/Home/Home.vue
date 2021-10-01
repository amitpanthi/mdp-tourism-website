<template>
    <div class="content-container">
        <HomeMain/>
        <ImageText/>
        <Carousel v-bind:topHeading="topHeading" v-bind:bottomHeading="bottomHeading" v-bind:locList="carouselData" />
        <WorldMap/>
        <ThreeImage/>
        <Footer/>
    </div>
</template>

<script type='module' src='./Home.ts'></script>