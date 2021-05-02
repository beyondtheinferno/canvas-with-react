import React, { useCallback } from "react"
import Canvas from "./Canvas"

const Template = () => {
  const width = 300,
    height = 300

  const drawStuff = useCallback((ctx) => {
    ctx.strokeRect(10, 10, 10, 10)
  }, [])

  return <Canvas width={width} height={height} draw={drawStuff} />
}

export default Template
