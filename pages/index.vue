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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Post from "~/components/Post.vue";
export default {
  components: {
    Navbar,
    Post
  },
  data() {
    return {
      posts: [
        {
          _id: 0,
          title: "title",
          subtitle: "sub",
          author: "Joe Mama"
        }
      ]
    };
  }
};
</script>
