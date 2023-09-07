/* eslint-env node */
/* eslint-disable camelcase */

module.exports = {
	apps: [
		{
			name: 'client',
			args: 'dev:client',
			interpreter: 'yarn',
			script: './packages/client',
		},

		{
			name: 'ai-system',
			args: '--exec yarn generate-types:ai-system --watch ./packages/ai-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/ai-system',
		},

		{
			name: 'camera-system',
			args: '--exec yarn generate-types:camera-system --watch ./packages/camera-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/camera-system',
		},

		{
			name: 'controls-system',
			args: '--exec yarn generate-types:controls-system --watch ./packages/controls-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/controls-system',
		},

		{
			name: 'cull-system',
			args: '--exec yarn generate-types:cull-system --watch ./packages/cull-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/cull-system',
		},

		{
			name: 'entity-utilities',
			args: '--exec yarn generate-types:entity-utilities --watch ./packages/entity-utilities/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/entity-utilities',
		},

		{
			name: 'move-system',
			args: '--exec yarn generate-types:move-system --watch ./packages/move-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/move-system',
		},

		{
			name: 'physics-system',
			args: '--exec yarn generate-types:physics-system --watch ./packages/physics-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/physics-system',
		},

		{
			name: 'projectile-system',
			args: '--exec yarn generate-types:projectile-system --watch ./packages/projectile-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/projectile-system',
		},

		{
			name: 'sort-system',
			args: '--exec yarn generate-types:sort-system --watch ./packages/sort-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/sort-system',
		},

		{
			name: 'spawn-system',
			args: '--exec yarn generate-types:spawn-system --watch ./packages/spawn-system/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/spawn-system',
		},

		{
			name: 'static-data',
			args: '--exec yarn generate-types:static-data --watch ./packages/static-data/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/static-data',
		},

		{
			name: 'store',
			args: '--exec yarn generate-types:store --watch ./packages/store/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/store',
		},

		{
			name: 'utilities',
			args: '--exec yarn generate-types:utilities --watch ./packages/utilities/',
			interpreter: './node_modules/.bin/nodemon',
			script: './packages/utilities',
		},
	],
}
