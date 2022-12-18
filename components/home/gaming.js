import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/gaming.json'

export default function gaming() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}