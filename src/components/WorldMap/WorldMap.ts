import './WorldMap.scss'

import { Vue } from 'vue-class-component';

export default class WorldMap extends Vue {
    data(){
        return {
            descriptionHeadO: "Lands of",
            descriptionHeadT: "Discovery",
            description: "A world away from day-to-day. Your escape. Your haven. Your world. Explore the map below and take a journey\
            to our communities."
        }
    }
}