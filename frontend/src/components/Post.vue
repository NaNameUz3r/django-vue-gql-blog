<template>
  <div class="post" v-if="post">
      <h2>{{ post.title }} </h2>
      <h3>{{ post.subtitle }} </h3>
      <div class="publish-date">{{ displayableDate(post.publishDate) }}</div>
      <pre> {{  }} </pre>
      <!-- <img :src="`/${post.headerImage}`" alt="Header Image" class="header-image"/> -->
    <p class="post__description">{{ post.metaDescription }}</p>
    <!-- <article v-html="post.body"> -->
    <article class="post-article">
      <!-- {{ post.body }}  -->
      <vue-markdown :source="post.body"> </vue-markdown>
    </article>
    <ul class="post-tags-list">
      <li class="post__tags" v-for="tag in post.tags" :key="tag.name">
        <router-link :to="`/tag/${tag.name}`">#{{ tag.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import gql from 'graphql-tag'
import VueMarkdown from 'vue-markdown-render'

export default {
  name: 'Post',
  components: {
    VueMarkdown,
  },
  data () {
    return {
      post: null,
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
  async created () {
    const post = await this.$apollo.query({
        query: gql`query ($slug: String!) {
          postBySlug(slug: $slug) {
            title
            headerImage
            subtitle
            publishDate
            metaDescription
            slug
            body
            author {
              user {
                username
                firstName
                lastName
              }
            }
            tags {
              name
            }
          }
        }`,
        variables: {
          slug: this.$route.params.slug,
        },
    })
    this.post = post.data.postBySlug
  },

}
</script>


<style>
.post-article img {
  max-width: 25vw;
  min-width: 300px;
  height: auto;
  margin: 0 auto;
  display: block;
}

.header-image {
  /* max-width: 30vw; */
}

.publish-date {
  font-size: smaller;
}
</style>