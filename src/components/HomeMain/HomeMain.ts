import './HomeMain.scss'

import Header from '@/components/Header/Header.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        Header
    },
})

export default class Home extends Vue {}
