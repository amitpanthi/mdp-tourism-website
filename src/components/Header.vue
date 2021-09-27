<template>
<div id="header">
    <div id="nav">
        <div id="nav-logo">
            <router-link to="/"><img class="logo" src="../assets/images/logo.png" alt="Discovery Land Co"></router-link>
        </div>
        <div id="nav-links">
            <router-link to="/about-dlc">About DLC</router-link>
            <router-link to="/our-worlds">Our Worlds</router-link>
            <router-link to="/experiences">Experiences</router-link>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/press">Press</router-link>
            <router-link to="/">&#x2630;</router-link>
        </div>
    </div>
</div>
    
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HelloWorld extends Vue {

}
</script>

<style lang="scss" scoped>
    @import "../assets/_global-styles.scss";

    .logo{
        justify-self: flex-start;
        max-width: 40%;
        height: auto;
    }

    #header{
        display: flex;
        justify-content: center;
    }

    #nav{
        padding-top: 3%;
        width: 90%;
        
        @include createFlex(row);

        #nav-logo{
            flex: 1;
            @include createFlex(row);
            justify-content: flex-start;
            
        }

        #nav-links{
            @include createFlex(row);
            flex: 2;

            a {
                flex: 1;
                text-decoration: none;
                font-family: $defaultFont;
                font-size: 1rem;
                color: #fff;
            }
        }
    }

    @media screen and (max-width: 480px) {
        #nav-links a{
            font-size: 10px !important;
        }        

        .logo{
            max-width: 80%;
        }
    }
</style>