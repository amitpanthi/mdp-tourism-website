import './OurWorlds.scss'

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        Header,
        Footer
},
})

export default class Home extends Vue {
    data(){
        return{
            worlds: [
                {
                    src: require("@/assets/images/worlds/worlds-1.jpg"),
                    caption: "NORTH SHORE PRESERVE",
                    loc: "Kaua'i, Hawaii"
                },
                 {
                    src: require("@/assets/images/worlds/worlds-2.jpg"),
                    caption: "JAMES ISLAND",
                    loc: "Southern Gulf Islands, British Columbia, Canada"
                    
                },
                 {
                    src: require("@/assets/images/worlds/worlds-3.jpg"),
                    caption: "COSTATERRA",
                    loc: "Comporta, Portugal"
                },
                {
                    src: require("@/assets/images/worlds/worlds-4.jpg"),
                    caption: "BARBUDA OCEAN CLUB",
                    loc: "Barbuda, West Indies"
                },
                {
                    src: require("@/assets/images/worlds/worlds-5.jpg"),
                    caption: "DRIFTWOOD",
                    loc: "Austin, Texas"
                },
                {
                    src: require("@/assets/images/worlds/worlds-6.jpg"),
                    caption: "TROUBADOUR",
                    loc: "Nashville, Tennessee"
                    
                },
                {
                    src: require("@/assets/images/worlds/worlds-7.jpg"),
                    caption: "PLAYA GRANDE",
                    loc: "Rio San Juan, Dominican Republic"
                },
                {
                    src: require("@/assets/images/worlds/worlds-8.jpg"),
                    caption: "CHILENO BAY",
                    loc: "Cabo San Lucas, Mexico"
                },
                {
                    src: require("@/assets/images/worlds/worlds-9.jpg"),
                    caption: "THE SUMMIT",
                    loc: "Las Vegas, Nevada"
                },
                {
                    src: require("@/assets/images/worlds/worlds-10.jpg"),
                    caption: "DUNE DECK",
                    loc: "Westhampton Beach, NY"
                    
                },
                {
                    src: require("@/assets/images/worlds/worlds-11.jpg"),
                    caption: "SILO GRANDE",
                    loc: "Amenia, New York"
                },
                {
                    src: require("@/assets/images/worlds/worlds-12.jpg"),
                    caption: "MĀKENA",
                    loc: "Maui, Hawaii"
                },
                {
                    src: require("@/assets/images/worlds/worlds-13.jpg"),
                    caption: "YELLOWSTONE CLUB",
                    loc: "Big Sky, Montana"
                },
                {
                    src: require("@/assets/images/worlds/worlds-14.jpg"),
                    caption: "GOZZER RANCH",
                    loc: "Coeur d'Alene, Idaho"
                    
                },
                {
                    src: require("@/assets/images/worlds/worlds-15.jpg"),
                    caption: "EL DORADO",
                    loc: "Los Cabos, Mexico"
                },
                {
                    src: require("@/assets/images/worlds/worlds-16.jpg"),
                    caption: "MADISON",
                    loc: "La Quinta, California"
                },
                {
                    src: require("@/assets/images/worlds/worlds-17.jpg"),
                    caption: "BAKER'S BAY",
                    loc: "Great Guana Cay, Bahamas"
                },
                {
                    src: require("@/assets/images/worlds/worlds-18.jpg"),
                    caption: "HIDEAWAY",
                    loc: "La Quinta, California"
                    
                },
                {
                    src: require("@/assets/images/worlds/worlds-19.jpg"),
                    caption: "MOUNTAINTOP",
                    loc: "Cashiers, North Calorina"
                },
                {
                    src: require("@/assets/images/worlds/worlds-20.jpeg"),
                    caption: "MIRABEL",
                    loc: "Scottsdale, Arizona"
                },
                {
                    src: require("@/assets/images/worlds/worlds-21.jpg"),
                    caption: "KŪKI'O",
                    loc: "Kohala, Hawaii"
                },
                {
                    src: require("@/assets/images/worlds/worlds-22.jpg"),
                    caption: "VAQUERO",
                    loc: "Westlake, Texas"
                    
                },
                {
                    src: require("@/assets/images/worlds/worlds-23.jpg"),
                    caption: "IRON HORSE",
                    loc: "Whitefish, Montana"
                },
                {
                    src: require("@/assets/images/worlds/worlds-24.jpg"),
                    caption: "CORDEVALLE",
                    loc: "Silicon Valley, California"
                },
                {
                    src: require("@/assets/images/worlds/worlds-25.jpg"),
                    caption: "ESTANCIA",
                    loc: "Scottsdale, Arizona"
                },
            ]
        }
    }
}