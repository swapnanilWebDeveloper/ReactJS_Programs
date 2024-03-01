import React,{useState, useEffect} from 'react'

function UpdateMethod() {
    const [postData, setPostData] = useState({
        id : 1,
        title : "",
        body : "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
          const {name, value } = e.target;
          setPostData({
            ...postData,
            [name] : value
          })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const apiURL = `https://jsonplaceholder.typicode.com/posts/${postData.id}`; 

        const requestOptions = {
              method : "PUT",
              headers :  {
                  "Content-Type" : "application/json",
              },
              body : JSON.stringify(postData),
        }

        fetch(apiURL,requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setMessage("post updated successfully...")
            console.log(data);
        })
        .catch((error) => {
            console.log("Something went wrong ..."+error);
            console.log("Error updating the post...");
        })
        .finally( () => {
             setLoading(false);
        })

    }

    useEffect(() => {
       const postId = postData.id;
       const apiURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

       fetch(apiURL)
       .then((response) => {
           return response.json();
       })
       .then((data) => {
           setPostData(data);
           console.log(data);
       })
       .catch((error) => {
           console.log("Something went wrong ..."+error);
       })

    },[postData.id])

  return (
    <div>
        {loading && <p>Lopading....</p>}
        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
              <div>
                 <label>Title :</label>
                 <input type="text" name="title" value={postData.title} onChange={handleChange}/>
              </div>
              <div>
                 <label>Body :</label>
                 <input type="text" name="body" value={postData.body} onChange={handleChange}/>
              </div>
              <button type="submit">Update post</button>
        </form>
    </div>
  )
}

export default UpdateMethod
