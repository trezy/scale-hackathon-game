import { GuestContext } from '@loopholelabs/scale-signature-http'

/**
 * Moves the camera based on player character's position.
 *
 * @param {GuestContext} ctx Context passed in from the host.
 */
export function cameraSystem(ctx: GuestContext) {
	ctx.Response.SetBody('Hello, World!')
}
