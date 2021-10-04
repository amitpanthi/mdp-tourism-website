<template>
    <experiences-vid />
    <DescriptionText v-bind:description="introDesc" />
    <TextImageExp />
    <OverlappingImages v-bind:bgImage='golfImage' v-bind:dTitle='golfTitle' v-bind:desc='golfDesc' v-bind:buttonText='exploreTxt' v-bind:gradient="golfGradient"/>
    <OverlappingImagesL v-bind:bgImage='rocksImage' v-bind:dTitle='rocksTitle' v-bind:desc='rocksDesc' v-bind:buttonText='exploreTxt' v-bind:gradient="rocksGradient"/>
    <OverlappingImages v-bind:bgImage='swimImage' v-bind:dTitle='swimTitle' v-bind:desc='swimDesc' v-bind:buttonText='exploreTxt' v-bind:gradient="swimGradient"/>
    <ExploreBanner v-bind:bannerHeader='bannerText' />
    <Footer />
</template>

<script type='module' src='./Experiences.ts'></script>