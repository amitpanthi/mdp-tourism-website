import './DescriptionText.scss'

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        description: String
    }
})
export default class Footer extends Vue {
    
}