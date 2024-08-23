import { BiBluetooth } from "react-icons/bi";
import sk from "../../Assets/Projects/sk_skinzy_logo.jpeg";
import c from "../../Assets/Projects/smollan.jpeg";
import i from "../../Assets/Projects/ibm_logo.png";
import e from "../../Assets/Projects/download.jpeg";
 export const experience = [

	{
		role: "Software Development Intern",
		company: "eclinicalWorks ",
		companylogo:e,
		date: "June 2024 -  August 2024",
		desc: "Built internal utility full stack app in jsp, servlet, mysql and created jenkin job for its build process. Created various gradle tasks (in groovy) to organize and secure WAR files, incorporating password protection and creating differential build for the application.  "
		},

		{
		role: "Software Development Intern",
		company: "IBM ",
		companylogo:i,
		date: "February 2023 -  August 2023",
		desc: "IBM Cloud- Continous Delivery Service: Building systems for seamless deployment of your application! "
		},

	{
		role: "Technology Consultant Intern",
		company: "Smollan",
		
		//companylogo:"#",
		
		companylogo: c,
		date: "September 2022 – November 2022",
		desc: "Working on google's analysis project \"SYMPHONY\" .Optimized crawler scripts to fetch data from different ecommerce website, automated process of capturing information of the product's page.The captured data is further used in understanding and deciding the price points of new products in various geographies all across the world.   ",
	
	},
	{
		role: "Software Research Intern",
		company: "Skinzy Software Solutions Pvt Ltd.",
		
		//companylogo:"#",
		
		companylogo: sk,
		date: "October 2021 – July 2022",
		desc: "I worked with the ML and frontend team.Developed a deep learning based model which can identify oily and dry skin from clinical images. Built the frontend in reactJs to deploy the model on the website.The API of the model was built in Django.Worked on building a quiz app which was responsive webapp in react typescript. With  different login systems for admin as well as the user ",
	
	},



];




export const pub = [
	{
		title: "Music Recommendation System based on Emotion Detection using Image Processing and Deep Networks",
		place: "2022 International Conference on Intelligent Technologies|IEEE ",
		
		link:"https://ieeexplore.ieee.org/document/9847888",
		date: "June 24-25 2022",
		desc: "Developed a music recommnendation system which incorporates face detection and recognition.Multitask Cascade Convolution Neural Network (MTCNN) and FACENETs were used for face detection and recognition.Traditional CNNs and SVM were used for mood prediction and song recommnedation respectively.  ",
	
	},
	{
		title: "Deep Scattering Convolutional Network For Dry & Oily Skin Classification",
		place: " International Journal of Engineering Trends and Technology (IJETT) ",
		link:"https://ijettjournal.org/archive/ijett-v70i7p202",
		
		date: "18 July 2022",
		desc: "Built a skin texture detection model  which helps in determining wether the skin is oily or dry.The model performs better than other existing models.It incorporates image processing of the raw image followed by an architecutre consisting of Scattering Networks, RESNets, and Artifial Neural Networks.  ",
	
	},
	{
		title: "Digital Healthcare System",
		place: " International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)) ",
		link:"https://www.irjmets.com/paperdetail.php?paperId=373688de0e5c3c93d801571c8c11d7f4&title=Digital+Healthcare+System&authpr=Dylan+Dsouza",
		
		date: "26 April 2023",
		desc: "Created a decentralized system that stores crucial patient information that can only be accessed by a select group of people, we aim to address this significant issue. A system is proposed that uses artificial intelligence to enhance early disease detection using user-entered images and symptoms. Additionally, only doctors and researchers will be able to access the crucial records and information that will be stored safely on the Ethereum-powered blockchain.  ",
	
	}
]

	


















































 const certifications = {
	certifications: [
		{
			title: "Satellite Photogrammetry and its Application. ",
			subtitle: "- ISRO",
		
			logo_path: "SK_ISRO_LOGO.png",
			certificate_link:
			  "https://drive.google.com/file/d/1mywzw6R840UKB3Kp3_CQrHiuxF0JXWIR/view",
			alt_name: "ISRO",
			color_code: "#FFFFFF",
		  },
		  {
			title: "Frontend Frameworks ",
			subtitle: "- The Hong Kong University of Science and Technology",
		
			logo_path: "coursera_logo.png",
			certificate_link:
			  "https://www.coursera.org/account/accomplishments/certificate/Q8HRPHEKDXKW",
			alt_name: "FrontEnd",
			color_code: "#145DA0",
		  },
	
	  {
		title: "Neural Networks and Deep Learning",
		subtitle: "- Andrew Ng",
		
		logo_path: "sk_logo_dl.png",
		certificate_link:
		  "https://www.coursera.org/account/accomplishments/certificate/J7DRMQ5LYTCU",
		alt_name: "deeplearning.ai",
		color_code: "#00000099",
	  },
	  {
		title: "Improving Neural Networks",
		subtitle: "- Andrew Ng",
		
		logo_path: "sk_logo_dl.png",
		certificate_link:
		  "https://www.coursera.org/account/accomplishments/certificate/2NFEYFNE7EWK",
		alt_name: "deeplearning.ai",
		color_code: "#00000099",
	  },
	 
	  {
		title: "Structuring  Machine Learning Projects",
		subtitle: "- Andrew Ng",
		
		logo_path: "sk_logo_dl.png",
		certificate_link:
		  "https://www.coursera.org/account/accomplishments/certificate/XQWGZBUMU7S6",
		alt_name: "deeplearning.ai",
		color_code: "#00000099",
	  },
	  
	  {
		title: "Python for Data Science, AI & Development ",
		subtitle: "- IBM",
	
		logo_path: "ibm_logo.png",
		certificate_link:
		  "https://www.coursera.org/account/accomplishments/certificate/M987BN96Y428",
		alt_name: "IBM",
		color_code: "#FFFFFF",
	  }
	
	   //-----------------------------------------------------------------------------------------------------

	],
  };
  export{
	certifications
  }