import { useEffect, useState } from 'react'
import styles from '../../styles/Progressbar.module.scss'

export default function Progressbar({ position }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgressBar = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const calculatedProgress = (scrollTop / (documentHeight - windowHeight)) * 100
      setProgress(calculatedProgress)
    }

    // Update the progress bar on scroll
    window.addEventListener('scroll', updateProgressBar)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateProgressBar)
    }
  }, [])

  return (
    <div
      className={position == 'down' ? styles.progressBarDown : styles.progressBar}
      style={{
        width: position == 'down' ? '4px' : `${progress}%`,
        height: position == 'down' ? `${progress}%` : '4px',
      }}
    ></div>
  )
}
