import React from 'react'
import { useState } from 'react'

function FormHandling() {
    const [formData, setFormData] = useState(
        {
            username : '',
            email : '',
            password : '',
            isSubscribed : '',
            role : '',
            physics : '',
            chemistry : '',
            mathematics : ''
        }
    )
    
    const handleChange = (event) => {
        const {name , value, type, checked} = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;
       // console.log(name,fieldValue);
         setFormData({
            ...formData,
            [name] : fieldValue
         })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data',formData);
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
           <div>
              <label htmlFor="username">Username : </label>
              <input 
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                  onChange={handleChange}
              />
           </div>
             
           <div>
           <label htmlFor="email">Email : </label>
           <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
               onChange={handleChange}
           />
        </div>

            <div>
              <label htmlFor="password">password : </label>
              <input 
                 type="password"
                 id="password"
                 name="password"
                 value={formData.password}
                  onChange={handleChange}
              />
           </div>
               
           <div>
             <label htmlFor="isSubscribed">Subscribe : </label>
             <input 
               type="checkbox"
               id="isSubscribed"
               name="isSubscribed"
               value={formData.isSubscribed}
               onChange={handleChange}
              />
           </div>
              
             <div>
             <label htmlFor="role">Role : </label>
                <select 
                   id="role"
                   name = "role"
                   value ={formData.isSubscribed}
                   onChange={handleChange}
                >
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                    <option value="guest">guest</option>
                </select>
             </div>

             <div>
             <label htmlFor="physics">Physics : </label>
             <input 
                type="text"
                id="physics"
                name="physics"
                value={formData.physics}
                 onChange={handleChange}
             />
             </div>

             <div>
             <label htmlFor="chemistry">Chemistry : </label>
             <input 
                type="text"
                id="chemistry"
                name="chemistry"
                value={formData.chemistry}
                 onChange={handleChange}
             />
             </div>

             <div>
             <label htmlFor="mathematics">mathematics : </label>
             <input 
                type="text"
                id="mathematics"
                name="mathematics"
                value={formData.mathematics}
                 onChange={handleChange}
             />
             </div>
                <button type="submit">submit</button> 
         </form>
         <h3>name : {formData.username}</h3>
         <h3>email : {formData.email}</h3>
         <h3>password : {formData.password}</h3>
         <h3>role : {formData.role}</h3>
         <h3>physics : {formData.physics}</h3>
         <h3>chemistry : {formData.chemistry}</h3>
         <h3>mathematics : {formData.mathematics}</h3>
         <h4>Total : {parseInt(formData.physics) + parseInt(formData.chemistry) + parseInt(formData.mathematics)}</h4>
    </div>
  )
}

export default FormHandling
