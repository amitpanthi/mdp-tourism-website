import './Carousel.scss'

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        topHeading: String,
        bottomHeading: String,
        locList: Array
    }
})
export default class Footer extends Vue {
    
}
