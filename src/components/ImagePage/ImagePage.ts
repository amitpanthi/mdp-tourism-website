import './ImagePage.scss'

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        bgImage: String,
        dTitle: String,
        desc: String,
        buttonText: String,
    },
    methods:{
        updatePage(direction: number){
            if(this.index == 4 && direction == 1){
                this.index = 1
            } else if(this.index == 1 && direction == -1){
                this.index = 4
            } else {
                this.index += direction
            }
        }
    }
})
export default class ImagePage extends Vue {
    data(){
        return{
            index: 1,
            newsData: [
                {
                    id: 1,
                    pic: require('@/assets/images/press/img-1.jpg'),
                    heading: 'Discovery’s newest property in Kaua’i North Shore Preserve',
                    para: `Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.`
                },
                {
                    id: 2,
                    pic: require('@/assets/images/press/img-2.jpg'),
                    heading: "James Island Discovery's Newest Property",
                    para: `
                    Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.
                  `
                },
                {
                    id: 3,
                    pic: require('@/assets/images/press/img-3.jpg'),
                    heading: "CostaTerra Discovery's 23rd property",
                    para: `
                    Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.
                  `
                },
                {
                    id: 4,
                    pic: require('@/assets/images/press/img-4.jpg'),
                    heading: 'Troubadour To Open Golf Course Fall 2019',
                    para: `
                    Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.
                  `
                }
            ]
        }
    }
}