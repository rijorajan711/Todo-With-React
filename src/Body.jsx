import React, { useState } from "react";
import FirstBlock from "./Components/FirstBlock";
import UpdateComponent from "./Components/UpdateComponent";
import NoteDisplayComponent from "./Components/NoteDisplayComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Body() {
    // document.body.style.background="black"
    const [textArray, setTextArray] = useState([]);
    const [text, setText] = useState("");
    const [buttonIndex, setButtonIndex] = useState("");
    const [UpdatedText, setUpdatedText] = useState("");

    const displayy = () => {
        if (text) {
            const newTextArray = [...textArray];
            newTextArray.push(text);
            setText("");
            setTextArray(newTextArray);
            toast.success("Content Added Saved List")
        } else {
            toast.warning("Please add some text")
           
        }
    };

    const deleteItemFromArray = (indexx) => {
        const rijo = textArray.filter((value, index) => {
            return indexx != index;
        });
        setTextArray(rijo);
    };

    const editButtonAction = (index, data) => {
        setButtonIndex(index);
        setUpdatedText(data);
    };

    const updateText = (index) => {
        const updateArray = [...textArray];
        updateArray.splice(index, 1, UpdatedText);
        setTextArray(updateArray);
        setUpdatedText("");
        setButtonIndex("");
        console.log(textArray);
    };

    return (
        <>
            <div className="pb-10 min-h-screen flex flex-col gap-10  pt-[200px] items-center bg-stone-900">
                <h1 className="text-slate-50 text-5xl  font-bold">My Task List</h1>

                <FirstBlock setText={setText} text={text} displayy={displayy} />

                {textArray.length > 0
                    ? textArray?.map((data, index) =>
                        index === buttonIndex ? (
                            <UpdateComponent
                                setUpdatedText={setUpdatedText}
                                UpdatedText={UpdatedText}
                                updateText={updateText}
                                setButtonIndex={setButtonIndex}
                                index={index}
                            />
                        ) : (
                            <NoteDisplayComponent
                                data={data}
                                index={index}
                                editButtonAction={editButtonAction}
                                deleteItemFromArray={deleteItemFromArray}
                            />
                        )
                    )
                    : ""}
            </div>

            <ToastContainer position='top-center' theme='colored' autoClo0se={50}/>
        </>
    );
}

export default Body;
