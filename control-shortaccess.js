<script>
// ===== التحكم في الأعمدة =====
function adjustGrid(delta) {
  const slider = document.getElementById('gridSlider');
  const display = document.getElementById('gridValue');
  let value = parseInt(slider.value) + delta;
  value = Math.max(1, Math.min(6, value));
  slider.value = value;
  display.textContent = value;
  updateGrid(value);
}

function updateGridFromSlider(value) {
  const display = document.getElementById('gridValue');
  display.textContent = value;
  updateGrid(value);
}

// ===== التحكم في حجم الخط =====
const FONT_SIZE_KEY = 'shortaccess_font_size';
const MIN_FONT_SIZE = 80;
const MAX_FONT_SIZE = 150;
const DEFAULT_FONT_SIZE = 100;

function changeFontSize(delta) {
  const currentSize = getCurrentFontSize();
  let newSize = currentSize + delta;
  if (newSize < MIN_FONT_SIZE) newSize = MIN_FONT_SIZE;
  if (newSize > MAX_FONT_SIZE) newSize = MAX_FONT_SIZE;
  applyFontSize(newSize);
  updateFontSizeDisplay(newSize);
  saveFontSize(newSize);
}

function resetFontSize() {
  applyFontSize(DEFAULT_FONT_SIZE);
  updateFontSizeDisplay(DEFAULT_FONT_SIZE);
  saveFontSize(DEFAULT_FONT_SIZE);
}

function getCurrentFontSize() {
  try {
    const stored = localStorage.getItem(FONT_SIZE_KEY);
    if (stored) {
      const size = parseInt(stored);
      if (!isNaN(size) && size >= MIN_FONT_SIZE && size <= MAX_FONT_SIZE) {
        return size;
      }
    }
  } catch (e) {}
  return DEFAULT_FONT_SIZE;
}

function applyFontSize(size) {
  document.documentElement.style.fontSize = size + '%';
}

function updateFontSizeDisplay(size) {
  const display = document.getElementById('fontSizeDisplay');
  if (display) display.textContent = size + '%';
}

function saveFontSize(size) {
  try {
    localStorage.setItem(FONT_SIZE_KEY, size.toString());
  } catch (e) {}
}

// ===== التحكم في الإضافات =====
const FEATURES_KEY = 'shortaccess_features';
const DEFAULT_FEATURES = {
  toastDua: true,
  prayerToast: true,
  reminderToast: true,
  'welcome-joy-overlay': true
};

function loadFeatures() {
  try {
    const stored = localStorage.getItem(FEATURES_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...DEFAULT_FEATURES, ...parsed };
    }
  } catch (e) {}
  return { ...DEFAULT_FEATURES };
}

function saveFeatures(features) {
  try {
    localStorage.setItem(FEATURES_KEY, JSON.stringify(features));
  } catch (e) {}
}

function toggleFeature(featureId) {
  const features = loadFeatures();
  const newState = !features[featureId];
  features[featureId] = newState;
  saveFeatures(features);
  
  const indicator = document.getElementById(`indicator-${featureId}`);
  if (indicator) {
    if (newState) {
      indicator.textContent = '🟢';
      indicator.classList.remove('off');
    } else {
      indicator.textContent = '🔴';
      indicator.classList.add('off');
    }
  }
  
  applyFeatureState(featureId, newState);
}

function applyFeatureState(featureId, enabled) {
  const element = document.getElementById(featureId);
  if (!element) return;
  
  if (enabled) {
    element.style.display = '';
    if (element.classList) element.classList.remove('hidden');
    if (element.style.opacity === '0') element.style.opacity = '';
  } else {
    element.style.display = 'none';
    if (element.classList) {
      element.classList.add('hidden');
      element.classList.remove('show');
    }
  }
}

function initFeatures() {
  const features = loadFeatures();
  for (const [id, state] of Object.entries(features)) {
    const indicator = document.getElementById(`indicator-${id}`);
    if (indicator) {
      if (state) {
        indicator.textContent = '🟢';
        indicator.classList.remove('off');
      } else {
        indicator.textContent = '🔴';
        indicator.classList.add('off');
      }
    }
    setTimeout(() => applyFeatureState(id, state), 100);
  }
}

// ===== التحكم في القوائم =====
function toggleSettingsMenu() {
  const menu = document.getElementById('settings-menu');
  const themeMenu = document.getElementById('theme-menu');
  if (menu) menu.classList.toggle('show');
  if (themeMenu && themeMenu.classList.contains('show')) {
    themeMenu.classList.remove('show');
  }
}

function toggleThemeMenu() {
  const menu = document.getElementById('theme-menu');
  const settingsMenu = document.getElementById('settings-menu');
  if (menu) menu.classList.toggle('show');
  if (settingsMenu && settingsMenu.classList.contains('show')) {
    settingsMenu.classList.remove('show');
  }
}

// ===== إغلاق القوائم عند الضغط خارجها =====
document.addEventListener('click', function(e) {
  const settingsWrapper = document.getElementById('settings-wrapper');
  const settingsMenu = document.getElementById('settings-menu');
  if (settingsWrapper && settingsMenu && !settingsWrapper.contains(e.target)) {
    settingsMenu.classList.remove('show');
  }
  
  const themeWrapper = document.getElementById('theme-wrapper');
  const themeMenu = document.getElementById('theme-menu');
  if (themeWrapper && themeMenu && !themeWrapper.contains(e.target)) {
    themeMenu.classList.remove('show');
  }
});

// ===== التهيئة =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    const size = getCurrentFontSize();
    applyFontSize(size);
    updateFontSizeDisplay(size);
    initFeatures();
    
    // مزامنة قيمة السلايدر مع العرض
    const slider = document.getElementById('gridSlider');
    const display = document.getElementById('gridValue');
    if (slider && display) {
      display.textContent = slider.value;
    }
  });
} else {
  setTimeout(function() {
    const size = getCurrentFontSize();
    applyFontSize(size);
    updateFontSizeDisplay(size);
    initFeatures();
    
    const slider = document.getElementById('gridSlider');
    const display = document.getElementById('gridValue');
    if (slider && display) {
      display.textContent = slider.value;
    }
  }, 300);
}

console.log('⚙️ نظام الإعدادات يعمل 🎛️');
</script>
