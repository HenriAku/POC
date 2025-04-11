"use strict";
// @ts-ignore  
const { createApp, ref } = Vue;
const App = {
    components: {
        Page
    },
    setup() {
        const slide = ref(0);
        const totalSlide = ref(3);
        const nextSlide = () => {
            slide.value = (slide.value + 1) % totalSlide.value;
            console.log(slide.value);
            updateCarousel();
        };
        const prevSlide = () => {
            slide.value = (slide.value - 1 + totalSlide.value) % totalSlide.value;
            console.log(slide.value);
            updateCarousel();
        };
        const updateCarousel = () => {
            const lstItem = document.getElementsByClassName("carousel-item");
            for (let i = 0; i < lstItem.length; i++) {
                lstItem[i].classList.add('is-hidden');
            }
            const currentItem = document.getElementById("item" + slide.value);
            if (currentItem) {
                currentItem.classList.remove('is-hidden');
            }
        };
        return {
            nextSlide,
            prevSlide,
            slide
        };
    },
    template: `
    <Page>
      <template v-slot:main>
        <section class="hero has-background-link">
          <div class="hero-body columns container mt-6 is-align-content-center">
            <img src="assets/images/logo_salamander_esport.svg" alt="" class="mt-6">
            <h1 class="has-text-info is-size-1 mt-6">SALAMANDER <br><span class="has-text-primary is-size-2"> ESPORT</span></h1>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="carousel columns mt-6 mb-6">
              <button class="button is-primary mr-6" @click="prevSlide"><</button>
              <div class="carousel-container">
                <div id="item0" class="carousel-item">
                  <p>1 Lorem ipsum dolor sit amet...</p>
                </div>
                <div id="item1" class="carousel-item is-hidden">
                  <p>2 Lorem ipsum dolor sit amet...</p>
                </div>
                <div id="item2" class="carousel-item is-hidden">
                  <p>3 Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
              <button class="button is-primary ml-6" @click="nextSlide">></button>
            </div>
          </div>
        </section>
      </template>
    </Page>
  `
};
createApp(App).mount('#app');
