import './SingleImage.scss'

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        mainImage: String,
        hasPadding: Boolean
    }
})
export default class AboutL2R extends Vue {
    
}
