
import Link from 'next/link'
import React from 'react'

const SkipLinks = () => {
  return (
    <>
        <Link href="#welcome" className="hidden" aria-label="skip to welcome section" />
        <Link href="#skills" className="hidden" aria-label="skip to skills section" />
        <Link href="#projects" className="hidden" aria-label="skip to projects section" />
        <Link href="#about" className="hidden" aria-label="skip to about section" />
        <Link href="#blog" className="hidden" aria-label="skip to blog section" />
        <Link href="#contact" className="hidden" aria-label="skip to contact section" />
    </>
  )
}

export default SkipLinks