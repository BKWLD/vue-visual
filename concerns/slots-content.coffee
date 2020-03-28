###
Logic related to rendering slotted content
###
export default

	props:
		align:
			type: String
			default: 'center middle'

	computed:

		# Has slotted content
		filledSlot: -> !!@$slots.default

		# Make container alignment classes
		slotsContentContainerClasses: ->
			return unless @filledSlot
			"vv-align-#{@horizontalAlign}" if @horizontalAlign

		# Make classes that go on the slot
		slotAlignClasses: -> 
			return unless @filledSlot
			"vv-align-#{@verticalAlign}" if @verticalAlign

		# Make classes that go on the shim
		shimAlignClasses: -> @slotAlignClasses

		# Get the vertical align rule
		verticalAlign: -> @align.match(/bottom|middle|top/)?[0]

		# Get the horizontal align rule
		horizontalAlign: -> @align.match(/left|center|right/)?[0]
