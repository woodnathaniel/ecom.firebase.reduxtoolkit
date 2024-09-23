import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <div>
      <section className='hm-banner'>
        <div className='banner_container'>
          <div style={{
            display: 'flex',
            gap: '70px',
            }}>
            <div className='banner_header_text_container'>
              <div className='banner_header_text'>
                <h5>Beat Solo </h5>
                <h2>Wireless</h2>
              </div>
              <div>
                <button>Shop By Category</button>
              </div>
            </div>
            <div>
              <img src="https://i.pinimg.com/236x/68/f9/a5/68f9a5bb3eabfae2d16bbe993b0cc92b.jpg" alt="this is a header picture " />
            </div>
          </div>
        
        </div>
      </section>
    </div>
  )
}
