import * as React from 'react'
const loadTemplateJs = require('../../vendor/js/main.js')

import { Home } from './Home'
import { Intro } from './Intro'
import { What } from './What'
import { About } from './About'
import { Ico } from './Ico'
import { Team } from './Team'
import { Roadmap } from './Roadmap'
// import { Blog } from './Blog'
import { Faq } from './Faq'
import { Referrer } from './Referrer'
import { Token } from '../KinesisVelocityToken/Token'
import { Contact } from './Contact'
import { Navigation } from '../Navigation'
import { Footer } from '../Footer'
import { TokenOffering } from './TokenOffering'

export class Promo extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
    loadTemplateJs()
  }

  public render() {

    return (
      <div>
        <header>
          <div className='header_wrapper'>
            <Navigation />
          </div>
        </header>
        <Home />
        <What />
        <About />
        <Ico />
        <TokenOffering />
        <Intro />
        <Referrer />
        <Roadmap />
        <Team />
        <Faq />
        <Contact />
        <Footer />
      </div>
    )
  }
}
