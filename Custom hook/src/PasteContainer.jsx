import { useRef } from "react";
import useCopyToClipboard from "./utils/useCopyToClipboard";

const PasteComponent = () => {

  const textAreaRef = useRef()
  const { paste } = useCopyToClipboard();

  return (
    <>
      <button onClick={e => paste(textAreaRef)}>paste</button>
      <textarea className="past-container" ref={textAreaRef}></textarea>
    </>
  );
};

export default PasteComponent;