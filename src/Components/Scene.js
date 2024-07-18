import { Canvas } from '@react-three/fiber'
import Box from '../ThreeJSObjects/Box'
import { Suspense } from 'react'
const Test = () => {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 0, 5] }}>
				<ambientLight intensity={1} />
				<pointLight position={[0, 1, 0]} />
				<Box position={[-4, 1, 0]} />
				<Box position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]} />
				<Box position={[4, -1, 0]} />
			</Canvas>
		</Suspense>
	)
}

export default Test
