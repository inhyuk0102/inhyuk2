import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/cloud.json'

export default function cloud() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}