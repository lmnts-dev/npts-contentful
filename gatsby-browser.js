const transitionDelay = 5000

exports.shouldUpdateScroll = () => false

exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
  window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
}
