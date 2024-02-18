import ReactDom from "react-dom";

import useCopyToClipboard from "./utils/useCopyToClipboard";

import { ToastContainer } from "react-toastify";
import PasteContainer from "./PasteContainer";

const App = () => {
  const { isCopied, copy } = useCopyToClipboard();
  const handleCopy = (e) => {
    e.preventDefault();
    const text = e.target.innerText;
    copy(text);
  };
  return (
    <div className="App">
      Custom hook - copy to clipboard
      {/* paste container */}
      <div className="text-right">
        <PasteContainer />
      </div>
      {/* content */}
      <div className="text-left pointer-copy">
        
        <h6>Click below paragraphs to copy text </h6>

        <p onClick={handleCopy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          volutpat, eros nec pretium sagittis, magna libero condimentum ex, at
          tincidunt dolor tortor quis risus. Nullam ac finibus ante, eu luctus
          ipsum. Maecenas mollis suscipit libero a interdum. Curabitur eu
          accumsan massa. Suspendisse sodales nisl egestas, eleifend ligula a,
          sagittis neque. Fusce semper lorem in eros suscipit volutpat. Nullam
          feugiat interdum massa, ullamcorper aliquet velit consequat ut. Nullam
          auctor elit ac erat dictum convallis. Nunc vitae lectus quis eros
          mollis sodales.
        </p>
        <p onClick={handleCopy}>
          Cras lorem lectus, egestas et dignissim eget, congue vitae justo.
          Proin commodo diam in odio cursus, ac ultricies lacus pharetra.
          Phasellus fermentum efficitur nunc eu aliquam. Sed malesuada eu lacus
          quis tristique. Etiam ullamcorper, diam at ornare interdum, lacus ex
          aliquam nisi, eu pharetra mi lectus eu purus. Praesent luctus neque
          mi, eget condimentum felis suscipit vel. Pellentesque quam diam,
          interdum quis lacinia ut, venenatis ac lectus. Duis suscipit
          vestibulum diam ac pretium. Curabitur ante nunc, gravida quis turpis
          sit amet, vestibulum accumsan enim.
        </p>
        <p onClick={handleCopy}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Praesent euismod velit ante, non hendrerit
          lorem elementum at. Aenean sed convallis risus. Aliquam tincidunt a
          odio sit amet pharetra. Nunc eget ultrices sapien. Nunc fringilla
          risus vestibulum augue auctor viverra. Donec feugiat magna eget magna
          dignissim tristique. Cras sit amet rutrum ipsum. In massa massa,
          facilisis sit amet pharetra et, condimentum id magna. Fusce efficitur
          cursus nulla, a porttitor ipsum vestibulum et. Donec placerat mauris
          eget justo facilisis, sed dictum purus sodales. Morbi eget urna mi.
          Praesent volutpat enim eu quam condimentum ultrices. Integer dignissim
          rutrum velit, nec faucibus est maximus eu.
        </p>
        <p onClick={handleCopy}>
          Vivamus quis velit sed arcu pretium scelerisque id eu dui. Aliquam
          magna metus, viverra ac ex ac, venenatis malesuada mi. Suspendisse non
          euismod ante. Curabitur mattis tellus tortor, non hendrerit dolor
          commodo sit amet. Quisque nunc neque, ultricies ut bibendum et, semper
          at felis. Sed et ipsum justo. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Suspendisse ultricies molestie tellus ac
          pellentesque. Nunc in consectetur purus, sed fermentum magna.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Maecenas maximus nibh vel odio consequat, ut
          vestibulum augue dapibus.
        </p>
        <p onClick={handleCopy}>
          Fusce eleifend tortor ex, eu porta ipsum condimentum quis. Maecenas
          placerat massa a ipsum hendrerit rutrum. Donec et felis at quam
          pulvinar euismod in sit amet quam. Suspendisse potenti. In iaculis
          cursus lorem a vehicula. Fusce molestie dolor eget tortor tempus
          dignissim. Morbi semper lectus eu dictum posuere. Vivamus ut
          sollicitudin nisi. In ante dolor, convallis vel purus egestas, iaculis
          malesuada lectus.
        </p>

        {ReactDom.createPortal(
          <ToastContainer />,
          document.getElementById("toast")
        )}
      </div>
    </div>
  );
};

export default App;
