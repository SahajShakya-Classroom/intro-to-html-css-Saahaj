import { useState } from "react"
const Sum=({a,b})=>{
const [result ,setresult]= useState('')
const diff=()=>{
    setresult(a-b)
}
    return(
        <div>
            <button onClick={() => diff()}>
                onclick
            </button>
          <h1>The Sum is {result}</h1>
        </div>
    )
}

export default Sum