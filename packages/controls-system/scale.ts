import { GuestContext } from '@loopholelabs/scale-signature-http'

/**
 * Captures and parses controls state.
 *
 * @param {GuestContext} ctx Context passed in from the host.
 */
export function controlsSystem(ctx: GuestContext) {
	ctx.Response.SetBody('Hello, World!')
}
