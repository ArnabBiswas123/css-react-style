import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import styled from 'styled-components';
import styles from './CourseInput.module.css';
// const Formcontrol=styled.div`

//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   color:${props=>(props.invalid?'red':'black')};
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=>(props.invalid?'red':'#ccc')};
//   background-color:${props=>(props.invalid?'rgb(245, 16, 187)':'transparent')} ;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }`
// &.invalid input{
//   border-color:red;
//   background-color:rgb(245, 16, 187) ;
// }
// `

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid,setisvalid]=useState(true)

  const goalInputChangeHandler = event => {
    // when user started entering value the input color should not be red and so we added this if statement
    if(event.target.value.trim().length>0)
    setisvalid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisvalid(false);
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <Formcontrol className={!isvalid && 'invalid'}> */}
      {/* <Formcontrol invalid={!isvalid}> */}
      <div className={`${styles['form-control']} ${!isvalid && styles.invalid}`}>
        <label>Course Goal</label>
        {/* <label style={{color:!isvalid?'red':'black'}}>Course Goal</label> */}
        <input type="text" onChange={goalInputChangeHandler}/>
        {/* <input type="text" onChange={goalInputChangeHandler} style={{borderColor:!isvalid?'red':'#ccc',backgroundColor:!isvalid?'salmon':'#fad0ec'}} /> */}
      </div>
      {/* </Formcontrol> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
