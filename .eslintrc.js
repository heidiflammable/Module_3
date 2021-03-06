module.exports = {
	"env": {
		"node": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"indent": [
			"error",
			2
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"comma-dangle": [
			"error",
			"never",
		],
		"no-console": [
			"error",
		],
		"max-len": [
			"error",
			80, 2,
			{"ignoreUrls": true}
		],
		"curly": [
			"error",
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"no-trailing-spaces": [
			"error",
		],
		"eqeqeq": [
			"error",
			"allow-null"
		],
		"newline-before-return": [
			"error"
		],
		"no-undef": [
			"error"
		],
		"no-unused-vars": [
			"error"
		],
		"strict": [
			"error",
			"global"
		]
	}
};
