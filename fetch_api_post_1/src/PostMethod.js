import React, {useState} from 'react'

function PostMethod() {
    const [formData, setFormData] = useState({
        title : "",
        body : "",
    })

    const [info, setInfo] = useState({
         title : "",
         body : "",
    })
    const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData({
            ...formData,
            [name] : value,

          })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = "https://jsonplaceholder.typicode.com/posts";

        const requestOptions = {
            method : "POST",
            headers : {
               "Content-Type" : "application/json",
            },
            body : JSON.stringify(formData),
        }
        // send the post request 
        fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            setInfo({
                title : data.title,
                body : data.body,
            })
             console.log("Response Data : ", data);
        })
        .catch((error) => {
            console.log("Error : "+error);
        })
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
           <div>
           <label>Title:</label>
           <input type="text" name="title" 
           value={formData.title} 
           onChange={handleChange}
           />
           </div>
           <div>
                <label>Body:</label>
                <textarea name="body" 
                value={formData.body}
                onChange={handleChange}
                />
           </div>

           <button type="submit">Submit</button>
         </form>
         <h3>Title is : {info.title}</h3>
         <h3>body is : {info.body}</h3>
    </div>
  )
}

export default PostMethod
