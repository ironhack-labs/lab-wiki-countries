import React from 'react'

function Navbar() {
  return (

    <nav class="bg-slate-800 border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LAB - WikiCountries</span>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">

        </div>
      </div>
    </nav>

  )
}

export default Navbar