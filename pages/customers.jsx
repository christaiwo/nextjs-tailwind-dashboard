import React from 'react'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs';
import {data} from '@/data/data.js'
import Head from 'next/head';

const customers = () => {
  return (
    <>
      <Head>
        <title>Customers</title>
        <meta name='description' content='This is a next app' />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className='bg-gray-100 m-h-screen'>
          <div className='flex justify-between p-4'>
            <h2>Customers</h2>
            <h2>Welcome Back, Chris</h2>
          </div>
          <div className="p-4">
            <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
              <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'> 
                <span>Name</span>
                <span className='sm:text-left text-right'>Email</span>
                <span className='hidden md:grid'>Last Order</span>
                <span className='hidden md:grid'>Method</span>
              </div>
              <ul>
                {data.map((order, id) => (
                  <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                      <div className='bg-purple-100 p-3 rounded-lg'>
                        <BsPersonFill className='text-purple-800' />
                      </div>
                      <p className='pl-4'>{`${order.name.first} ${order.name.last}`}</p>
                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                      {order.name.first}
                    </p>
                    <p className="hidden md:flex">
                      {order.date}
                    </p>
                    <div className='md:flex hidden justify-between items-center'>
                      <p>{order.method}</p>
                      <BsThreeDotsVertical />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>

    </>
    
  )
}

export default customers