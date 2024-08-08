import EnquireForm from "../../Layout/EnquireForm/EnquireForm"

const ContactUs = () => {
    return(
        <section className="max-w-5xl m-auto py-10 px-2.5 text-center flex flex-col gap-5" id="contact-us">
            <h3 className="text-3xl uppercase font-semibold text-primary-brown pt-7">Please Fill In Your Details</h3>
            <div className="w-20 h-1 bg-black m-auto"></div>
            <p>Invest in your future. Invest in a life of comfort, luxury, and innovation. Choose Ananta Aspire. Contact us today to schedule a visit and experience the Ananta Aspire difference.</p>
            <div className="flex flex-col md:flex-row p-2.5 gap-5">
                <div className="w-full md:w-1/2 p-2.5">
                    <iframe 
                        src="https://maps.google.com/maps?q=Ananta%20Aspire%20NH%207%2C%20Patiala%20Rd%2C%20Utrathiya%2C%20Zirakpur%2C%20Nabha%2C%20Punjab%20140603&t=m&z=18&output=embed&iwloc=near" 
                        title="Ananta Aspire NH 7, Patiala Rd, Utrathiya, Zirakpur, Nabha, Punjab 140603" 
                        aria-label="Ananta Aspire NH 7, Patiala Rd, Utrathiya, Zirakpur, Nabha, Punjab 140603"
                        width="100%"
                        height="300"
                    ></iframe>
                </div>
                <div className="w-full md:w-1/2 p-2.5">
                    <div className="p-8 rounded-35" style={{ boxShadow: "0px 3px 20px 0px rgba(0, 0, 0, 0.30196078431372547)" }}>
                        <EnquireForm title="Get In Touch" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs