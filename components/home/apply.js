import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/Apply.json'

export default function apply() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}