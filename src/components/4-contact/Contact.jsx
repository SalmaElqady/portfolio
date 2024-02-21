import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contactAnimation from '../../animation/contact.json';

const Contact = () => {
    const [state, handleSubmit] = useForm("mwkgpnpl");




    return (
        <section className='contact-us'>
            <h2 className='title'>
                <span className='icon-envelope'>  </span>

                Contact Us
            </h2>
            <p className='sub-title'>
                Contact us for more information and Get notified when I publish
                something new.
            </p>
            <div style={{ justifyContent: 'space-between' }} className="flex">
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete='off' required placeholder='Email Address' type="email" name='email' id='email' />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your Message:</label>
                        <textarea placeholder='Message' required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button className='submit' type="submit" disabled={state.submitting}>
                        {state.submitting ? "submitting ..." : "submit"}
                    </button>


                    {state.succeeded && (
                        <h3 className='flex' style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                            <Lottie loop={false} style={{ height: 35 }} animationData={doneAnimation} />

                            Your message has been sent successfully 👌</h3>
                    )}
                </form>

                <div className="animation ">
                    <Lottie className='contact-animation'
                        style={{ height: 355 }} animationData={contactAnimation}
                    />
                </div>
            </div>






        </section>
    )
}

export default Contact