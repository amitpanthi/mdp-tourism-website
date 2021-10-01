<template>
    <div class='img-container'>
        <img v-if="hasPadding" class='fs-image-pad' v-bind:src="mainImage" alt="Scenery">
        <img v-else class='fs-image' v-bind:src="mainImage" alt="Scenery">
    </div>
</template>

<script type='module' src='./SingleImage.ts'></script>