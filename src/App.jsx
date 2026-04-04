import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Card from "./Card";

function App() {
  console.log("app is rendered")
  
 let [value,setValue]=useState("")

 let [data,setData]=useState(false);

//  to check the value of search button if true it will render the card
let [btnClick,setBtnClick]=useState(false);

//  console.log("The value from input is: ",value)

 let fetchData= async ()=>{
  try {
    let a= await fetch(`https://api.github.com/users/${value}`)
    let data= await a.json();
    setData(data)
    console.warn("Api is  called")
    setBtnClick(btnClick=true)
  } catch (error) {
    console.log(error)
  }}
// console.log("the search button is clicked and the value is :",btnClick)



  return (
    <>
      <NavBar  value={value} setValue={setValue} onclick={fetchData}  setBtnClick={setBtnClick}></NavBar>


      <div className=" card-container my-5 w-full h-fit p-2">
        {btnClick&&<Card data={data}/>}
         {/* <Card data={data}/> */}
      </div>
    </>
  );
}

export default App;
