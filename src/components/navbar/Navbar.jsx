import {NavLink} from 'react-router-dom'
import './nav.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = ({register}) => {
  return (
    <div>
      <div className='navBar'>
        <div className='navbarLogo'>
        <svg width="80" height="30" viewBox="0 0 105 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.608 1.152V4.44H9.144V18H5.04V4.44H0.576V1.152H13.608ZM41.2517 1.152L36.8597 18H31.8917L29.2037 6.912L26.4197 18H21.4517L17.1797 1.152H21.5717L23.9957 13.416L26.9957 1.152H31.5077L34.3877 13.416L36.8357 1.152H41.2517ZM56.1979 15.024H49.9099L48.9019 18H44.6059L50.7019 1.152H55.4539L61.5499 18H57.2059L56.1979 15.024ZM55.1419 11.856L53.0539 5.688L50.9899 11.856H55.1419ZM77.9252 1.152V4.44H73.4612V18H69.3572V4.44H64.8932V1.152H77.9252ZM86.4889 1.152V18H82.3849V1.152H86.4889ZM97.959 18.168C96.727 18.168 95.623 17.968 94.647 17.568C93.671 17.168 92.887 16.576 92.295 15.792C91.719 15.008 91.415 14.064 91.383 12.96H95.751C95.815 13.584 96.031 14.064 96.399 14.4C96.767 14.72 97.247 14.88 97.839 14.88C98.447 14.88 98.927 14.744 99.279 14.472C99.631 14.184 99.807 13.792 99.807 13.296C99.807 12.88 99.663 12.536 99.375 12.264C99.103 11.992 98.759 11.768 98.343 11.592C97.943 11.416 97.367 11.216 96.615 10.992C95.527 10.656 94.639 10.32 93.951 9.984C93.263 9.648 92.671 9.152 92.175 8.496C91.679 7.84 91.431 6.984 91.431 5.928C91.431 4.36 91.999 3.136 93.135 2.256C94.271 1.36 95.751 0.912 97.575 0.912C99.431 0.912 100.927 1.36 102.063 2.256C103.199 3.136 103.807 4.368 103.887 5.952H99.447C99.415 5.408 99.215 4.984 98.847 4.68C98.479 4.36 98.007 4.2 97.431 4.2C96.935 4.2 96.535 4.336 96.231 4.608C95.927 4.864 95.775 5.24 95.775 5.736C95.775 6.28 96.031 6.704 96.543 7.008C97.055 7.312 97.855 7.64 98.943 7.992C100.031 8.36 100.911 8.712 101.583 9.048C102.271 9.384 102.863 9.872 103.359 10.512C103.855 11.152 104.103 11.976 104.103 12.984C104.103 13.944 103.855 14.816 103.359 15.6C102.879 16.384 102.175 17.008 101.247 17.472C100.319 17.936 99.223 18.168 97.959 18.168Z" fill="url(#paint0_linear_4_5)" 
        // style={{"mix-blend-mode:screen"}}
        />
        <defs>
          <linearGradient id="paint0_linear_4_5" x1="0" y1="10" x2="106" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0.12" stop-color="#36C5F0"/>
            <stop offset="0.38" stop-color="#2EB67D"/>
            <stop offset="0.63" stop-color="#E01E5A"/>
            <stop offset="0.92" stop-color="#ECB22E"/>
          </linearGradient>
        </defs>
        </svg>
        </div>

        <div className='navLinks'>
          <NavLink  to="/" >Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>

        <div className='profile_status_navbar'>
          <div className='is_login_status'><p>Login</p></div>
          <div className='search_bar'><SearchOutlinedIcon/></div>
          <div className='cart'><ShoppingCartOutlinedIcon/><p>5</p></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar