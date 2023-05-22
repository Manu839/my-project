import React, { useState } from 'react';

export default function Textchange(props) {

    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const handleDownClick = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext)
    }
    const handleOnClear = () => {
        let newtext = text.replace(text, '')
        setText(newtext)
    }
    const handleOncopy = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();

    }
    const handleOnToggle = () => {
        function toggleChars(str) {
            for (let i = 0; i < str.length; i++) {
                if (str[i] >= 'A' && str[i] <= 'Z')
                    str[i] = String.fromCharCode(str[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
                else if (str[i] >= 'a' && str[i] <= 'z')
                    str[i] = String.fromCharCode(str[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
            }
        }
        let str = text.split("");
        toggleChars(str);
        setText((str).join(""));

    }
    return (<>
        <div className='mb-8' style={{ color: props.mode === 'dark' ? 'white' : '#0f1112' }} >
            <div className='p-4 text-2xl text-center' >Write your text here</div><div className='text-center'>
                <textarea id='mybox' className='border-gray-900 h-60 border-2 p-4 w-72 md:w-auto rounded-md bg-slate-100 md:bg-white' onChange={handleOnChange} value={text} rows={8} cols={80} ></textarea></div> <br />
                <div className='space-x-5 flex-col md:flex-row text-center  align-middle'>
                <button disabled={text.length === 0} onClick={handleOncopy} className='bg-blue-700 md:p-5 p-3 h-  rounded-xl md:w-auto w-60 my-3'>copy to clipboard</button>
                <button disabled={text.length === 0} onClick={handleUpClick} className='bg-blue-700  md:p-5 h- p-3 ml-auto mr-auto align-middle w-60 md:w-auto rounded-xl my-3' >convert to upper-case</button>
                <button disabled={text.length === 0} onClick={handleDownClick} className='bg-blue-700 md:p-5 h- p-3 rounded-xl w-60 md:w-auto my-3'>convert to lower-case</button>
                <button disabled={text.length === 0} onClick={handleOnToggle} className='bg-blue-700 md:p-5 p-3 h- rounded-xl my-3 w-60 md:w-auto '>Toggle Case</button>
                <button disabled={text.length === 0} onClick={handleOnClear} className='bg-blue-700 md:p-5 p-3 h- rounded-xl my-3 w-60 md:w-auto '>clear</button>
            </div><br/>
            <div className='text-center'> <span className='text-blue-500'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span> words and <span className='text-blue-500'> {text.length}</span> characters</div>
            <br/>
            <p className='text-center md:pr-5 md:pl-5' >Your Summary-<br/><br/><span className='text-blue-500' >{text}</span></p>
        </div>
    </>
    )
}
