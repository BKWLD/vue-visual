export default
  props:
    preload: Boolean
    renderPreloadHeadLinks:
      type: Boolean
      default: true
  computed:
    fetchPriority: -> if @preload then 'high' else null
    preloadLinks: ->
      links = []
      return links unless @preload and @renderPreloadHeadLinks and @image
      links.push
        rel: 'preload'
        as: 'image'
        href: @image
      links