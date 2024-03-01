import React,{useState, useEffect} from 'react'

function UpdateMethod() {
    const [userInfo, setUserInfo] = useState({
             id : 4,
             name : "",
             username : "",
             email : "",
             phone : "",
             website : "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
            setUserInfo({
                ...userInfo,
                [name] : value,
            })   
    }

    const handlSubmit = (e) => {
          e.preventDefault();
          setLoading(true);

          const api_url = `https://jsonplaceholder.typicode.com/users/${userInfo.id}`;

          const requestOptions = {
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(userInfo),
          }
          
        fetch(api_url,requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setMessage("user's information is updated successfully....");
            console.log(data);
        })
        .catch((error) => {
            console.log("here some problem occured...."+error);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        const userId = userInfo.id;
        const api_url = `https://jsonplaceholder.typicode.com/users/${userInfo.id}`;

        fetch(api_url)
        .then((response) => {
            return response.json();
        })
        .then((user_data) => {
            setUserInfo(user_data);
            console.log(user_data)
        })
        .catch((err) => {
            console.log("Something went wrong ....."+err);
        })
    },[userInfo.id])
  return (
    <div>
         {loading && <p>Loading.....</p>}
         {message}
         <h3>update method is executing....</h3>

         <form onSubmit={handlSubmit}>
              <div>
                 <label>Name is : </label>
                 <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
              </div>
              <div>
                 <label>UserName is : </label>
                 <input type="text" name="username" value={userInfo.username} onChange={handleChange} />
              </div>
              <div>
                 <label>Email is : </label>
                 <input type="text" name="email" value={userInfo.email} onChange={handleChange} />
              </div>
              <div>
                 <label>Phone Number is : </label>
                 <input type="text" name="phone" value={userInfo.phone} onChange={handleChange} />
              </div>
              <div>
                 <label>website is : </label>
                 <input type="text" name="website" value={userInfo.website} onChange={handleChange} />
              </div>
              <button type="submit">update post</button>
         </form>
    </div>
  )
}

export default UpdateMethod
