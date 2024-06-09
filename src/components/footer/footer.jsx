
import React from 'react'
import { Link } from 'react-router-dom'
import './footerStyle.scss'

export default function Footer() {
  return (
    <section className='footer-section '>
      <div className='md:grid md:grid-cols-2 bg-cyan-800 md:py-10 md:gap-10 lg:grid-cols-4' >
        <article >
<h2>menu</h2>
<div>

<Link >home</Link>
<Link>shop</Link>
<Link>about us</Link>
<Link>contact us</Link>
</div>
        </article>
        <article>
    
            <h2>catrgories</h2>
    <div>

            <Link>casual</Link>
            <Link>work & office</Link>

            <Link>avitvewear</Link>
            <Link>evening dress's</Link>
    </div>
        </article>
        <article>
            <h2>resources</h2>
        <div>

            <Link>contact support</Link>
            <Link>FAQs</Link>
            <Link>live chat </Link>
            <Link>returns</Link>
        </div>
        </article>
        <article>
            <h2>social media</h2>
           <div>

            <Link>facebook</Link>
            <Link>twitter</Link>
            <Link>instagram</Link>
            <Link>pintrast</Link>
           </div>
        </article>
      </div>
      <p>copyright &copy; 2024 colthing store powered by clothing store</p>
    </section>
  )
}
