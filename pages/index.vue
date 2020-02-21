<template>
  <div>
    <Navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr />
                </div>
                <Post
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :author="post.author"
                  :date="new Date()"
                  :isRead="post.isRead"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <form>
        <input type="text" v-model="form.title" />
        <input type="text" v-model="form.subtitle" />
      </form>
      {{ isFormValid() }} -->
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Post from "~/components/Post.vue";
export default {
  name: "nuxt-posts",
  data() {
    return {
      form: {
        title: "ligma",
        subtitle: "bawlz"
      }
    };
  },
  components: {
    Navbar,
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    isFormValid() {
      if (this.form.title) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
