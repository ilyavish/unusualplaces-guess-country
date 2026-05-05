=== UnusualPlaces Guess The Country ===
Contributors: unusualplaces
Tags: quiz, game, travel
Requires at least: 6.0
Tested up to: 6.5
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds the UnusualPlaces "Guess The Country" game through a shortcode.

== Usage ==

Add this shortcode to a WordPress page or post:

[up_guess_country]

The old inline HTML block can be removed from the page once the shortcode is added.

== Notes ==

The game stores visitor progress in localStorage, not cookies. Returning visitors on the same browser keep their unlocked places, badges, played days, and lifetime score. Existing progress from the older inline version is migrated automatically.

Images are requested from i0.wp.com at responsive sizes and the next few round images are preloaded to reduce wait time during play.
