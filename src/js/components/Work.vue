<template>
    <div class="row mt-5">
        <div class="col-12 work">
            <h4 class="bold-title display-4 swipe">Work Examples</h4>
            <div class="work-wrapper">
                <div class="top-carousel">
                    <hooper ref="topCarousel"
                            :vertical="true"
                            :itemsToShow="1"
                            :centerMode="true"
                            :mouseDrag="false"
                            :touchDrag="false"
                            :wheelControl="false"
                            :keysControl="false"
                            group="group1"
                    >
                        <slide v-for="(item, index) in items">
                            <div class="number">{{getNumber(index)}}</div>
                        </slide>
                    </hooper>
                </div>
                <div class="bottom-carousel">
                    <hooper ref="bottomCarousel"
                            :vertical="false"
                            :itemsToShow="1"
                            :itemsToSlide="1"
                            :centerMode="true"
                            group="group1"
                    >
                        <slide v-for="item in items">
                            <div class="slide-item">
                                <img v-bind:src="item.image" />
                            </div>
                        </slide>
                    </hooper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        components:{
            Hooper,
            Slide
        },
        data() {
            return {
                items: [
                    {
                        image: '/assets/images/profile_images/0001.png'
                    },
                    {
                        image: '/assets/images/profile_images/0002.png'
                    },
                    {
                        image: '/assets/images/profile_images/0003.png'
                    },
                    {
                        image: '/assets/images/profile_images/0004.png'
                    },
                    {
                        image: '/assets/images/profile_images/0005.png'
                    },
                    {
                        image: '/assets/images/profile_images/0006.png'
                    },
                    {
                        image: '/assets/images/profile_images/0007.png'
                    },
                    {
                        image: '/assets/images/profile_images/0008.png'
                    },
                    {
                        image: '/assets/images/profile_images/0009.png'
                    },
                    {
                        image: '/assets/images/profile_images/0010.png'
                    },
                    {
                        image: '/assets/images/profile_images/0011.png'
                    },
                    {
                        image: '/assets/images/profile_images/0012.png'
                    }
                ]
            };
        },
        methods: {
            getNumber(index){
                let num = parseInt(index) + 1;
                if(num < 10){
                    return "0" + num;
                }
                return num;
            }
        }
    };
</script>
