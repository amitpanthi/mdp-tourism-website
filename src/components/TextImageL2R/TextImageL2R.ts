import './TextImageL2R.scss'

import { Vue } from 'vue-class-component';

export default class TextImageL2R extends Vue {
    data(){
        return{
            timHeader: 'Our Mission',
            timDesc: "We don't build buildings, but rather we build settings\
            where families can create intergenerational memories\
            and enrich their lives in exquisite and untouched\
            sanctuaries. Everything we do is driven by the\
            fundamental desire to create spaces where families can\
            can be together.\
            These settings offer a relaxed and comfortable sense of community\
            featuring outstanding clubhouses,\
            incredible residential offerings, premier golf courses,\
            welcoming staff, world-class culinary offerings and our\
            custom Outdoor Pursuits program; all offering the\
            highest of service standards to enrich your experience.",
            imgSource: require('@/assets/images/about/im-1.jpg')
        }
    }
}
