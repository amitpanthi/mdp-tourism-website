import './AboutR2L.scss'

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        descriptionHeadO: String,
        descriptionHeadT: String,
        descriptionContent: String,
        imgOne: String,
        imgTwo: String
    }
})
export default class AboutR2L extends Vue {
    
}