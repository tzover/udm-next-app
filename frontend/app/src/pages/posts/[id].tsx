import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../components/templates/Layout'
import { getAllPostIds, getPostData } from '../../libs/posts'
import { FetchBlogInfo } from '../../models/blog-page-models'

interface Props {
  post: FetchBlogInfo
}

const Post: NextPage<Props> = (props) => {
  const { post } = props

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={post.title}>
      <p className='m-4'>
        {'ID :'}
        {post.id}
      </p>
      <p className='mb-8 text-xl font-bold'>{post.title}</p>
      <p className='px-10'>{post.body}</p>

      <Link href='/blog-page'>
        <div className='flex cursor-pointer mt-12'>
          <svg
            className='w-6 h-6 mr-3'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 5l7 7-7 7M5 5l7 7-7 7'
            ></path>
          </svg>
          <span>Back to Blog-page</span>
        </div>
      </Link>
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(data: { params: any }) {
  const { params } = data
  const post = await getPostData(params.id)
  return {
    props: post,
  }
}
