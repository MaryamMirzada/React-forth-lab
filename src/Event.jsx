import { useState } from "react"

function Event(){
    const [isVisible , setItVisible] = useState(true)
    const [isiVisibla, setItVisibla] = useState (true)
    return (
      <div>
        <h5>the second practice Conditional</h5> <hr />
        <button onClick={() => setItVisible(!isVisible)}>Toggle Message</button>
        <h6>{isVisible ? "Message On" : "Message Off"}</h6>
        {isVisible && <p>This Message is visible</p>}
        <br /> <br />
        <button onClick={() => setItVisibla(!isiVisibla)}>Click me</button>
        <h5>
          {isiVisibla ? "now you see more information" : "off"}
          information
        </h5>
        {isiVisibla && <p>Lorem, ipsum dolor sit amet
             consectetur adipisicing elit. Inventore dicta
            blanditiis in non cumque numquam, nam dolores excepturi 
              facilis ducimus porro, rerum fugiat exercitationem asperiores 
            officia omnis eveniet? Totam, voluptatum.</p>}
       
      </div>
    );
}

export default Event