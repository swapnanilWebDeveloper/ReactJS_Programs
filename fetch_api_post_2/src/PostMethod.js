import React, { useState } from 'react'

function PostMethod() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })

    const [info, setInfo] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = "https://jsonplaceholder.typicode.com/users";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }
        // send the post request 
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setInfo({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                })
                console.log("Response Data : ", data);
            })
            .catch((error) => {
                console.log("Error : " + error);
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name is :</label>
                    <input type="text" name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>UserName is :</label>
                    <textarea name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email is :</label>
                    <input type="text" name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone is :</label>
                    <textarea name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                   <label>website is :</label>
                    <textarea name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                 </div>

                <button type="submit">Submit</button>
            </form>
                 <h3>Name is : {info.name}</h3>
                 <h3>User Name is : {info.username}</h3>
                 <h3>Email is : {info.email}</h3>
                 <h3>phone number is : {info.phone}</h3>
                 <h3>website is : {info.website}</h3>  
        </div>
    )
}

export default PostMethod
