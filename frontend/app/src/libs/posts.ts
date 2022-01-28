import axios from 'axios'
import { FetchBlogInfo } from '../models/blog-page-models'
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export async function getAllPostsData() {
  try {
    const res = await axios.get<FetchBlogInfo[]>(apiUrl)
    const posts = res.data

    return posts
  } catch (err) {
    if (
      axios.isAxiosError(err) &&
      err.response &&
      err.response.status === 400
    ) {
      console.log('400 Error!!')
      console.log(err.message)
      console.log(err)
    }
  }
}

export async function getAllPostIds() {
  try {
    const res = await axios.get<FetchBlogInfo[]>(apiUrl)
    const posts = res.data

    return posts.map((post: { id: number }) => {
      return {
        params: {
          id: post.id.toString(),
        },
      }
    })
  } catch (err) {
    if (
      axios.isAxiosError(err) &&
      err.response &&
      err.response.status === 400
    ) {
      console.log('400 Error!!')
      console.log(err.message)
      console.log(err)
    }
  }
}

export async function getPostData(id: string) {
  try {
    const res = await axios.get<FetchBlogInfo>(`${apiUrl}/${id}/`)
    const post = res.data

    return post
  } catch (err) {
    if (
      axios.isAxiosError(err) &&
      err.response &&
      err.response.status === 400
    ) {
      console.log('400 Error!!')
      console.log(err.message)
      console.log(err)
    }
  }
}
