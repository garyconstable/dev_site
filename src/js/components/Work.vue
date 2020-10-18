<template>
  <div class="row mt-3 mt-md-5 the-work">
    <div class="col-12 work">
      <h4 class="bold-title display-4 swipe">Work Examples</h4>
      <div class="work-wrapper">
        <div class="top-carousel">
          <hooper
            ref="topCarousel"
            :itemsToShow="1"
            :itemsToSlide="1"
            :vertical="true"
            :centerMode="true"
            :mouseDrag="false"
            :touchDrag="false"
            :wheelControl="false"
            :keysControl="false"
            group="group1"
          >
            <slide v-for="(item, index) in items" :key="item.idx">
              <div class="number">{{ getNumber(index) }}</div>
            </slide>
          </hooper>
        </div>
        <div class="bottom-carousel">
          <hooper
            ref="bottomCarousel"
            :vertical="false"
            :itemsToShow="1"
            :itemsToSlide="1"
            :centerMode="true"
            group="group1"
          >
            <slide v-for="item in items" :key="item.idx">
              <div class="slide-item">
                <img v-bind:src="item.image" />
                <div class="description" v-if="item.description.length">
                  {{ item.description }}
                </div>
              </div>
            </slide>
          </hooper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      items: [
        {
          idx: 0,
          image: "/assets/images/profile_images/screen-europe.png",
          description: "Wordpress, Plugin & Theme Development"
        },

        {
          idx: 1,
          image: "/assets/images/profile_images_large/0001.png",
          description: "Shopify Theme Development"
        },

        {
          idx: 2,
          image: "/assets/images/profile_images/the-boardbasement.png",
          description: "Magento 2 - Theme Development"
        },

        /*
        {
          idx: 1,
          image: "/assets/images/profile_images/0002.png",
          description: "Shopify Theme Development"
        },
        */

        {
          idx: 3,
          image: "/assets/images/profile_images/0003.png",
          description: "PSD to Html & CSS"
        },

        /*
        {
          idx: 3,
          image: "/assets/images/profile_images/0004.png",
          description: "Shopify Collection Filters with JQuery"
        },
        {
          idx: 4,
          image: "/assets/images/profile_images/0005.png",
          description: "Jquery / Javascript"
        },
        */

        {
          idx: 4,
          image: "/assets/images/profile_images/0006.png",
          description: "Angular V1 App Development"
        },

        /*
        {
          idx: 6,
          image: "/assets/images/profile_images/0007.png",
          description: "Php Website Development"
        },
        */

        {
          idx: 5,
          image: "/assets/images/profile_images/0008.png",
          description: "Email Templates"
        },
        /*
        {
          idx: 8,
          image: "/assets/images/profile_images/0009.png",
          description: "PSD to Html & CSS"
        },
        */
        /*
        {
          idx: 9,
          image: "/assets/images/profile_images/0010.png",
          description: "Php Website Development"
        },
        */

        /*
        {
          idx: 10,
          image: "/assets/images/profile_images/0011.png",
          description: "Php Website Development"
        },
        */

        /*
        {
          idx: 11,
          image: "/assets/images/profile_images/0012.png",
          description: "Php Website Development"
        }
        */

        {
          idx: 6,
          image: "/assets/images/profile_images/blake-and-white.png",
          description: "HTML & CSS"
        },

        {
          idx: 7,
          image: "/assets/images/profile_images/vue-js.png",
          description: "VueJs"
        },

        {
          idx: 8,
          image: "/assets/images/profile_images/php.png",
          description: "PHP"
        }
      ]
    };
  },
  methods: {
    getNumber(index) {
      let num = parseInt(index) + 1;
      if (num < 10) {
        return "0" + num;
      }
      return num;
    }
  }
};
</script>
