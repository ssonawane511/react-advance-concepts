
import React, { useState } from 'react';
import copy from "copy-to-clipboard";

import { toast } from 'react-toastify';

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false)
    const handleCopy = (text) => {
        let textType = typeof text
        if(textType == 'string' || textType == 'number')
        {
            copy(text.toString())
            setIsCopied(true)
            emitSuccessMessage("copied to clipboard so easy!")
            return;
        }
        console.error(`Cannot copy typeof ${textType} to clipboard, must be a string or number`)
        setIsCopied(false);
    }

    const handlePaste = async (ref) => {
        const text = await navigator.clipboard.readText();
        ref.current.textContent = text
    }
    const emitSuccessMessage = (msg) => {
        toast.success(msg, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
    }
    return { 
        copy : handleCopy,
        isCopied,
        paste: handlePaste
    }
}

export default useCopyToClipboard;