import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TextForm = (props) => {
    const [text , setChange] = useState('First text here');
    const [count , setCount] = useState(0);
  
    const upperCase = () => {
      console.log('UpperCase was clicked' + text );
      setChange(text.toUpperCase());
    }

    const handleOnChange = (event) => {
      console.log('On change');
      setChange(event.target.value)
    }

    {/* count function */}
    const countAdd = () => {
        setCount(count + 1)
    }
    return (
        <div>
          <h1>Count : {count}</h1>
          <button className='bg-dark px-3 py-1 shadow-md rounded text-light' onClick={countAdd}>Count</button>

        <h1>{props.heading}</h1>
      <FloatingLabel controlId="floatingTextarea2" label="">
        <Form.Control as="textarea" value={text} onChange={handleOnChange} placeholder="Leave a comment here" style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="primary" className='my-4' onClick={upperCase}>upperCase</Button>
    </div>
  )
}

export default TextForm
