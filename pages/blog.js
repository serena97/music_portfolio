import Layout from "../components/layout"
import PostCard from "../components/postcard";
import { getPosts } from '../services';

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default function Blog({posts}) {
  return (
    <Layout>
      <div style={{'margin': 'auto'}}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node}></PostCard>
        ))}
      </div>
    </Layout>
  )
}