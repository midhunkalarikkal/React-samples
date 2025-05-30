import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-2/12 bg-orange-200 h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/test" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Test
          </Link>
        </li>
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
          <Link to="/useCallback" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            useCallback
          </Link>
        </li>
        <li>
          <Link to="/useReducer" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            useReducer
          </Link>
        </li>
        <li>
          <Link to="/stateLifting" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            State Lifting
          </Link>
        </li>
        <li>
          <Link to="/propsLifting" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Props Lifting
          </Link>
        </li>
        <li>
          <Link to="/forwardRef" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            ForwardRef
          </Link>
        </li>
        <li>
          <Link to="/sample/:id" className="block text-gray-950 hover:bg-orange-300 p-2 rounded-lg transition duration-200">
            Sample
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar