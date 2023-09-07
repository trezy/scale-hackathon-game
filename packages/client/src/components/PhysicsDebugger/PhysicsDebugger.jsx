// Module imports
import {
	useEffect,
	useMemo,
	useState,
} from 'react'
import { Color } from '@pixi/color'
import { store } from '@space-game/store'
import { useStore } from 'statery'





// Local imports
import { VertexRenderer } from './VertexRenderer.jsx'





/**
 * Renders the game.
 *
 * @component
 */
export function PhysicsDebugger() {
	const { physicsWorld } = useStore(store)

	const [update, setUpdate] = useState({})

	useEffect(() => {
		let shouldContinue = true

		// eslint-disable-next-line jsdoc/require-jsdoc
		const forceUpdate = () => {
			if (shouldContinue) {
				setUpdate({})
				requestAnimationFrame(forceUpdate)
			}
		}

		forceUpdate()

		return () => {
			shouldContinue = false
		}
	}, [setUpdate])

	return useMemo(() => {
		const buffers = physicsWorld.debugRender()
		const allVertices = buffers.vertices
		const allColors = buffers.colors

		const vertexRenderers = []

		let vertexIndex = 0

		while (vertexIndex < allVertices.length) {
			const vertexBaseIndex = vertexIndex * 4
			const colorBaseIndex = vertexBaseIndex * 2

			if (allColors[colorBaseIndex]) {
				vertexRenderers.push((
					<VertexRenderer
						key={vertexBaseIndex}
						color={new Color({
							r: allColors[vertexBaseIndex] * 255,
							g: allColors[vertexBaseIndex + 1] * 255,
							b: allColors[vertexBaseIndex + 2] * 255,
							a: allColors[vertexBaseIndex + 3] * 255,
						})}
						vertexPoint0={allVertices[vertexBaseIndex]}
						vertexPoint1={allVertices[vertexBaseIndex + 1]}
						vertexPoint2={allVertices[vertexBaseIndex + 2]}
						vertexPoint3={allVertices[vertexBaseIndex + 3]} />
				))
			}

			vertexIndex += 1
		}

		return vertexRenderers
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		physicsWorld,
		update,
	])
}
