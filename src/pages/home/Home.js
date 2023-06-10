import React from 'react'
import './Home.css'
import prev from '../../assets/images/SVG File/prev.svg'
import next from '../../assets/images/SVG File/next.svg'
import Music from '../../components/music/Music'
export default function Home() {
  return (
    <>
      <section className='recently-played'>
        <div className='container'>
          <div className='recently-played__wrapper'>
            <div className='recently-played__top center'>
            <p className='recetly-played__title'>Recently played</p>
            <div className='recently-played__buttons'>
            <img className='recently-played__button' src={prev}/>
            <img className='recently-played__button' src={next}/>
            </div>
            </div>
            <div className='recently-played__musics center'>
            <Music></Music>
            <Music></Music>
            <Music></Music>
            <Music></Music>
            <Music></Music>
            <Music></Music>
            </div>
            
          </div>
         

        </div>
      </section>
    </>
  )
}
