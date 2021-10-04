import './TextImageExp.scss'

import { Vue } from 'vue-class-component';

export default class TextImageL2R extends Vue {
    data(){
        return{
            timHeader: 'Exclusive to your world',
            timDesc: "Our worlds are designed to offer you endless\
            opportunities to share incredible once-in-a-lifetime\
            experiences and adventures every single minute of the\
            day. Each of our settings offers a relaxed sense of\
            community through exceptional clubhouses,\
            world-class golf courses, welcoming staff and an\
            extensive Outdoor Pursuits program",
            imgSource: require('@/assets/images/experiences/im-1.jpg')
        }
    }
}
