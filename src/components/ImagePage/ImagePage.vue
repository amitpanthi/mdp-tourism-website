<template>
<div class="news-page-container">
    <p class="news-intro">Latest News</p>
    <div class="n-overlap-container">
        <div class="n-ov-image-container">
            <img v-bind:src="newsData[index - 1].pic" alt="">
        </div>
        <div class="n-description-box">
            <p class="n-d-title">{{ newsData[index - 1].heading }}</p>
            <p class="n-image-desc">{{ newsData[index - 1].para }}</p>
            <button>Read Article</button>
        </div>
    </div>  
    <div class="news-nav">
        <svg @click="updatePage(-1)" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        <p class="current-page">{{ index }} - 4</p>
        <svg @click="updatePage(1)" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
    </div>
</div>

</template>

<script type='module' src='./ImagePage.ts'></script>