import React from "react";
import bus from './images/computer bus fleet.png';
import cars from './images/Taxi fleet.png'

const SecondScreen = () => {
    return(
        <div className="secondscreen">
            <div className="contentMargin">
                <div className="cabs"><img src={bus} alt="kabukabs buses" /><img className="rightImage" src={cars} alt="kabukabs cars" /></div>
                <div className="texts">
                    <h1>Kabukabs</h1>
                    <p className="kab-text">
                        Kabukabs optimizes public transportation by providing real-time data and insights to drivers, enhancing passenger visibility, and enabling effective vehicle monitoring, resulting in increased driver earnings, reduced travel time for passengers, and a transparent rental ecosystem for vehicle.
                    </p>
                    <h1>Goal</h1>
                    <p className="goal-text">
                        Our goal is to revolutionize public transportation systems by leveraging technology to maximize efficiency, improve the passenger experience, and create a sustainable ecosystem for drivers, passengers, and vehicle owners.
                    </p>
                    <h1>Vision</h1>
                    <ol>
                        <li>Empower public transportation: We aim to empower public transportation systems by leveraging technology and innovation to enhance the overall experience for drivers, passengers, and vehicle owners.</li>
                        <li>Connect drivers and passengers: Our mission is to create a seamless and efficient platform that connects drivers and passengers, enabling them to coordinate effectively and ensuring convenient and reliable transportation services.</li>
                        <li> Optimize driver earnings: We strive to improve driver earnings by providing real-time data on passenger demand and strategic positioning, allowing drivers to maximize their income potential and increase their efficiency.</li>
                        <li> Enhance passenger experience: Our mission is to reduce travel time and waiting periods for passengers by leveraging advanced navigation algorithms, real-time traffic updates, and streamlined pickup processes, ultimately enhancing the overall passenger experience.</li>
                        <li> Foster a transparent rental ecosystem: We aim to create a transparent and accountable rental ecosystem for vehicle owners by offering robust monitoring capabilities that track vehicle usage, performance, and maintenance needs, ensuring effective utilization and maintenance of the vehicles.</li>
                        <li> Revolutionize public transportation: Our overarching mission is to revolutionize public transportation by leveraging data, technology, and innovation to make it more convenient, efficient, and environmentally friendly for all stakeholders involved.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default SecondScreen;