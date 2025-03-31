import React from 'react'

function card({ image, title, onClick }) {
  return (
      <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center">
          {/* Clickable Image */}
          <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg cursor-pointer"
              onClick={onClick}
          />

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">{title}</h3>

          {/* Button */}
          <div className="w-full flex justify-end mt-4">
              <button
                  onClick={onClick}
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
              >
                  View
              </button>
          </div>
      </div>
  )
}

export default card