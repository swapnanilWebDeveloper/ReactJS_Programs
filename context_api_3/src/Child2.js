import React from 'react'
import { MyContext,MyContextNew } from './App'

export default function Child2() {
  return (
    <div>
        <h3>child2 is executing....</h3>

        <MyContext.Consumer>
              {
                  (employeeData) => {
                       return(
                           <MyContextNew>
                               {
                                  (emp_arr) => {
                                       return(
                                          <div>
                                              <h4>{emp_arr[0]} is : {employeeData[emp_arr[0]]}</h4>
                                              <h4>{emp_arr[1]} is : {employeeData[emp_arr[1]]}</h4>
                                              <h4>{emp_arr[2]} salary is : {employeeData[emp_arr[2]]}</h4>
                                              <h4>{emp_arr[3]} salary is : {employeeData[emp_arr[3]]}</h4>
                                              <h4>{emp_arr[4]} salary is : {employeeData[emp_arr[4]]}</h4>
                                              <h4>{emp_arr[5]} salary is : {employeeData[emp_arr[5]]}</h4>
                                              <h4>{emp_arr[6]} salary is : {employeeData[emp_arr[6]]}</h4>
                                              <h4>{emp_arr[7]} salary is : {employeeData[emp_arr[7]]}</h4>
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
