/* ============================================
   МАРШРУТ — Планировщик путешествия
   Все данные и логика приложения
   ============================================ */

// ============================================
// КАТЕГОРИИ
// ============================================

const CATEGORIES = {
  transport: { label: 'Трансфер', icon: '✈', color: 'var(--cat-transport)' },
  hotel:     { label: 'Жильё',    icon: '🏨', color: 'var(--cat-hotel)' },
  excursion: { label: 'Экскурсия', icon: '🗺', color: 'var(--cat-excursion)' },
  leisure:   { label: 'Досуг',    icon: '☀', color: 'var(--cat-leisure)' },
  food:      { label: 'Питание',  icon: '🍽', color: 'var(--cat-food)' }
};

// ============================================
// ДАННЫЕ ПОЕЗДКИ
// ============================================

const TRIP = {
  title: 'Лиссабон и океан',
  startDate: '2026-09-12',
  endDate: '2026-09-18',
  totalDays: 7,
  totalBudget: 180000,
  routeCities: ['Лиссабон', 'Кашкайш', 'Синтра', 'Эрисейра', 'Океан', 'Лиссабон'],
  days: [
    {
      date: '2026-09-12',
      label: 'День 1',
      city: 'Лиссабон',
      events: {
        calm: [
          { time: '11:00', title: 'Прилёт в Лиссабон',  category: 'transport', cost: 0,    booking: null },
          { time: '14:00', title: 'Заселение в отель',  category: 'hotel',     cost: 15000, booking: 'hotel' },
          { time: '19:00', title: 'Ужин в кафе Belém',  category: 'food',      cost: 4000, booking: null }
        ],
        active: [
          { time: '07:00', title: 'Прилёт в Лиссабон',    category: 'transport', cost: 0,    booking: null },
          { time: '09:30', title: 'Трансфер до отеля',    category: 'transport', cost: 2500, booking: 'hotel' },
          { time: '11:00', title: 'Заселение в отель',    category: 'hotel',     cost: 15000, booking: 'hotel' },
          { time: '13:00', title: 'Обзорная экскурсия',   category: 'excursion', cost: 5000, booking: 'excursion' },
          { time: '19:00', title: 'Ужин в ресторане',     category: 'food',      cost: 4000, booking: null }
        ]
      }
    },
    {
      date: '2026-09-13',
      label: 'День 2',
      city: 'Лиссабон',
      events: {
        calm: [
          { time: '09:00', title: 'Завтрак в отеле',              category: 'food',      cost: 0,    booking: null },
          { time: '11:00', title: 'Музей подводных археологии',   category: 'leisure',   cost: 2000, booking: null },
          { time: '19:00', title: 'Ужин с фаду',                 category: 'food',      cost: 5000, booking: null }
        ],
        active: [
          { time: '08:00', title: 'Завтрак в отеле',              category: 'food',      cost: 0,    booking: null },
          { time: '09:30', title: 'Музей подводных археологии',   category: 'leisure',   cost: 2000, booking: null },
          { time: '12:00', title: 'Монастырь Жеронимуш',          category: 'leisure',   cost: 1200, booking: null },
          { time: '14:00', title: 'Обед в кафе',                  category: 'food',      cost: 3000, booking: null },
          { time: '20:00', title: 'Ужин с фаду',                  category: 'food',      cost: 5000, booking: null }
        ]
      }
    },
    {
      date: '2026-09-14',
      label: 'День 3',
      city: 'Кашкайш',
      events: {
        calm: [
          { time: '09:00', title: 'Завтрак в отеле',          category: 'food',      cost: 0,    booking: null },
          { time: '11:00', title: 'Поезд до Кашкайша',        category: 'transport', cost: 800,  booking: 'train' },
          { time: '19:00', title: 'Ужин у моря',              category: 'food',      cost: 4500, booking: null }
        ],
        active: [
          { time: '08:00', title: 'Завтрак в отеле',          category: 'food',      cost: 0,    booking: null },
          { time: '09:00', title: 'Поезд до Кашкайша',        category: 'transport', cost: 800,  booking: 'train' },
          { time: '12:30', title: 'Обед на набережной',        category: 'food',      cost: 3000, booking: null },
          { time: '14:00', title: 'Пещеры Бакалара',           category: 'excursion', cost: 3500, booking: null },
          { time: '19:00', title: 'Ужин в рыбном ресторане',  category: 'food',      cost: 4500, booking: null }
        ]
      }
    },
    {
      date: '2026-09-15',
      label: 'День 4',
      city: 'Синтра',
      events: {
        calm: [
          { time: '08:30', title: 'Завтрак в отеле',      category: 'food',      cost: 0,    booking: null },
          { time: '10:00', title: 'Поезд до Синтры',      category: 'transport', cost: 800,  booking: 'train' },
          { time: '12:00', title: 'Дворец Пена',          category: 'excursion', cost: 3500, booking: null }
        ],
        active: [
          { time: '07:30', title: 'Завтрак в отеле',      category: 'food',      cost: 0,    booking: null },
          { time: '08:30', title: 'Поезд до Синтры',      category: 'transport', cost: 800,  booking: 'train' },
          { time: '10:00', title: 'Дворец Пена',          category: 'excursion', cost: 3500, booking: null },
          { time: '12:30', title: 'Обед в Синтре',        category: 'food',      cost: 3000, booking: null },
          { time: '15:30', title: 'Камена даш Мойрас',    category: 'leisure',   cost: 1000, booking: null }
        ]
      }
    },
    {
      date: '2026-09-16',
      label: 'День 5',
      city: 'Эрисейра',
      events: {
        calm: [
          { time: '09:00', title: 'Завтрак в отеле',           category: 'food',      cost: 0,    booking: null },
          { time: '11:00', title: 'Автобус до Эрисейры',       category: 'transport', cost: 600,  booking: null },
          { time: '19:00', title: 'Ужин в Эрисейре',           category: 'food',      cost: 4000, booking: null }
        ],
        active: [
          { time: '08:00', title: 'Завтрак в отеле',           category: 'food',      cost: 0,    booking: null },
          { time: '09:00', title: 'Автобус до Эрисейры',       category: 'transport', cost: 600,  booking: null },
          { time: '11:00', title: 'Урок сёрфинга',             category: 'excursion', cost: 5000, booking: null },
          { time: '13:00', title: 'Обед в рыбном ресторане',   category: 'food',      cost: 3500, booking: null },
          { time: '17:00', title: 'Закат на мысе',             category: 'leisure',   cost: 0,    booking: null }
        ]
      }
    },
    {
      date: '2026-09-17',
      label: 'День 6',
      city: 'У океана',
      events: {
        calm: [
          { time: '09:30', title: 'Завтрак в отеле',            category: 'food',      cost: 0,    booking: null },
          { time: '11:00', title: 'Пляж Прая ду Гиншу',        category: 'leisure',   cost: 0,    booking: null },
          { time: '18:00', title: 'Пикник на закате',           category: 'food',      cost: 2000, booking: null }
        ],
        active: [
          { time: '08:00', title: 'Завтрак в отеле',            category: 'food',      cost: 0,    booking: null },
          { time: '11:30', title: 'Прогулка на катамаране',     category: 'excursion', cost: 6000, booking: 'excursion' },
          { time: '14:00', title: 'Обед на пляже',              category: 'food',      cost: 3000, booking: null },
          { time: '16:00', title: 'Отдых на пляже',             category: 'leisure',   cost: 0,    booking: null },
          { time: '20:00', title: 'Ужин на набережной',          category: 'food',      cost: 5000, booking: null }
        ]
      }
    },
    {
      date: '2026-09-18',
      label: 'День 7',
      city: 'Лиссабон',
      events: {
        calm: [
          { time: '09:00', title: 'Завтрак в отеле',       category: 'food',      cost: 0,    booking: null },
          { time: '11:00', title: 'Выезд из отеля',        category: 'hotel',     cost: 0,    booking: 'hotel' },
          { time: '18:00', title: 'Вылет домой',           category: 'transport', cost: 0,    booking: 'flight' }
        ],
        active: [
          { time: '08:00', title: 'Завтрак в отеле',       category: 'food',      cost: 0,    booking: null },
          { time: '09:00', title: 'Выезд из отеля',        category: 'hotel',     cost: 0,    booking: 'hotel' },
          { time: '12:00', title: 'Обед в Лиссабоне',      category: 'food',      cost: 3500, booking: null },
          { time: '14:00', title: 'Трансфер в аэропорт',  category: 'transport', cost: 3000, booking: null },
          { time: '18:00', title: 'Вылет домой',           category: 'transport', cost: 0,    booking: 'flight' }
        ]
      }
    }
  ]
};

// Фиксированные расходы (бронирования)
const FIXED_COSTS = {
  flight: 52000,
  hotel: 63000,
  train: 2400
};

// ============================================
// БРОНИРОВАНИЯ
// ============================================

const BOOKINGS_INIT = [
  { id: 'flight',    type: 'flight',    title: 'Перелёт Москва — Лиссабон',     detail: '12 sep, прямой рейс',   status: 'confirmed' },
  { id: 'hotel',     type: 'hotel',     title: 'Отель Lisboa Central',          detail: '7 ночей, стандарт',       status: 'pending' },
  { id: 'train',     type: 'train',     title: 'Поезд Лиссабон — Синтра',       detail: 'Round-trip, 14 sep',      status: 'confirmed' },
  { id: 'excursion', type: 'excursion', title: 'Обзорная экскурсия по Лиссабону', detail: '12 sep, 3 часа',        status: 'pending' }
];

// ============================================
// ЧЕК-ЛИСТ
// ============================================

const CHECKLIST_INIT = [
  { id: 'c1',  category: 'Документы', text: 'Загранпаспорт',          checked: false },
  { id: 'c2',  category: 'Документы', text: 'Билеты на самолёт',      checked: false },
  { id: 'c3',  category: 'Документы', text: 'Бронирование отеля',     checked: false },
  { id: 'c4',  category: 'Деньги',    text: 'Наличные евро',          checked: false },
  { id: 'c5',  category: 'Деньги',    text: 'Банковская карта',        checked: false },
  { id: 'c6',  category: 'Деньги',    text: 'Страховка',              checked: false },
  { id: 'c7',  category: 'Вещи',      text: 'Зарядка для телефона',   checked: false },
  { id: 'c8',  category: 'Вещи',      text: 'Солнцезащитный крем',    checked: false },
  { id: 'c9',  category: 'Вещи',      text: 'Удобная обувь',          checked: false },
  { id: 'c10', category: 'Вещи',      text: 'Купальник',              checked: false },
  { id: 'c11', category: 'Здоровье',  text: 'Аптечка',                checked: false },
  { id: 'c12', category: 'Здоровье',  text: 'Лекарства по рецепту',   checked: false }
];

const CHECKLIST_CATEGORIES = ['Документы', 'Деньги', 'Вещи', 'Здоровье'];

// ============================================
// СОСТОЯНИЕ
// ============================================

const state = {
  pace: 'calm',
  activeDay: 0,
  activeSection: 'today',
  demoState: 'success',
  bookings: [],
  checklist: []
};

// ============================================
// УТИЛИТЫ
// ============================================

function formatMoney(n) {
  return n.toLocaleString('ru-RU') + ' ₽';
}

function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(str) {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const d = parseDate(str);
  return d.getDate() + ' ' + months[d.getMonth()];
}

function formatDateRange(start, end) {
  return formatDate(start) + ' — ' + formatDate(end);
}

function getCountdown() {
  const now = new Date();
  const start = parseDate(TRIP.startDate);
  const diff = start - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days < 0) return 'Поездка завершена';
  if (days === 0) return 'Сегодня отъезд!';
  return 'Через ' + days + ' ' + pluralDays(days) + ' до отъезда';
}

function pluralDays(n) {
  const abs = Math.abs(n) % 100;
  const lastDigit = abs % 10;
  if (abs > 10 && abs < 20) return 'дней';
  if (lastDigit > 1 && lastDigit < 5) return 'дня';
  if (lastDigit === 1) return 'день';
  return 'дней';
}

function getEventsForDay(dayIndex) {
  const day = TRIP.days[dayIndex];
  return day ? day.events[state.pace] || [] : [];
}

function calcDayCost(dayIndex) {
  return getEventsForDay(dayIndex).reduce(function(sum, e) { return sum + e.cost; }, 0);
}

function calcTotalPlanned() {
  var total = FIXED_COSTS.flight + FIXED_COSTS.hotel + FIXED_COSTS.train;
  for (var i = 0; i < TRIP.totalDays; i++) {
    total += calcDayCost(i);
  }
  return total;
}

function getCategoryTotals() {
  var totals = {};
  Object.keys(CATEGORIES).forEach(function(k) { totals[k] = 0; });
  totals.hotel += FIXED_COSTS.hotel;
  for (var i = 0; i < TRIP.totalDays; i++) {
    var events = getEventsForDay(i);
    events.forEach(function(e) {
      totals[e.category] = (totals[e.category] || 0) + e.cost;
    });
  }
  return totals;
}

function isMobile() {
  return window.matchMedia && window.matchMedia('(max-width: 600px)').matches;
}

// ============================================
// ХРАНИЛИЩЕ
// ============================================

var Storage = {
  KEY_CHECKLIST: 'marshrut_checklist',
  KEY_BOOKINGS: 'marshrut_bookings',

  loadChecklist: function() {
    try {
      var data = localStorage.getItem(this.KEY_CHECKLIST);
      if (!data) return null;
      var parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      return null;
    } catch(e) { return null; }
  },

  saveChecklist: function(items) {
    try { localStorage.setItem(this.KEY_CHECKLIST, JSON.stringify(items)); } catch(e) {}
  },

  loadBookings: function() {
    try {
      var data = localStorage.getItem(this.KEY_BOOKINGS);
      if (!data) return null;
      var parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      return null;
    } catch(e) { return null; }
  },

  saveBookings: function(items) {
    try { localStorage.setItem(this.KEY_BOOKINGS, JSON.stringify(items)); } catch(e) {}
  },

  reset: function() {
    try {
      localStorage.removeItem(this.KEY_CHECKLIST);
      localStorage.removeItem(this.KEY_BOOKINGS);
    } catch(e) {}
  }
};

// ============================================
// РЕНДЕР: ОБЛОЖКА
// ============================================

function renderCover() {
  var el = document.getElementById('cover');
  var routePoints = TRIP.routeCities;
  var svgWidth = 700;
  var svgHeight = 90;
  var padding = 40;
  var step = (svgWidth - padding * 2) / (routePoints.length - 1);

  var circles = '';
  var labels = '';
  routePoints.forEach(function(city, i) {
    var x = padding + i * step;
    var y = 35;
    var isEndpoint = (i === 0 || i === routePoints.length - 1);
    var r = isEndpoint ? 7 : 5;
    var fill = isEndpoint ? 'var(--accent)' : 'var(--sea)';

    // Волнистая линия — точки по синусоиде
    var offsetY = Math.sin(i * 0.9) * 10;
    y += offsetY;

    circles += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + fill + '" />';
    if (i > 0) {
      var prevX = padding + (i - 1) * step;
      var prevOffsetY = Math.sin((i - 1) * 0.9) * 10;
      var prevY = 35 + prevOffsetY;
      var midX = (prevX + x) / 2;
      var midY = (prevY + y) / 2 - 15;
      circles += '<path d="M' + prevX + ',' + prevY + ' Q' + midX + ',' + midY + ' ' + x + ',' + y + '" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="6 4" />';
    }

    var labelY = y + 28;
    labels += '<text x="' + x + '" y="' + labelY + '" text-anchor="middle" fill="var(--text)" font-size="11" font-weight="600">' + city + '</text>';
  });

  var routeSvg = '<svg viewBox="0 0 ' + svgWidth + ' ' + svgHeight + '" class="cover__route-svg" xmlns="http://www.w3.org/2000/svg">' + circles + labels + '</svg>';

  el.innerHTML =
    '<div class="cover__content">' +
      '<div class="cover__badge">Путешествие</div>' +
      '<h2 class="cover__title">' + TRIP.title + '</h2>' +
      '<p class="cover__dates">' + formatDateRange(TRIP.startDate, TRIP.endDate) + ' · ' + TRIP.totalDays + ' ' + pluralDays(TRIP.totalDays) + '</p>' +
      '<p class="cover__countdown" id="countdown">' + getCountdown() + '</p>' +
      '<div class="cover__route">' + routeSvg + '</div>' +
    '</div>';
}

// ============================================
// РЕНДЕР: ТЕМП ПУТЕШЕСТВИЯ
// ============================================

function renderPace() {
  var el = document.getElementById('pace');
  var isCalm = state.pace === 'calm';
  var planned = calcTotalPlanned();
  var remaining = TRIP.totalBudget - planned;

  var hint = isCalm
    ? 'Спокойный темп: по 3–5 событий в день. Комфортный отдых без спешки.'
    : 'Насыщенный темп: по 6–8 событий в день. Максимум впечатлений!';

  el.innerHTML =
    '<div class="pace__header">' +
      '<h3 class="pace__title">Темп путешествия</h3>' +
      '<div class="pace__toggle" role="radiogroup" aria-label="Темп путешествия">' +
        '<button class="pace__btn' + (isCalm ? ' pace__btn--active' : '') + '" data-pace="calm" role="radio" aria-checked="' + isCalm + '">Спокойно</button>' +
        '<button class="pace__btn' + (!isCalm ? ' pace__btn--active' : '') + '" data-pace="active" role="radio" aria-checked="' + !isCalm + '">Насыщенно</button>' +
      '</div>' +
    '</div>' +
    '<div class="pace__summary">' +
      '<div class="pace__stat">' +
        '<span class="pace__stat-label">Прогноз расходов</span>' +
        '<span class="pace__stat-value">' + formatMoney(planned) + '</span>' +
      '</div>' +
      '<div class="pace__stat">' +
        '<span class="pace__stat-label">Остаток от бюджета</span>' +
        '<span class="pace__stat-value pace__stat-value--' + (remaining >= 0 ? 'positive' : 'negative') + '">' + formatMoney(remaining) + '</span>' +
      '</div>' +
    '</div>' +
    '<p class="pace__hint">' + hint + '</p>';

  el.querySelectorAll('.pace__btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      state.pace = this.dataset.pace;
      renderPace();
      renderToday();
      renderRoute();
      renderBudget();
    });
  });
}

// ============================================
// РЕНДЕР: МАРШРУТ ПО ДНЯМ
// ============================================

function renderRoute() {
  var el = document.getElementById('route');
  var tabsHtml = '<div class="route__tabs" role="tablist">';

  TRIP.days.forEach(function(day, i) {
    var isActive = i === state.activeDay;
    var dayCost = calcDayCost(i);
    tabsHtml +=
      '<button class="route__tab' + (isActive ? ' route__tab--active' : '') + '" ' +
        'role="tab" aria-selected="' + isActive + '" data-day="' + i + '">' +
        '<span class="route__tab-label">' + day.label + '</span>' +
        '<span class="route__tab-city">' + day.city + '</span>' +
      '</button>';
  });
  tabsHtml += '</div>';

  var events = getEventsForDay(state.activeDay);
  var day = TRIP.days[state.activeDay];
  var dayCost = calcDayCost(state.activeDay);
  var eventsHtml = '';

  if (events.length === 0) {
    eventsHtml =
      '<div class="route__empty">' +
        '<div class="route__empty-icon">📋</div>' +
        '<p class="route__empty-text">Нет запланированных событий</p>' +
      '</div>';
  } else {
    eventsHtml = '<ul class="route__events">';
    events.forEach(function(ev) {
      var cat = CATEGORIES[ev.category];
      var bookingBadge = '';
      if (ev.booking) {
        var bk = state.bookings.find(function(b) { return b.id === ev.booking; });
        if (bk) {
          var cls = bk.status === 'confirmed' ? 'route__badge--confirmed' : 'route__badge--pending';
          bookingBadge = '<span class="route__badge ' + cls + '">' +
            (bk.status === 'confirmed' ? 'Подтверждено' : 'Ожидает') + '</span>';
        }
      }
      eventsHtml +=
        '<li class="route__event">' +
          '<div class="route__event-time">' + ev.time + '</div>' +
          '<div class="route__event-body">' +
            '<div class="route__event-header">' +
              '<span class="route__event-title">' + ev.title + '</span>' +
              '<span class="route__event-cat" style="background:' + cat.color + '15; color:' + cat.color + '">' + cat.icon + ' ' + cat.label + '</span>' +
            '</div>' +
            '<div class="route__event-meta">' +
              (ev.cost > 0 ? '<span class="route__event-cost">' + formatMoney(ev.cost) + '</span>' : '<span class="route__event-cost route__event-cost--free">Бесплатно</span>') +
              bookingBadge +
            '</div>' +
          '</div>' +
        '</li>';
    });
    eventsHtml += '</ul>';
  }

  el.innerHTML =
    '<h3 class="section-title">Маршрут по дням</h3>' +
    tabsHtml +
    '<div class="route__info">' +
      '<div class="route__info-left">' +
        '<span class="route__info-date">' + formatDate(day.date) + '</span>' +
        '<span class="route__info-city">' + day.city + '</span>' +
      '</div>' +
      '<div class="route__info-right">' +
        '<span class="route__info-label">Стоимость дня</span>' +
        '<span class="route__info-cost">' + formatMoney(dayCost) + '</span>' +
      '</div>' +
    '</div>' +
    eventsHtml;

  el.querySelectorAll('.route__tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      state.activeDay = parseInt(this.dataset.day);
      renderToday();
      renderRoute();
    });
  });
}

// ============================================
// РЕНДЕР: БЮДЖЕТ
// ============================================

function renderBudget() {
  var el = document.getElementById('budget');
  var planned = calcTotalPlanned();
  var remaining = TRIP.totalBudget - planned;
  var percent = Math.min((planned / TRIP.totalBudget) * 100, 100);
  var catTotals = getCategoryTotals();

  var segmentsHtml = '';
  Object.keys(CATEGORIES).forEach(function(key) {
    var cat = CATEGORIES[key];
    var val = catTotals[key];
    if (val > 0) {
      var w = (val / planned * 100).toFixed(1);
      segmentsHtml += '<div class="budget__segment" style="width:' + w + '%; background:' + cat.color + '" title="' + cat.label + ': ' + formatMoney(val) + '"></div>';
    }
  });

  var categoriesHtml = '<div class="budget__categories">';
  Object.keys(CATEGORIES).forEach(function(key) {
    var cat = CATEGORIES[key];
    var val = catTotals[key];
    categoriesHtml +=
      '<div class="budget__cat-item">' +
        '<span class="budget__cat-dot" style="background:' + cat.color + '"></span>' +
        '<span class="budget__cat-label">' + cat.label + '</span>' +
        '<span class="budget__cat-value">' + formatMoney(val) + '</span>' +
      '</div>';
  });
  categoriesHtml += '</div>';

  el.innerHTML =
    '<h3 class="section-title">Бюджет</h3>' +
    '<div class="budget__main">' +
      '<div class="budget__ring-wrap">' +
        '<svg class="budget__ring" viewBox="0 0 120 120">' +
          '<circle cx="60" cy="60" r="52" fill="none" stroke="var(--border)" stroke-width="10" />' +
          '<circle cx="60" cy="60" r="52" fill="none" stroke="' + (remaining >= 0 ? 'var(--accent)' : 'var(--red)') + '" stroke-width="10" stroke-linecap="round" ' +
            'stroke-dasharray="' + (2 * Math.PI * 52) + '" ' +
            'stroke-dashoffset="' + (2 * Math.PI * 52 * (1 - percent / 100)) + '" ' +
            'transform="rotate(-90 60 60)" class="budget__ring-progress" />' +
        '</svg>' +
        '<div class="budget__ring-center">' +
          '<span class="budget__ring-pct">' + Math.round(percent) + '%</span>' +
        '</div>' +
      '</div>' +
      '<div class="budget__numbers">' +
        '<div class="budget__num-item">' +
          '<span class="budget__num-label">Общий бюджет</span>' +
          '<span class="budget__num-value">' + formatMoney(TRIP.totalBudget) + '</span>' +
        '</div>' +
        '<div class="budget__num-item">' +
          '<span class="budget__num-label">Запланировано</span>' +
          '<span class="budget__num-value budget__num-value--accent">' + formatMoney(planned) + '</span>' +
        '</div>' +
        '<div class="budget__num-item">' +
          '<span class="budget__num-label">Остаток</span>' +
          '<span class="budget__num-value ' + (remaining >= 0 ? 'budget__num-value--positive' : 'budget__num-value--negative') + '">' + formatMoney(remaining) + '</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="budget__bar">' + segmentsHtml + '</div>' +
    categoriesHtml;
}

// ============================================
// РЕНДЕР: БРОНИРОВАНИЯ
// ============================================

function renderBookings() {
  var el = document.getElementById('bookings');
  var typeIcons = { flight: '✈', hotel: '🏨', train: '🚂', excursion: '🗺' };

  var cardsHtml = state.bookings.map(function(bk) {
    var isConfirmed = bk.status === 'confirmed';
    var statusClass = isConfirmed ? 'booking--confirmed' : 'booking--pending';
    var statusLabel = isConfirmed ? 'Подтверждено' : 'Ожидает подтверждения';

    return (
      '<article class="booking ' + statusClass + '">' +
        '<div class="booking__icon">' + (typeIcons[bk.type] || '📋') + '</div>' +
        '<div class="booking__info">' +
          '<h4 class="booking__title">' + bk.title + '</h4>' +
          '<p class="booking__detail">' + bk.detail + '</p>' +
          '<span class="booking__status">' + statusLabel + '</span>' +
        '</div>' +
        (!isConfirmed
          ? '<button class="booking__btn" data-id="' + bk.id + '">Подтвердить</button>'
          : '<span class="booking__badge">✓ Готово</span>') +
      '</article>'
    );
  }).join('');

  var confirmedCount = state.bookings.filter(function(b) { return b.status === 'confirmed'; }).length;
  var totalCount = state.bookings.length;

  el.innerHTML =
    '<div class="section-header">' +
      '<h3 class="section-title">Бронирования</h3>' +
      '<span class="section-badge">Подтверждено ' + confirmedCount + ' из ' + totalCount + '</span>' +
    '</div>' +
    '<div class="bookings__grid">' + cardsHtml + '</div>';

  el.querySelectorAll('.booking__btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = this.dataset.id;
      var bk = state.bookings.find(function(b) { return b.id === id; });
      if (bk) {
        bk.status = 'confirmed';
        Storage.saveBookings(state.bookings);
        renderToday();
        renderBookings();
        renderRoute();
        showToast('Бронирование подтверждено: ' + bk.title, 'success');
      }
    });
  });
}

// ============================================
// РЕНДЕР: ЧЕК-ЛИСТ
// ============================================

function renderChecklist() {
  var el = document.getElementById('checklist');

  var total = state.checklist.length;
  var done = state.checklist.filter(function(c) { return c.checked; }).length;
  var percent = total ? Math.round(done / total * 100) : 0;

  var html =
    '<div class="section-header">' +
      '<h3 class="section-title">Чек-лист подготовки</h3>' +
      '<span class="section-badge">' + done + ' из ' + total + ' · ' + percent + '%</span>' +
    '</div>' +
    '<div class="checklist__progress">' +
      '<div class="checklist__progress-bar">' +
        '<div class="checklist__progress-fill" style="width:' + percent + '%"></div>' +
      '</div>' +
      '<span class="checklist__progress-text">Готовность ' + percent + '%</span>' +
    '</div>' +
    '<div class="checklist__grid">';

  CHECKLIST_CATEGORIES.forEach(function(cat) {
    var items = state.checklist.filter(function(c) { return c.category === cat; });
    var checkedCount = items.filter(function(c) { return c.checked; }).length;

    html +=
      '<div class="checklist__group">' +
        '<div class="checklist__group-header">' +
          '<h4 class="checklist__group-title">' + cat + '</h4>' +
          '<span class="checklist__group-count">' + checkedCount + '/' + items.length + '</span>' +
        '</div>' +
        '<ul class="checklist__items">';

    items.forEach(function(item) {
      html +=
        '<li class="checklist__item' + (item.checked ? ' checklist__item--checked' : '') + '">' +
          '<label class="checklist__label">' +
            '<input type="checkbox" class="checklist__input" data-id="' + item.id + '"' + (item.checked ? ' checked' : '') + ' />' +
            '<span class="checklist__check"></span>' +
            '<span class="checklist__text">' + item.text + '</span>' +
          '</label>' +
        '</li>';
    });

    html += '</ul></div>';
  });

  html += '</div>' +
    '<button class="checklist__reset" id="checklist-reset">Сбросить учебные данные</button>';

  el.innerHTML = html;

  el.querySelectorAll('.checklist__input').forEach(function(input) {
    input.addEventListener('change', function() {
      var id = this.dataset.id;
      var item = state.checklist.find(function(c) { return c.id === id; });
      if (item) {
        item.checked = this.checked;
        Storage.saveChecklist(state.checklist);
        renderChecklist();
        renderToday();
      }
    });
  });

  document.getElementById('checklist-reset').addEventListener('click', resetAllData);
}

// ============================================
// РЕНДЕР: СЕГОДНЯ (мобильный режим)
// ============================================

function renderToday() {
  var el = document.getElementById('today');
  if (!el) return;

  var day = TRIP.days[state.activeDay];
  var events = getEventsForDay(state.activeDay);
  var nextEvent = events.length > 0 ? events[0] : null;
  var nextTask = state.checklist.find(function(c) { return !c.checked; });

  var eventHtml = '';
  if (nextEvent) {
    var cat = CATEGORIES[nextEvent.category];
    var bookingStatus = '';
    if (nextEvent.booking) {
      var bk = state.bookings.find(function(b) { return b.id === nextEvent.booking; });
      if (bk) {
        var isConfirmed = bk.status === 'confirmed';
        bookingStatus =
          '<span class="today__status ' + (isConfirmed ? 'today__status--confirmed' : 'today__status--pending') + '">' +
            (isConfirmed ? '✓ Подтверждено' : '⏳ Ожидает подтверждения') +
          '</span>';
      }
    }

    eventHtml =
      '<div class="today__card">' +
        '<div class="today__card-title">Ближайшее событие</div>' +
        '<div class="today__event-title">' + nextEvent.title + '</div>' +
        '<div class="today__event-meta">' +
          '<span>🕒 <strong>' + nextEvent.time + '</strong></span>' +
          '<span>📍 <strong>' + day.city + '</strong></span>' +
          '<span>' + cat.icon + ' <strong>' + cat.label + '</strong></span>' +
        '</div>' +
        bookingStatus +
      '</div>';
  } else {
    eventHtml =
      '<div class="today__empty">' +
        '<div class="today__card-title">Ближайшее событие</div>' +
        '<p>На сегодня событий не запланировано</p>' +
      '</div>';
  }

  var taskHtml = '';
  if (nextTask) {
    taskHtml =
      '<div class="today__card">' +
        '<div class="today__card-title">Следующая задача</div>' +
        '<div class="today__task">' +
          '<span class="today__task-label">' + nextTask.category + '</span>' +
          '<span class="today__task-text">' + nextTask.text + '</span>' +
        '</div>' +
      '</div>';
  } else {
    taskHtml =
      '<div class="today__card">' +
        '<div class="today__card-title">Следующая задача</div>' +
        '<div class="today__task">' +
          '<span class="today__task-text">Все задачи выполнены 🎉</span>' +
        '</div>' +
      '</div>';
  }

  el.innerHTML =
    '<div class="today__header">' +
      '<h3 class="section-title">Сегодня</h3>' +
      '<span class="today__day-badge">' + day.label + ' · ' + day.city + '</span>' +
    '</div>' +
    eventHtml +
    taskHtml;
}

// ============================================
// РЕНДЕР: МОБИЛЬНАЯ НАВИГАЦИЯ
// ============================================

function renderMobileNav() {
  var el = document.getElementById('mobile-nav');
  var tabs = [
    { id: 'today', label: 'Сегодня', icon: '☀' },
    { id: 'route', label: 'Маршрут', icon: '🗺' },
    { id: 'budget', label: 'Бюджет', icon: '💰' },
    { id: 'checklist', label: 'Подготовка', icon: '✅' }
  ];

  el.innerHTML = tabs.map(function(t) {
    return '<button class="mobile-nav__btn' + (state.activeSection === t.id ? ' mobile-nav__btn--active' : '') + '" data-section="' + t.id + '">' +
      '<span class="mobile-nav__icon">' + t.icon + '</span>' +
      '<span class="mobile-nav__label">' + t.label + '</span>' +
    '</button>';
  }).join('');

  el.querySelectorAll('.mobile-nav__btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      state.activeSection = this.dataset.section;
      applyMobileSection();
      renderMobileNav();
    });
  });
}

function applyMobileSection() {
  var sections = ['today', 'route', 'budget', 'checklist'];
  sections.forEach(function(id) {
    var sec = document.getElementById(id);
    if (sec) {
      // На мобильном скрываем неактивные вкладки; на desktop — всё видно
      var hidden = isMobile() && state.activeSection !== id;
      sec.classList.toggle('section--hidden-mobile', hidden);
    }
  });

  // Отдельный блок бронирований показываем только на desktop
  var bookings = document.getElementById('bookings');
  if (bookings) {
    bookings.classList.toggle('section--hidden-mobile', isMobile());
  }
}

// ============================================
// TOAST
// ============================================

function showToast(message, type) {
  var toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast toast--' + (type || 'info') + ' toast--visible';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function() {
    toast.classList.remove('toast--visible');
  }, 3000);
}

// ============================================
// ДЕМО ПАНЕЛЬ СОСТОЯНИЙ
// ============================================

function renderDemoPanel() {
  var panel = document.getElementById('demo-panel');
  if (!panel) return;

  panel.innerHTML =
    '<button class="demo-panel__toggle" id="demo-toggle">⚙ Демо состояний</button>' +
    '<div class="demo-panel__body" id="demo-body">' +
      '<button class="demo-panel__btn" data-state="loading">Loading</button>' +
      '<button class="demo-panel__btn" data-state="error">Error</button>' +
      '<button class="demo-panel__btn" data-state="empty">Empty</button>' +
      '<button class="demo-panel__btn demo-panel__btn--active" data-state="success">Success</button>' +
    '</div>';

  document.getElementById('demo-toggle').addEventListener('click', function() {
    document.getElementById('demo-body').classList.toggle('demo-panel__body--open');
  });

  panel.querySelectorAll('.demo-panel__btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      state.demoState = this.dataset.state;
      applyDemoState();
      panel.querySelectorAll('.demo-panel__btn').forEach(function(b) { b.classList.remove('demo-panel__btn--active'); });
      this.classList.add('demo-panel__btn--active');
    });
  });
}

function applyDemoState() {
  var main = document.getElementById('main');
  var skeletons = document.getElementById('skeletons');
  var errorOverlay = document.getElementById('error-overlay');
  var emptyMsg = document.getElementById('empty-msg');

  skeletons.classList.toggle('visible', state.demoState === 'loading');
  errorOverlay.classList.toggle('visible', state.demoState === 'error');
  main.classList.toggle('main--error', state.demoState === 'error');

  if (state.demoState === 'empty') {
    // Показать пустое состояние в маршруте
    var routeEvents = document.querySelector('.route__events');
    if (routeEvents) {
      routeEvents.innerHTML =
        '<div class="route__empty">' +
          '<div class="route__empty-icon">📋</div>' +
          '<p class="route__empty-text">Нет запланированных событий</p>' +
        '</div>';
    }
  }

  if (state.demoState === 'success') {
    // Возвращаем все данные на страницу
    renderCover();
    renderPace();
    renderToday();
    renderRoute();
    renderBudget();
    renderBookings();
    renderChecklist();
    renderMobileNav();
    applyMobileSection();
  }
}

// ============================================
// ОБНОВЛЕНИЕ ОБРАТНОГО ОТСЧЁТА
// ============================================

function updateCountdown() {
  var el = document.getElementById('countdown');
  if (el) el.textContent = getCountdown();
}

// ============================================
// РЕНДЕР ВСЕГО
// ============================================

function renderAll() {
  renderCover();
  renderPace();
  renderToday();
  renderRoute();
  renderBudget();
  renderBookings();
  renderChecklist();
  renderMobileNav();
  applyMobileSection();
}

// ============================================
// СБРОС ДАННЫХ
// ============================================

function resetAllData() {
  Storage.reset();
  state.checklist = JSON.parse(JSON.stringify(CHECKLIST_INIT));
  state.bookings = JSON.parse(JSON.stringify(BOOKINGS_INIT));
  renderAll();
  showToast('Данные сброшены к исходным', 'info');
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

function init() {
  // Загрузка данных из localStorage
  var savedChecklist = Storage.loadChecklist();
  state.checklist = savedChecklist || JSON.parse(JSON.stringify(CHECKLIST_INIT));

  var savedBookings = Storage.loadBookings();
  state.bookings = savedBookings || JSON.parse(JSON.stringify(BOOKINGS_INIT));

  var globalReset = document.getElementById('global-reset');
  if (globalReset) globalReset.addEventListener('click', resetAllData);

  renderAll();
  renderDemoPanel();
  applyDemoState();

  // Пересчитываем видимость секций при изменении ширины окна
  window.addEventListener('resize', function() {
    applyMobileSection();
    renderMobileNav();
  });

  // Обновлять обратный отсчёт каждую минуту
  setInterval(updateCountdown, 60000);

  // Определяем начальный активный день (сегодня или первый)
  var today = new Date();
  var startDate = parseDate(TRIP.startDate);
  var endDate = parseDate(TRIP.endDate);
  if (today >= startDate && today <= endDate) {
    var dayNum = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    state.activeDay = Math.min(dayNum, TRIP.totalDays - 1);
    renderRoute();
  }
}

document.addEventListener('DOMContentLoaded', init);
