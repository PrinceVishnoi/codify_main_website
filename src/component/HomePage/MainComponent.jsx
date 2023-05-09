import React from 'react'
import SecondMainSection from './SecondSection/SecondMainSection'
import SecondMainSectionText from './SecondSection/SecondMainSectionText'
import ContactForm from './Form/ContactForm'
import FrontPage from './FrontPage/FrontPage'
import Rating from './Rating/Rating'
import WithSpeechBubbles from './Testimonal/Testimonal'

export default function MainComponent() {
  return (
    <>
    <FrontPage/>
      <SecondMainSection/>
      <SecondMainSectionText/>
      <Rating/>
      <WithSpeechBubbles/>
      <ContactForm/>

    </>
  )
}
