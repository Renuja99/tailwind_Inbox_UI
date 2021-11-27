import React from "react";


export default function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="flex flex-shrink-0">
        <div className=" flex-shrink-0 px-4 py-3 bg-yellow-400 ">
          <button className="flex items-center w-56  justify-center">
          <img src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80" alt="" class="h-8 w-8 rounded-full object-cover"/>
          <span className="ml-4 text-sm font-medium text-black">Monica White</span>
          <img src="./img/chevron-arrow-down.png" alt="" className="ml-10 h-4"/>

          </button>
          
        </div>
          <div className="flex-1 flex items-center bg-yellow-100 px-6 justify-between">
            <nav className="flex">
              <a href="" className="inline-block bg-yellow-600 rounded-lg px-3 py-2 leading-none  text-sm font-black text-white">Mailbox</a>
              <a href="" className="inline-block px-3 py-2 leading-none  text-sm font-black text-black">Customer</a>
              <a href="" className="inline-block px-3 py-2 leading-none  text-sm font-black text-black">Reporting</a>
              <a href="" className="inline-block px-3 py-2 leading-none  text-sm font-black text-black">Manage</a>
            </nav>
            <div className=" flex  gap-2">
              <span className="relative">
                  <svg className="absolute h-5 w-5 m-2 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input className="block w-full pl-10 px-5 py-2 bg-yellow-400 rounded-lg text-sm placeholder-gray-800 text-black focus:bg-white focus:text-gray-900" type="text" placeholder="Search.."/>

              </span>
            <button className="text-gray-700 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            </button>
          </div>
          </div>
          
        
      </header>
      <div className="flex-1 flex">
          <div className="w-64 p-6 h-full bg-yellow-100">
            <nav>
              <h2 className="text-xs font-semibold text-gray-600 tracking-wider uppercase">Mailboxes</h2>
              <a href="#" className="flex mt-4 -mx-3 px-3 py-1 justify-between items-center text-sm font-medium rounded-lg bg-yellow-200 ">
                <span className="inline-flex items-center">
                  <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="ml-4 ">Inbox</span>
                  
                </span>
                <span className="text-xs  px-4 font-semibold text-gray-700 bg-yellow-300 rounded-full">6</span>
              </a>

              <a href="#" className="flex mt-4 -mx-3 px-3 py-1 justify-between items-center text-sm font-medium rounded-lg hover:bg-yellow-200 ">
                <span className="inline-flex items-center">
                  <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="ml-4 ">Inbox</span>
                  
                </span>
                <span className="text-xs  px-4 font-semibold text-gray-700 bg-yellow-300 rounded-full">6</span>
              </a>

              <a href="#" className="flex mt-4 -mx-3 px-3 py-1 justify-between items-center text-sm font-medium rounded-lg hover:bg-yellow-200 ">
                <span className="inline-flex items-center">
                  <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="ml-4 ">Inbox</span>
                  
                </span>
                <span className="text-xs  px-4 font-semibold text-gray-700 bg-yellow-300 rounded-full">6</span>
              </a>


              <a href="#" className="flex mt-4 -mx-3 px-3 py-1 justify-between items-center text-sm font-medium rounded-lg hover:bg-yellow-200 ">
                <span className="inline-flex items-center">
                  <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="ml-4 ">Inbox</span>
                  
                </span>
                <span className="text-xs  px-4 font-semibold text-gray-700 bg-yellow-300 rounded-full">6</span>
              </a>


              <a href="#" className="flex mt-4 -mx-3 px-3 py-1 justify-between items-center text-sm font-medium rounded-lg hover:bg-yellow-200 ">
                <span className="inline-flex items-center">
                  <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="ml-4 ">Inbox</span>
                  
                </span>
                <span className="text-xs  px-4 font-semibold text-gray-700 bg-yellow-300 rounded-full">6</span>
              </a>
            </nav>
          </div>
          {/* <main>
            <div>

            </div>
            <div>

            </div>
          </main> */}

<main class="flex flex-1 max-h-screen overflow-hidden mb-20 w-auto ">
      <div class="relative flex flex-col w-full max-w-lg flex-grow border-l border-r bg-gray-200 ">
        <div class="flex-shrink-0 px-4 py-2 border-b flex items-center justify-between">
          <button class="flex items-center text-xs font-semibold text-gray-600">
            Sorted by Date
            <span class="leading-loose h-6 w-6 stroke-current text-gray-500">
              <i class="fas fa-chevron-down ml-1"></i>
            </span>
          </button>
          <button>
            <span class=" h-6 w-6 stroke-current text-gray-500">
              <i class="fas fa-sort-amount-up"></i>
            </span>
          </button>
        </div>
        <div class="flex-1 overflow-y-scroll mb-10">
          <a href="#" class="block px-6 pt-3 pb-4 bg-white">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">John Doe</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Zaeus Matios</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Lara Jay</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Sarah Connely</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Daft Punk</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Paul Allen</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Arnold Schwarzzeneger</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Dorian Yates</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Blair Willams</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Dana White</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Dustin Poirier</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Gigi Hadid</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">NoelEaston</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Aluthvidee Sakana</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900">Koiras Netal</span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900"></span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
          <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
            <div class="flex justify-between">
              <span class="text-sm font-semibold text-gray-900"></span>
              <span class="text-sm text-gray-500">2 days ago</span>
            </div>
            <p class="text-sm text-gray-900">Refund</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus element...</p>
          </a>
        </div>
      </div>

      <div className="bg-gray-200  w-full h-screen flex-1 flex flex-col">
      <div class="relative shadow-md">
          <div class="flex items-center px-5 py-4 justify-between bg-gray-100 border-b">
            <div class="flex items-center">
              <button>
                <span class="leading-normal">
                  <i class="fas fa-reply h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                </span>
              </button>
              <button class="ml-6">
                <span class="leading-normal">
                  <i class="fas fa-tag h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                </span>
              </button>
              <button class="ml-6">
                <span class="leading-normal">
                  <i class="far fa-user-circle h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                </span>
              </button>
              <button class="ml-6">
                <span class="leading-normal">
                  <i class="fas fa-file-download text-2xl fill-current text-gray-600 "></i>
                </span>
              </button>
              <button class="ml-4">
                <span class="leading-normal">
                  <i class="fas fa-ellipsis-h h-5 w-5 text-2xl fill-current text-gray-600 "></i>
                </span>
              </button>
            </div>
            <div class="flex items-center">
              <button>
                <span class="leading-normal">
                  <i class="fas fa-chevron-up h-8 w-8 text-2xl stroke-current text-gray-600"></i>
                </span>
              </button>
              <button>
                <span class="leading-normal">
                  <i class="fas fa-chevron-down h-8 w-8 text-2xl stroke-current text-gray-600"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between px-5 py-3 bg-white">
            <h3 class="text-xl text-gray-900 truncate">Re: Student discount? this is really long and has to wrap and looks stupid this is really long and has to wrap and looks stupid</h3>
            <div class="ml-4 flex-shrink-0">
              <span>#1428</span>
              <span class="ml-2 text-sm font-semibold text-green-900 bg-green-200 rounded-full leading-none px-2 py-1">Active</span>
            </div>
          </div>
        </div>
        <div class="p-3 flex-1 overflow-y-auto">
          <article class="px-10 pt-6 pb-8 bg-white rounded-lg shadow">
            <div class="flex items-center justify-between">
              <p class="text-lg font-semibold">
                <span class="text-gray-900">Blake Shelton</span>
                <span class="text-gray-600"> wrote</span>
              </p>
              <div class="flex items-center">
                <span class="text-xs text-gray-600">Yesterday at 7:24 AM</span>
                <img 
                class="ml-5 h-8 w-8 rounded-full object-cover" 
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.5&w=144&q=60"/>
              </div>
            </div>
            <div class="mt-6 text-gray-800 text-sm">
              <p>Thanks so much!! Can't wait to try it out :)</p>
            </div>
          </article>
          <article class="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
            <div class="flex items-center justify-between">
              <p class="text-lg font-semibold">
                <span class="text-gray-900">Akanbi Lawal</span>
                <span class="text-gray-600"> wrote</span>
              </p>
              <div class="flex items-center">
                <span class="text-xs text-gray-600">Yesterday at 7:24 AM</span>
                <img 
                class="ml-5 h-8 w-8 rounded-full object-cover" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"/>
              </div>
            </div>
            <div class="mt-6 text-gray-800 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p> 
              <p class="mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="mt-4 font-semibold text-gray-900">Akanbi Lawal</p>
              <p>Customer Service</p>
            </div>
          </article>
          <article class="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
            <div class="flex items-center justify-between">
              <p class="text-lg font-semibold">
                <span class="text-gray-900">Masturah Adam</span>
                <span class="text-gray-600"> wrote</span>
              </p>
              <div class="flex items-center">
                <span class="text-xs text-gray-600">Yesterday at 7:24 AM</span>
                <img 
                class="ml-5 h-8 w-8 rounded-full object-cover" 
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.5&w=144&q=60"/>
              </div>
            </div>
            <div class="mt-6 text-gray-800 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p class="mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="mt-4 font-semibold text-gray-900">Masturah Abiola</p>
              <p>Customer Service</p>
            </div>
          </article>
          
        </div>
      </div>
     
    </main>
      </div>
      
    </div>
  )
        }
