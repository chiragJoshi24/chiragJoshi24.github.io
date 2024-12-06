import React from 'react';
import Portfolio from './assets/portfolio.jpg'
import Openai from './assets/openai.jpeg'
import ToDo from './assets/todo.jpg'
import Card from './Components/Card.jsx';
const Navigator = () => {
  return (
    <div className='h-max w-full flex flex-col bg-[#051116] px-24'>
        <h1 className='text-8xl font-black mx-auto w-3/4 py-20 text-center'>
            Click on the respective card to visit the live Website.
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center m-18 pb-16'>
            <Card 
                title='Portfolio Website' 
                description='The website includes interactive UI elements that enhance user engagement and provide a dynamic experience. It utilizes modern web technologies to ensure smooth, responsive, and efficient performance across devices. The design offers customization options for modifications and scalability.'
                image={Portfolio}
                link='https://chiragjoshi24.github.io/portfolio/'
                techStack='HTML TailwindCSS ReactJS'
            />
            <Card 
                title='Yet Another To Do App'
                description='A sleek and user-friendly to-do app built with HTML, CSS, and JavaScript. Organize tasks effortlessly with features like task addition, deletion, and marking as complete. Responsive design ensures smooth usage across devices, enhancing productivity with an intuitive interface and seamless functionality.'
                image={ToDo}
                link='https://chiragjoshi24.github.io/yetAnotherToDo/'
                techStack='HTML CSS JavaScript'
            />
            <Card 
                title='Personal ChatGPT'
                description='Built for dynamic conversations, it adapts to user needs with customized responses and features. Sleek design ensures seamless navigation, enhancing productivity and engagement through intuitive functionality and a responsive interface suitable for diverse devices and use cases.'
                image={Openai}
                link='https://chiragjoshi24.github.io/PersonalChatGPT'
                techStack='Python'
            />
        </div>
        <footer className='bottom-10 pb-2 text-white font-black w-full bg-[] text-center'>Copyright &copy; Chirag Joshi 2024 </footer>
    </div>
  );
}

export default Navigator;
