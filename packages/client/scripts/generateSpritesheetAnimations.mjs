/* eslint-env node */

// Module imports
import fs from 'node:fs/promises'
import path from 'node:path'





/**
 * Recursively dives into the sprite directory, looking for JSON files.
 *
 * @param {string} rootPath The root path to search from.
 * @param {string[]} spritesheetsCollection An array of paths to discovered spritesheets.
 * @returns {Promise<string[]>} The full collection of spritesheets.
 */
async function findSpritesheets(rootPath, spritesheetsCollection = []) {
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const directoryContents = await fs.readdir(rootPath)

	directoryContents
		.filter(item => (path.extname(item) === '.json'))
		.forEach(item => spritesheetsCollection.push(path.join(rootPath, item)))

	let index = 0

	while (index < directoryContents.length) {
		const item = directoryContents[index]
		const itemPath = path.join(rootPath, item)
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const itemStats = await fs.stat(itemPath)

		if (itemStats.isDirectory()) {
			await findSpritesheets(itemPath, spritesheetsCollection)
		}

		index += 1
	}

	return spritesheetsCollection
}

const spritesheetsRootPath = path.resolve(process.cwd(), 'public', 'sprites')

const spritesheetPaths = await findSpritesheets(spritesheetsRootPath)

const spritesheetsAsText = await Promise.all(spritesheetPaths.map(itemPath => {
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	return fs.readFile(itemPath, 'utf8')
}))

const spritesheets = spritesheetsAsText.map(item => {
	const parsedSpritesheet = JSON.parse(item)
	const spriteFrames = Object.keys(parsedSpritesheet.frames)

	parsedSpritesheet.animations = {}

	for (const tag of parsedSpritesheet.meta.frameTags) {
		const frames = []

		let index = tag.from

		while (index <= tag.to) {
			frames.push(spriteFrames[index])
			index += 1
		}

		if (tag.direction === 'pingpong') {
			while (index > tag.from) {
				frames.push(spriteFrames[index])
				index -= 1
			}
		}

		parsedSpritesheet.animations[tag.name] = frames
	}

	return parsedSpritesheet
})

let spritesheetIndex = 0

while (spritesheetIndex < spritesheets.length) {
	const spritesheet = spritesheets[spritesheetIndex]
	const spritesheetPath = spritesheetPaths[spritesheetIndex]

	// eslint-disable-next-line security/detect-non-literal-fs-filename
	await fs.writeFile(spritesheetPath, JSON.stringify(spritesheet), 'utf8')

	spritesheetIndex += 1
}
