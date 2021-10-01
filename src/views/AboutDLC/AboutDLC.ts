import './AboutDLC.scss'


import { Options, Vue } from 'vue-class-component';
import AboutMain from '@/components/AboutMain/AboutMain.vue'
import DescriptionText from '@/components/DescriptionText/DescriptionText.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import TextImageL2R from '@/components/TextImageL2R/TextImageL2R.vue';
import SingleImage from '@/components/SingleImage/SingleImage.vue'
import AboutL2R from '@/components/AboutL2R/AboutL2R.vue';
import AboutR2L from '@/components/AboutR2L/AboutR2L.vue';
import ExploreBanner from '@/components/ExploreBanner/ExploreBanner.vue'
import Footer from '@/components/Footer/Footer.vue';

@Options({
    components: {
        AboutMain,
        DescriptionText,
        Carousel,
        TextImageL2R,
        SingleImage,
        AboutL2R,
        AboutR2L,
        ExploreBanner,
        Footer
    }
})
export default class AboutDLC extends Vue {
    data(){
        return {
            descriptionBanner: 'Founded in 1994 by Mike Meldman, Discovery Land Company is a US-based real estate developer and operator of private\
            residential club communities and resorts with a world-renowned portfolio of domestic and international properties.',
            fsImageOne: require('@/assets/images/about/im-2.jpg'),
            ImageOnePad: true,
            fsImageTwo: require('@/assets/images/about/im-4.jpg'),
            ImageTwoPad: false,
            headerOne: 'Discovery Design',
            headerTwo: " ",
            descOne: 'See the beauty in every corner of your new, bespoke\
            home away from home. From fabrics and furniture\
            pieces to floorplans, our professional designers will\
            collaborate closely with you to create an interior living\
            space which reflects your style and unique tastes as\
            well as perfectly complementing your lifestyle.',
            l2rim1: require('@/assets/images/about/im-5.jpg'),
            l2rim2: require('@/assets/images/about/im-6.jpg'),
            fsImageThree: require('@/assets/images/about/im-7.jpg'),
            headerThree: 'Discovery Builders',
            descTwo: 'Every Discovery property is wonderfully in-tune with its\
            natural surroundings - a harmonious blend of the\
            architecturally impressive with the environmentally\
            sensitive. And your every expectation will be met, with\
            our meticulous eye for detail matching outstanding\
            levels of craftsmanship and master building.',
            r2lim1: require('@/assets/images/about/im-8.jpg'),
            r2lim2: require('@/assets/images/about/im-9.jpg'),
            exploreHeader: 'Our Worlds',
            carouselData: [
                {
                    pic: require("@/assets/images/about/p1.jpg"),
                    title: "Focus on family",
                    location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
                  },
                  {
                    pic: require("@/assets/images/about/p2.jpg"),
                    title: "Incomparable experiences",
                    location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
                  },
                  {
                    pic: require("@/assets/images/about/p3.jpg"),
                    title: "Inspired by land",
                    location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
                  },
                  {
                    pic: require("@/assets/images/about/p4.jpg"),
                    title: "Sustainable future",
                    location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
                  },
                  {
                    pic: require("@/assets/images/about/p5.jpg"),
                    title: "Luxury bespoke homes",
                    location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
                  },
                  {
                    pic: require("@/assets/images/about/p1.jpg"),
                    title: "Focus on family",
                    location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
                  },
                  {
                    pic: require("@/assets/images/about/p2.jpg"),
                    title: "Incomparable experiences",
                    location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
                  },
                  {
                    pic: require("@/assets/images/about/p3.jpg"),
                    title: "Inspired by land",
                    location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
                  },
                  {
                    pic: require("@/assets/images/about/p4.jpg"),
                    title: "Sustainable future",
                    location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
                  },
                  {
                    pic: require("@/assets/images/about/p5.jpg"),
                    title: "Luxury bespoke homes",
                    location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
                  }
            ],
            topHeading: 'The Discovery Difference',
            bottomHeading: ' ',
        }
    }
}