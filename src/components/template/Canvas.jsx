import React, { useEffect, useCallback, useRef } from "react"
import "./Canvas.css"

const Canvas = ({ width, height, draw }) => {
  const canvasRef = useRef(null)

  const scale = useCallback(
    (canvas, ctx) => {
      /** We get a scale factor ratio according to the
       * device's pixel ratio, create a canvas of width
       * and height according to the ratio, and then limit
       * the width to the required size using style
       * attribute. And then we scale the context too. */
      const ratio = window.devicePixelRatio || 1

      canvas.width = width * ratio
      canvas.height = height * ratio

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.scale(ratio, ratio)
    },
    [width, height]
  )

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    scale(canvasRef.current, ctx)
    draw(ctx)
  }, [draw, scale])

  return (
    <canvas className="canvas" width={width} height={height} ref={canvasRef} />
  )
}

export default Canvas
