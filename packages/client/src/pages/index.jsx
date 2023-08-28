// Local imports
import dynamic from 'next/dynamic'





const GameComponent = dynamic(() => {
	return import('../components/Game/Game.jsx')
		.then(mod => mod.Game)
}, {
  // eslint-disable-next-line jsdoc/require-jsdoc
  loading: () => <p>{'Loading...'}</p>,
})





/**
 * The home page.
 *
 * @component
 */
export default function HomePage() {
	return (
		<GameComponent />
	)
}
