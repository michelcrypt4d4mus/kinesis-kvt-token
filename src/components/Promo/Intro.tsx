import * as React from 'react'

export const Intro: React.SFC = () => {
  return (
    <div>
      <section className='startup pt-40 pb-40'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9'>
              <h4 style={{color: 'black', lineHeight: '50px'}}><strong>Why Kinesis?</strong> Read our whitepaper to find out more.</h4>
            </div>
            <div className='col-sm-3'>
              <a href='#' className='btn wow fadeInRight' style={{marginBottom: 0, border: '2px solid black', backgroundColor: 'transparent'}}>Whitepaper</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
