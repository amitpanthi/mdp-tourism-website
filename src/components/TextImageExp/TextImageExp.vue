<template>
    <div class="timl2r">
        <div class="text-container">
            <p class="tim-header">{{ timHeader }}</p>
            <p class="tim-body">{{ timDesc }}</p>
        </div>
        <div class="image-container">
            <img class="tim-image" v-bind:src="imgSource" alt="">
        </div>
    </div>
</template>

<script type='module' src='./TextImageExp.ts'></script>