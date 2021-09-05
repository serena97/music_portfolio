const CreatePost = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        fetch('/api/post/createpost', {method: 'POST', body: formData})
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
                    <label>Upload Image</label>
                    <input type='file' id='img' name='image' accept='image/*'></input>
                <div>
                    <button>Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;