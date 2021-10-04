import './OverlappingImagesL.scss'


import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        bgImage: String,
        dTitle: String,
        desc: String,
        buttonText: String,
        gradient: Number
    }
})
export default class OverlappingImagesL extends Vue {
    
}