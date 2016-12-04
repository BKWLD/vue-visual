# Sort object by keys
module.exports = (obj) ->
	ordered = {}
	Object.keys(obj).sort().forEach (key) => ordered[key] = obj[key]
	return ordered
