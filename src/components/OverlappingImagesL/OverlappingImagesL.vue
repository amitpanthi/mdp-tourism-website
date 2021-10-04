<template>
<div class="l-overlap-container">
    <div class="l-ov-image-container">
        <img v-bind:src="bgImage" alt="">
    </div>
    <div class="l-description-box">
        <p class="l-d-title">{{ dTitle }}</p>
        <p class="l-image-desc">{{ desc }}</p>
        <button>{{ buttonText }}</button>
    </div>
    <div v-if="gradient==1" class="l-bg-gradient g-1"></div>
    <div v-else-if="gradient==2" class="l-bg-gradient g-2"></div>
    <div v-else-if="gradient==3" class="l-bg-gradient g-3"></div>
</div>  
</template>

<script type='module' src='./OverlappingImagesL.ts'></script>