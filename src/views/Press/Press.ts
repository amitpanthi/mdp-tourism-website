import './Press.scss'

import { Options, Vue } from 'vue-class-component';
import PressMain from '@/components/PressMain/PressMain.vue';
import ImagePage from '@/components/ImagePage/ImagePage.vue';
import NewsBox from '@/components/NewsBox/NewsBox.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
    components: {
        PressMain,
        ImagePage,
        NewsBox,
        Footer
    }
})
export default class Press extends Vue {
    data(){
        return {
        }
    }
}