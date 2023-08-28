import { GuestContext } from '@loopholelabs/scale-signature-http'

/**
 * Moves entities based on their velocity.
 *
 * @param {GuestContext} ctx Context passed in from the host.
 */
export function moveSystem(ctx: GuestContext) {
	ctx.Response.SetBody('Hello, World!')
}
