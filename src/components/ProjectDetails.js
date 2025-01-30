import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Bottom_Nav from './Bottom_Nav';
import { useParams } from 'react-router-dom';



const projects = {
    '2024': [
      {
        title: 'ZomTag',
        description: 'Made a tag zombie themed game on Unity',
        image: 'images/ZomTag.jpg',
        url: 'https://github.com/Jomar77/GameDevAssign',
      },
      {
        title: 'Basketball Training App',
        description: 'A mobile app that helps you track your basketball training',
        image: 'images/bball.jfif',
        url: 'https://github.com/Jomar77/BballTraining',
      },
      {
        title: 'Lotto Predictor',
        description: 'Created a method via statistical approach that will predict the next winning numbers',
        image: 'images/lotto.jfif',
        url: 'https://github.com/Jomar77/LottoNz',
      },
      {
        title: 'Flight Booking System via Jade Language',
        description: 'Created a flight booking system using Jade language. Equipped with admin, manager, and customer platforms',
        image: 'images/jade.jpg',
        url: 'https://github.com/Jomar77/JADE-FLIGHT-BOOKING',
      },
    ],
    '2023': [
      {
        title: 'Handwritten Number Recognition',
        description: 'Machine learning model that is able to recognize handwritten numbers; trained on the MNIST dataset',
        image: 'images/pic01.png',
        url: 'https://github.com/Jomar77/Handwritten_Number_Recognition',
      },
      {
        title: 'Data Analysis with R Language',
        description: 'Aimed at gaining practical experience with the R programming language for data manipulation, visualization, and analysis.',
        image: 'images/pic06.png',
        url: 'https://github.com/Jomar77/Data-Analysis-with-R',
      },
      {
        title: 'HR Analytics with Power BI',
        description: 'The interactive dashboard presents insights into key aspects of employee attendance and productivity.',
        image: 'images/pic07.png',
        url: 'https://app.powerbi.com/groups/me/reports/05f5e7a6-5285-4868-a316-c71a87e704cb?ctid=c46ab213-d179-4a71-9ff7-b9d9fe3f3b48&pbi_source=linkShare',
      },
      {
        title: 'Tunisian House Price Predictor',
        description: 'Provides insights into how rooms and area of a house can affect Tunisian prices.',
        image: 'images/pic09.png',
        url: 'http://ec2-52-68-24-183.ap-northeast-1.compute.amazonaws.com/',
      },
      {
        title: 'C02 Emissions around the World',
        description: 'Visualize the world\'s carbon footprint by region with my interactive Tableau project on CO2 emissions!',
        image: 'images/pic08.png',
        url: 'https://public.tableau.com/views/CO2EmissionsbyRegion_16748596840770/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link',
      },
      {
        title: 'New Zealand Map Travel Level',
        description: 'Rating how many places you\'ve been in New Zealand!',
        image: 'images/pic08.png',
        url: 'https://nz-map-app.vercel.app/',
      },
      {
        title: 'Adjusting Volume Using OpenCV',
        description: 'Exploring the wonders of OpenCV!',
        image: 'images/pic08.png',
        url: 'https://github.com/Jomar77/Data-Analysis-with-R/blob/main/main.py',
      },
    ],
    '2022': [
      {
        title: 'React-NodeJs Stack Web App',
        description: 'The Blogpost project (under construction)',
        image: 'images/pic02.jpg',
        url: 'https://github.com/Jomar77/React-Node-Stack-WebApp',
      },
      {
        title: 'DICT Data Analytics Certificate',
        description: 'Free Course provided by DICT Philippines',
        image: 'images/pic05.png',
        url: 'https://github.com/Jomar77/DICT',
      },
      {
        title: 'Introduction to Julia',
        description: 'Dabbled on Julia Programming Language aimed at statistical analysis',
        image: 'images/pic06.png',
        url: 'https://github.com/Jomar77/julia/',
      },
      {
        title: 'This Website!!',
        description: 'My Portfolio, basically',
        image: 'images/pic01.png',
        url: 'https://github.com/Jomar77/jomar77.github.io',
      },
    ],
    '2021': [
      {
        title: 'Text Summarizer',
        description: 'A program that summarizes the paragraph that you want!',
        image: 'images/pic01.png',
        url: 'https://github.com/Jomar77/textSummarization',
      },
      {
        title: 'Assistant Bot',
        description: 'Basically an If-else AI!',
        image: 'images/pic02.jpg',
        url: 'https://github.com/Jomar77/AssistantBot',
      },
      {
        title: 'Graduation Song',
        description: 'Melancholic!',
        image: 'images/pic03.png',
        url: 'https://drive.google.com/drive/folders/11MXrgpa_t5dT3I8lcjdTPmhEhk-cElbW',
      },
      {
        title: 'Text to Speech',
        description: 'Tried making my own Text-to-Speech Program',
        image: 'images/pic04.jpg',
        url: 'https://github.com/Jomar77/Text-to-Speech',
      },
    ],
  };
  
function ProjectDetails() {
  const { year } = useParams();
  const filteredProjects = projects[year] || [];
  return (
    <div id="wrapper">
      <Navigation />
      <div id="main">
        <section id="one" className="tiles">
          {filteredProjects.map((project, index) => (
            <article key={index}>
              <span className="image">
                <img src={project.image} alt={project.title} />
              </span>
              <header className="major">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} className="link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </header>
            </article>
          ))}
        </section>
      </div>
      <Bottom_Nav />
      <Footer />
    </div>
  );  
}


export default ProjectDetails;