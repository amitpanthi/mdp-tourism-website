<template>
    <div class="footer">
        <div class="misc">
            <div class="logo">
                <img class="small-logo" src="../assets/images/logo-no-text/logo.png" alt="Logo">
            </div>
            <div class="copyright">
                <p class="copyright-text">&#169; Discovery Land Company. All rights reserved</p>
            </div>
        </div>
        <div class="contact-us">
            <p class="contact-title">GET IN TOUCH</p>
            <router-link to="/">(480) 624-5200</router-link>
            <router-link to="/">mail@discoverylandco.com</router-link>
        </div>
        <div class="about">
            <router-link to="/">About DLC</router-link>
            <router-link to="/">Our Worlds</router-link>
            <router-link to="/">Experiences</router-link>
            <router-link to="/">Gallery</router-link>
            <router-link to="/">Press</router-link>
        </div>
        <div class="extras">
            <router-link to="/">Magazine</router-link>
            <router-link to="/">Careers</router-link>
            <router-link to="/">Foundation</router-link>
            <router-link to="/">Contact</router-link>
            <router-link to="/">Privacy</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Footer extends Vue {

}
</script>

<style lang="scss" scoped>
    @import "../assets/_global-styles.scss";

    @mixin menuStyles {
        @include createFlex(column);
        justify-content: flex-start;
        text-align: left;
    }

    .footer{
        @include createFlex(row);
        background-color: #161F1E;
        height: 50vh;
        padding-top: 7%
    }

    .misc{
        flex: 2.5;
        @include createFlex(column)
    }

    .contact-us{
        flex: 1;
        @include menuStyles()
    }

    .about{
        flex: 1;
        @include menuStyles()
    }

    .extras{
        flex: 1;
        @include menuStyles()
    }

    a, .contact-title{
        font-family: $defaultFont;
        text-decoration: none;
        color: #fff;
        padding-top: 1rem;
    }

    .contact-title{
        color: #6F7574;
        font-size: 0.85rem;
    }

    .small-logo{
        width: 10%;
        height: 20%;
    }

    .logo{
        flex: 3;
        @include createFlex(row);
        justify-items: flex-start;
        padding-left: 20%;
    }

    .copyright{
        flex: 1;
        @include createFlex(row);
        justify-items: flex-start;
    }

    .copyright-text{
        color: #444B4A;
        font-size: 0.7rem;
        padding-left: 20%;
    }
</style>