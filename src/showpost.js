const { default: axios } = require("axios")
const { useEffect, useState } = require("react")
const { useLocation, Link} = require("react-router-dom")

const ShowPost = (props) => {
    const [post, setPost] = useState({})
    let location = useLocation();

    useEffect(() => {
        if(Object.keys(post).length === 0) {
            const post_id = location.pathname.substring(6)
            console.log(post_id)
            axios.get('/api/get/post', {params: {id: post_id}})
                .then(res => {
                    setPost(res.data)
                })
                .catch((err) => console.log(err))
        }
    })
    // show breadcrumb
    return (
        <div>
            <Link to='/'>Go back to main blog</Link>

            <h2>Post</h2>
            <div>
                <h2>Description: </h2>
                <p>{post.description}</p>
            </div>
            <span>Posted on {post.createdAt}</span>
            <div>
                <h2>Content: </h2>
                <p>{post.content}</p>
            </div>
            <img src={post} alt='img'/>
        </div>
    )
}

export default ShowPost;