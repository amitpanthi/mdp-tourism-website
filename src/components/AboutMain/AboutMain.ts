import './AboutMain.scss'

import Header from '@/components/Header/Header.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        Header
},
})
export default class Footer extends Vue {
}