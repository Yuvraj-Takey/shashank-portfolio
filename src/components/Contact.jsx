import React from "react";
import { reachOutArr } from "../data"; // Assuming data file is in ../data folder

const ReachCard = ({ heading, subHeading, description }) => {
    return (
        <div className="reach-card flex-col aic flex1 gap-20 bor-rad-5 bor-2">
            <h3>{heading}</h3>
            <p className="subheading">{subHeading}</p>
            {description && <p>{description}</p>}
        </div>
    );
};

const Contact = () => {
    return (
        <section className="contact-section p-20">
            <h2 className="text-center mb-40"> Reach Me </h2>
            <div className="reach-cards flex-row width-100 gap-10 m-auto sp-bw flex-wrap">
                {reachOutArr.map((item) => (
                    <ReachCard key={item.heading} {...item} /> // Spread operator for cleaner props
                ))}
            </div>
        </section>
    );
};



export default Contact