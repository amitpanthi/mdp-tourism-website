import './Gallery.scss'

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        Header,
        Footer
},
})

export default class Home extends Vue {
    data(): any{
        return{
            gallery_items_r1: [
            {
                img_src: require('@/assets/images/gallery/gallery-1.jpg'),
                caption: 'Outdoor Pursuits'
            },
            {
                img_src: require('@/assets/images/gallery/gallery-2.jpg'),
                caption: 'Golf'
            },
            {
                img_src: require('@/assets/images/gallery/gallery-3.jpeg'),
                caption: 'Lifestyle'
            },
        ],

        gallery_items_r2: [
            {
                img_src: require('@/assets/images/gallery/gallery-4.jpg'),
                caption: 'Landscapes'
            },
            {
                img_src: require('@/assets/images/gallery/gallery-5.jpg'),
                caption: 'Clubhouses'
            },
            {
                img_src: require('@/assets/images/gallery/gallery-6.jpg'),
                caption: 'Wellness'
            },
        ]
        }
    }
}
