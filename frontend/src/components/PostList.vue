<template>
  <!-- <div>
    <ol class="post-list card-body">
      <li class="post card border-dark mb-3" v-for="post in publishedPosts" :key="post.title">
          <span class="card-header">
            <router-link
              :to="`/post/${post.slug}`"
            >{{ post.title }}: {{ post.subtitle }}</router-link>
          </span>
          <div class="post__date card-subtitle mb-2 text-muted">{{ displayableDate(post.publishDate) }}</div>
        <p class="post__description card-body">{{ post.metaDescription }}</p>
        <ul>
          <li class="post__tags badge bg-light" v-for="tag in post.tags" :key="tag.name">
            <router-link :to="`/tag/${tag.name}`">#{{ tag.name }}</router-link>
          </li>
        </ul>
      </li>
    </ol>
  </div> -->



  <ol class="post-list">
  <li v-for="post in publishedPosts" :key="post.title" class="card mb-3">
    <div>
      <router-link :to="`/post/${post.slug}`" class="router-link">
      <!-- <h4 class="card-header" @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover}">
          Читать
      </h4> -->

        <div class="card-header">
        <h5 class="card-title">{{ post.title }}</h5>
        <h6 class="card-subtitle text-muted">{{ post.subtitle }}</h6>
        </div>
 
      <div>
       <img :src="`/${post.headerImage}`" alt="Header Image" class="header-image card-body"/> 
      </div>
      <div class="card-body">
        <p class="card-text">{{ post.metaDescription }}</p>
      </div>

      <div class="card-body" v-for="tag in post.tags" :key="tag.name">
        <router-link :to="`/tag/${tag.name}`" class="router-link router-tag-link">#{{ tag.name }}</router-link>
      </div>
      <div class="card-footer text-muted" >
        {{ displayableDate(post.publishDate) }}
      </div>
      </router-link>
    </div>
  </li>
  </ol>



</template>

<script>

export default {
  name: 'PostList',
  components: {
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    showAuthor: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    publishedPosts () {
      return this.posts.filter(post => post.published)
    }
  },
  methods: {
    displayableDate (date) {
      return new Intl.DateTimeFormat(
        'en-US',
        { dateStyle: 'full' },
      ).format(new Date(date))
    }
  },
}
</script>


<style>

.post-list {
  list-style: none;
  max-width: 100%;
  padding-right: 32px;
}

.header-image {
  width: 100%;
  max-width: 400px;
  height: auto;

}

.card-header:hover {
  text-decoration: none;
}

.router-link {
  text-decoration: none;
}
.router-tag-link:hover {
  text-decoration: underline;
}
</style>

