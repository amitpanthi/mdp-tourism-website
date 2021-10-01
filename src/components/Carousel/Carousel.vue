<template>
<div class="carousel">
    <div class="carousel-banner">
        <div>
            <p class="top-heading">{{ topHeading }}</p>
            <p class="bottom-heading">{{ bottomHeading }}</p>
        </div>
        <div class="buttons">
            <button class="first-button">&#8592;</button>
            <button class="last-button">&#8594;</button>
        </div>
    </div>
    <div class="slider">
        <div class="slider-track" v-for="item in locList" :key="item.title">
            <div class="slide">
                <div class="image-container">
                    <img v-bind:src="item.pic" alt="">
                </div>
                <div class="img-desc">
                    <span class="img-title">{{ item.title }}</span>
                    <span class="img-loc">{{ item.location }}</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type='module' src='./Carousel.ts'></script>