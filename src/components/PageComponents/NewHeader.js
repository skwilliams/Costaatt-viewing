import React from 'react'

const NewHeader = (mainimage) => {
  return (
    <div>
      NewHeader
      <style jsx>{`

        height: 50vh;
        
        background-image: linear-gradient(
            to right,
            rgba($color-white, 0.25),
            rgba($color-primary-light, 0.25),
            rgba($color-primary-light, 0.5)
          ),
          url({mainimage});
        // Source: https://www.freepik.com/free-photo/standard-quality-control-collage-concept_30589253.htm#query=quality%20assurance&position=44&from_view=keyword&track=ais&uuid=11090649-220d-41aa-874a-c89449145375
        background-size: cover;
        background-position: top;
        position: relative;
      `}</style>
    </div>
  );
}

export default NewHeader