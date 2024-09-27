import { useEffect } from 'react'
import { GoogleAuth } from '../../hooks/GooleAuth'
import './home.css'

export const Home = () => {


  useEffect(()=>{
    GoogleAuth()
  },[])

  return (
    <div>
      <section className='hm-banner'>
        <div className='banner_container'>
          <div style={{
            display: 'flex',
            gap: '700px',
            // border:'solid red 2px',
            height:'90vh',
            position: 'relative',
            paddingLeft: '200px',
            paddingRight: '200px',
            backgroundColor: '#DCDCDC'
          }}>
            <div className='banner_header_text_container'>
              <div className='banner_header_text'>
                <h5>Beats Solo</h5>
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
