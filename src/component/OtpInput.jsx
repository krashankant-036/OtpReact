import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length=4,onOtpSubmit=()=>{}}) => {

   const [otp, setOtp] = useState(new Array(length).fill(""));
   const inputref = useRef([]);
   console.log(inputref);
   console.log(otp);


   useEffect (()=>{
       if(inputref.current[0]){
        inputref.current[0].focus();
       }
   },[])

   const handleChanges =(i,e)=>{
    const value = e.target.value;
    console.log(value);
    if(isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[i] = value.substring(value.length-1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if(combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if(value && i<length-1 && inputref.current[i+1]){
        inputref.current[i+1].focus();
    }
   

   };


   const handleClick=(i)=>{
    if (inputref.current[i]) {
        inputref.current[i].setSelectionRange(1, 1); // Sets cursor position
    }
   }

   const handleKeyDown =(i,e)=>{
     if(e.key==="Backspace" &&
       !otp[i] &&
       i>0 &&
       inputref.current[i-1]
     ){
        inputref.current[i-1].focus();
     }
   }

  return (

    <div className='otp1'>
        {otp.map((value,i)=>{

            return(
                <input 
                ref ={(input)=>inputref.current[i]=input}
                value={value}
                onChange={(e)=>handleChanges(i,e)}
                onClick={()=>handleClick(i)}
                onKeyDown={(e)=>handleKeyDown(i,e)}
                className='cell'
                key={i}
                type='text'/>
            )
        })}
      
    </div>
  )
}

export default OtpInput
