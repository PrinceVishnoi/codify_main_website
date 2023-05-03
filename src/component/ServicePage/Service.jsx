import React from 'react';
import ServiceSection1 from './Service_Section1';
import ServiceSection2 from './Service_Section2';
import SerSec3 from './Ser_sec3';
import SerSec4 from './Ser_sec4';

function Service() {
    return (
        <>
            <ServiceSection1 />
            <ServiceSection2 text1="DEVELOP TRULY" text2="UNIQUE" text3="WEB EXPERIENCES" text4="Build user-centric websites and web applications using our unique
            development processes and our skilled team of developers and
            designers." />
            <SerSec3 />
            <ServiceSection2 text1="" text2="OUR" text3="SOLUTIONS" text4="Our web development service provides you with the right tools and resources to guide you through the process that is developing a web-based solution, whether you are a startup looking to develop an MVP, a scale-up looking to improve your product, or an enterprise scaling your website or digital product capabilities." />

            <SerSec4 />
        </>
    );
}

export default Service;
