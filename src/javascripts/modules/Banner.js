import $ from 'jquery'

const Banner = (($) => {
  const NAME = 'banner'
  const DATA_KEY = `bs.${NAME}`
  const EVENT_KEY = `.${DATA_KEY}`
  const DATA_API_KEY = '.data-api'
  const Event = {
    LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
    CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`
  }
  const Default = {
  }
  const ClassName = { // eslint-disable-line
  }
  const Selector = {
    DATA_MODULE: `[data-module="${NAME}"]`
  }

  class Banner {
    constructor (element, config) {
      this._element = $(element)
      this._config = this._getConfig(config)
      this._addEventListener()
      this.scrolldown()
    }
    // public api
    static get Default () {
      return Default
    }
    scrolldown(){
      $("#scrolldown").click(function(){
        console.log("lkbaBLDA")
        $("html, body").animate({
          scrollTop: $(".mod-banner").outerHeight()
        },200)
      })
    }
    // private api
    _addEventListener () {

    }
    _getConfig (config) {
      config = $.extend({}, Default, config)
      return config
    }
    static _jQueryInterface (config) {
      return this.each(function () {
        const $element = $(this)
        const _config = $.extend(
          {},
          Default,
          $element.data(),
          typeof config === 'object' && config
        )
        let data = $element.data(DATA_KEY)
        if (!data) {
          data = new Banner(this, _config)
          $element.data(DATA_KEY, data)
        }
      })
    }
  }

  /**
   * Data Api implement
   */
  $(window).on(Event.LOAD_DATA_API, () => {
    Banner._jQueryInterface.call($(Selector.DATA_MODULE))
  })

  /**
   * jQuery
   */
  $.fn[NAME] = Banner._jQueryInterface
  $.fn[NAME].Constructor = Banner

  return Banner
})($)

export default Banner
