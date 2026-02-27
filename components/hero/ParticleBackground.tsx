'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Particles
    const count = 1000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorOptions = [
      new THREE.Color('#3b82f6'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#60a5fa'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3]     = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      particles.rotation.y += 0.0005
      particles.rotation.x += 0.0002
      camera.position.x += (mouseX - camera.position.x) * 0.02
      camera.position.y += (-mouseY - camera.position.y) * 0.02
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />
}
