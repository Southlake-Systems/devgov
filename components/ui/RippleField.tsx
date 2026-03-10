"use client"
import { useEffect, useRef } from "react"

export default function RippleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const spacing = 22
    let time = 0

    function draw() {
      ctx.clearRect(0,0,width,height)

      const centerX = width/2
      const centerY = height/2

      ctx.strokeStyle = "rgba(255,255,255,0.15)"
      ctx.lineWidth = 1

      for(let y=0; y<height; y+=spacing){

        ctx.beginPath()

        for(let x=0; x<width; x+=8){

          const dx = x-centerX
          const dy = y-centerY
          const dist = Math.sqrt(dx*dx+dy*dy)

          const wave = Math.sin(dist*0.04 - time) * 10

          const newY = y + wave

          if(x === 0){
            ctx.moveTo(x,newY)
          } else {
            ctx.lineTo(x,newY)
          }
        }

        ctx.stroke()
      }

      time += 0.06
      requestAnimationFrame(draw)
    }

    draw()

    window.addEventListener("resize",()=>{
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    })

  },[])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
    />
  )
}