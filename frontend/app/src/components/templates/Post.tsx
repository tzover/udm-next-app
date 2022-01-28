import Link from 'next/link'
import { FetchBlogInfo } from '../../models/blog-page-models'

interface Props {
  post: FetchBlogInfo
}

const Post: React.FC<Props> = (props) => {
  const { post } = props
  return (
    <div>
      <span>{post.id}</span>
      {':'}
      <Link href={`/posts/${post.id}`}>
        <span className='cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200'>
          {post.title}
        </span>
      </Link>
    </div>
  )
}

export default Post
