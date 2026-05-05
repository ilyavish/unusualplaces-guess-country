<?php
/**
 * Plugin Name: UnusualPlaces Guess The Country
 * Description: Adds the UnusualPlaces "Guess The Country" game through the [up_guess_country] shortcode.
 * Version: 1.0.0
 * Author: UnusualPlaces
 * Text Domain: unusualplaces-guess-country
 */

if (!defined('ABSPATH')) {
    exit;
}

define('UP_GTC_VERSION', '1.0.0');
define('UP_GTC_FILE', __FILE__);
define('UP_GTC_DIR', plugin_dir_path(__FILE__));
define('UP_GTC_URL', plugin_dir_url(__FILE__));

function up_gtc_resource_hints($urls, $relation_type) {
    if ('preconnect' === $relation_type) {
        $urls[] = [
            'href' => 'https://i0.wp.com',
            'crossorigin' => 'anonymous',
        ];
    }

    if ('dns-prefetch' === $relation_type) {
        $urls[] = '//i0.wp.com';
    }

    return $urls;
}
add_filter('wp_resource_hints', 'up_gtc_resource_hints', 10, 2);

function up_gtc_register_assets() {
    wp_register_style(
        'up-guess-country',
        UP_GTC_URL . 'assets/css/guess-country.css',
        [],
        UP_GTC_VERSION
    );

    wp_register_script(
        'up-guess-country',
        UP_GTC_URL . 'assets/js/guess-country.js',
        [],
        UP_GTC_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'up_gtc_register_assets');

function up_gtc_shortcode($atts = [], $content = null, $tag = '') {
    wp_enqueue_style('up-guess-country');
    wp_enqueue_script('up-guess-country');

    wp_localize_script(
        'up-guess-country',
        'UPGuessCountryConfig',
        [
            'roundSize' => 10,
            'unlockBatch' => 10,
            'daysPerBatch' => 3,
        ]
    );

    ob_start();
    ?>
    <section class="up-gtc" data-up-guess-country>
        <h2 class="up-gtc__title">UnusualPlaces: Guess the Country</h2>
        <img class="up-gtc__image" data-up-image alt="" decoding="async" fetchpriority="high">
        <h3 class="up-gtc__question" data-up-question>Which country is this place in?</h3>
        <div class="up-gtc__options" data-up-options></div>

        <div class="up-gtc__controls">
            <button class="up-gtc__button up-gtc__button--secondary" type="button" data-up-next>Next</button>
            <button class="up-gtc__button" type="button" data-up-restart hidden>Restart</button>
            <label class="up-gtc__auto">
                <input data-up-auto type="checkbox">
                Auto-advance after 10s
            </label>
        </div>

        <p class="up-gtc__result" data-up-result></p>
        <p class="up-gtc__score" data-up-score>Score: 0 correct, 0 wrong</p>

        <div class="up-gtc__badges" data-up-badge-strip aria-label="Travel badges" role="button" tabindex="0">
            <span class="up-gtc__badge" title="Explorer (3+ correct in a round)" data-badge="explorer">🧭</span>
            <span class="up-gtc__badge" title="Perfect Trip (no mistakes this round)" data-badge="perfect">🏆</span>
            <span class="up-gtc__badge" title="3-Day Traveler (played on 3 different days)" data-badge="streak3">🗓️</span>
            <span class="up-gtc__badge" title="Globetrotter (10 lifetime correct answers)" data-badge="finder">🧳</span>
            <span class="up-gtc__badge" title="World Voyager (100 lifetime correct answers)" data-badge="master">🌍</span>
            <span class="up-gtc__badge" title="Route Opener (unlock 20 places)" data-badge="unlock20">🗺️</span>
            <span class="up-gtc__badge" title="World Unlocked (unlock every place)" data-badge="unlockAll">🌐</span>
            <span class="up-gtc__badge" title="Jetsetter (3 answers ≤2s in a round)" data-badge="speedster">✈️</span>
        </div>

        <p class="up-gtc__unlock" data-up-unlock></p>
        <div class="up-gtc__recap" data-up-recap></div>

        <div class="up-gtc__drawer" data-up-badge-drawer hidden>
            <div class="up-gtc__drawer-panel" role="dialog" aria-modal="true" aria-labelledby="up-gtc-badge-title">
                <div class="up-gtc__drawer-header">
                    <h3 id="up-gtc-badge-title">Your Travel Badges</h3>
                    <button class="up-gtc__button up-gtc__button--dark" type="button" data-up-badge-close>Close</button>
                </div>
                <div data-up-badge-list></div>
            </div>
        </div>

        <div class="up-gtc__toast" data-up-toast aria-live="polite"></div>
    </section>
    <?php
    return ob_get_clean();
}
add_shortcode('up_guess_country', 'up_gtc_shortcode');
