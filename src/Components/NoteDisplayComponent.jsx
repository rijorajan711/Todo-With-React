import React from "react";

function NoteDisplayComponent({data,index,editButtonAction,deleteItemFromArray}) {
    return (
        <>
            <div className="flex gap-3">
                <div className="h-16 w-96  bg-teal-800">
                    <h1 className="font-medium text-2xl text-center">{data}</h1>
                </div>
                <button
                    onClick={() => editButtonAction(index, data)}
                    className="group h-16 w-16 bg-cyan-500 rounded-md shadow-sm shadow-cyan-500"
                >
                    <i className="fa-solid fa-pen-to-square font-thin text-black text-2xl"></i>
                    <h1 className="hidden group-hover:block">Edit</h1>
                </button>
                <button
                    onClick={() => deleteItemFromArray(index)}
                    className="group h-16 w-16 bg-cyan-500 rounded-md shadow-sm shadow-cyan-500"
                >
                    <i class="fa-solid  fa-trash  text-black "></i>
                    <h1 className="hidden group-hover:block">Delete</h1>
                </button>
            </div>
        </>
    );
}

export default NoteDisplayComponent;
