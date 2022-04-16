import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";

export default function AboutCBT() {
    return <div className="aboutCBT">
        <div className="content">
            <div className="heading">About Us</div>
            <div className="desc">Freshtables is Farm to Door fresh vegetables delivery. We grow and procure vegetables from local farms and deliver them to urban areas like Home & Retail outlets, Businesses, etc.
                
            </div>
        </div>
        <div className="image">
            <StaticImage placeholder="blurred" src={'../../../images/aboutUs/aboutCBT.png'} alt={"CBT"}/>
        </div>
    </div>
}
