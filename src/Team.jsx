import React from "react";
import Teamimages from './Teamimages';
import teamImgOne from './images/Franklin Fache-1.jpg';

const Team = () => {
    return(
        <div className="team">
            <div>
                <div className="teamText">
                <h1 className="font-weight">Team Member</h1>
                <h1>Our team member is ready to help our clients!</h1>
                <p>We love what we do and we do it with passion. We value the experimentation of the message and smart incentives</p>
                </div>
                <div className="allMembers">
                <Teamimages 
                img={teamImgOne} 
                teamName="frank" 
                occupation="Software Engineer" />
                <Teamimages 
                img={teamImgOne} 
                teamName="frank" 
                occupation="Software Engineer" />
                <Teamimages 
                img={teamImgOne} 
                teamName="frank" 
                occupation="Software Engineer" />
                {/* <Teamimages 
                img={teamImgOne} 
                teamName="frank" 
                occupation="Software Engineer" /> */}
                </div>
            </div>
        </div>
    )
}

export default Team;