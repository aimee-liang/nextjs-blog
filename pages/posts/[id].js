import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from "../../lib/posts"

export async function getStaticPaths({params}) {
    const paths = getAllPostIds(params.id)
    return {
        props: {
            postData
        }
    }
  }

export default function Post() {
  return <Layout>...</Layout>
}