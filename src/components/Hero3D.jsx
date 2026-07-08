import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// A subtle three.js background for the hero: a rotating wireframe icosahedron
// wrapped in a drifting field of particles, with gentle mouse parallax.
export default function Hero3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = mount.clientWidth
    let height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
    camera.position.z = 9

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const accent = new THREE.Color('#7c3aed')
    const accent2 = new THREE.Color('#06b6d4')

    // --- Central wireframe icosahedron ---
    const geo = new THREE.IcosahedronGeometry(2.4, 1)
    const wire = new THREE.WireframeGeometry(geo)
    const lineMat = new THREE.LineBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.35,
    })
    const mesh = new THREE.LineSegments(wire, lineMat)
    scene.add(mesh)

    // Glowing vertices on the icosahedron
    const vertMat = new THREE.PointsMaterial({
      color: accent2,
      size: 0.09,
      transparent: true,
      opacity: 0.9,
    })
    const vertPoints = new THREE.Points(geo, vertMat)
    scene.add(vertPoints)

    // --- Surrounding particle field ---
    const COUNT = 700
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const r = 6 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      const c = Math.random() > 0.5 ? accent : accent2
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    const fieldGeo = new THREE.BufferGeometry()
    fieldGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    fieldGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const fieldMat = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      sizeAttenuation: true,
    })
    const field = new THREE.Points(fieldGeo, fieldMat)
    scene.add(field)

    // --- Interaction / animation ---
    const mouse = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)

    let raf = 0
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      mesh.rotation.x = t * 0.15
      mesh.rotation.y = t * 0.2
      vertPoints.rotation.copy(mesh.rotation)
      field.rotation.y = t * 0.04
      field.rotation.x = t * 0.02

      // ease camera toward mouse for parallax
      target.x += (mouse.x * 0.6 - target.x) * 0.04
      target.y += (mouse.y * 0.6 - target.y) * 0.04
      camera.position.x = target.x
      camera.position.y = -target.y
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      if (!prefersReduced) raf = requestAnimationFrame(animate)
    }
    animate()
    if (prefersReduced) renderer.render(scene, camera)

    const onResize = () => {
      width = mount.clientWidth
      height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      geo.dispose()
      wire.dispose()
      lineMat.dispose()
      vertMat.dispose()
      fieldGeo.dispose()
      fieldMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="hero3d" aria-hidden="true" />
}
