/**
 * Handles AI decision making.
 *
 * @param {object} store Statery store with the game's state.
 */
export function aiSystem(store) {
	store.set(previousState => {
		const {
			entities,
			viewport,
		} = previousState

		return {
			entities: entities.map(entity => {
				if (entity.isAI) {
					if (!entity.action) {
						if (!entity.queue.length) {
							entity.queue.push({
								destination: {
									x: Math.max(0, Math.min(viewport.width - entity.size.width, Math.floor((entity.position.x + (Math.random() * 100)) * (Math.random() > 0.5 ? 1 : -1)))),
									y: Math.max(0, Math.min(viewport.height - entity.size.height, Math.floor((entity.position.y + (Math.random() * 100)) * (Math.random() > 0.5 ? 1 : -1)))),
								},
								type: 'move to',
							})
						}

						entity.action = entity.queue.shift()
					}

					if (entity.action) {
						switch (entity.action.type) {
							case 'move to': {
								const distanceToX = Math.abs(entity.position.x - entity.action.destination.x)
								const distanceToY = Math.abs(entity.position.y - entity.action.destination.y)

								if (distanceToX < 1) {
									entity.position.x = entity.action.destination.x
									entity.velocity.x = 0
								} else if (entity.position.x < entity.action.destination.x) {
									entity.velocity.x = 1
								} else if (entity.position.x > entity.action.destination.x) {
									entity.velocity.x = -1
								} else {
									entity.velocity.x = 0
								}

								if (distanceToY < 1) {
									entity.position.y = entity.action.destination.y
									entity.velocity.y = 0
								} else if (entity.position.y < entity.action.destination.y) {
									entity.velocity.y = 1
								} else if (entity.position.y > entity.action.destination.y) {
									entity.velocity.y = -1
								} else {
									entity.velocity.y = 0
								}

								if (distanceToX < 1 && distanceToY < 1) {
									entity.action = null
								}
								break
							}

							default:
						}
					}
				}

				return entity
			}),
		}
	})
}
