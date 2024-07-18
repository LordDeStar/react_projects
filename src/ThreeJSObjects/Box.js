import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Box = (props) => {
	const [focused, setFocus] = useState(false)
	const [stone] = useLoader(TextureLoader, ['stone.jfif'])
	const ref = useRef()
	let scale = !focused ? 1 : 3
	useFrame((state, delta) => {
		if (focused) {
			ref.current.rotation.x += 0.1
		}
	})

	return (
		<mesh {...props} onClick={() => setFocus(!focused)} ref={ref}>
			<boxGeometry args={[scale, scale, scale]} />
			<meshStandardMaterial map={stone} />
		</mesh>
	)
}

export default Box
