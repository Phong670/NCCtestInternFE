import React, { useState } from 'react'

function Tab() {
  const nameTab =['Home','Services','News','Blog','Contact'];
  var pathArray = window.location.pathname.split('/');
  console.log(pathArray[1]);

  return (
    <>
    <div className='container-tab'>
      {nameTab?.map(name=>(
          <div className='text-name'><a href={name.toLowerCase()} style={{color:pathArray[1]===name.toLowerCase() ? 'white':'#AAAAAA'}}>{name}</a></div>
      )
      )}
    </div>

    </>
  )
}

export default Tab