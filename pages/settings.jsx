import Head from 'next/head'
import React from 'react'

const settings = () => {
  return (
    <>
        <Head>
            <title>Settings</title>
            <meta name='description' content='This is a next app' />
            <link rel="icon" href="./favicon.ico" />
        </Head>
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4 pt-4'>
                <h2>Settings</h2>
                <h2>Welcome Back, Chris</h2>
            </div>
            <div className='p-4'>
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                    <form action="">
                        <div className="grid md:grid-cols-2 gap-2">
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-gray-800 text-lg font-bold'>Site Name</label>
                                <input type="text" className='w-full h-10 border-2 focus:outline-none border-gray-300 rounded-sm text-xl' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-gray-800 text-lg font-bold'>Site Description</label>
                                <input type="text" className='w-full h-10 border-2 focus:outline-none border-gray-300 rounded-sm text-xl' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-gray-800 text-lg font-bold'>Facebook</label>
                                <input type="text" className='w-full h-10 border-2 focus:outline-none border-gray-300 rounded-sm text-xl' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-gray-800 text-lg font-bold'>Instagram</label>
                                <input type="text" className='w-full h-10 border-2 focus:outline-none border-gray-300 rounded-sm text-xl' />
                            </div>
                        </div>
                        
                        <div className='flex justify-center my-5'>
                            <button className='bg-purple-800 rounded-md py-2 px-5 text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default settings