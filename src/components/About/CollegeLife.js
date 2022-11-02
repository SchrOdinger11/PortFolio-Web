import React, { useContext } from 'react';
import education from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/CollegeLife/education.json';


import '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/CollegeLife/Education.css';
import EducationCard from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/CollegeLife/EducationCard.js';

import { Container } from '@material-ui/core';
import { educationData } from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/CollegeLife/educationData.js';
import AnimationLottie from '/Users/sudhanshu/Desktop/personal-website/Portfolio/src/components/About/CollegeLife/Animation.js';

function Education() {

    // const { theme } = useContext(ThemeContext);
    return (
        // style={{ backgroundColor: '#15202B' }}
        <div >
            <Container className="education" id="resume">
                <div className="education-body">
                    <div className="education-image">
                        <AnimationLottie animationPath={education} />
                    </div>
                    <div className="education-description">
                        
                        {educationData.map(edu => (
                            <EducationCard
                                key={edu.id}
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education
