import React from 'react';
import { motion } from 'framer-motion';
import './Works.css';
import Header from '../Header/index';
import ImagesBazaarImage from '../../assets/ImageBazaar.png'; 
import SnakeGameImage from '../../assets/snakeGame.png';
import YouTubeVideoImage from '../../assets/Youtube.png';
import ExcelSheetImage from '../../assets/ExcelSheet.png';
import WeatherAppImage from '../../assets/weatherApp.png';
import AboutMeImage from '../../assets/AboutMe.png';
import TicTacToeImage from '../../assets/TicTacToe.png';
import CounterGameImage from '../../assets/NumberGame.png';
import JIRAImage from '../../assets/Jira.png';
import homepageDarkImg from '../../assets/crypto/Homepage.png';
import HomepageMeShop from '../../assets/MeShop/Homepage.png';
import tabularfinancily from '../../assets/Financily/fin_table.png';

const projectList = [
  {
    name: 'CryptoTracker',
    description: 'The CryptoTracker App is a user-friendly platform for exploring and tracking a diverse range of cryptocurrencies. It allows users to compare different coins and curate a watchlist, keeping them informed about the dynamic crypto market. Toastify integration enhances user experience with notifications for smooth interaction.',
    image: homepageDarkImg,
    live: "https://crypto-tracker-app-kappa.vercel.app/"
  },
  {
    name: 'MeShop',
    description: 'MeShop provides a seamless shopping experience with a variety of filters for personalized search. Users can add items to their cart and complete their orders easily. Built with HTML, CSS, and JavaScript, incorporating API integration and animations for an enhanced user experience.',
    image: HomepageMeShop,
    live: "https://afarhin.github.io/ShoppingCart_App/"
  },
  {
    name: 'Financily',
    description: 'Financily is a sophisticated personal finance app that helps users manage their income, expenses, and savings. It provides insights through an analysis dashboard and personalized expense categorization. Designed with React JS and Tailwind CSS, it features Firebase Authentication and Firestore Database for secure data handling.',
    image: tabularfinancily,
    live: "https://financely-ft.netlify.app/"
  },
  {
    name: 'ImageBazaar',
    description: "The ImagesBazaar App, a web application built with Redux for state management in React, offers users:Access to a diverse collection of images, Centralized state management using Redux ,Efficient data retrieval, A user-friendly interface for searching and viewing images. With the power of Redux, this app optimizes data flow and enhances the user experience. You can run it locally or deploy it on a web server. Simplify your image search and selection with the ImagesBazaar App, a well-organized solution for efficient image browsing.",
    image: ImagesBazaarImage,
    live : "https://afarhin.github.io/image_bazaar/"
  },
  {
    name: 'SnakeGame',
    description: "Snake Game in React is a modern adaptation of the classic Snake game. - It offers a responsive and intuitive gameplay experience. - Control a growing snake as it devours food while avoiding walls and its own tail. - Keep track of your high score throughout the game. - Use the restart option in the game over modal to keep challenging yourself and having fun. - This game is built using React, making it an engaging and entertaining way to enjoy the Snake game.",
    image: SnakeGameImage,
    live : "https://snake-game-afarhin.vercel.app/"
  },
  {
    name: 'YouTubeVideo',
    description: 'The YouTube Video Player is a React-based web application. It provides users with the ability to search for and play YouTube videos. Key features include a search bar for easy video discovery and dynamic video playback using YouTube\'s embedded player. The app offers a clean and responsive design, ensuring a great user experience on various devices. It follows a component-based structure thanks to React, simplifying app management and customization. To retrieve video information, the app relies on the YouTube Data API. You can use this app either by running it locally or deploying it on a web server. The YouTube Video Player offers an intuitive platform for users to explore and enjoy YouTube content.',
    image: YouTubeVideoImage,
    live: "https://afarhin.github.io/youtube_videos/"
  },
  {
    name: 'ExcelSheet',
    description: 'The ExcelSheet web app is a simple spreadsheet created using HTML, CSS, and JavaScript. It features a 26x100 table with editable cells, providing users with a familiar spreadsheet interface. Users can apply various formatting options like bold, italic, colors, alignment, font settings, and utilize cut/copy/paste actions to manage their data effectively. Data is saved in JSON format, organized in a matrix array with separate arrays for each sheet. The number of sheets is tracked using the numSheets variable, and the active sheet is stored in currSheetNum. Event listeners are in place to respond to user cell interactions, including displaying cell information at the top of the application and updating JSON data within the matrix when content/formatting changes occur. This app serves as a basic and interactive spreadsheet framework, providing users with the tools they need to work with tabular data efficiently.',
    image: ExcelSheetImage,
    live: "https://afarhin.github.io/Excel_Sheet_Clone/"
  },
  {
    name: 'WeatherApp',
    description: 'The Weather App is a web-based application created with HTML, CSS, and JavaScript. It empowers users to search for the current weather conditions in a particular location. The app retrieves weather data from a weather API and presents crucial details like temperature, weather description, humidity, and wind speed. It boasts a responsive design to ensure compatibility with various devices. Users have the flexibility to customize the app\'s appearance by adjusting CSS styles and layout. This Weather App serves as a user-friendly tool for swiftly checking the weather in different locations.',
    image: WeatherAppImage,
    live: "https://afarhin.github.io/weather_app/"
  },
  {
    name: 'AboutMe',
    description: 'The AboutMe App is a web application crafted with HTML, CSS, and JavaScript. It serves as an introduction to Ahmeda Farhin, sharing information about the developer. The app presents a series of messages and images that illuminate Ahmeda\'s skills, background, hobbies, and passions. Users can cycle through different messages and corresponding images by clicking the "Click Again" button. This app offers a straightforward and interactive means to get acquainted with the developer, Ahmeda Farhin.',
    image: AboutMeImage,
    live: "https://afarhin.github.io/About_Me/"
  },
  {
    name: 'TicTacToe',
    description: 'The TicTacToe App is a web application created using React. Enjoy a classic game of Tic-Tac-Toe for two players with real-time updates. Experience interactive gameplay and a responsive design for various screen sizes. The app is organized into reusable components for code maintainability. React\'s state management ensures smooth game logic and player turns. Get started by running the app locally or deploying it on a web server. The TicTacToe App offers an engaging and intuitive gaming experience for all.',
    image: TicTacToeImage,
    live : "https://tic-tac-toe-afarhin.vercel.app/"
  },
  {
    name: 'GuessNumber',
    description: 'The NumberGame App is a simple web application developed using HTML, CSS, and JavaScript.A number guessing game where the players objective is to guess a random number.The players score increases with each correct guess, and they have 20 chances to guess the correct number.The score decreases with each wrong guess, adding an element of challenge to the game.If the player can not guess the correct number within the given chances, they lose the game and have the option to play again.A high score is tracked and updated based on a comparison between the previous high score and the players current score.The game offers an engaging and interactive experience where players can test their guessing skills and strive to achieve a new high score.',
    image: CounterGameImage,
    live: "https://afarhin.github.io/NUMBER_GAME/"
  },
  {
    name: 'JIRA',
    description: 'The Jira App is a web-based project management application developed using JavaScript, HTML, and CSS. Inspired by Jira, it enables users to create, manage, and collaborate on projects and tasks. Customize task states, labels, and priority levels to suit your project needs. Enjoy real-time updates for tracking task progress and changes as they occur. Simply log in, create a project, and start efficiently managing tasks with your team. Please note that this is a simplified version of Jira, providing essential project management functionality.',
    image: JIRAImage,
    live: "https://afarhin.github.io/JIRA_Clone_Modified/"
  },
];

function Works() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0, 
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <motion.div
        className='project-works'
        variants={containerVariants}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className='project-item'
            variants={projectVariants}
          >
            <h2>{project.name}</h2>
            <motion.img
              src={project.image}
              alt={project.name}
              whileHover={{ scale: 1.1, transition: { duration: 1.7 } }} 
            />
            <br />
            <br />
            <div className='live'>
              <a href={project.live} target='__blank'>Watch Live</a>
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {project.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Works;
