import React from 'react';

const Card = ({ title = 'Lorem Ipsum', description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero quia veritatis tenetur illo, nemo voluptatem praesentium fugiat optio voluptatum deserunt beatae explicabo? Molestias quia dolorum est qui, ipsam nisi nesciunt amet molestiae officia facere harum ad quo deleniti nostrum sed iusto saepe ipsa quisquam id quidem doloremque deserunt voluptatem.', image = 'https://picsum.photos/400/300', link = '#', techStack = ''}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className='text-gray-800 font-medium text-right my-2 pr-2'>{techStack}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
