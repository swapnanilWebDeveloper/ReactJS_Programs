import React,{useState, useEffect} from 'react'

function DeleteMethod() {
    // State to store the mock data.....
    const [userBio, setUserBio] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch mock data from the JSON placeholder API.....
    const fetchData = async () => {
          try{
              const res = await fetch(
                  "https://jsonplaceholder.typicode.com/users"
              );
              if(!res.ok){
                 throw new Error("Network response not ok .....!!");
              }
              const api_json = await res.json();
              setUserBio(api_json);
              setLoading(false);
          }
          catch(error){
             console.log("Error fetching data : "+error)
          }
    }

    useEffect(() => {
        fetchData();
    },[])

    // Delete data based on its ID......
    const handleDelete = (id) => {
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
               method : "DELETE",
          })
          .then((response) => {
            if(!response.ok){
                throw new Error("Network response not ok .....!!");
             }
             return response.json();
          })
          .then(() => {
              setUserBio(userBio.filter((item) => item.id !== id))
          })
          .catch((error) => console.log("Error deleting data : "+error))
    }
    
  return (
    <div>
         <h3>Delete method is executing......</h3>
         {loading ? (<h4>loading....</h4>) 
           : (
               <table>
                  <thead>
                     <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>Email</th>
                        <th>street</th>
                        <th>suite</th>
                        <th>City</th>
                        <th>Zip-Code</th>
                        <th>website</th>
                     </tr>
                  </thead>
                  <tbody>
                      {
                          userBio.map((userInfo) => (
                             <tr key={userInfo.id}>
                                 <td>{userInfo.id}</td>
                                 <td>{userInfo.name}</td>
                                 <td>{userInfo.username}</td>
                                 <td>{userInfo.email}</td>
                                 <td>{userInfo.address.street}</td>
                                 <td>{userInfo.address.suite}</td>
                                 <td>{userInfo.address.city}</td>
                                 <td>{userInfo.address.zipcode}</td>
                                 <td>{userInfo.website}</td>
                                 <td>
                                    <button onClick={() => handleDelete(userInfo.id)}>Delete</button>
                                 </td>
                             </tr>
                          ))
                      }
                  </tbody>
               </table>
           )}
    </div>
  )
}

export default DeleteMethod
