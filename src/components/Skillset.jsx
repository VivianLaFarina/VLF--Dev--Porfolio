import React from 'react'

const Skillset = () => {
  return (
    <section className='text-white px-2 py-12 max-w-[1200px]'>
        {/* Subsseccion Superior*/}
        <section className='md:grid md:grid-cols-[1fr_auto] md:gap-16'>
        <article>
            <div>
                <h3></h3>
              <img src="" alt="" />
            </div>
            <h4>Frameworks</h4>
            <ul>
              <li>React</li>
              <li>Wordpress</li>
              <li>Boostrap</li>
            </ul>
          </article>
          </section>

          <section>
          <article>
            <div>
              <img src="" alt="" />
            </div>
            <h4>Source Control</h4>
            <ul>
              <li>Git/Github</li>
              <li>Bitbucket</li>
              <li>SCRUM / Agil</li>
            </ul>
          </article>
          </section>
          <section>
          <article>
            <div>
              <img src="" alt="" />
            </div>
            <h4>Languages</h4>
            <ul>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>Javascript</li>
            </ul>
          </article>
          </section>
          <section>

          <article>
            <div>
              <img src="" alt="" />
            </div>
            <h4>UX/UI</h4>
            <ul>
              <li>Wireframing/UML</li>
              <li>Adobe Suite</li>
              <li>Elementor Expert</li>
            </ul>
          </article>
          </section>

        {/* Subsseccion Superior*/}
        <section className='grid grid-cols-2s mt-10'>
        <div className='aspect-square grid place-content-center  border-[1px] border-gray-800'>
          <img src="/images/logo1.png" alt="" />
        </div>

        <div className='aspect-square grid place-content-center border-[1px] border-gray-800 '>
          <img src="/images/logo2.png" alt="" />
        </div>

        <div className='aspect-square grid place-content-center border-[1px] border-gray-800 '>
          <img src="/images/logo3.png" alt="" />
        </div>
        
        <div className='aspect-square grid place-content-center border-[1px] border-gray-800'>
          <img src="/images/logo4.png" alt="" />
        </div>

        </section>
    </section>
  )
}

export default Skillset