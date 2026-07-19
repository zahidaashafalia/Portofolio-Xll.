import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Sphere, MeshDistortMaterial, Torus, Icosahedron } from '@react-three/drei'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'

function FloatingShape({ position, color, geometry, speed = 1, scale = 1 }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      ref.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })
  return (
    <Float speed={speed * 1.5} rotationIntensity={1} floatIntensity={1.5} position={position}>
      <mesh ref={ref} scale={scale}>
        {geometry === 'torus' && <torusGeometry args={[1, 0.4, 16, 50]} />}
        {geometry === 'ico' && <icosahedronGeometry args={[1, 0]} />}
        {geometry === 'box' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        {geometry === 'octa' && <octahedronGeometry args={[1, 0]} />}
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function CentralBlob() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={ref} args={[1.6, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#c026d3"
          emissive="#a21caf"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={1.5}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return arr
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={2000} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#f472b6"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ec4899" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#c026d3" />
        <pointLight position={[0, 5, 5]} intensity={0.5} color="#f472b6" />

        <CentralBlob />

        <FloatingShape position={[-3.5, 1.5, -2]} color="#ec4899" geometry="torus" speed={0.8} scale={0.6} />
        <FloatingShape position={[3.5, -1, -1]} color="#f472b6" geometry="ico" speed={1.2} scale={0.5} />
        <FloatingShape position={[3, 2, -3]} color="#c026d3" geometry="octa" speed={1} scale={0.7} />
        <FloatingShape position={[-3, -2, -2]} color="#a21caf" geometry="box" speed={0.9} scale={0.4} />
        <FloatingShape position={[0, 2.5, -4]} color="#ec4899" geometry="torus" speed={1.1} scale={0.3} />
        <FloatingShape position={[-2, -2.5, -3]} color="#f472b6" geometry="ico" speed={1.3} scale={0.35} />

        <ParticleField />

        <Stars radius={50} depth={50} count={1500} factor={4} saturation={0.5} fade speed={1} />
      </Suspense>
    </Canvas>
  )
}
