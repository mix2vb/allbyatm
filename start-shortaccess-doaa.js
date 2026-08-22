    <script>
        // ============================================================
        // 📦 كلمات وأدعية وأذكار - النسخة المُصححة
        // تم إصلاح جميع المشاكل
        // ============================================================
 
        (function() {
            'use strict';
 
            // ============================================================
            // 1️⃣ توست الدعاء الصغير
            // ============================================================
            (function() {
                var items = [
                    { text: "اللهمَّ اكفني بحلالك عن حرامك", icon: "fa-hand-peace", color: "#b68b6b" },
                    { text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا", icon: "fa-heart", color: "#c0392b" },
                    { text: "اللهم إني أسألك العفو والعافية", icon: "fa-shield-heart", color: "#2980b9" },
                    { text: "وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ", icon: "fa-cloud", color: "#7f8c8d" },
                    { text: "لا إله إلا الله وحده لا شريك له", icon: "fa-star", color: "#f39c12" },
                    { text: "حسبي الله لا إله إلا هو", icon: "fa-mountain", color: "#27ae60" },
                    { text: "دع الأيام تفعل ما تشاء", icon: "fa-feather", color: "#8e44ad" },
                    { text: "ابتسم فأنت جميل", icon: "fa-smile", color: "#e67e22" },
                    { text: "خير الناس أنفعهم للناس", icon: "fa-hands-helping", color: "#2c3e50" },
                    { text: "كن كالنخلة عاليًا", icon: "fa-tree", color: "#2d7d46" },
                    { text: "ربِّ هب لي حكمةً", icon: "fa-book-open", color: "#8B6B4D" },
                    { text: "اللهم اجعلنا ممن يذكرونك", icon: "fa-mosque", color: "#6c5b3b" },
                    { text: "سبحان الله وبحمده", icon: "fa-seedling", color: "#3d8b37" },
                    { text: "لا حول ولا قوة إلا بالله", icon: "fa-dove", color: "#5d6d7e" },
                    { text: "اللهم صلِّ على محمد", icon: "fa-rose", color: "#b56576" },
                    { text: "توكل على الله فهو خير وكيل", icon: "fa-anchor", color: "#4a6fa5" },
                    { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", icon: "fa-key", color: "#16a085" },
                    { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", icon: "fa-sun", color: "#f1c40f" },
                    { text: "رَبِّ اشْرَحْ لِي صَدْرِي", icon: "fa-dove", color: "#2ecc71" },
                    { text: "اللهم بارك لنا في يومنا", icon: "fa-calendar-check", color: "#3498db" },
                    { text: "اللهم تقبل منا إنك أنت السميع العليم", icon: "fa-pray", color: "#8e44ad" },
                    { text: "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ", icon: "fa-hand", color: "#d35400" },
                    { text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً", icon: "fa-star", color: "#f39c12" },
                    { text: "اللهم إني أعوذ بك من الهم والحزن", icon: "fa-heart", color: "#e74c3c" },
                    { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", icon: "fa-shield", color: "#2c3e50" }
                ];
 
                var toast = document.getElementById('toastDua');
                if (!toast) {
                    console.warn('⚠️ توست الدعاء: غير موجود');
                    return;
                }
 
                var textEl = document.getElementById('toastText');
                var iconEl = document.getElementById('toastIcon');
                var closeBtn = document.getElementById('closeToast');
 
                if (!textEl || !iconEl) {
                    console.warn('⚠️ توست الدعاء: عناصر ناقصة');
                    return;
                }
 
                var lastIndex = -1;
                var autoHideTimer = null;
                var isVisible = true;
 
                function getRandomItem() {
                    var newIndex;
                    if (items.length > 1) {
                        do {
                            newIndex = Math.floor(Math.random() * items.length);
                        } while (newIndex === lastIndex);
                    } else {
                        newIndex = 0;
                    }
                    lastIndex = newIndex;
                    return items[newIndex];
                }
 
                function setToastContent() {
                    var item = getRandomItem();
                    textEl.textContent = item.text;
                    iconEl.innerHTML = '<i class="fas ' + item.icon + '"></i>';
                    iconEl.style.color = item.color || '#b68b6b';
                    toast.style.borderRightColor = item.color || '#b68b6b';
                }
 
                function showToast() {
                    toast.classList.remove('hidden');
                    isVisible = true;
                    setToastContent();
                    startAutoHide();
                }
 
                function closeToast() {
                    toast.classList.add('hidden');
                    isVisible = false;
                    clearTimeout(autoHideTimer);
                }
 
                function startAutoHide() {
                    clearTimeout(autoHideTimer);
                    autoHideTimer = setTimeout(function() {
                        if (isVisible) {
                            closeToast();
                            setTimeout(function() {
                                if (!isVisible) {
                                    showToast();
                                }
                            }, 3000);
                        }
                    }, 30000);
                }
 
                if (closeBtn) {
                    closeBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        closeToast();
                        setTimeout(function() {
                            if (!isVisible) {
                                showToast();
                            }
                        }, 3000);
                    });
                }
 
                toast.addEventListener('click', function(e) {
                    if (e.target.closest('.close')) return;
                    closeToast();
                    setTimeout(function() {
                        if (!isVisible) {
                            showToast();
                        }
                    }, 3000);
                });
 
                showToast();
                console.log('✅ توست الدعاء يعمل');
            })();
 
            // ============================================================
            // 2️⃣ كارت الترحيب
            // ============================================================
            (function() {
                var overlay = document.getElementById('welcome-joy-overlay');
                if (!overlay) {
                    console.warn('⚠️ كارت الترحيب: غير موجود');
                    return;
                }
 
                var VISIT_KEY = 'welcome_visit_timer';
                var CLOSE_KEY = 'welcome_closed';
 
                function launchCelebration(containerId) {
                    var cannon = document.getElementById(containerId);
                    if (!cannon) return;
                    cannon.innerHTML = '';
 
                    var colors = ['#f7d794', '#f8c291', '#e8a87c', '#d4a373', '#f3a683', '#ffbe0b', '#fb5607', '#3a86ff', '#a8d5ba', '#b8a9c9', '#ff006e', '#8338ec'];
                    var emojis = ['🌸', '🌺', '✨', '⭐', '💫', '♥', '❤️', '🌙', '🦋', '🌈', '🌷', '🌟'];
 
                    for (var i = 0; i < 70; i++) {
                        var c = document.createElement('div');
                        c.className = 'joy-confetti';
                        var angle = Math.random() * 360;
                        var distance = 100 + Math.random() * 350;
                        var tx = Math.cos(angle) * distance;
                        var ty = Math.sin(angle) * distance;
                        var tx2 = Math.cos(angle + (Math.random() - 0.5) * 60) * (distance * 1.3);
                        var ty2 = Math.sin(angle + (Math.random() - 0.5) * 60) * (distance * 1.3);
                        c.style.setProperty('--tx', tx + 'px');
                        c.style.setProperty('--ty', ty + 'px');
                        c.style.setProperty('--tx2', tx2 + 'px');
                        c.style.setProperty('--ty2', ty2 + 'px');
                        c.style.setProperty('--rot', (Math.random() * 720) + 'deg');
                        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                        c.style.animationDuration = (2 + Math.random() * 2.5) + 's';
                        c.style.animationDelay = (Math.random() * 0.8) + 's';
                        c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                        c.style.width = (5 + Math.random() * 12) + 'px';
                        c.style.height = (5 + Math.random() * 12) + 'px';
                        c.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
                        cannon.appendChild(c);
                    }
 
                    for (var j = 0; j < 16; j++) {
                        var el = document.createElement('div');
                        el.className = 'joy-float';
                        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                        el.style.left = (5 + Math.random() * 90) + '%';
                        el.style.top = (10 + Math.random() * 60) + '%';
                        el.style.animationDuration = (4 + Math.random() * 3) + 's';
                        el.style.animationDelay = (Math.random() * 2) + 's';
                        el.style.fontSize = (1 + Math.random() * 1.6) + 'rem';
                        cannon.appendChild(el);
                    }
 
                    for (var k = 0; k < 25; k++) {
                        var sp = document.createElement('div');
                        sp.className = 'joy-sparkle';
                        sp.textContent = ['✦', '✧', '·', '⋆', '✶', '✴'][Math.floor(Math.random() * 6)];
                        sp.style.left = Math.random() * 100 + '%';
                        sp.style.top = Math.random() * 100 + '%';
                        sp.style.color = colors[Math.floor(Math.random() * colors.length)];
                        sp.style.fontSize = (0.5 + Math.random() * 1) + 'rem';
                        sp.style.animationDelay = (Math.random() * 2.5) + 's';
                        sp.style.animationDuration = (1.5 + Math.random() * 2) + 's';
                        cannon.appendChild(sp);
                    }
 
                    setTimeout(function() {
                        cannon.innerHTML = '';
                    }, 5000);
                }
 
                function closeJoyPopup(id) {
                    var el = document.getElementById(id);
                    if (el) {
                        el.style.opacity = '0';
                        setTimeout(function() {
                            el.style.display = 'none';
                            el.style.opacity = '1';
                            localStorage.setItem(CLOSE_KEY, 'true');
                            var cannon = document.getElementById('welcome-confetti-cannon');
                            if (cannon) cannon.innerHTML = '';
                        }, 500);
                    }
                }
 
                window.closeJoyPopup = closeJoyPopup;
 
                function initWelcomeSystem() {
                    if (localStorage.getItem(CLOSE_KEY) === 'true') {
                        console.log('⏭️ تم إغلاق كارت الترحيب يدوياً');
                        return;
                    }
 
                    var now = new Date();
                    var currentTime = now.getTime();
                    var lastVisit = localStorage.getItem(VISIT_KEY);
                    var dayMs = 24 * 60 * 60 * 1000;
 
                    if (!lastVisit) {
                        localStorage.setItem(VISIT_KEY, currentTime);
                        console.log('👋 أول زيارة');
                        return;
                    }
 
                    var diff = currentTime - parseInt(lastVisit);
                    var days = Math.floor(diff / dayMs);
 
                    if (days >= 2) {
                        console.log('📆 غاب ' + days + ' يوم - يظهر الكارت');
 
                        var dayElem = document.getElementById('welcome-days-count');
                        var text = '';
                        if (days === 2) text = 'بقالنا يومين مشفناكش!';
                        else if (days <= 5) text = 'بقالنا ' + days + ' أيام مشفناكش!';
                        else if (days <= 10) text = 'من ' + days + ' يوم مشفناكش!';
                        else text = 'من ' + days + ' يوم! وحشتنا جداً!';
 
                        if (dayElem) dayElem.textContent = text;
                        overlay.style.display = 'flex';
                        launchCelebration('welcome-confetti-cannon');
                        localStorage.setItem(VISIT_KEY, currentTime);
                        localStorage.removeItem(CLOSE_KEY);
 
                        setTimeout(function() {
                            closeJoyPopup('welcome-joy-overlay');
                        }, 5000);
                    } else {
                        console.log('📆 غاب ' + days + ' يوم - أقل من يومين');
                        localStorage.setItem(VISIT_KEY, currentTime);
                    }
                }
 
                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) {
                        closeJoyPopup('welcome-joy-overlay');
                    }
                });
 
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                        setTimeout(initWelcomeSystem, 2000);
                    });
                } else {
                    setTimeout(initWelcomeSystem, 2000);
                }
 
                console.log('🌙 كارت الترحيب يعمل');
            })();
 
            // ============================================================
            // 3️⃣ تذكير الأذكار
            // ============================================================
            (function() {
                var toast = document.getElementById('reminderToast');
                if (!toast) {
                    console.warn('⚠️ تذكير الأذكار: غير موجود');
                    return;
                }
 
                var textEl = document.getElementById('reminderText');
                var iconEl = document.getElementById('reminderIcon');
                var closeBtn = document.getElementById('closeReminderToast');
 
                if (!textEl || !iconEl) {
                    console.warn('⚠️ تذكير الأذكار: عناصر ناقصة');
                    return;
                }
 
                var REMINDER_CONFIG = {
                    morning: {
                        name: 'أذكار الصباح',
                        startHour: 5,
                        endHour: 10,
                        icon: 'fa-sun',
                        color: '#f39c12',
                        backgroundColor: '#fff8e7',
                        borderColor: '#f39c12',
                        message: '🌸 حان وقت أذكار الصباح',
                        link: 'https://allbyatm.shortaccess.com/2026/06/moanis-azkar.html'
                    },
                    evening: {
                        name: 'أذكار المساء',
                        startHour: 17,
                        endHour: 20,
                        icon: 'fa-moon',
                        color: '#2c3e50',
                        backgroundColor: '#f0f4f8',
                        borderColor: '#2c3e50',
                        message: '🌙 حان وقت أذكار المساء',
                        link: 'https://allbyatm.shortaccess.com/2026/06/moanis-azkar.html'
                    },
                    friday: {
                        name: 'سورة الكهف',
                        startHour: 0,
                        endHour: 23,
                        icon: 'fa-book-quran',
                        color: '#1a7a3a',
                        backgroundColor: '#e8f5e9',
                        borderColor: '#1a7a3a',
                        message: '📖 يوم الجمعة - اقرأ سورة الكهف',
                        link: 'https://allbyatm.shortaccess.com/2026/06/moanis-moshaf.html',
                        hadith: 'قال رسول الله ﷺ: "من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين"'
                    }
                };
 
                var currentReminder = null;
                var isToastVisible = false;
 
                function getClosedReminders() {
                    try {
                        var data = localStorage.getItem('closedReminders');
                        return data ? JSON.parse(data) : {};
                    } catch {
                        return {};
                    }
                }
 
                function setClosedReminder(type) {
                    var closed = getClosedReminders();
                    var today = new Date().toDateString();
                    var key = today + '_' + type;
                    closed[key] = true;
                    localStorage.setItem('closedReminders', JSON.stringify(closed));
                }
 
                function isReminderClosed(type) {
                    var closed = getClosedReminders();
                    var today = new Date().toDateString();
                    var key = today + '_' + type;
                    return closed[key] === true;
                }
 
                function isFriday() {
                    return new Date().getDay() === 5;
                }
 
                function closeToast() {
                    toast.classList.remove('show');
                    toast.classList.add('hidden');
                    isToastVisible = false;
                    if (currentReminder) {
                        setClosedReminder(currentReminder);
                        console.log('✅ تم إغلاق ' + currentReminder + ' لهذا اليوم');
                    }
                }
 
                function showToast() {
                    toast.classList.remove('hidden');
                    setTimeout(function() {
                        toast.classList.add('show');
                        isToastVisible = true;
                    }, 200);
                }
 
                if (closeBtn) {
                    closeBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        closeToast();
                    });
                }
 
                toast.addEventListener('click', function(e) {
                    if (e.target.closest('.close')) return;
                    if (currentReminder) {
                        var config = REMINDER_CONFIG[currentReminder];
                        if (config && config.link) {
                            window.open(config.link, '_blank');
                        }
                    }
                    closeToast();
                });
 
                function updateToastContent(reminderType) {
                    var config = REMINDER_CONFIG[reminderType];
                    if (!config) return;
 
                    var now = new Date();
                    var currentHour = now.getHours();
                    var currentMinute = now.getMinutes();
 
                    var timeString = '';
                    var extraText = '';
 
                    if (reminderType === 'friday') {
                        extraText = '<br><span style="font-size:0.65rem;color:#2e7d32;display:block;max-width:300px;margin:4px auto;">' + config.hadith + '</span>';
                        timeString = '🕌 يوم عظيم - اغتنم الأجر';
                    } else if (reminderType === 'morning' || reminderType === 'evening') {
                        var endHour = config.endHour;
                        var remainingMinutes = (endHour * 60) - (currentHour * 60 + currentMinute);
                        if (remainingMinutes > 0) {
                            var hours = Math.floor(remainingMinutes / 60);
                            var minutes = Math.round(remainingMinutes % 60);
                            timeString = '⏰ متبقي ' + (hours > 0 ? hours + ' ساعة و ' : '') + minutes + ' دقيقة';
                        } else {
                            timeString = '⏰ وقت مميز للذكر';
                        }
                    }
 
                    textEl.innerHTML = '<span class="reminder-name" style="color:' + config.color + '">' + config.message + '</span>' + extraText + '<br><span class="time-remaining">' + timeString + '</span><br><span style="font-size:0.6rem;color:#8b7764;">🕌 اضغط للقراءة</span>';
 
                    iconEl.innerHTML = '<i class="fas ' + config.icon + '"></i>';
                    iconEl.style.color = config.color;
                    toast.style.borderTopColor = config.borderColor;
                    toast.style.background = config.backgroundColor;
                }
 
                function checkReminderTime() {
                    var now = new Date();
                    var currentHour = now.getHours();
                    var currentMinute = now.getMinutes();
                    var currentTime = currentHour * 60 + currentMinute;
 
                    console.log('🕐 الوقت الحالي: ' + currentHour + ':' + currentMinute);
 
                    if (isFriday()) {
                        if (!isReminderClosed('friday')) {
                            console.log('🎯 يوم الجمعة - تذكير بسورة الكهف');
                            if (!isToastVisible) {
                                currentReminder = 'friday';
                                updateToastContent('friday');
                                showToast();
                                clearTimeout(window.autoHideTimer);
                                window.autoHideTimer = setTimeout(function() {
                                    if (isToastVisible) closeToast();
                                }, 45000);
                            }
                            return;
                        }
                    }
 
                    var morningStart = REMINDER_CONFIG.morning.startHour * 60;
                    var morningEnd = REMINDER_CONFIG.morning.endHour * 60;
                    var eveningStart = REMINDER_CONFIG.evening.startHour * 60;
                    var eveningEnd = REMINDER_CONFIG.evening.endHour * 60;
 
                    var targetReminder = null;
 
                    if (currentTime >= morningStart && currentTime <= morningEnd) {
                        if (!isReminderClosed('morning')) {
                            targetReminder = 'morning';
                        }
                    }
 
                    if (currentTime >= eveningStart && currentTime <= eveningEnd) {
                        if (!isReminderClosed('evening')) {
                            if (!targetReminder) targetReminder = 'evening';
                        }
                    }
 
                    if (targetReminder) {
                        console.log('🎯 التذكير المستهدف: ' + targetReminder);
                        if (!isToastVisible) {
                            currentReminder = targetReminder;
                            updateToastContent(targetReminder);
                            showToast();
                            clearTimeout(window.autoHideTimer);
                            window.autoHideTimer = setTimeout(function() {
                                if (isToastVisible) closeToast();
                            }, 30000);
                        }
                    } else {
                        if (isToastVisible) closeToast();
                    }
                }
 
                console.log('🌅 بدء تشغيل تذكير الأذكار...');
                console.log('📅 اليوم: ' + (isFriday() ? 'الجمعة 🕌' : new Date().toLocaleDateString('ar-EG', { weekday: 'long' })));
 
                checkReminderTime();
                setInterval(checkReminderTime, 60000);
 
                console.log('✅ تذكير الأذكار يعمل');
            })();
 
// ============================================================
// 🕐 مواقيت الصلاة - نسخة تلقائية 100%
// ============================================================
(function() {
    var toast = document.getElementById('prayerToast');
    if (!toast) {
        console.warn('⚠️ مواقيت الصلاة: غير موجود');
        return;
    }

    var textEl = document.getElementById('prayerText');
    var iconEl = document.getElementById('prayerIcon');
    var closeBtn = document.getElementById('closePrayerToast');

    if (!textEl || !iconEl) {
        console.warn('⚠️ مواقيت الصلاة: عناصر ناقصة');
        return;
    }

    var currentPrayer = null;
    var isToastVisible = false;
    var retryCount = 0;
    var MAX_RETRIES = 3;
    var userCity = 'مكة المكرمة';
    var userLat = 21.4225;
    var userLng = 39.8262;

    // ===== دوال localStorage =====
    function getClosedPrayers() {
        try {
            var data = localStorage.getItem('closedPrayers');
            return data ? JSON.parse(data) : {};
        } catch {
            return {};
        }
    }

    function setClosedPrayer(prayerName) {
        var closed = getClosedPrayers();
        var today = new Date().toDateString();
        var key = today + '_' + prayerName;
        closed[key] = true;
        localStorage.setItem('closedPrayers', JSON.stringify(closed));
    }

    function isPrayerClosed(prayerName) {
        var closed = getClosedPrayers();
        var today = new Date().toDateString();
        var key = today + '_' + prayerName;
        return closed[key] === true;
    }

    // ===== 🔥 تحديد الموقع باستخدام Geolocation API =====
    function getLocation() {
        console.log('🌐 جاري تحديد الموقع عبر المتصفح...');

        if (!navigator.geolocation) {
            console.warn('⚠️ المتصفح لا يدعم تحديد الموقع، استخدام مكة كافتراضي');
            fetchPrayerTimes();
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLat = position.coords.latitude;
                userLng = position.coords.longitude;
                console.log('✅ الموقع تم تحديده بدقة عالية');
                console.log('📍 الإحداثيات: ' + userLat + ', ' + userLng);
                getCityName(userLat, userLng);
            },
            function(error) {
                console.warn('⚠️ فشل تحديد الموقع عبر المتصفح:', error.message);
                console.log('🔄 استخدام طريقة IP كبديل...');
                getLocationByIP();
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
        );
    }

    // ===== جلب اسم المدينة من الإحداثيات =====
    function getCityName(lat, lng) {
        var url = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lng + '&localityLanguage=ar';

        fetch(url)
            .then(function(response) { return response.json(); })
            .then(function(data) {
                if (data && data.city) {
                    userCity = data.city || data.locality || data.principalSubdivision || 'مكة المكرمة';
                    console.log('✅ المدينة: ' + userCity);
                } else {
                    console.warn('⚠️ فشل جلب اسم المدينة، استخدام مكة كافتراضي');
                }
                fetchPrayerTimes();
            })
            .catch(function() {
                console.warn('⚠️ فشل جلب اسم المدينة، استخدام مكة كافتراضي');
                fetchPrayerTimes();
            });
    }

    // ===== طريقة احتياطية (IP API) =====
// ===== طريقة احتياطية موثوقة عبر (ipapi.co أو ipwho.is) =====
function getLocationByIP() {
    console.log('🌐 محاولة تحديد الموقع عبر IP...');

    // استخدام ipwho.is لأنها مجانية وتدعم HTTPS بالكامل
    fetch('https://ipwho.is/')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data && data.success) {
                userLat = data.latitude;
                userLng = data.longitude;
                userCity = data.city || data.region || 'الرياض';
                console.log('✅ المدينة (IP): ' + userCity);
                console.log('📍 الإحداثيات: ' + userLat + ', ' + userLng);
                fetchPrayerTimes();
            } else {
                throw new Error('فشل جلب بيانات IP');
            }
        })
        .catch(function(error) {
            console.warn('⚠️ فشل تحديد الموقع عبر IP، استخدام الرياض كافتراضي');
            userCity = 'الرياض';
            userLat = 24.7136;
            userLng = 46.6753;
            fetchPrayerTimes();
        });
}

    // ===== جلب مواقيت الصلاة =====
    function fetchPrayerTimes() {
        var url = 'https://api.aladhan.com/v1/timings?latitude=' + userLat + '&longitude=' + userLng + '&method=4';
        console.log('📡 جاري جلب مواقيت الصلاة لـ ' + userCity + '...');

        fetch(url)
            .then(function(response) { return response.json(); })
            .then(function(data) {
                if (data && data.code === 200 && data.data && data.data.timings) {
                    retryCount = 0;
                    var timings = data.data.timings;
                    console.log('🕐 مواقيت الصلاة:', timings);
                    processPrayerTimes(timings);
                } else {
                    console.error('❌ تنسيق البيانات غير صحيح');
                    handleError();
                }
            })
            .catch(function(error) {
                console.error('❌ خطأ في جلب البيانات:', error);
                handleError();
            });
    }

    function handleError() {
        retryCount++;
        if (retryCount <= MAX_RETRIES) {
            var waitTime = 5000 * retryCount;
            console.log('🔄 محاولة ' + retryCount + '/' + MAX_RETRIES + ' بعد ' + (waitTime/1000) + ' ثانية');
            setTimeout(fetchPrayerTimes, waitTime);
        } else {
            console.error('❌ فشل الاتصال، المحاولة بعد 5 دقائق');
            setTimeout(fetchPrayerTimes, 300000);
            retryCount = 0;
        }
    }

    // ===== معالجة المواقيت =====
    function processPrayerTimes(timings) {
        var prayerMap = {
            'Fajr': { ar: 'الفجر', color: '#6c5b7b' },
            'Dhuhr': { ar: 'الظهر', color: '#f39c12' },
            'Asr': { ar: 'العصر', color: '#e67e22' },
            'Maghrib': { ar: 'المغرب', color: '#8e44ad' },
            'Isha': { ar: 'العشاء', color: '#2c3e50' }
        };

        var prayerMinutes = {};
        var prayerNames = [];

        var now = new Date();
        var currentMinutes = now.getHours() * 60 + now.getMinutes();
        console.log('🕐 الوقت الحالي: ' + now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0'));
        console.log('📍 ' + userCity);

        for (var en in prayerMap) {
            if (prayerMap.hasOwnProperty(en)) {
                var info = prayerMap[en];
                var timeStr = timings[en];
                if (timeStr && timeStr.indexOf(':') !== -1) {
                    var parts = timeStr.split(':');
                    var minutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
                    prayerMinutes[info.ar] = minutes;
                    prayerNames.push(info.ar);
                    console.log('✅ ' + info.ar + ': ' + timeStr);
                }
            }
        }

        if (prayerNames.length === 0) {
            handleError();
            return;
        }

        var targetPrayer = null;
        var targetTime = null;
        var isAfter = false;

        for (var i = 0; i < prayerNames.length; i++) {
            var name = prayerNames[i];
            var prayerMin = prayerMinutes[name];
            if (prayerMin <= currentMinutes && currentMinutes - prayerMin <= 20) {
                targetPrayer = name;
                targetTime = prayerMin;
                isAfter = true;
                console.log('✅ ' + name + ' بدأت منذ ' + (currentMinutes - prayerMin) + ' دقيقة');
                break;
            }
        }

        if (!targetPrayer) {
            for (var j = 0; j < prayerNames.length; j++) {
                var name2 = prayerNames[j];
                if (prayerMinutes[name2] > currentMinutes) {
                    targetPrayer = name2;
                    targetTime = prayerMinutes[name2];
                    isAfter = false;
                    console.log('✅ الصلاة القادمة: ' + name2 + ' بعد ' + (prayerMinutes[name2] - currentMinutes) + ' دقيقة');
                    break;
                }
            }

            if (!targetPrayer) {
                targetPrayer = 'الفجر';
                targetTime = prayerMinutes['الفجر'] + 1440;
                isAfter = false;
                console.log('✅ الصلاة القادمة: الفجر غداً');
            }
        }

        var diffMinutes = targetTime - currentMinutes;
        if (isAfter) {
            diffMinutes = currentMinutes - targetTime;
        }

        if (isPrayerClosed(targetPrayer)) {
            console.log('⏭️ ' + targetPrayer + ' مغلقة لهذا اليوم');
            for (var k = 0; k < prayerNames.length; k++) {
                var name3 = prayerNames[k];
                if (prayerMinutes[name3] > currentMinutes && !isPrayerClosed(name3)) {
                    var diff = prayerMinutes[name3] - currentMinutes;
                    setTimeout(fetchPrayerTimes, (diff - 20) * 60 * 1000);
                    return;
                }
            }
            return;
        }

        if ((!isAfter && diffMinutes <= 20 && diffMinutes > 0) || (isAfter && diffMinutes <= 20)) {
            var hoursLeft = Math.floor(diffMinutes / 60);
            var minutesLeft = Math.round(diffMinutes % 60);

            var timeString = '';
            if (isAfter) {
                timeString = 'منذ ' + (hoursLeft > 0 ? hoursLeft + ' ساعة و ' : '') + minutesLeft + ' دقيقة';
            } else {
                if (hoursLeft > 0) {
                    timeString = 'بعد ' + hoursLeft + ' ساعة و ' + minutesLeft + ' دقيقة';
                } else {
                    timeString = 'بعد ' + minutesLeft + ' دقيقة';
                }
            }

            var color = '#2d7d46';
            for (var en2 in prayerMap) {
                if (prayerMap.hasOwnProperty(en2)) {
                    if (prayerMap[en2].ar === targetPrayer) {
                        color = prayerMap[en2].color;
                        break;
                    }
                }
            }

            var statusText = isAfter ? 'انتهت صلاة' : 'صلاة';
            textEl.innerHTML = '<span class="prayer-name" style="color:' + color + '">' + statusText + ' ' + targetPrayer + '</span><br><span class="time-remaining">⏱️ ' + timeString + '</span><br><small style="color:#888;font-size:10px;">📍 ' + userCity + '</small>';

            iconEl.textContent = '🕌';
            iconEl.style.color = color;
            toast.style.borderTopColor = color;

            currentPrayer = targetPrayer;

            if (!isToastVisible) {
                showToast();
            }

            clearTimeout(window.autoHideTimer);
            window.autoHideTimer = setTimeout(closeToast, 30000);

        } else if (!isAfter && diffMinutes > 20) {
            if (isToastVisible) closeToast();
            var waitTime2 = (diffMinutes - 20) * 60 * 1000;
            clearTimeout(window.scheduleTimer);
            window.scheduleTimer = setTimeout(fetchPrayerTimes, Math.max(waitTime2, 1000));
            console.log('⏰ تحديث بعد ' + Math.round(waitTime2/60000) + ' دقيقة');
        }
    }

    function closeToast() {
        toast.classList.remove('show');
        toast.classList.add('hidden');
        isToastVisible = false;
        if (currentPrayer) {
            setClosedPrayer(currentPrayer);
            console.log('✅ تم إغلاق ' + currentPrayer);
        }
    }

    function showToast() {
        toast.classList.remove('hidden');
        setTimeout(function() {
            toast.classList.add('show');
            isToastVisible = true;
        }, 200);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeToast();
        });
    }

    toast.addEventListener('click', function(e) {
        if (e.target.closest('#closePrayerToast')) return;
        closeToast();
    });

    console.log('🕌 بدء تشغيل مواقيت الصلاة (تلقائي)...');
    getLocation();
    setInterval(fetchPrayerTimes, 60000);
    console.log('✅ مواقيت الصلاة - شغالة تلقائي 🕌');
})();
    </script>
