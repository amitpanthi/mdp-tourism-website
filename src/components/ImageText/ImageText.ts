import './ImageText.scss'

import { Vue } from 'vue-class-component';

export default class ImageText extends Vue {
    data(){
        return {
            descriptionHeadO: "Welcome to",
            descriptionHeadT: "our world",
            descriptionContent: "Discover the unique atmosphere of our private residential club communities. Once experienced. Never\
            forgotten. This is classic, comfortable, modern living in nature's most spectacular settings worldwide. Reassuringly\
            exclusive. Generously welcoming. Find your unique world - a place where families love to be; creating unforgettable memories\
            together.",
            descriptionImageO: require("@/assets/images/home/im-1.jpg"),
            descriptionImageT: require("@/assets/images/home/im-2.jpg"),
            descriptionBG: require("@/assets/images/home/bg-1.jpg")
        }
    }
}