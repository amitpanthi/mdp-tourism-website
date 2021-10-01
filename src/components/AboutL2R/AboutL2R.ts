import './AboutL2R.scss'

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
export default class AboutL2R extends Vue {
    
}
