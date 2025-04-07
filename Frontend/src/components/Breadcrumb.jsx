import React from 'react'
// import breadcrum from '../assets/Home/breadcrum.png'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

function Breadcrumb({ title, items, bgImage }) {
  return (
    <div
      className="relative lg:h-[350px] h-[250px] w-scree overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})`, backgroundPosition:'bottom' }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Centered Content */}
      <div className="absolute top-2/3 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 text-white lg:text-center px-2">
        <h1 className="lg:text-7xl text-4xl font-bold ">{title}</h1>

        {/* Breadcrumb Navigation */}
        {items && (
          <ul className="mt-2 flex lg:justify-center justify-start items-center lg:text-lg group">
            {items.map((item, index) => (
              <li key={index} className="opacity-95 flex items-center ">
                <Link
                  to={item.link}
                  className="hover:text-gray-300 transition hover:translate-x-2"
                >
                  {item.label}
                </Link>
                {/* Only show arrow if it's not the last item */}
                {index < items.length - 1 && (
                  <MdKeyboardDoubleArrowRight className="lg:mx-2 mx-1 text-xl text-gray-100 group-hover:text-gray-300 group-hover:translate-x-2 transition-all" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Breadcrumb
