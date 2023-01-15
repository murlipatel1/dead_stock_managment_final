import React from "react";
import '../Assets/AboutUs.css';
import Navbar from "../Elements/Navbar";

const AboutUs = () =>{
    return(
            <>
            <Navbar />
        <div className="about">
			<div className="about-title">
				 <div>About us</div>
			</div>
			<div className="Credits-page">
				<div className="container">
						<div className="card1">
							<div className="content1">
								<div className="imgBx">
									<img src="https://media-exp1.licdn.com/dms/image/D4D03AQH6z_Uka70o8Q/profile-displayphoto-shrink_800_800/0/1665843918620?e=1671062400&v=beta&t=32lxzMKm_TNoONOLckvESwJ1la0qTIfWwVkqt0Wbqog" />
								</div>
								<div className="contentBx">
									<h3>Aniket Patel<p>Front-end developer</p></h3>
								</div>
							</div>
							<ul className="sci">
								<li>
									<a href="">Github</a>
								</li>
								<li>
									<a href="http://www.linkedin.com/in/aniket-patel-developer">Linkedin</a>
								</li>
							</ul>
						</div>
						
						<div className="card1">
							<div className="content1">
								<div className="imgBx">
									<img src="https://media-exp1.licdn.com/dms/image/D5603AQFAXB1R3JqoEQ/profile-displayphoto-shrink_800_800/0/1665808900955?e=1671062400&v=beta&t=3ZZtESjMmShRMpQe51FyWQS16NXoqmL_42sC6e_lrNs" />
								</div>
								<div className="contentBx">
									<h3>Karan Dattani<p>Front-end developer</p></h3>
								</div>
							</div>
							<ul className="sci">
								<li>
									<a href="https://github.com/karan030204">Github</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/karan-dattani-b58834243/">Linkedin</a>
								</li>
							</ul>
						</div>
				
					
						<div className="card1">
							<div className="content1">
								<div className="imgBx">
									<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGLjrN5gw9v8A/profile-displayphoto-shrink_800_800/0/1662739671886?e=1671062400&v=beta&t=Tmw83dUZ7jjCDmbVa0oC3bdQSSM2Vu7ptjvjoOKOdHI" />
								</div>
								<div className="contentBx">
									<h3>Priyank Vaidya<p>Back-end developer</p></h3>
								</div>
							</div>
							<ul className="sci">
								<li>
									<a href="https://github.com/Priyank-Vaidya">Github</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/priyank-vaidya-0a5b38203/">Linkedin</a>
								</li>
							</ul>
						</div>
					
				
						<div className="card1">
							<div className="content1">
								<div className="imgBx">
									<img src="https://media-exp1.licdn.com/dms/image/D5603AQHNz3rRz2MFlw/profile-displayphoto-shrink_800_800/0/1634999657804?e=1671062400&v=beta&t=2ufc9ICOxDX6D0VUAC_LBNx4SY3y1MzAM-r7uDUcrm4" />
								</div>
								<div className="contentBx">
									<h3>Murli Patel<p>Back-end developer</p></h3>
								</div>
							</div>
							<ul className="sci">
								<li>
									<a href="https://github.com/murlipatel1">Github</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/murli-patel-193605224">Linkedin</a>
								</li>
							</ul>
						</div>
						
						
						<div className="card1">
							<div className="content1">
								<div className="imgBx">
									<img src="https://media-exp1.licdn.com/dms/image/C4D03AQHqTlyvG6jBrQ/profile-displayphoto-shrink_800_800/0/1637555905242?e=1671062400&v=beta&t=hb5AbJR0f3YDmE_vVxrenXp36s3GgtyDg3rpPDPpjKQ" />
								</div>
								<div className="contentBx">
									<h3>Parth Sood<p>Data-base</p></h3>
								</div>
							</div>
							<ul className="sci">
								<li>
									<a href="https://github.com/psood708">Github</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/parth-sood-572b1b1a1/">Linkedin</a>
								</li>
							</ul>
							</div>
							
						
				</div>
			</div>	
		
		</div>

        </>
    )
}

export default AboutUs;