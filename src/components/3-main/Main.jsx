import { myProjects } from "./myProject";
import { useState } from "react";
import "./main.css";
import { motion, AnimatePresence } from "framer-motion";



const Main = () => {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);

    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);

        const newArr = myProjects.filter((item) => {
            const ZZZ = item.category.find((myItem) => {
                return myItem === buttonCategory;
            });

            return ZZZ === buttonCategory;
        });

        setArr(newArr);
    };
    return (
        <main className="flex">
            <section className=" left-section flex">
                <button onClick={() => {
                    setcurrentActive("all");
                    setArr(myProjects);
                }}
                    className={currentActive === "all" ? "active" : null}>
                    All Projects
                </button>

                <button onClick={() => {
                    handleClick("css");
                }} className={currentActive === "css" ? "active" : null}>
                    HTML & CSS
                </button>


                <button className={currentActive === "js" ? "active" : null} onClick={() => {
                    handleClick("js");
                }}>JavaScript</button>
                <button className={currentActive === "react" ? "active" : null} onClick={() => {
                    handleClick("react");
                }}>React & MUI</button>
                <button className={currentActive === "node" ? "active" : null} onClick={() => {
                    handleClick("node");
                }}>Node & Express</button>
            </section>

            <section className="flex right-section">

                <AnimatePresence>

                    {arr.map((item) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ type: "spring", damping: 12, stiffness: 60 }}
                                key={item.imgPath}
                                className=" card">
                                <img width={266} src={item.imgPath} alt="" />

                                <div style={{ width: "266px" }} className="box ">
                                    <h2 className="title">{item.projectTitle}</h2>
                                    <p className="sub-title">
                                        Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                                        tempore dolor in, accusantium laudantium accusamus
                                    </p>
                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <div className="icon-link"></div>
                                            <div className="icon-github"></div>
                                        </div>
                                        <a className="link flex" href="">
                                            more{" "}
                                            <span
                                                style={{ alignSelf: "end" }}
                                                className="icon-arrow-right"
                                            ></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}

                </AnimatePresence>
            </section>
        </main>
    );
};

export default Main;
