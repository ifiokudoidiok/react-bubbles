import React, { useRef } from 'react';
import axiosWithAuth from '../axios';

export default function AddColor(props) {
  const colorNameRef = useRef();
  const colorHexRef = useRef();
 

  const submit = () => {
    axiosWithAuth().post('http://localhost:5000/api/colors/', {
        color: colorNameRef.current.value,
        code: {
            hex: colorHexRef.current.value,
        }
    })
      .then(res => {
        props.history.push('/api/colors');
      })
      .catch(error => {
        alert(error.response.data.error);
      });
  };

  return (
    <div className='login'>
      <div className='login-inputs'>
        color name: <input ref={colorNameRef} type="text" />
        <br />
        color hex: <input ref={colorHexRef} type="text" />
     
      </div>

      <div>
        <button onClick={submit}>Add Color</button>
      </div>
    </div>
  );
}
