import Head from 'next/head'
import React from 'react'
import Hello from '../components/Hello'

function index() {
  return (
    <>
      <Head>
        <title>Innova Etiket Web Dev</title>
      </Head>
      <div className='h-screen w-screen'>
        <Hello />
      </div>
    </>
  )
}

export default index