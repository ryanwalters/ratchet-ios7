# iOS7 Extension for [Ratchet](https://github.com/maker/ratchet/)

Take your Ratchet apps to the next level. An iOS7 theme for Ratchet.

## Getting Started ([Demo](//goo.gl/di0DQg))

- If you're not already familiar with Ratchet, [read the docs](http://maker.github.com/ratchet) first
- Clone the repo `git clone git@github.com:ryanwalters/ratchet-ios7.git` or just [download](https://github.com/ryanwalters/ratchet-ios7/archive/master.zip) the bundled CSS and JS
- Place `ratchet-ios7.css` after `ratchet.css` in the `HEAD` of your document
- Optionally, include `ratchet-ios7.js` for additional features, like swipe to delete

## Author

Ryan Walters

- http://ryanwalters.co
- http://github.com/ryanwalters

## Todo:

Styling:
- change shades of gray to rgba (1.0.x)
- `bar-header-secondary` autocomplete-ready overlay (1.1)
- support for "dark" theme (1.1)

Functionality:
- autocomplete (1.1)
- drag to sort (1.2)

Other:
- update this with supplemental documentation
- add fallback to calc() to improve iOS backwards compatibility (1.0.x)

Ongoing:
- add as many icons as possible

Documentation stubs:
- `.list-divider.header/.footer`
- `.list img`
- `.list .chevron.setting`
- `.list.editable` (extra div required, fix in future release)
    - `delete` event
    - optional, included in ratchet-ios7.js
- `.bar-tab.icons-only`
- easy theming with scss