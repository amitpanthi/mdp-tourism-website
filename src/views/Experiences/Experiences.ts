import './Experiences.scss'

import ExperiencesVid from '@/components/ExperiencesVid/ExperiencesVid.vue';
import DescriptionText from '@/components/DescriptionText/DescriptionText.vue'
import TextImageExp from '@/components/TextImageExp/TextImageExp.vue'
import OverlappingImages from '@/components/OverlappingImages/OverlappingImages.vue'
import OverlappingImagesL from '@/components/OverlappingImagesL/OverlappingImagesL.vue'
import ExploreBanner from '@/components/ExploreBanner/ExploreBanner.vue'
import Footer from '@/components/Footer/Footer.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        ExperiencesVid,
        DescriptionText,
        TextImageExp,
        OverlappingImages,
        OverlappingImagesL,
        ExploreBanner,
        Footer
    }
})

export default class Experiences extends Vue {
    data(){
        return{
            introDesc: "Memorable days. Exceptional nights. We believe it's our mission to make every minute matter. So you can live\
            your life to the fullest, with the people closest to you.",
            exploreTxt: 'Explore',
            golfDesc: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.",
            golfTitle: "Golf",
            golfImage: require('@/assets/images/experiences/golf.jpg'),
            golfGradient: 1,
            rocksDesc: "Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.",
            rocksTitle: "Outdoor Pursuits",
            rocksImage: require('@/assets/images/experiences/rocks.jpg'),
            rocksGradient: 2,
            swimDesc: "Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.",
            swimTitle: "Wellness",
            swimImage: require('@/assets/images/experiences/swim.jpg'),
            swimGradient: 3,
            bannerText: "Our Worlds"
        }
    }
}
