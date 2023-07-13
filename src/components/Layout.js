import styles from '../styles/Layout.module.css'
import { useState, useRef, useEffect } from 'react'
import Header from './NavComponents/Header'
import Footer from './Footer'
import Subheader from './NavComponents/Subheader'

const Layout = ({ children }) => {
  const navRef = useRef()
  const [showSubNav, setShowSubNav] = useState(false)

  useEffect(() => {
    const updateShowSubNav = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const navHeight = navRef.current.getNavHeight()
      const hideNav = scrollTop >= navHeight ? true : false
      setShowSubNav(hideNav)
    }
    window.addEventListener('scroll', updateShowSubNav)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateShowSubNav)
    }
  }, [])

  return (
    <div>
      <Header ref={navRef} />
      <Subheader show={showSubNav} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
