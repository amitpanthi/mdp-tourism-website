<template>
<div class="ng-wrapper">
    <div class="news-grid">
        <p class="news-title">Press</p>
        <div class="main-n-grid">
            <div class="press-item">
                <p class="press-item-header">{{ pressData[index-1][0].heading }}</p>
                <p class="press-item-desc">{{ pressData[index-1][0].para }}</p>
                <button class="article-btn">Read Article</button>
            </div>
            <div class="press-item">
                <p class="press-item-header">{{ pressData[index-1][1].heading }}</p>
                <p class="press-item-desc">{{ pressData[index-1][1].para }}</p>
                <button class="article-btn">Read Article</button>
            </div>
            <div class="press-item">
                <p class="press-item-header">{{ pressData[index-1][2].heading }}</p>
                <p class="press-item-desc">{{ pressData[index-1][2].para }}</p>
                <button class="article-btn">Read Article</button>
            </div>
            <div class="press-item">
                <p class="press-item-header">{{ pressData[index-1][3].heading }}</p>
                <p class="press-item-desc">{{ pressData[index-1][3].para }}</p>
                <button class="article-btn">Read Article</button>
            </div>
        </div>
        <div class="press-nav">
            <svg @click="updatePage(-1)" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            <p class="current-page">{{ index }} - 2</p>
            <svg @click="updatePage(1)" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
        </div>
    </div>
</div>
</template>

<script type='module' src='./NewsBox.ts'></script>