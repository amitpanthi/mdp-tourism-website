<template>
<div class="about-dlc-wrapper">
    <AboutMain />
    <DescriptionText v-bind:description='descriptionBanner' />
    <TextImageL2R />
    <SingleImage v-bind:mainImage='fsImageOne' v-bind:hasPadding='ImageOnePad'/>
    <Carousel v-bind:topHeading="topHeading" v-bind:bottomHeading="bottomHeading" v-bind:locList="carouselData" />
    <SingleImage v-bind:mainImage='fsImageTwo' v-bind:hasPadding='ImageTwoPad'/>
    <AboutL2R v-bind:descriptionHeadO='headerOne' v-bind:descriptionHeadT='headerTwo' v-bind:descriptionContent='descOne' v-bind:imgOne='l2rim1' v-bind:imgTwo='l2rim2' />
    <SingleImage v-bind:mainImage='fsImageThree' v-bind:hasPadding='ImageTwoPad'/>
    <AboutR2L v-bind:descriptionHeadO='headerThree' v-bind:descriptionHeadT='headerTwo' v-bind:descriptionContent='descTwo' v-bind:imgOne='r2lim1' v-bind:imgTwo='r2lim2' />
    <ExploreBanner v-bind:bannerHeader='exploreHeader' />
    <Footer />
</div>
</template>

<script type='module' src='./AboutDLC.ts'></script>