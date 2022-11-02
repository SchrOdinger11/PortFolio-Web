import React, { useContext } from 'react';
import experience from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/Achievements/development.json';


import '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/Achievements/Experience.css';

import { Container } from '@material-ui/core';
import { experienceData } from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/Achievements/experienceData.js';
import AnimationLottie from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/CollegeLife/Animation.js';
import ExperienceCard from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/Achievements/ExperienceCard.js';

function Experience() {

   
    return (
        <div >
            <Container className="experience" id="experience">
                <div className="experience-body">
                    <div className="experience-image">
                        <AnimationLottie animationPath={experience} />
                    </div>
                    <div className="experience-description">
                        
                        {experienceData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
