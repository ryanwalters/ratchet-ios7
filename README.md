# iOS7 Extension for [Ratchet](https://github.com/maker/ratchet/)

Take your Ratchet apps to the next level. An iOS7 theme for Ratchet. (requires iOS 6.1.4+)

## Getting Started

- If you're not already familiar with Ratchet, [read the docs](http://maker.github.com/ratchet) first
- Clone the repo `git clone git@github.com:ryanwalters/ratchet-ios7.git`
- Place `ratchet-ios7.css` after `ratchet.css` in the `HEAD` of your document
- Optionally, include `ratchet-ios7.js` for additional features, like swipe to delete
- Check out the [demo](//goo.gl/di0DQg)

### Authors

Ryan Walters

- http://ryanwalters.co
- http://github.com/ryanwalters

### Todo:

Styling:
- `bar-header-secondary` autocomplete-ready overlay
- make easily themable

Functionality:
- autocomplete
- drag to sort

Other:
- update this with supplemental documentation
- add fallback to calc() to improve iOS backwards compatibility

Ongoing:
- add as many icons as possible

Documentation stubs:
- `.list-divider.header/.footer`
- `.list img`
- `.list .chevron.setting`
- `.list.editable` (extra div required, fix in future release)
    - `delete` event
    - optional, included in ratchet-ios7.js