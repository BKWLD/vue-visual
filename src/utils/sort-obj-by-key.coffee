# Sort object by keys
export default (obj) ->
	ordered = {}
	Object.keys(obj).sort().forEach (key) => ordered[key] = obj[key]
	return ordered
