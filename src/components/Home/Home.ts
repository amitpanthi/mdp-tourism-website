import HomeMain from '@/components/HomeMain/HomeMain.vue';
import ImageText from '@/components/ImageText/ImageText.vue';
import Carousel from '@/components/Carousel/Carousel.vue'
import WorldMap from '@/components/WorldMap/WorldMap.vue';
import ThreeImage from '@/components/ThreeImage/ThreeImage.vue';
import Footer from '@/components/Footer/Footer.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        HomeMain,
        ImageText,
        Carousel,
        WorldMap,
        ThreeImage,
        Footer
    },
})

export default class Home extends Vue {
    data(){
        return{
            topHeading: 'Explore',
            bottomHeading: 'Our Worlds',
            carouselData: [
                {
                  pic: require("@/assets/images/worlds/worlds-1.jpg"),
                  title: "NORTH SHORE PRESERVE",
                  location: `Kaua'i, Hawaii`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-2.jpg"),
                  title: "JAMES ISLAND",
                  location: `Southern Gulf Islands, British Columbia, Canada`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-3.jpg"),
                  title: "COSTATERRA",
                  location: `Comporta, Portugal`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-4.jpg"),
                  title: "BARBUDA OCEAN CLUB",
                  location: `Barbuda, West Indies`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-5.jpg"),
                  title: "DRIFTWOOD",
                  location: `Austin, Texas`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-6.jpg"),
                  title: "TROUBADOUR",
                  location: `Nashville, Tennessee`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-7.jpg"),
                  title: "PLAYA GRANDE",
                  location: `Rio San Juan, Dominican Republic`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-8.jpg"),
                  title: "CHILENO BAY",
                  location: `Cabo San Lucas, Mexico`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-9.jpg"),
                  title: "THE SUMMIT",
                  location: `Las Vegas, Nevada`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-10.jpg"),
                  title: "DUNE DECK",
                  location: `Westhamton Beach, NY`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-11.jpg"),
                  title: "SILO RIDGE",
                  location: `Amenia, New York`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-12.jpg"),
                  title: "MAKENA",
                  location: `Maui, Hawaii`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-13.jpg"),
                  title: "YELLOWSTONE CLUB",
                  location: `Big Sky, Montana`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-14.jpg"),
                  title: "GOZZER RANCH",
                  location: `Coeur d'Alene, Idaho`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-15.jpg"),
                  title: "EL DORADO",
                  location: `Los Gabos, Mexico`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-16.jpg"),
                  title: "MADISON",
                  location: `La Quinta, California`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-17.jpg"),
                  title: `BAKER'S BAY`,
                  location: `Great Guana Cay, Behamas`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-18.jpg"),
                  title: "HIDEAWAY",
                  location: `La Quinta California`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-19.jpg"),
                  title: "MOUNTAINTOP",
                  location: `Cashiers North Carolina`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-20.jpeg"),
                  title: "MIRABEL",
                  location: `Scottsdale, Azizona`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-21.jpg"),
                  title: "KUKIO",
                  location: `Kohala, Hawaii`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-22.jpg"),
                  title: "VAQUERO",
                  location: `Westlake, Texas`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-23.jpg"),
                  title: "IRON HORSE",
                  location: `Whitefish, Montana`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-24.jpg"),
                  title: "CORDEVALLE",
                  location: `Silicon Valley, California`,
                },
                {
                  pic: require("@/assets/images/worlds/worlds-25.jpg"),
                  title: "ESTANICIA",
                  location: `Scottsdale, Arizona`,
                },
              ]
        }
    }
}