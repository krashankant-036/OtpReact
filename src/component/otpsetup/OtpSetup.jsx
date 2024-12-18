import OtpInput from '../OtpInput';
import './OtpSetup.css'

import React, { useState } from 'react'

const OtpSetup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOtpInput, setShowOtpInput] = useState('');


    const handleChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //phone validation
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("invalid number")
        }

        setShowOtpInput(true);

    }

    const onOtpSubmit = (otp) => {
        console.log("Succesfully ", otp);
    }


    return (
        <div className='otpsetup'>

            <div className='o1'>

                <h1>Login With Mobile</h1>
                <div>
                    {!showOtpInput ? <form onSubmit={handleSubmit}>

                        <input
                            value={phoneNumber}
                            onChange={handleChange}
                            type='text'></input>
                        <button>Submit</button>

                    </form> :
                        <div>
                            <p> Enter otp with  {phoneNumber}</p>
                            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                        </div>
                    }
                </div>

            </div>


        </div>
    )
}

export default OtpSetup
