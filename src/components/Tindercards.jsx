import React from 'react'
import './Tindercards.css'
import Tindercard from 'react-tinder-card';

function Tindercards() {

  //Hooks are functions that can be used in React components.
  const [cartoons, setCartoons] = React.useState([
    {
      name: "Shinchan",
      url: "https://images.indianexpress.com/2020/09/shinchan.jpg"
    },
    {
      name: "Doraemon",
      url: "data:image/png;base64,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"
    },
    {
      name: "Tom",
      url: "https://store-images.s-microsoft.com/image/apps.14401.14335195431380456.948477b0-a258-496a-9152-d98ea44e9f2b.06535fad-ae0d-4d70-bc11-d43c315696cc?mode=scale&q=90&h=300&w=300"
    },
    {
      name: "Mr. Bean",
      url: "https://i.pinimg.com/originals/60/54/64/605464adbbbd633f9dd4aea6e3e069fc.png"
    }
  ])

  return (
    <div className='card-container'>
      {
        cartoons.map( cartoon => (
          <Tindercard 
          className='swipe'
          key={cartoon.name}
          preventSwipe={['up', 'down']}>
            <div
             style={ { backgroundImage: `url(${cartoon.url})` } }
             className='card'>
              <h3>{cartoon.name}</h3>
            </div>
          </Tindercard>
        ))
      }
    </div>
  )
}

export default Tindercards