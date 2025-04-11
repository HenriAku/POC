"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore  
const { createApp, ref } = Vue;
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('config.json');
        return yield response.json();
    });
}
loadConfig()
    .then(config => {
    const API_KEY = config.YOUTUBE_API_KEY;
    const CHANNEL_ID = config.YOUTUBE_CHANNEL_ID;
    YoutubeVideo(API_KEY, CHANNEL_ID);
})
    .catch(error => {
    console.error("Erreur:", error);
});
function YoutubeVideo(API_KEY, CHANNEL_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        const youtubeRep = yield fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`);
        const data = yield youtubeRep.json();
        const uploadsPlaylistId = data.items[0].contentDetails.relatedPlaylists.uploads;
        const videosResponse = yield fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${uploadsPlaylistId}&key=${API_KEY}`);
        const videosData = yield videosResponse.json();
        console.log(videosData);
        const section = document.getElementById("video");
        const videoId = videosData.items[0].snippet.resourceId.videoId;
        section.innerHTML = `
				<iframe 
					width="560" 
					height="315" 
					src="https://www.youtube-nocookie.com/embed/${videoId}" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowfullscreen>
				</iframe>
				`;
    });
}
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
                  <p>1     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem provident rem placeat soluta officiis, sequi quae vel quia eligendi voluptates dolor! Consequatur, quo fugiat. Nihil exercitationem fugiat voluptas quo?</p>
                </div>
                <div id="item1" class="carousel-item is-hidden">
                  <p>2     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem provident rem placeat soluta officiis, sequi quae vel quia eligendi voluptates dolor! Consequatur, quo fugiat. Nihil exercitationem fugiat voluptas quo?</p>
                </div>
                <div id="item2" class="carousel-item is-hidden">
                  <p>3     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem provident rem placeat soluta officiis, sequi quae vel quia eligendi voluptates dolor! Consequatur, quo fugiat. Nihil exercitationem fugiat voluptas quo?</p>
                </div>
              </div>
              <button class="button is-primary ml-6" @click="nextSlide">></button>
            </div>
          </div>
        </section>

		<section id="video">
		</section>
      </template>
    </Page>
  `
};
createApp(App).mount('#app');
