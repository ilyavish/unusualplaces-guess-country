# UnusualPlaces Guess The Country

WordPress plugin version of the UnusualPlaces "Guess The Country" game.

## Usage

Install the `unusualplaces-guess-country` folder as a WordPress plugin, activate it, then add this shortcode to the page:

```text
[up_guess_country]
```

The old inline HTML block can be removed from the page after the shortcode is added.

## What changed

- Moved page-embedded HTML, CSS, and JavaScript into plugin assets.
- Added localStorage migration from the previous inline version, so existing player progress can carry over.
- Kept unlock progression cookie-free: each browser stores its first play date, unlocked place IDs, play days, badges, and lifetime correct count.
- Added responsive i0.wp.com image URLs, image `srcset`, preconnect hints, and preloading for the next few round images.
