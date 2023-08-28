import { GuestContext } from '@loopholelabs/scale-signature-http'

/**
 * Handles collisions and sensors in the game world.
 *
 * @param {GuestContext} ctx Context passed in from the host.
 */
export function physicsSystem(ctx: GuestContext) {
	ctx.Response.SetBody('Hello, World!')
}
