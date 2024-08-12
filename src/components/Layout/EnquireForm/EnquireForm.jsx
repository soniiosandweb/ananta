import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, {isPossiblePhoneNumber, isValidPhoneNumber} from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const EnquireForm = ({title, setOpen}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [termsCheck, setTermsCheck] = useState(false);
    const [mobileNumber, setMobileNumber] = useState();
    const [phoneError, setPhoneError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if(mobileNumber){
            if (isValidPhoneNumber(mobileNumber) === false || isPossiblePhoneNumber(mobileNumber) === false) {
                setPhoneError("Please Enter Valid Mobile Number.");

                setTimeout(() => {
                    setPhoneError('');
                }, 5000);

                return false;
            }
        }

        

        setLoading(true);

        axios({
            method: "post",
            url: "https://theanantaaspire.co.in/api/enquire-us-api.php",
            data: JSON.stringify({
                    name: name,
                    mobileNumber: mobileNumber,
                    email: email,
                }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(function (response) {
            //handle success
            if (response.data.status === 0) {
                setLoading(false);
                setFormSuccess("THANK YOU! Our Team Will Contact You Shortly!");
                resetForm();
                setTimeout(() => {
                    setFormSuccess('');
                    if(setOpen){
                        setOpen(false);
                    }
                }, 5000);
                
            } else {
                setLoading(false);
                setFormError("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormError('');
                }, 5000);
            }
        })
        .catch(function (response) {
            //handle error
            setLoading(false);
            console.log(response);
            setFormError("Some error occured");
            resetForm();
            setTimeout(() => {
                setFormError('');
            }, 5000);
        });

    }

    const CheckboxChange = (e) => {
        if(e.target.value){
            setTermsCheck(true);
        } else {
            setTermsCheck(false);
        }
    }

    const resetForm = () =>{
        setName("")
        setMobileNumber('');
        setEmail('');
        setTermsCheck(false);
    }

    return(
        <form className="enquire-form py-6"  onSubmit={handleSubmit}>
            <div className="form-section text-left">
                <p className="text-2xl font-extrabold capitalize mb-2.5">{title}</p>
                <div className="py-2">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="py-2">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="py-2">
                    <PhoneInput
                        type="tel" 
                        id="mobile-number"
                        name="mobile-number"
                        placeholder="Contact Detail (Optional)"
                        className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                        country="IN"
                        defaultCountry="IN"
                        value={mobileNumber}
                        onChange={setMobileNumber}
                        limitMaxLength={true}
                        national="true"
                        international={false}
                    />
                    {phoneError && (
                        <p className="text-red-400 text-sm">{phoneError}</p>
                    )}
                </div>
                <div className="mt-2.5 text-center flex items-center gap-5 justify-center">
                    <input type="submit" value="Submit" className={`text-md font-semibold capitalize px-3.5 py-1.5 rounded-md text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-brown cursor-pointer'}`} disabled={loading} />

                    
                    {loading && (
                        <CircularProgress
                            sx={{
                            color: (theme) =>
                                theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                            }}
                            size={35}
                            thickness={4}
                            value={100}
                        />
                    )}
                </div>
                <p className='text-md mt-5'><input type='checkbox' required className='align-middle size-4' name="termsCheck" checked={termsCheck} onChange={(e) => CheckboxChange(e)}/> *I give my consent for the privacy policy to apply to the processing of the provided data. I give authority to the website owner and its representatives permission to contact me via phone, text, email, or whatsapp with its offers and products. This agreement takes precedence over any DNC/NDNC registration.</p>

                {formError && (
                    <p className="text-red-400 py-2.5 text-md">{formError}</p>
                )}

                {formSuccess && (
                    <p className="text-green-700 py-2.5 text-md">{formSuccess}</p>
                )}
            </div>
        </form>
    )
}

export default EnquireForm