
import React from "react";
import { research } from "./research.js";
import { Container, Row } from "reactstrap";

import ResearchExp from "./researchexp";

const ResearchExpMain = () => {
	return (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div>
					<div className="pl-4">
					<h4 className="experience-heading" >
        Research Work </h4>
					</div>
				</div>
				<Row className="row-grid align-items-start">
					{  research.map((data, i) => {
						return <ResearchExp key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default ResearchExpMain;