import React, { useState } from 'react'

const Calculator = () => {
  const [value , setValue] = useState('');

  const handleValue = (event) => {
    console.log(event.target);
    setValue(value+event.target.value)
  }

  const handleClear = () => {
    console.log('Clear');
    setValue('');
  }

  const handleEval = () => {
    setValue(eval(value));
  }

  const handleDel = () => {
    setValue(value.slice(0 , -1));
  }

  return (
    <>
    <div className='calculator'>
     <div className='calc'>
      <h1 className='text-center'>Calculator!</h1>
       <input type="text" placeholder='0' id='answer' value={value} />
       <input type="button" value={'9'} className='button' onClick={handleValue} />
       <input type="button" value={'8'} className='button' onClick={handleValue} />
       <input type="button" value={'7'} className='button' onClick={handleValue} />
       <input type="button" value={'6'} className='button' onClick={handleValue} />
       <input type="button" value={'5'} className='button' onClick={handleValue} />
       <input type="button" value={'4'} className='button' onClick={handleValue} />
       <input type="button" value={'3'} className='button' onClick={handleValue} />
       <input type="button" value={'2'} className='button' onClick={handleValue} />
       <input type="button" value={'1'} className='button' onClick={handleValue} />
       <input type="button" value={'0'} className='button' onClick={handleValue} />
       <input type="button" value={'.'} className='button' onClick={handleValue} />
       <input type="button" value={'+'} className='button' onClick={handleValue} />
       <input type="button" value={'-'} className='button' onClick={handleValue} />
       <input type="button" value={'*'} className='button' onClick={handleValue} />
       <input type="button" value={'/'} className='button' onClick={handleValue} />
       <input type="button" value={'%'} className='button' onClick={handleValue} />
       <input type="button" value={'Clear'} className='button button1' onClick={handleClear}/>
       <input type="button" value={'Del'} className='button button1' onClick={handleDel}/>
       <input type="button" value={'='} className='button button2' onClick={handleEval}/>
     </div>
    </div>
    </>
  )
}





function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return Math.round(a / b);
}

export default Calculator
export { add , sub , mul , div }
