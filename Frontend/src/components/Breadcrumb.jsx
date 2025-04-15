import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Breadcrumb({ title, items = [], bgImage }) {
  // Default fallback image if none provided
  const backgroundImage = bgImage || "/api/placeholder/1200/350";

  return (
    <div
      className="relative lg:h-80 h-64 w-full overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundPosition: 'center' 
      }}
    >
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      
      {/* Content container with improved positioning */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="container mx-auto">
          {/* Title with animation */}
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-white text-center mb-4 animate-fadeIn">
            {title}
          </h1>
          
          {/* Breadcrumb Navigation */}
          {items && items.length > 0 && (
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap justify-center items-center text-lg text-gray-200">
                {items.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center transition-all duration-300 capitalize"
                  >
                    <Link
                      to={item.link}
                      className={`
                        hover:text-white transition-all duration-300
                        ${index === items.length - 1 ? 'font-semibold text-white' : 'text-gray-300'}
                      `}
                      aria-current={index === items.length - 1 ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    
                    {/* Only show arrow if it's not the last item */}
                    {index < items.length - 1 && (
                      <MdKeyboardDoubleArrowRight className="mx-2 text-gray-400" />
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

// Add keyframe animation for title fade-in
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(styles);

export default Breadcrumb;