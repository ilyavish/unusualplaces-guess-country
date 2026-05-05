(function () {
  "use strict";

  const RAW_PLACES = [
    { id: "shoshone", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2025/06/Depositphotos_90064868_L.jpg", title: "Shoshone Falls, Idaho", link: "https://unusualplaces.org/shoshone-falls/" },
    { id: "wadi-rum", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2025/05/Depositphotos_51027845_L.jpg", title: "Wadi Rum, Jordan", link: "https://unusualplaces.org/wadi-rum/" },
    { id: "moab", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2025/04/Depositphotos_407011624_L.jpg", title: "Moab, Utah", link: "https://unusualplaces.org/explore-moabs-serene-wonders/" },
    { id: "leitisvatn", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2012/08/Depositphotos_381387500_S.jpg", title: "Leitisvatn, Faroe Islands", link: "https://unusualplaces.org/leitisvatn-lake-faroe-islands/" },
    { id: "ginnie-springs", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2020/08/ginniesprings.jpg", title: "Ginnie Springs, Florida", link: "https://unusualplaces.org/crystal-clear-waters-at-ginnie-springs-florida/" },
    { id: "crowley-columns", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/12/Depositphotos_664262752_L.jpg", title: "Crowley Lake Columns, California", link: "https://unusualplaces.org/crowley-lake-columns/" },
    { id: "bryce", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/12/Depositphotos_205254806_L.jpg", title: "Bryce Canyon, Utah", link: "https://unusualplaces.org/bryce-canyon/" },
    { id: "glade-creek", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/11/Depositphotos_223639766_L.jpg", title: "Glade Creek Grist Mill, West Virginia", link: "https://unusualplaces.org/glade-creek-grist-mill/" },
    { id: "crazy-house", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/11/Depositphotos_135679886_L.jpg", title: "Crazy House, Vietnam", link: "https://unusualplaces.org/crazy-house/" },
    { id: "tahquamenon", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/10/Depositphotos_431314926_L.jpg", title: "Tahquamenon Falls, Michigan", link: "https://unusualplaces.org/tahquamenon-falls/" },
    { id: "turnip-rock", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/10/turnip_rock.jpeg", title: "Turnip Rock, Michigan", link: "https://unusualplaces.org/turnip-rock/" },
    { id: "visovac", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/09/Depositphotos_278452908_L.jpg", title: "Visovac Monastery, Croatia", link: "https://unusualplaces.org/visovac-monastery/" },
    { id: "boldt-castle", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/09/Depositphotos_50679419_L.jpg", title: "Boldt Castle, New York", link: "https://unusualplaces.org/boldt-castle/" },
    { id: "poulnabrone", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/09/Depositphotos_38705619_L.jpg", title: "Poulnabrone Dolmen, Ireland", link: "https://unusualplaces.org/poulnabrone-dolmen/" },
    { id: "monument-valley", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/08/Depositphotos_44522229_L.jpg", title: "Monument Valley, Utah", link: "https://unusualplaces.org/monument-valley/" },
    { id: "stiltsville", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/07/Depositphotos_284082950_l-2015.jpg", title: "Stiltsville, Florida", link: "https://unusualplaces.org/stiltsville/" },
    { id: "horseshoe-bend", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/07/Depositphotos_164825202_L.jpg", title: "Horseshoe Bend, Arizona", link: "https://unusualplaces.org/horseshoe-bend-arizona/" },
    { id: "galesnjak", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/06/Depositphotos_215000326_L.jpg", title: "Galesnjak (Heart-Shaped Island), Croatia", link: "https://unusualplaces.org/visit-a-romantic-heart-shaped-island-in-croatia/" },
    { id: "futuro-royse", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/05/26879238739_be3b82f3d0_k.jpg", title: "Abandoned Royse City Futuro House", link: "https://unusualplaces.org/royse-city-futuro-house/" },
    { id: "cube-rotterdam", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/05/Depositphotos_201293090_L.jpg", title: "Cube Houses, Rotterdam", link: "https://unusualplaces.org/visit-the-cube-houses-of-rotterdam/" },
    { id: "tanah-lot", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/04/Depositphotos_136472316_L.jpg", title: "Pura Tanah Lot, Bali", link: "https://unusualplaces.org/pura-tanah-lot/" },
    { id: "haines-shoe", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/04/27732788798_8c10589e2f_k.jpg", title: "Haines Shoe House, Pennsylvania", link: "https://unusualplaces.org/haines-shoe-house-step-into-history-in-a-boot-shaped-house/" },
    { id: "drombeg", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/04/Depositphotos_323120924_L.jpg", title: "Drombeg Stone Circle, Ireland" },
    { id: "jodhpur", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/04/Depositphotos_13246895_L.jpg", title: "Jodhpur, India", link: "https://unusualplaces.org/jodhpur-indias-sunny-blue-city/" },
    { id: "aescher", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/03/Depositphotos_294566900_L.jpg", title: "Aescher, Switzerland", link: "https://unusualplaces.org/aescher-historic-swiss-hermitage-turned-alpine-inn-adventure/" },
    { id: "marble-caves", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/03/Depositphotos_186069892_L.jpg", title: "Marble Caves, Chile", link: "https://unusualplaces.org/explore-stunning-marble-caves-in-chile/" },
    { id: "painted-hills", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/02/Depositphotos_189848504_L.jpg", title: "Painted Hills, Oregon", link: "https://unusualplaces.org/painted-hills-oregon/" },
    { id: "meoto-iwa", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/01/Depositphotos_240760508_L.jpg", title: "Meoto Iwa, Japan", link: "https://unusualplaces.org/meoto-iwa/" },
    { id: "ss-ayrfield", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2024/01/Depositphotos_132118070_L.jpg", title: "Floating Forest of Homebush Bay (SS Ayrfield), Australia", link: "https://unusualplaces.org/floating-forest-ss-ayrfield/" },
    { id: "sverd", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/12/Depositphotos_6877891_L.jpg", title: "Sverd i Fjell, Norway", link: "https://unusualplaces.org/sverd-i-fjell-norway/" },
    { id: "casa-terracota", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/11/14573661676_eba93c31d1_k.jpg", title: "Casa Terracota (House of Clay)", link: "https://unusualplaces.org/casa-terracota/" },
    { id: "split-apple", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/11/Depositphotos_156936082_L.jpg", title: "Split Apple Rock, New Zealand", link: "https://unusualplaces.org/split-apple-rock-new-zealand/" },
    { id: "catedrales", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/11/Depositphotos_216351222_L.jpg", title: "Playa de las Catedrales, Spain", link: "https://unusualplaces.org/playa-de-las-catedrales/" },
    { id: "hopewell", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/09/Depositphotos_116182026_S-jpg.webp", title: "Hopewell Rocks, Canada", link: "https://unusualplaces.org/hopewell-rocks/" },
    { id: "ellidaey", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/04/lonliest-house.jpg", title: "Ellidaey Island Lodge, Iceland", link: "https://unusualplaces.org/ellidaey-island-lodge-a-stay-at-the-worlds-loneliest-house/" },
    { id: "st-george-ethiopia", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2020/12/1hwkb7e1ss261.jpg", title: "Church of Saint George, Ethiopia", link: "https://unusualplaces.org/the-church-of-saint-george-a-holy-rock-hewn-ethiopian-landmark/" },
    { id: "reflection-canyon", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/08/Depositphotos_185489882_S-jpg.webp", title: "Reflection Canyon, Utah", link: "https://unusualplaces.org/reflection-canyon/" },
    { id: "bisti", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/07/Depositphotos_89006916_S-jpg.webp", title: "Bisti Badlands, New Mexico", link: "https://unusualplaces.org/farmington-new-mexico/" },
    { id: "helen-ga", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2023/03/Depositphotos_303172698_S.jpg", title: "Helen, Georgia (USA)", link: "https://unusualplaces.org/helen-georgia/" },
    { id: "chocolate-hills", img: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2019/05/chocolatehills.jpg", title: "Chocolate Hills, Bohol (Philippines)", link: "https://unusualplaces.org/the-magnificent-chocolate-hills-of-bohol-in-the-philippines/" }
  ];

  const COUNTRY_MATCHERS = [
    [/Helen, Georgia \(USA\)|\bGeorgia \(USA\)\b|Idaho|Utah|Michigan|West Virginia|Arizona|Florida|California|New York|Pennsylvania|Oregon|New Mexico|Royse City|Texas|Homebush/i, "United States"],
    [/Jordan/i, "Jordan"], [/Faroe Islands/i, "Faroe Islands"], [/Vietnam|Crazy House/i, "Vietnam"],
    [/Croatia|Galesnjak/i, "Croatia"], [/Ireland|Drombeg|Poulnabrone/i, "Ireland"],
    [/Netherlands|Rotterdam/i, "Netherlands"], [/Bali|Indonesia/i, "Indonesia"],
    [/India|Jodhpur/i, "India"], [/Switzerland|Aescher/i, "Switzerland"], [/Chile/i, "Chile"],
    [/Japan|Meoto Iwa/i, "Japan"], [/Australia|Homebush Bay|SS Ayrfield/i, "Australia"],
    [/Norway|Sverd/i, "Norway"], [/Spain|Catedrales/i, "Spain"], [/Canada|Hopewell/i, "Canada"],
    [/Iceland|Ellidaey|Ell[ií]ðaey/i, "Iceland"], [/Ethiopia/i, "Ethiopia"], [/New Zealand/i, "New Zealand"],
    [/Casa Terracota/i, "Colombia"], [/Philippines|Bohol|Chocolate Hills/i, "Philippines"]
  ];

  const COUNTRY_CHOICES = [
    "United States", "Canada", "Mexico", "Brazil", "Argentina", "Peru", "Chile", "Colombia",
    "Iceland", "Norway", "Sweden", "Finland", "Faroe Islands", "United Kingdom", "Ireland", "Spain", "Portugal",
    "France", "Germany", "Italy", "Greece", "Croatia", "Montenegro", "Slovenia", "Albania",
    "Netherlands", "Belgium", "Switzerland", "Austria", "Czechia", "Poland", "Hungary",
    "Turkey", "Jordan", "Israel", "United Arab Emirates", "Saudi Arabia", "Morocco", "Egypt", "Ethiopia",
    "India", "Sri Lanka", "Nepal", "Thailand", "Vietnam", "Malaysia", "Indonesia", "Philippines", "Japan", "South Korea",
    "Australia", "New Zealand", "South Africa", "Kenya", "Tanzania"
  ];

  const STORE_KEY = "up_guess_country_v2";
  const OLD_KEYS = {
    start: "up_start_date",
    unlocked: "up_unlocked_ids",
    days: "up_play_dates",
    lifetimeCorrect: "up_lifetime_correct",
    badges: "up_badges_v1"
  };

  const BADGE_DEFS = {
    explorer: { icon: "🧭", name: "Explorer", desc: "Get 3+ correct in a single round" },
    perfect: { icon: "🏆", name: "Perfect Trip", desc: "Finish a round with 0 wrong answers" },
    streak3: { icon: "🗓️", name: "3-Day Traveler", desc: "Play on 3 different days", progress: state => ({ cur: state.playDates.length, max: 3 }) },
    finder: { icon: "🧳", name: "Globetrotter", desc: "Reach 10 lifetime correct answers", progress: state => ({ cur: state.lifetimeCorrect, max: 10 }) },
    master: { icon: "🌍", name: "World Voyager", desc: "Reach 100 lifetime correct answers", progress: state => ({ cur: state.lifetimeCorrect, max: 100 }) },
    unlock20: { icon: "🗺️", name: "Route Opener", desc: "Unlock 20 places", progress: state => ({ cur: state.unlockedIds.length, max: 20 }) },
    unlockAll: { icon: "🌐", name: "World Unlocked", desc: "Unlock every place", progress: state => ({ cur: state.unlockedIds.length, max: PLACES.length }) },
    speedster: { icon: "✈️", name: "Jetsetter", desc: "Answer 3 questions in 2 seconds or less in one round" }
  };

  const config = Object.assign({
    roundSize: 10,
    unlockBatch: 10,
    daysPerBatch: 3
  }, window.UPGuessCountryConfig || {});

  const PLACES = RAW_PLACES.map((place, index) => {
    const country = inferCountry(place.title);
    return {
      id: place.id || "p" + index,
      title: place.title,
      img: optimizedImageUrl(place.img, 1200),
      srcset: buildSrcset(place.img),
      link: place.link || "",
      country,
      options: shuffle([country].concat(distractors(country)))
    };
  });

  function initGame(root) {
    const els = {
      img: root.querySelector("[data-up-image]"),
      question: root.querySelector("[data-up-question]"),
      options: root.querySelector("[data-up-options]"),
      result: root.querySelector("[data-up-result]"),
      score: root.querySelector("[data-up-score]"),
      next: root.querySelector("[data-up-next]"),
      restart: root.querySelector("[data-up-restart]"),
      auto: root.querySelector("[data-up-auto]"),
      recap: root.querySelector("[data-up-recap]"),
      unlock: root.querySelector("[data-up-unlock]"),
      toast: root.querySelector("[data-up-toast]"),
      badgeStrip: root.querySelector("[data-up-badge-strip]"),
      badgeDrawer: root.querySelector("[data-up-badge-drawer]"),
      badgeClose: root.querySelector("[data-up-badge-close]"),
      badgeList: root.querySelector("[data-up-badge-list]")
    };

    let store = loadStore();
    let index = 0;
    let correct = 0;
    let wrong = 0;
    let answered = false;
    let timer = null;
    let roundHistory = [];
    let roundSet = [];
    let speedCount = 0;
    let questionShownAt = 0;

    function save() {
      saveStore(store);
    }

    function clearAutoTimer() {
      if (timer) {
        window.clearTimeout(timer);
        timer = null;
      }
    }

    function showToast(message) {
      els.toast.textContent = message;
      els.toast.style.opacity = "1";
      window.setTimeout(() => {
        els.toast.style.opacity = "0";
      }, 1600);
    }

    function targetUnlockedCount() {
      const elapsedDays = Math.max(0, daysBetween(store.firstSeen, todayKey()));
      const batches = 1 + Math.floor(elapsedDays / Number(config.daysPerBatch || 3));
      return Math.min(PLACES.length, Math.max(10, batches * Number(config.unlockBatch || 10)));
    }

    function growUnlockedPoolToTarget() {
      const validIds = new Set(PLACES.map(place => place.id));
      store.unlockedIds = store.unlockedIds.filter(id => validIds.has(id));

      if (!store.unlockedIds.length) {
        store.unlockedIds = shuffle(PLACES.map(place => place.id)).slice(0, Math.min(Number(config.unlockBatch || 10), PLACES.length));
      }

      const target = targetUnlockedCount();
      if (store.unlockedIds.length < target) {
        const remaining = PLACES.map(place => place.id).filter(id => !store.unlockedIds.includes(id));
        const need = Math.min(target - store.unlockedIds.length, remaining.length);
        store.unlockedIds = store.unlockedIds.concat(shuffle(remaining).slice(0, need));
      }

      if (store.unlockedIds.length >= 20) {
        grantBadge("unlock20");
      }
      if (store.unlockedIds.length >= PLACES.length) {
        grantBadge("unlockAll");
      }
      save();
    }

    function unlockedPlaces() {
      growUnlockedPoolToTarget();
      const byId = new Map(PLACES.map(place => [place.id, place]));
      return store.unlockedIds.map(id => byId.get(id)).filter(Boolean);
    }

    function recordTodayPlayed() {
      const today = todayKey();
      if (!store.playDates.includes(today)) {
        store.playDates.push(today);
        store.playDates.sort();
        save();
      }
      if (store.playDates.length >= 3) {
        grantBadge("streak3");
      }
    }

    function addLifetimeCorrect(amount) {
      store.lifetimeCorrect += amount;
      if (store.lifetimeCorrect >= 10) {
        grantBadge("finder");
      }
      if (store.lifetimeCorrect >= 100) {
        grantBadge("master");
      }
      save();
    }

    function grantBadge(id) {
      if (!BADGE_DEFS[id] || store.badges[id]) {
        return;
      }
      store.badges[id] = Date.now();
      save();
      syncBadgeStrip();
      renderBadgeDrawer();
      showToast("Badge earned: " + BADGE_DEFS[id].name + " " + BADGE_DEFS[id].icon);

      const badge = els.badgeStrip.querySelector('[data-badge="' + id + '"]');
      if (badge) {
        badge.classList.add("is-pop");
        window.setTimeout(() => badge.classList.remove("is-pop"), 350);
      }
    }

    function syncBadgeStrip() {
      Object.keys(BADGE_DEFS).forEach(id => {
        const badge = els.badgeStrip.querySelector('[data-badge="' + id + '"]');
        if (badge) {
          badge.classList.toggle("is-earned", Boolean(store.badges[id]));
        }
      });
    }

    function renderBadgeDrawer() {
      els.badgeList.replaceChildren();

      Object.entries(BADGE_DEFS).forEach(([id, def]) => {
        const earnedAt = store.badges[id] ? new Date(store.badges[id]) : null;
        const row = document.createElement("div");
        row.className = "up-gtc__badge-row";

        const icon = document.createElement("div");
        icon.className = "up-gtc__badge-icon";
        icon.style.opacity = earnedAt ? "1" : ".3";
        icon.textContent = def.icon;

        const body = document.createElement("div");
        body.style.flex = "1";

        const name = document.createElement("div");
        name.style.fontWeight = "700";
        name.textContent = def.name;
        if (earnedAt) {
          const earned = document.createElement("span");
          earned.style.color = "#10b981";
          earned.style.fontWeight = "400";
          earned.style.marginLeft = "6px";
          earned.textContent = "(earned)";
          name.appendChild(earned);
        }

        const desc = document.createElement("div");
        desc.style.color = "#666";
        desc.style.fontSize = ".95rem";
        desc.textContent = def.desc;

        body.append(name, desc);

        if (def.progress) {
          const progress = def.progress(store);
          const pct = Math.min(100, Math.round((progress.cur / progress.max) * 100));
          const bar = document.createElement("div");
          bar.className = "up-gtc__progress";
          bar.title = progress.cur + "/" + progress.max;

          const fill = document.createElement("span");
          fill.style.width = pct + "%";
          bar.appendChild(fill);

          const count = document.createElement("div");
          count.style.color = "#666";
          count.style.fontSize = ".85rem";
          count.style.marginTop = "4px";
          count.textContent = progress.cur + " / " + progress.max;

          body.append(bar, count);
        }

        if (earnedAt) {
          const earned = document.createElement("div");
          earned.style.color = "#888";
          earned.style.fontSize = ".8rem";
          earned.style.marginTop = "4px";
          earned.textContent = "Earned " + earnedAt.toLocaleDateString() + " " + earnedAt.toLocaleTimeString();
          body.appendChild(earned);
        }

        row.append(icon, body);
        els.badgeList.appendChild(row);
      });
    }

    function newRoundSet() {
      const pool = unlockedPlaces();
      return shuffle(pool).slice(0, Math.min(Number(config.roundSize || 10), pool.length));
    }

    function showUnlockInfo() {
      const target = targetUnlockedCount();
      const total = PLACES.length;
      const diff = Math.max(0, daysBetween(store.firstSeen, todayKey()));
      const passedInBatch = diff % Number(config.daysPerBatch || 3);
      const daysToNext = target < total ? (passedInBatch === 0 ? Number(config.daysPerBatch || 3) : Number(config.daysPerBatch || 3) - passedInBatch) : 0;

      els.unlock.textContent = target < total
        ? "Unlocked places available: " + store.unlockedIds.length + "/" + total + ". Next unlock in " + daysToNext + " day" + (daysToNext === 1 ? "." : "s.")
        : "Unlocked places available: " + store.unlockedIds.length + "/" + total + ". All places unlocked!";
    }

    function buildRecap() {
      els.recap.replaceChildren();
      if (!roundHistory.length) {
        return;
      }

      const heading = document.createElement("h4");
      heading.textContent = "Your round recap";

      const wrap = document.createElement("div");
      wrap.className = "up-gtc__recap-table-wrap";
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const headRow = document.createElement("tr");
      ["#", "Place", "You chose", "Country", "Result", "Link"].forEach(label => {
        const th = document.createElement("th");
        th.textContent = label;
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);

      const tbody = document.createElement("tbody");
      roundHistory.forEach((item, itemIndex) => {
        const tr = document.createElement("tr");
        [String(itemIndex + 1), item.title, item.chosen, item.country, item.correct ? "Correct" : "Wrong"].forEach(value => {
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        });

        const linkCell = document.createElement("td");
        if (item.link) {
          const link = document.createElement("a");
          link.href = item.link;
          link.target = "_blank";
          link.rel = "noopener nofollow";
          link.textContent = "Learn";
          linkCell.appendChild(link);
        }
        tr.appendChild(linkCell);
        tbody.appendChild(tr);
      });

      table.append(thead, tbody);
      wrap.appendChild(table);
      els.recap.append(heading, wrap);
    }

    function showPlace() {
      clearAutoTimer();
      answered = false;
      els.result.textContent = "";
      els.recap.replaceChildren();
      questionShownAt = performance.now();

      const place = roundSet[index];
      if (!place) {
        endGame();
        return;
      }

      els.img.src = place.img;
      els.img.srcset = place.srcset;
      els.img.sizes = "(max-width: 900px) calc(100vw - 28px), 860px";
      els.img.alt = place.title;
      els.img.style.display = "block";
      els.question.textContent = "Which country is this place in?";

      els.options.replaceChildren();
      shuffle(place.options).forEach(option => {
        const button = document.createElement("button");
        button.className = "up-gtc__option";
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option, button, place));
        els.options.appendChild(button);
      });

      els.next.disabled = false;
      els.restart.hidden = true;
      preloadUpcomingImages();
    }

    function checkAnswer(choice, button, place) {
      if (answered) {
        return;
      }

      answered = true;
      clearAutoTimer();

      const elapsed = (performance.now() - questionShownAt) / 1000;
      if (elapsed <= 2) {
        speedCount++;
        if (speedCount >= 3) {
          grantBadge("speedster");
        }
      }

      Array.from(els.options.children).forEach(optionButton => {
        if (optionButton.textContent === place.country) {
          optionButton.classList.add("is-correct");
        }
        if (optionButton === button && choice !== place.country) {
          optionButton.classList.add("is-wrong");
        }
        optionButton.disabled = true;
      });

      const isRight = choice === place.country;
      if (isRight) {
        correct++;
        addLifetimeCorrect(1);
        els.result.replaceChildren("Correct! ", placeResultLink(place));
        if (correct >= 3) {
          grantBadge("explorer");
        }
      } else {
        wrong++;
        els.result.replaceChildren("Wrong. It was ", placeResultLink(place));
      }

      roundHistory.push({ title: place.title, chosen: choice, country: place.country, correct: isRight, link: place.link });
      updateScore();

      if (els.auto.checked) {
        timer = window.setTimeout(nextQuestion, 10000);
      }
    }

    function placeResultLink(place) {
      const fragment = document.createDocumentFragment();
      const strong = document.createElement("strong");
      strong.textContent = place.title;
      fragment.appendChild(strong);

      if (place.link) {
        fragment.append(" · ");
        const link = document.createElement("a");
        link.href = place.link;
        link.target = "_blank";
        link.rel = "noopener nofollow";
        link.textContent = "Learn more";
        fragment.appendChild(link);
      }

      return fragment;
    }

    function updateScore() {
      els.score.textContent = "Score: " + correct + " correct, " + wrong + " wrong";
    }

    function nextQuestion() {
      clearAutoTimer();
      index++;
      if (index >= roundSet.length) {
        endGame();
      } else {
        showPlace();
      }
    }

    function endGame() {
      els.question.textContent = "Game Over!";
      els.options.replaceChildren();
      els.img.style.display = "none";
      els.next.disabled = true;
      els.restart.hidden = false;
      buildRecap();

      if (wrong === 0 && correct === roundSet.length && roundSet.length > 0) {
        grantBadge("perfect");
      }
    }

    function restartGame() {
      index = 0;
      correct = 0;
      wrong = 0;
      speedCount = 0;
      roundHistory = [];
      els.score.textContent = "Score: 0 correct, 0 wrong";
      els.result.textContent = "";
      els.recap.replaceChildren();
      els.next.disabled = false;
      els.restart.hidden = true;
      roundSet = newRoundSet();
      showUnlockInfo();
      showPlace();
    }

    function preloadUpcomingImages() {
      roundSet.slice(index + 1, index + 4).forEach(place => {
        const preloader = new Image();
        preloader.decoding = "async";
        preloader.srcset = place.srcset;
        preloader.sizes = "(max-width: 900px) calc(100vw - 28px), 860px";
        preloader.src = place.img;
      });
    }

    function openDrawer() {
      els.badgeDrawer.hidden = false;
      renderBadgeDrawer();
    }

    function closeDrawer() {
      els.badgeDrawer.hidden = true;
    }

    els.next.addEventListener("click", nextQuestion);
    els.restart.addEventListener("click", restartGame);
    els.badgeStrip.addEventListener("click", openDrawer);
    els.badgeStrip.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDrawer();
      }
    });
    els.badgeClose.addEventListener("click", closeDrawer);
    els.badgeDrawer.addEventListener("click", event => {
      if (event.target === els.badgeDrawer) {
        closeDrawer();
      }
    });

    recordTodayPlayed();
    growUnlockedPoolToTarget();
    syncBadgeStrip();
    renderBadgeDrawer();
    roundSet = newRoundSet();
    showUnlockInfo();
    showPlace();
  }

  function inferCountry(title) {
    for (const pair of COUNTRY_MATCHERS) {
      if (pair[0].test(title)) {
        return pair[1];
      }
    }
    return "Unknown";
  }

  function distractors(correct) {
    return shuffle(COUNTRY_CHOICES.filter(country => country !== correct)).slice(0, 2);
  }

  function shuffle(items) {
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function todayKey() {
    const date = new Date();
    return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
  }

  function daysBetween(start, end) {
    const startDate = parseDateKey(start);
    const endDate = parseDateKey(end);
    if (!startDate || !endDate) {
      return 0;
    }
    return Math.floor((endDate - startDate) / 86400000);
  }

  function parseDateKey(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) {
      return null;
    }
    const parts = value.split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function loadStore() {
    const fallback = {
      version: 2,
      firstSeen: todayKey(),
      unlockedIds: [],
      playDates: [],
      lifetimeCorrect: 0,
      badges: {}
    };

    const saved = readJSON(STORE_KEY);
    const migrated = saved || migrateOldStore() || fallback;
    const validIds = new Set(RAW_PLACES.map(place => place.id));

    return {
      version: 2,
      firstSeen: parseDateKey(migrated.firstSeen) ? migrated.firstSeen : todayKey(),
      unlockedIds: Array.isArray(migrated.unlockedIds) ? unique(migrated.unlockedIds.filter(id => validIds.has(id))) : [],
      playDates: Array.isArray(migrated.playDates) ? unique(migrated.playDates.filter(parseDateKey)).sort() : [],
      lifetimeCorrect: Number.isFinite(Number(migrated.lifetimeCorrect)) ? Number(migrated.lifetimeCorrect) : 0,
      badges: migrated.badges && typeof migrated.badges === "object" ? migrated.badges : {}
    };
  }

  function saveStore(store) {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (error) {
      // Private browsing modes can block localStorage. The game still runs for the current page view.
    }
  }

  function migrateOldStore() {
    const start = readText(OLD_KEYS.start);
    const unlockedIds = readJSON(OLD_KEYS.unlocked);
    const playDates = readJSON(OLD_KEYS.days);
    const badges = readJSON(OLD_KEYS.badges);
    const lifetimeCorrect = Number(readText(OLD_KEYS.lifetimeCorrect));

    if (!start && !unlockedIds && !playDates && !badges && !Number.isFinite(lifetimeCorrect)) {
      return null;
    }

    return {
      version: 2,
      firstSeen: parseDateKey(start) ? start : todayKey(),
      unlockedIds: Array.isArray(unlockedIds) ? unlockedIds : [],
      playDates: Array.isArray(playDates) ? playDates : [],
      lifetimeCorrect: Number.isFinite(lifetimeCorrect) ? lifetimeCorrect : 0,
      badges: badges && typeof badges === "object" ? badges : {}
    };
  }

  function readJSON(key) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function readText(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function unique(items) {
    return Array.from(new Set(items));
  }

  function optimizedImageUrl(rawUrl, width) {
    try {
      const url = new URL(rawUrl);
      if (url.hostname === "i0.wp.com") {
        url.searchParams.set("resize", width + "," + Math.round(width * 9 / 16));
        url.searchParams.set("quality", "82");
        url.searchParams.set("ssl", "1");
      }
      return url.toString();
    } catch (error) {
      return rawUrl;
    }
  }

  function buildSrcset(rawUrl) {
    return [480, 860, 1200].map(width => optimizedImageUrl(rawUrl, width) + " " + width + "w").join(", ");
  }

  function boot() {
    document.querySelectorAll("[data-up-guess-country]").forEach(initGame);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
