import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, {isPossiblePhoneNumber, isValidPhoneNumber} from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';

const EnquireForm = ({title, setOpen}) => {

    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState();
    const [phoneError, setPhoneError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (isValidPhoneNumber(mobileNumber) === false || isPossiblePhoneNumber(mobileNumber) === false) {
            setPhoneError("Please Enter Valid Mobile Number.");

            setTimeout(() => {
                setPhoneError('');
            }, 5000);

            return false;
        }

        axios({
            method: "post",
            url: "https://iosandweb.net/ananta-react/api/enquire-us-api.php",
            data: JSON.stringify({
                    name: name,
                    mobileNumber: mobileNumber,
                }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(function (response) {
            //handle success
            if (response.data.status === 0) {
                setFormSuccess("We appreciate you contacting us !! Our team will be in touch with you soon.");
                resetForm();
                setTimeout(() => {
                    setFormSuccess('');
                    setOpen(false);
                }, 5000);
                
            } else {
                setFormError("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormError('');
                }, 5000);
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
            setFormError("Some error occured");
            resetForm();
            setTimeout(() => {
                setFormError('');
            }, 5000);
        });

    }

    const resetForm = () =>{
        setName("")
        setMobileNumber('');
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
                    <PhoneInput
                        type="tel" 
                        id="mobile-number"
                        name="mobile-number"
                        placeholder="Mobile Number"
                        className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                        required
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
                <div className="mt-2.5 text-center">
                    <input type="submit" value="Enquire Now" className="text-md font-semibold capitalize cursor-pointer bg-primary-brown px-3.5 py-1.5 rounded-md text-white"/>
                </div>
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