import { useEffect, useRef, useState } from 'react'
import '@/assets/styles/_hello-fireworks.scss'

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
  reached: boolean
}

function HelloFireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fadeOut, setFadeOut] = useState(false)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const startTimeRef = useRef<number>(Date.now())
  const letterPathsRef = useRef<{ x: number; y: number }[][]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Generate letter paths
    const generateLetterPaths = () => {
      const fontSize = Math.min(window.innerWidth * 0.15, 200)
      const font = `bold ${fontSize}px Arial`
      ctx.font = font
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      const text = 'Hello'
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const letterSpacing = fontSize * 0.6
      const startX = centerX - (text.length - 1) * letterSpacing / 2

      const paths: { x: number; y: number }[][] = []

      text.split('').forEach((letter, index) => {
        const letterX = startX + index * letterSpacing
        const letterPath: { x: number; y: number }[] = []

        // Create a temporary canvas to get pixel data for the letter
        const tempCanvas = document.createElement('canvas')
        tempCanvas.width = fontSize * 1.5
        tempCanvas.height = fontSize * 1.5
        const tempCtx = tempCanvas.getContext('2d')
        if (!tempCtx) return

        tempCtx.font = font
        tempCtx.fillStyle = '#ffffff'
        tempCtx.textAlign = 'center'
        tempCtx.textBaseline = 'middle'
        tempCtx.fillText(letter, tempCanvas.width / 2, tempCanvas.height / 2)

        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
        const data = imageData.data
        const step = 4 // Sample every 4th pixel for performance

        for (let y = 0; y < tempCanvas.height; y += step) {
          for (let x = 0; x < tempCanvas.width; x += step) {
            const idx = (y * tempCanvas.width + x) * 4
            if (data[idx + 3] > 128) {
              // Pixel is part of the letter
              letterPath.push({
                x: letterX + (x - tempCanvas.width / 2),
                y: centerY + (y - tempCanvas.height / 2),
              })
            }
          }
        }

        paths.push(letterPath)
      })

      letterPathsRef.current = paths
      return paths
    }

    const paths = generateLetterPaths()

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = []
      const colors = ['#E50914', '#F40612', '#FF6B6B', '#FF8E8E', '#FFB3B3', '#FFD4D4']

      paths.forEach((path) => {
        path.forEach((point) => {
          // Random starting position (firework effect - start from center)
          const angle = Math.random() * Math.PI * 2
          const distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.3
          const startX = canvas.width / 2 + Math.cos(angle) * distance
          const startY = canvas.height / 2 + Math.sin(angle) * distance

          particles.push({
            x: startX,
            y: startY,
            targetX: point.x,
            targetY: point.y,
            vx: 0,
            vy: 0,
            size: Math.random() * 2 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: 1,
            reached: false,
          })
        })
      })

      particlesRef.current = particles
    }

    createParticles()

    // Animation loop
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTimeRef.current
      const formationDuration = 2000 // 2 seconds to form letters
      const holdDuration = 1000 // 1 second to hold
      const fadeDuration = 1000 // 1 second to fade

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (elapsed < formationDuration) {
        // Formation phase
        const progress = elapsed / formationDuration
        const easeProgress = 1 - Math.pow(1 - progress, 3) // Ease out cubic

        particlesRef.current.forEach((particle) => {
          if (!particle.reached) {
            const dx = particle.targetX - particle.x
            const dy = particle.targetY - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 2) {
              particle.reached = true
              particle.x = particle.targetX
              particle.y = particle.targetY
            } else {
              // Move towards target with easing
              particle.x += dx * 0.1 * (1 + easeProgress)
              particle.y += dy * 0.1 * (1 + easeProgress)

              // Add slight firework effect (random velocity)
              particle.vx += (Math.random() - 0.5) * 0.5
              particle.vy += (Math.random() - 0.5) * 0.5
              particle.vx *= 0.95
              particle.vy *= 0.95
              particle.x += particle.vx
              particle.y += particle.vy
            }
          } else {
            // Small jitter effect when reached
            particle.x = particle.targetX + (Math.random() - 0.5) * 0.5
            particle.y = particle.targetY + (Math.random() - 0.5) * 0.5
          }

          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })
      } else if (elapsed < formationDuration + holdDuration) {
        // Hold phase - draw all particles at target positions
        particlesRef.current.forEach((particle) => {
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.targetX, particle.targetY, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })
      } else if (elapsed < formationDuration + holdDuration + fadeDuration) {
        // Fade out phase
        const fadeProgress = (elapsed - formationDuration - holdDuration) / fadeDuration
        setFadeOut(true)

        particlesRef.current.forEach((particle) => {
          particle.opacity = 1 - fadeProgress

          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.targetX, particle.targetY, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })
      } else {
        // Animation complete
        return
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Remove component after fade completes
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        // Component will be removed by parent
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [fadeOut])

  return (
    <div className={`hello-fireworks ${fadeOut ? 'fade-out' : ''}`}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default HelloFireworks

