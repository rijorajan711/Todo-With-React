import React from 'react'

function FirstBlock({setText,text,displayy}) {
  return (
   <>
   
   <div className="flex gap-2">
                    <input
                        key={"rijo"}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        className="bg-black pl-5 pr-3 text-gray-50 text-2xl rounded-md h-16 w-96 hover:border border-sky-500 hover:border-4"
                        type="text"
                    ></input>
                    <button
                        onClick={displayy}
                        className="group h-16 w-16 bg-cyan-500 rounded-md shadow-sm shadow-cyan-500"
                    >
                        <i className="fa-solid fa-plus font-thin text-black text-2xl"></i>
                        <h1 className="hidden group-hover:block">Add</h1>
                    </button>
                </div>
   </>
  )
}

export default FirstBlock
