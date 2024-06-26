import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NODE</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>EXPRESS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MONGODB</h4>
              <small className='text-light'>Experienced</small></div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>FIREBASE</h4>
              <small className='text-light'>Experienced</small></div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>GIT</h4>
              <small className='text-light'>Experienced</small></div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>

          
      </div>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

          <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React.js</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Next.js</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REDUX</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>TYPESCRIPT</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            


            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>TAILWIND</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            
          </div>
        </div>
             {/* END OF FRONTEND  */}

          

      <div className="experience__backend">
          <h3>Others</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>GIT</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>GITHUB</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NETLIFY</h4>
              <small className='text-light'>Experienced</small></div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>POSTMAN</h4>
              <small className='text-light'>Experienced</small></div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>VERCEL</h4>
              <small className='text-light'>Experienced</small></div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>VS CODE</h4>
              <small className='text-light'>Experienced</small></div>
            </article>


            
          </div>

          
      </div>
      </div>
    </section>
  )
}

export default Experience
