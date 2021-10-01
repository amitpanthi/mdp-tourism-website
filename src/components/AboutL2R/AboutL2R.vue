<template>
    <div class="description-container">
        <div class="description-content">
            <div class="description-text">
                <div class="description-header">
                    <p class="dh1">{{ descriptionHeadO }}</p>
                    <p class="dh2">{{ descriptionHeadT }}</p>
                </div>
                <div class="description">
                    {{ descriptionContent }}
                </div>
            </div>
            <div class="desc-im-one">
                <img class="img-one" v-bind:src="imgOne" alt="Image 1">
            </div>
            <div class="desc-im-two">
                <img class="img-two" v-bind:src="imgTwo" alt="Image 2">
            </div>
        </div>
    </div>
</template>

<script type='module' src='./AboutL2R.ts'></script>