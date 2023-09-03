import React from "react";
import Card from './Card';
import girl from './images/location-search/amico.jpg'
import idea from './images/idea&implementation card.png'
import webDesign from './images/web design.png'
import handshake from './images/handshake.png'
import sales from './images/Total sales.png'
import tech from './images/technology.png'
import chain from './images/chain.png'
import bTwob from './images/b2b.png'
import deployment from './images/deployment.png'
import road from './images/road.png'

const Roadmap = () => {
    return(
        <div className="roadmap">
            <div>
             <div className="girlCard">
                <h1>Road Map</h1>
                <img className='girlstyle' src={girl} alt="girl with tablet" />
                <p>Our milestones are the period the project passes through to achieve its aims</p>
                <button>Learn more</button>
             </div>      
                <div className="cards">
                    <Card image={idea} 
                    head='Idea and Implementation' 
                    text='KabuKabs envisions a seamless ride-hailing app with advanced route optimization. Implementation includes focused development, rigorous testing, and strategic partnerships.' 
                    
                    />
                    <Card image={webDesign} 
                    head='Landing Page' 
                    text='The landing page showcase  key features, user benefits, and a simple sign-up process for easy onboarding.'
                    
                    />
                    <Card image={handshake} 
                    head='Partnership/Organic Marketing' 
                    text=' Establishing strategic partnerships and leveraging organic market growth for widespread user adoption and global expansion.'
                    
                    />
                    <Card image={sales} 
                    head='Token Sales' 
                    text="KabuKabs Transport App: Token sales empowers users with exclusive benefits and incentivizing active participation in the platform's ecosystem."

                    />
                    <Card image={tech} 
                    head="First Audit Of Blockchain" 
                    text="KabuKabs Transport App's First Blockchain Audit: Ensures transparency, security, and accountability in token usage and platform operations."

                    />
                    <Card image={chain} 
                    head="2nd Audit Of Blockchain" 
                    text="KabuKabs Transport App's 2nd Blockchain Audit: Validate continued compliance, enhanced security measures, and optimizing blockchain functionalities."
                    />

                    <Card image={bTwob} 
                    head="3rd Audit Of Blockchain" 
                    text="KabuKabs Transport App's 3rd Blockchain Audit: Affirmes long-term sustainability, user trust, and blockchain technology optimization."
                    
                    />
                    
                    <Card image={deployment} 
                    head="Deployment/Airdrop List" 
                    text="KabuKabs Transport App Deployment/Airdrop List: Grant exclusive access and rewards to early adopters and active platform participants."
                    
                    />
                    
                    <nocode></nocode>
                    <Card image={road} 
                    head="Roadmap" 
                    text="KabuKabs Transport App Roadmap: A strategic plan outlining key milestones for development, partnerships, and growth."
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default Roadmap;