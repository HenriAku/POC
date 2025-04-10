<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Page from './components/Page.vue'
</script>

<template>
  <Page>
    <template v-slot:main>
      <section class="hero has-background-link">
        <div class="hero-body columns container mt-6 is-align-content-center">
					<img src="./assets/logo_salamander_esport.svg" alt="" class="mt-6">
					<h1 class="has-text-info is-size-1 mt-6" >SALAMANDER <br><span class="has-text-primary is-size-2"> ESPORT</span></h1>
				</div>
      </section>
      <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit sit magni, ab quis cupiditate laudantium nesciunt ratione rerum esse cum laborum distinctio. Tempora aliquid perferendis minima dolore consequatur veniam!
        Quod eos delectus modi amet architecto explicabo perferendis eius, reiciendis iure asperiores, optio error! Excepturi ratione provident magnam quod, voluptatibus deserunt! Voluptates aperiam non, corporis aut unde fugiat ut facere.
        Atque mollitia pariatur soluta placeat fuga aperiam quo magnam tenetur odio, eaque dolore nesciunt commodi nam ex nemo eius corrupti, architecto debitis. Consequuntur quaerat corrupti officia id minima delectus nihil.
        Quisquam, quas! Amet quas cum ut quaerat fugit laboriosam neque consequatur eos expedita, a quos itaque aliquam nobis recusandae pariatur aspernatur esse odio similique minima harum repudiandae nisi deserunt! Recusandae!
        Ratione voluptate architecto eum distinctio placeat officia labore blanditiis sint recusandae! Quisquam, facilis iste! Illo similique iste quae repellat aliquid laboriosam maxime debitis velit harum. Doloribus libero sapiente voluptates numquam.
        Ex nesciunt quia ut, perspiciatis commodi assumenda odit aut enim quas animi aliquam quis hic harum repellendus perferendis molestiae eaque facilis possimus impedit eligendi. Nobis expedita tenetur aliquid veritatis inventore?
        Iure ipsa veniam architecto eligendi iste culpa quidem, nesciunt maxime. Aut quibusdam ad porro dolore voluptatibus exercitationem, libero adipisci harum minima accusamus temporibus quas necessitatibus nesciunt, cum enim labore veritatis?
        Sunt odio ipsam vel cumque eius dolorum nostrum odit velit illum! Earum fugiat facilis quisquam quasi molestias, quae eveniet perspiciatis aliquam debitis, possimus repellat assumenda! Iste at sapiente magnam doloremque.
        Repudiandae, velit. Veniam quaerat nam mollitia officiis! Odit ut, officia debitis quod libero laudantium nisi voluptas soluta vero, molestias aut delectus rem totam commodi, nostrum tempore blanditiis. Deleniti, accusamus dolorum.
        Molestias totam laboriosam dignissimos magnam in tempora, iure doloribus ipsum pariatur cupiditate eius exercitationem similique culpa odit vitae dolorum iusto hic est aperiam voluptatum numquam. Et repudiandae ullam harum! Ipsam!</p>
      </section>
    </template>
  </Page>
</template>

<style>
.hero {
  position: relative;
  overflow: hidden;
  min-height: 90vh; 
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 80%;
  background-image: url("assets/vague_salamander_esport.svg");
  background-size: cover;
  background-position:right;
  transform: scaleX(-1);
  z-index: 0;
}

.hero img{
  width: 256px;
  height: 256px;
}
</style>
