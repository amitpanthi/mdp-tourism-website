import './ExploreBanner.scss'

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        bannerHeader: String
    }
})
export default class Footer extends Vue {

}