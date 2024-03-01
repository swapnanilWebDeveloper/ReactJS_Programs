import React from 'react'
import { MyContext, MyContextNew } from './App'

export default function Child2() {
  return (
    <div>
        <h3>Child2 is executing....</h3>

        <MyContext.Consumer>
           {
            (shareData) => {
                return (
                    <MyContextNew>
                        {
                            (shareDataNew) => {
                                 return (
                                    <p>
                                       {shareData} = {shareDataNew}
                                    </p>
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
