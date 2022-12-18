import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/about-cloud.json'

export default function aboutcloud() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}