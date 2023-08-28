import { GuestContext } from '@loopholelabs/scale-signature-http'

/**
 * Determines if new entities should be spawned and, if so, creates them.
 *
 * @param {GuestContext} ctx Context passed in from the host.
 */
export function spawnSystem(ctx: GuestContext) {
	ctx.Response.SetBody('Hello, World!')
}
