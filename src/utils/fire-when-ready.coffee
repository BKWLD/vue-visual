# Fire a callback now, when document is interactive, and when complete
module.exports = (cb) ->
	cb()

	# If the document is still loading, add a listener for whent that changes
	if document?.readyState == 'loading'
		document.addEventListener 'readystatechange', handler = ->
			cb()

			# All content loaded, so done
			if document.readyState == 'complete'
				document.removeEventListener 'readystatechange', handler
