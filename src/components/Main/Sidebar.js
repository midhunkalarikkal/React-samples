import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-2/12 bg-orange-200 h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/Counter" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Counters
          </Link>
        </li>
        <li>
          <Link to="/classComponent" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Class Component
          </Link>
        </li>
        <li>
          <Link to="/lazy" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Lazy
          </Link>
        </li>
        <li>
          <Link to="/useMemo" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            useMemo
          </Link>
        </li>
        <li>
          <Link to="/useReducer" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            useReducer
          </Link>
        </li>
        <li>
          <Link to="/parent" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Parent
          </Link>
        </li>
        <li>
          <Link to="/child" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Child
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar