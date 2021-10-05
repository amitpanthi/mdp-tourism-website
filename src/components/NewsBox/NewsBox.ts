import './NewsBox.scss'

import { Options, Vue } from 'vue-class-component';

@Options({
    methods:{
        updatePage(direction: number){
            if(this.index == 2 && direction == 1){
                this.index = 1
            } else if(this.index == 1 && direction == -1){
                this.index = 2
            } else {
                this.index += direction
            }
        }
    }
})
export default class NewsBox extends Vue {
    data(){
        return{
            index: 1,
            pressData: [
                [
                    {
                        heading: `10 Fairways to Tee Off on Now`,
                        para: `Vegas Magazine I September 2021`
                    },
                    {
                        heading: `Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic`,
                        para: `Bloomberg I September 2021`
                    },
                    {
                        heading: `Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated`,
                        para: `Telegraph UK | August 20, 2021`
                    },
                    {
                        heading: `This Property Company Ups the Ante with  Luxury and Sustainability`,
                        para: `Sunset Magazine | August 13, 2021`
                    },
                ],
                [
                    {
                        heading: `Where Sun, Sand and Splendor Are Still To Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                    {
                        heading: `Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious live-in resorts`,
                        para: `Business Insider | June 4, 2021`
                    },
                    {
                        heading: `There's a real buy-in for resort communities offering amusement and amenities`,
                        para: `Luxury Magazine | Spring/Summer 2021`
                    },
                    {
                        heading: `This Blue Chip Carribean Island Hopes to Dethrone St. Barts`,
                        para: `New York Post | April 5, 2021`
                    },
                ],
            ]
        }
    }
}