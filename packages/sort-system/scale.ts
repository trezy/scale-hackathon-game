import { GuestContext } from '@loopholelabs/scale-signature-http'

/**
 * Handles collisions and sensors in the game world.
 *
 * @param {GuestContext} ctx Context passed in from the host.
 */
export function aiSystem(ctx: GuestContext) {
	ctx.Response.SetBody('Hello, World!')
}
