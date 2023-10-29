import React from 'react'

function UpdateComponent({setUpdatedText,UpdatedText,updateText,setButtonIndex,index}) {
  return (
  <>
   <div className="flex gap-2">
                                <input
                                    onChange={(e) => setUpdatedText(e.target.value)}
                                    value={UpdatedText}
                                    className="bg-black pl-5 pr-3 text-gray-50 text-2xl rounded-md h-16 w-96 hover:border border-sky-500 hover:border-4"
                                    type="text"
                                ></input>
                                <button
                                    onClick={(e) => updateText(index)}
                                    className="group h-16 w-16 bg-cyan-500 rounded-md shadow-sm shadow-cyan-500"
                                >
                                    <i class="fa-solid fa-file-pen  text-2xl"></i>
                                    <h1 className="hidden group-hover:block">Update</h1>
                                </button>
                                <button
                                    onClick={(e) => setButtonIndex("")}
                                    className="group h-16 w-16 bg-cyan-500 rounded-md shadow-sm shadow-cyan-500"
                                >
                                    <i class="fa-solid fa-arrow-left text-2xl"></i>
                                    <h1 className="hidden group-hover:block">Back</h1>
                                </button>
                            </div>
  </>
  )
}

export default UpdateComponent
