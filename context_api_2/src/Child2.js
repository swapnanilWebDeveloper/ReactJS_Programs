import React from 'react'
import { MyContext, MyContextNew } from './App'

export default function Child2() {
  return (
    <div>
         <h3>Child2 is executing......</h3>

         <MyContext.Consumer>
               {
                  (studentData) => {
                      return(
                         <MyContextNew>
                              {
                                   (stu_param) => {
                                          return(
                                            <div>
                                            <h3> {stu_param[0]} is = {studentData.name}</h3>
                                             <h3> {stu_param[1]} is = {studentData.email}</h3>
                                              <h3> {stu_param[2]} = {studentData.phy}</h3>
                                              <h3> {stu_param[3]} = {studentData.chem}</h3>
                                             <h3> {stu_param[4]} = {studentData.math}</h3>  
                                            </div>
                                          )
                                   }
                              }
                         </MyContextNew>
                      )
                  }
               }
         </MyContext.Consumer>
    </div>
  )
}
