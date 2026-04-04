import React, { useState, useRef,useEffect} from 'react'

const NavBar = ({value,setValue,onclick}) => {
    console.log("navBar is rendered")

    const [click, setClick] = useState(false)

    let input=useRef(null);
    let previousValue=useRef()
    // console.log("the value of click is : ",click)
    // console.log("This is input.current",input.current)

    // if((input.current).hasAttribute("value")){
    //     console.log("the value is empty")
    // }

    useEffect(()=>{
        previousValue.current=value;

    },[click])

//  to check the previous value and current value
    let checkValue=()=>{

        if (value==previousValue.current) {
            console.log(true)
            return true
        }else{
            console.log(false)
            return false
        }
    }




  return (
    <header className=' rounded-2xl  sm:min-w-fit max-w-full  sm:max-w-full'>
        <nav>
            <ul className=' py-3 flex justify-between px-10 items-center flex-wrap sm:flex-row flex-col gap-3 '>
                <li className='bg-gradient-to-r text-transparent bg-clip-text from-blue-500 via-red-400 to-purple-500'>GitHub Profile Viewer</li>
                <li className='space-x-5 sm:space-x-10 flex'>
                    <input id="userInput" type="text" spellCheck={false} placeholder='Enter the Username' className='border p-2 focus:outline-none border-white text-white' value={value}   ref={input}
                        onChange={(e)=>setValue(e.target.value)}/>

                    <button className=' h-10  flex items-center '
                     onClick={
                        ()=>{(checkValue())?alert("the name is same"):(
                            setClick((prevclick)=>!prevclick),
                            onclick()
                        )
                        }
                        } >
                        Search</button>

                </li>

            </ul>
        </nav>
    </header>
  )
}

export default NavBar