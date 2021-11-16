<template>
  <div class="posts-block">
    <h4 class="postlist-header">Недавно я написал:</h4>
    <PostList v-if="allPosts" :posts="allPosts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import gql from 'graphql-tag'

export default {
  name: 'AllPosts',
  components: {
    PostList,
  },
  data () {
    return {
        allPosts: null,
    }
  },
  async created () {
    const posts = await this.$apollo.query({
      query: gql`query {
        allPosts {
          title
          headerImage
          subtitle
          publishDate
          published
          metaDescription
          slug
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
    })
    this.allPosts = posts.data.allPosts
  },
}
</script>

<style>


.postlist-header {
 padding-left: 32px;
 padding-top: 10px;
}

.posts-block {
}
</style>