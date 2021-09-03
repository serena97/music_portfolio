import axios from 'axios';

const CreatePost = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: event.target.title.value,
            description: event.target.description.value,
            content: event.target.content.value,
        }

        axios.post('/api/post/createpost', data)
            .then(res => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title"/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Description"/>
                </div>
                <div>
                    <label>Content</label>
                    <textarea type="text" name="content" placeholder="Content"/>
                </div>
                <div>
                    <button>Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;