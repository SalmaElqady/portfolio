import Lottie from "lottie-react";
import './hero.css';
import devAnimation from '../../animation/dev.json'
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {

    const lottieRef = useRef();
    return (
        <section className='hero flex '>
            <div className='left-section '>
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 8, type: "spring", stiffness: 100 }}
                        src='./me.jpeg' className='avatar' alt='' />
                    <div className='icon-verified'></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }} className='title'>
                    Salma El-Qady
                </motion.h1>
                <p className='sub-title'>
                    I am a full stack developer,
                    Graduate of the Faculty of Commerce, Department of Accounting,
                    I have been working as an accountant at M Medical Services and Investments Company since 2019
                </p>
                <div className="all-icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>

            <div className='right-section animation'>
                <Lottie
                    lottieRef={lottieRef}
                    className=""
                    onLoadedImages={() => {
                        // @ts-ignore
                        // https://lottiereact.com/
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={devAnimation}
                />
            </div>
        </section>
    )
}

export default Hero