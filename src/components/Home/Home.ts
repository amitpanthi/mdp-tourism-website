import HomeMain from '@/components/HomeMain/HomeMain.vue';
import ImageText from '@/components/ImageText/ImageText.vue';
import WorldMap from '@/components/WorldMap/WorldMap.vue';
import ThreeImage from '@/components/ThreeImage/ThreeImage.vue';
import Footer from '@/components/Footer/Footer.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        HomeMain,
        ImageText,
        WorldMap,
        ThreeImage,
        Footer
    },
})

export default class Home extends Vue {}