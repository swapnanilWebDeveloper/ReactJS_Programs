import React,{useState, useEffect} from 'react'

function GetMethod() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => 
             {
                console.log(response);

                if(!response.ok){
                    throw new Error("Network response was not ok!!!")
                }  
                return response.json();             
             })
        .then((info) => {
            setData(info);
            setLoading(true);
            console.log(info);
        })
        .catch((err) => 
        {
            console.log("something went wrong !!! "+err)
        })
    }, [])
  return (
    <div>
        {loading ? (
            <table>
            <thead>
               <tr>
                 <th>ID</th>
                 <th>Title</th>
                 <th>Message</th>
               </tr>
               </thead>
               <tbody>
               {
                data.map((list,index) => (
                    <tr key={index}>
                    <td>{list.id}</td>
                    <th>{list.title}</th>
                    <th>{list.body}</th>
                </tr>
                ))
               }
               </tbody>
        </table>
        ) 
            : (<h3>API is loading.....</h3>)}
    </div>
  )
}

export default GetMethod
