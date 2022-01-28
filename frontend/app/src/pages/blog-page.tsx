import { NextPage } from 'next'
import Layout from '../components/templates/Layout'
import Post from '../components/templates/Post'
import { getAllPostsData } from '../libs/posts'
import { FetchBlogInfo } from '../models/blog-page-models'

interface Props {
  posts: FetchBlogInfo[]
}

const Blog: NextPage<Props> = (props) => {
  const { posts } = props
  return (
    <Layout title='Blog'>
      <ul className='m-10'>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
