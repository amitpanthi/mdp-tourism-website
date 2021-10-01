<template>
    <div class="r2l-description-container">
        <div class="r2l-description-content">
            <div class="r2l-description-text">
                <div class="r2l-description-header">
                    <p class="r2l-dh1">{{ descriptionHeadO }}</p>
                    <p class="r2l-dh2">{{ descriptionHeadT }}</p>
                </div>
                <div class="r2l-description">
                    {{ descriptionContent }}
                </div>
            </div>
            <div class="r2l-desc-im-one">
                <img class="r2l-img-one" v-bind:src="imgOne" alt="Image 1">
            </div>
            <div class="r2l-desc-im-two">
                <img class="r2l-img-two" v-bind:src="imgTwo" alt="Image 2">
            </div>
        </div>
    </div>
</template>

<script type='module' src='./AboutR2L.ts'></script>