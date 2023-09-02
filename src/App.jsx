import React , { useState } from "react";
import BasicExample from "./component/Card";
import data from "./component/Data";
import TextForm from "./component/TextForm";
import CollapsibleExample from "./component/Navbar";
import Calculator , { add , sub , mul , div } from "./component/Calculator";


function App() {
    let [bgColor , bgColorChange] = useState('red')  //bgColor ki value // Hooks
    // on mouseOver function
       const mouseOver = () => {
          bgColorChange('green')
       }
    // on mouseOut function
    const mouseOut = () => {
        bgColorChange('blue')
     }

    return (
        <>
        {/* navbar */}
        <CollapsibleExample/>
        {/* calculator */}
        <Calculator/>
        <div className="container text-center bg-light shadow p-3 mb-5 bg-white rounded">
        <h1>Plus value is : {add(20,30)}</h1>
        <h1>Sub value is : {sub(20,10)}</h1>
        <h1>Mul value is : {mul(20,30)}</h1>
        <h1>Div value is : {div(200,30)}</h1>
        </div>
        {/* count / textarea */}
        <div className="container text-center my-4 bg-light shadow p-3 mb-5 bg-white rounded">
        <TextForm heading = "Text From  Heading" />
        </div>

        {/* Card */}
        {
            data.map((data) => {
                console.log(data);
                return <BasicExample 
                title = {data.title}
                desc = {data.desc}
                img = {data.img} />
            })
        }

        <h1 style={{backgroundColor : bgColor}} onMouseOver={mouseOver} onMouseOut={mouseOut}>Hello</h1>
        </>
    )
}
 

// foreach ko hum return nhi kr sakte

//map function //ye her aik array ke lye chalta he
let arr = [1 , 2 , 3 , 4 , 5];
console.log(arr);
let newArr = arr.map((value , index , array) => {
    return value + 2
})
console.log(newArr);

// filter function // Esme hum condition lagate he jo true hogi value ye ouse aik array me kr dega
let arr1 = [1 , 2 , 3 , 4 , 5];
console.log(arr1);
let newArr1 = arr.filter((value , index , array) => {
    return value < 2
})
console.log(newArr1);

// reduce function //
let arr2 = [1 , 2 , 3 , 4 , 5];
console.log(arr2);
let newArr2 = arr.reduce((value , index , array) => {
    return value + index
})
console.log(newArr2);





export default App








