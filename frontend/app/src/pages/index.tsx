import type { NextPage } from 'next'
import Layout from '../components/templates/Layout'

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <h1 className='text-4xl'>Hello NextJS !</h1>
    </Layout>
  )
}

export default Home
