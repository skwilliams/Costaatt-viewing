import React from 'react'
import { useRouter } from 'next/router'
import navStyles from '../../styles/Nav.module.scss'
import Image from 'next/image'
import logo from '../../../images/Links/costaatLogoBlack.png'
import Link from 'next/link'
import { subHeaderSections } from './subHeaderSections'
import Progressbar from './progressBar'
import { Link as RSLink } from 'react-scroll'

const SideNav = ({ show }) => {
  const router = useRouter()
  const currentPath = router.pathname.split('/')[0] || 'home'
  const sections = subHeaderSections[currentPath] || {}
  const sectionTitles = Object.keys(sections) || []

  return (
    <header style={{ visibility: show ? 'visible' : 'hidden' }}>
      <div className={navStyles.sideNavContainer}>
        <Progressbar position={'down'} />
        <Link href="/">
          <Image src={logo} alt="costaatt-logo" height={40} />
        </Link>

        <div className={navStyles.sideNav}>
          {sectionTitles.map(section => (
            <RSLink
              className={navStyles.rslink}
              key={section}
              activeClass={navStyles.activeSubsection}
              to={sections[section]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {section}
            </RSLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default SideNav
