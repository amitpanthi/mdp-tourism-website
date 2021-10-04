<template>
<div class="overlap-container">
    <div class="ov-image-container">
        <img v-bind:src="bgImage" alt="">
    </div>
    <div class="description-box">
        <p class="d-title">{{ dTitle }}</p>
        <p class="image-desc">{{ desc }}</p>
        <button>{{ buttonText }}</button>
    </div>
    <div v-if="gradient==1" class="bg-gradient g-1"></div>
    <div v-else-if="gradient==2" class="bg-gradient g-2"></div>
    <div v-else-if="gradient==3" class="bg-gradient g-3"></div>
</div>  
</template>

<script type='module' src='./OverlappingImages.ts'></script>