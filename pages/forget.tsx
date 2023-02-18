import Link from 'next/link'
import React from 'react'

const forget = () => {
  return (
    <div>
    <section>
  <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Forget your Password</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 sm:px-10">
              <form className="space-y-6" action="#" method="POST">
             
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email address </label>
                      <div className="mt-1">
                          <input id="email" name="email" type="email" autoComplete="email" required={true} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                      </div>
                  </div>

                  <div>
                      <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Continue</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>
  </div>
  )
}

export default forget