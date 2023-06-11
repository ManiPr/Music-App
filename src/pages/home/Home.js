import React from 'react'
import './Home.css'
import prev from '../../assets/images/SVG File/prev.svg'
import next from '../../assets/images/SVG File/next.svg'
import Music from '../../components/music/Music'
import Category from '../../components/category/Category'
import PodcastCategory from '../../components/podcast-category/PodcastCategory'
export default function Home() {
  return (
    <>
      <section className='recently-played '>
        <div className='container'>
          <div className='recently-played__wrapper sectoin-wrapper'>
            <div className='recently-played__top sectoin-top center'>
            <p className='recetly-played__title section-title'>Recently played</p>
            <div className='recently-played__buttons'>
            <img className='recently-played__button' src={prev}/>
            <img className='recently-played__button' src={next}/>
            </div>
            </div>
            <div className='recently-played__musics section-box center'>
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
      <section className='categories-section'>
        <div className='container'>
          <div className='category-wrapper sectoin-wrapper'>
            <div className='categories section-box center'>
             <Category></Category>
             <Category></Category>
              <Category></Category>
              <Category></Category>
              <Category></Category>
              <Category></Category>
            </div>
      
          </div>
          </div>
      </section>
      <section className='days'>
      <div className='container'>
          <div className='days__wrapper sectoin-wrapper'>
            <div className='days__top sectoin-top center'>
            <p className='days__title section-title'>For Sunday</p>
            <p className='days__view'>View All</p>
            </div>
            <div className='days__musics section-box center'>
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
      <section className='category-podcast'>
        <div className='container'>
          <div className='category-podcast__wrapper sectoin-wrapper'>
          <div className='category-podcast__top sectoin-top center'>
            <p className='category-podcast__title section-title'>PodCast</p>
            <p className='category-podcast__view'>View All</p>
            </div>
            <div className='category-podcast__musics section-box center'>
            <PodcastCategory></PodcastCategory>
            <PodcastCategory></PodcastCategory>
            <PodcastCategory></PodcastCategory>
            <PodcastCategory></PodcastCategory>
            <PodcastCategory></PodcastCategory>
            <PodcastCategory></PodcastCategory>
            </div>
          </div>
         
        </div>
      </section>
    </>
  )
}
