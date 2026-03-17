export default
  props:
    preload: Boolean
    renderPreloadHeadLinks:
      type: Boolean
      default: true
  computed:
    fetchPriority: -> if @preload then 'high' else null