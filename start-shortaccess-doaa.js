// كلمات وأدعية وأذكار - بداية


 (function() {
    const items = [
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

    const toast = document.getElementById('toastDua');
    const textEl = document.getElementById('toastText');
    const iconEl = document.getElementById('toastIcon');
    const closeBtn = document.getElementById('closeToast');

    let lastIndex = -1;

    function getRandomItem() {
      let newIndex;
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
      const item = getRandomItem();
      textEl.textContent = item.text;
      iconEl.innerHTML = `<i class="fas ${item.icon}"></i>`;
      iconEl.style.color = item.color || '#b68b6b';
      toast.style.borderRightColor = item.color || '#b68b6b';
    }

    function closeToast() {
      toast.classList.add('hidden');
    }

    // إغلاق بالضغط على الزر
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeToast();
    });

    // إغلاق بالضغط على التوست نفسه
    toast.addEventListener('click', function(e) {
      if (e.target.closest('.close')) return;
      closeToast();
    });

    // ظهور أول مرة
    setToastContent();

    // إخفاء تلقائي بعد 30 ثانية
    setTimeout(function() {
      closeToast();
    }, 30000);

    console.log('✅ توست الدعاء الصغير يعمل - النصوص ظاهرة بالكامل');
  })();


// كلمات وأدعية وأذكار - نهاية




//<!-- ===== كارت الترحيب - رسالة صغيرة أعلى يسار ===== -->

    const VISIT_KEY = 'welcome_visit_timer';
    
    // ===== 🎊 أنفجار الورقيات =====
    function launchCelebration(containerId) {
        const cannon = document.getElementById(containerId);
        if (!cannon) return;
        cannon.innerHTML = '';
        
        const colors = [
            '#f7d794', '#f8c291', '#e8a87c', '#d4a373', 
            '#f3a683', '#ffbe0b', '#fb5607', '#3a86ff',
            '#a8d5ba', '#b8a9c9', '#ff006e', '#8338ec'
        ];
        
        const emojis = ['🌸', '🌺', '✨', '⭐', '💫', '♥', '❤️', '🌙', '🦋', '🌈', '🌷', '🌟'];
        
        // 1️⃣ كونفيتي أنفجار
        for (let i = 0; i < 70; i++) {
            const c = document.createElement('div');
            c.className = 'joy-confetti';
            
            const angle = Math.random() * 360;
            const distance = 100 + Math.random() * 350;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            const tx2 = Math.cos(angle + (Math.random() - 0.5) * 60) * (distance * 1.3);
            const ty2 = Math.sin(angle + (Math.random() - 0.5) * 60) * (distance * 1.3);
            
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
        
        // 2️⃣ عناصر طافية
        for (let i = 0; i < 16; i++) {
            const el = document.createElement('div');
            el.className = 'joy-float';
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.left = (5 + Math.random() * 90) + '%';
            el.style.top = (10 + Math.random() * 60) + '%';
            el.style.animationDuration = (4 + Math.random() * 3) + 's';
            el.style.animationDelay = (Math.random() * 2) + 's';
            el.style.fontSize = (1 + Math.random() * 1.6) + 'rem';
            cannon.appendChild(el);
        }
        
        // 3️⃣ بريق متلألئ
        for (let i = 0; i < 25; i++) {
            const el = document.createElement('div');
            el.className = 'joy-sparkle';
            el.textContent = ['✦', '✧', '·', '⋆', '✶', '✴'][Math.floor(Math.random() * 6)];
            el.style.left = Math.random() * 100 + '%';
            el.style.top = Math.random() * 100 + '%';
            el.style.color = colors[Math.floor(Math.random() * colors.length)];
            el.style.fontSize = (0.5 + Math.random() * 1) + 'rem';
            el.style.animationDelay = (Math.random() * 2.5) + 's';
            el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
            cannon.appendChild(el);
        }
        
        setTimeout(() => {
            cannon.innerHTML = '';
        }, 5000);
    }
    
    function closeJoyPopup(id) {
        const overlay = document.getElementById(id);
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.style.opacity = '1';
                const cannon = document.getElementById('welcome-confetti-cannon');
                if (cannon) cannon.innerHTML = '';
            }, 500);
        }
    }
    
    // ===== النظام الرئيسي - يعمل تلقائياً =====
    function initWelcomeSystem() {
        const now = new Date();
        const currentTime = now.getTime();
        const lastVisit = localStorage.getItem(VISIT_KEY);
        const dayMs = 24 * 60 * 60 * 1000;
        
        if (!lastVisit) {
            localStorage.setItem(VISIT_KEY, currentTime);
            console.log('👋 أول زيارة');
            return;
        }
        
        const diff = currentTime - parseInt(lastVisit);
        const days = Math.floor(diff / dayMs);
        
        if (days >= 2) {
            console.log(`📆 غاب ${days} يوم - 🎉 يظهر الكارت`);
            
            const overlay = document.getElementById('welcome-joy-overlay');
            const dayElem = document.getElementById('welcome-days-count');
            
            if (overlay && dayElem) {
                let text = '';
                if (days === 2) text = 'بقالنا يومين مشفناكش!';
                else if (days <= 5) text = `بقالنا ${days} أيام مشفناكش!`;
                else if (days <= 10) text = `من ${days} يوم مشفناكش!`;
                else text = `من ${days} يوم! وحشتنا جداً!`;
                
                dayElem.textContent = text;
                overlay.style.display = 'flex';
                launchCelebration('welcome-confetti-cannon');
                localStorage.setItem(VISIT_KEY, currentTime);
                
                setTimeout(() => {
                    closeJoyPopup('welcome-joy-overlay');
                }, 5000);
            }
        } else {
            console.log(`📆 غاب ${days} يوم - أقل من يومين`);
            localStorage.setItem(VISIT_KEY, currentTime);
        }
    }
    
    // ===== إغلاق عند الضغط بالخارج =====
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('joy-main-wrapper')) {
            closeJoyPopup(e.target.id);
        }
    });
    
    // ===== بدء التشغيل التلقائي =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWelcomeSystem);
    } else {
        setTimeout(initWelcomeSystem, 2000);
    }
    
    console.log('🌙 كارت الترحيب يعمل تلقائياً - رسالة صغيرة أعلى يسار 🎊');


//<!-- ===== كارت الترحيب - رسالة صغيرة أعلى يسار ===== -->


//<!-- بداية كود تذكير أذكار الصباح والمساء وسورة الكهف -->


  (function() {
    const toast = document.getElementById('reminderToast');
    const textEl = document.getElementById('reminderText');
    const iconEl = document.getElementById('reminderIcon');
    const closeBtn = document.getElementById('closeReminderToast');

    // ===== إعدادات التوقيت =====
    const REMINDER_CONFIG = {
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
        link: 	  'https://allbyatm.shortaccess.com/2026/06/moanis-azkar.html'
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

    // ===== متغيرات التحكم =====
    let currentReminder = null;
    let isToastVisible = false;

    // ===== تخزين التذكير المغلق في localStorage =====
    function getClosedReminders() {
      try {
        const data = localStorage.getItem('closedReminders');
        return data ? JSON.parse(data) : {};
      } catch {
        return {};
      }
    }
    
    function setClosedReminder(type) {
      const closed = getClosedReminders();
      const today = new Date().toDateString();
      const key = `${today}_${type}`;
      closed[key] = true;
      localStorage.setItem('closedReminders', JSON.stringify(closed));
    }
    
    function isReminderClosed(type) {
      const closed = getClosedReminders();
      const today = new Date().toDateString();
      const key = `${today}_${type}`;
      return closed[key] === true;
    }

    // ===== التحقق من يوم الجمعة =====
    function isFriday() {
      return new Date().getDay() === 5; // 5 = يوم الجمعة
    }

    // ===== دوال التحكم في التوست =====
    function closeToast() {
      toast.classList.remove('show');
      toast.classList.add('hidden');
      isToastVisible = false;
      if (currentReminder) {
        setClosedReminder(currentReminder);
        console.log(`✅ تم إغلاق ${currentReminder} لهذا اليوم`);
      }
    }

    function showToast() {
      toast.classList.remove('hidden');
      setTimeout(function() {
        toast.classList.add('show');
        isToastVisible = true;
      }, 150);
    }

    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeToast();
    });

    toast.addEventListener('click', function(e) {
      if (e.target.closest('.close')) return;
      if (currentReminder) {
        const config = REMINDER_CONFIG[currentReminder];
        if (config && config.link) {
          window.open(config.link, '_blank');
        }
      }
      closeToast();
    });

    // ===== تحديث محتوى التوست =====
    function updateToastContent(reminderType) {
      const config = REMINDER_CONFIG[reminderType];
      if (!config) return;

      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      let timeString = '';
      let extraText = '';
      
      if (reminderType === 'friday') {
        // عرض الحديث الخاص بسورة الكهف
        extraText = `<br><span style="font-size:0.65rem;color:#2e7d32;display:block;max-width:300px;margin:4px auto;">${config.hadith}</span>`;
        timeString = '🕌 يوم عظيم - اغتنم الأجر';
      } else if (reminderType === 'morning' || reminderType === 'evening') {
        const endHour = config.endHour;
        const remainingMinutes = (endHour * 60) - (currentHour * 60 + currentMinute);
        if (remainingMinutes > 0) {
          const hours = Math.floor(remainingMinutes / 60);
          const minutes = Math.round(remainingMinutes % 60);
          timeString = `⏰ متبقي ${hours > 0 ? hours + ' ساعة و ' : ''}${minutes} دقيقة`;
        } else {
          timeString = '⏰ وقت مميز للذكر';
        }
      }

      textEl.innerHTML = `
        <span class="reminder-name" style="color:${config.color}">${config.message}</span>
        ${extraText}
        <br>
        <span class="time-remaining">${timeString}</span>
        <br>
        <span style="font-size:0.6rem;color:#8b7764;">🕌 اضغط للقراءة</span>
      `;
      
      iconEl.innerHTML = `<i class="fas ${config.icon}"></i>`;
      iconEl.style.color = config.color;
      toast.style.borderTopColor = config.borderColor;
      toast.style.background = config.backgroundColor;
    }

    // ===== التحقق من وقت التذكير =====
    function checkReminderTime() {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;

      console.log(`🕐 الوقت الحالي: ${currentHour}:${currentMinute}`);

      // التحقق من يوم الجمعة أولاً
      if (isFriday()) {
        if (!isReminderClosed('friday')) {
          console.log('🎯 يوم الجمعة - تذكير بسورة الكهف');
          if (!isToastVisible) {
            currentReminder = 'friday';
            updateToastContent('friday');
            showToast();
            
            clearTimeout(window.autoHideTimer);
            window.autoHideTimer = setTimeout(function() {
              if (isToastVisible) {
                closeToast();
              }
            }, 45000); // 45 ثانية للحديث الأطول
          }
          // نخرج من الدالة لأن تذكير الجمعة أولوية
          return;
        } else {
          console.log('⏭️ تم إغلاق تذكير سورة الكهف لهذا اليوم');
        }
      }

      // التحقق من وقت الصباح
      const morningStart = REMINDER_CONFIG.morning.startHour * 60;
      const morningEnd = REMINDER_CONFIG.morning.endHour * 60;
      
      // التحقق من وقت المساء
      const eveningStart = REMINDER_CONFIG.evening.startHour * 60;
      const eveningEnd = REMINDER_CONFIG.evening.endHour * 60;

      let targetReminder = null;

      // التحقق من الصباح
      if (currentTime >= morningStart && currentTime <= morningEnd) {
        if (!isReminderClosed('morning')) {
          targetReminder = 'morning';
        } else {
          console.log('⏭️ تم إغلاق أذكار الصباح لهذا اليوم');
        }
      }
      
      // التحقق من المساء
      if (currentTime >= eveningStart && currentTime <= eveningEnd) {
        if (!isReminderClosed('evening')) {
          if (!targetReminder) {
            targetReminder = 'evening';
          }
        } else {
          console.log('⏭️ تم إغلاق أذكار المساء لهذا اليوم');
        }
      }

      if (targetReminder) {
        console.log(`🎯 التذكير المستهدف: ${targetReminder}`);
        if (!isToastVisible) {
          currentReminder = targetReminder;
          updateToastContent(targetReminder);
          showToast();
          
          clearTimeout(window.autoHideTimer);
          window.autoHideTimer = setTimeout(function() {
            if (isToastVisible) {
              closeToast();
            }
          }, 30000);
        }
      } else {
        if (isToastVisible) {
          closeToast();
        }
        
        let nextCheckTime = 60000;
        
        let nextStart = null;
        const currentTotal = currentHour * 60 + currentMinute;
        
        // نأخذ بعين الاعتبار تذكير الجمعة أيضاً
        if (isFriday()) {
          // إذا كان يوم الجمعة ولم يظهر التذكير، نعيد المحاولة كل 5 دقائق
          if (!isReminderClosed('friday')) {
            setTimeout(checkReminderTime, 300000);
            return;
          }
        }
        
        if (currentTotal < morningStart) {
          nextStart = morningStart;
        } else if (currentTotal < eveningStart) {
          nextStart = eveningStart;
        } else if (currentTotal < morningStart + 1440) {
          nextStart = morningStart + 1440;
        }
        
        if (nextStart !== null) {
          const diffMinutes = nextStart - currentTotal;
          if (diffMinutes > 5) {
            const waitTime = (diffMinutes - 5) * 60 * 1000;
            clearTimeout(window.scheduleTimer);
            window.scheduleTimer = setTimeout(checkReminderTime, Math.max(waitTime, 5000));
            console.log(`⏰ سيتم التحديث بعد ${Math.round(waitTime/60000)} دقيقة`);
          } else {
            setTimeout(checkReminderTime, 5000);
          }
        } else {
          setTimeout(checkReminderTime, 60000);
        }
      }
    }

    // ===== بدء التشغيل =====
    console.log('🌅 بدء تشغيل كود تذكير أذكار الصباح والمساء وسورة الكهف...');
    console.log(`📅 اليوم: ${isFriday() ? 'الجمعة 🕌' : new Date().toLocaleDateString('ar-EG', { weekday: 'long' })}`);
    
    setTimeout(checkReminderTime, 1000);
    setInterval(checkReminderTime, 60000);

    console.log('✅ كود التذكير يعمل بنجاح');
    console.log(`🌅 أوقات الصباح: ${REMINDER_CONFIG.morning.startHour}:00 - ${REMINDER_CONFIG.morning.endHour}:00`);
    console.log(`🌙 أوقات المساء: ${REMINDER_CONFIG.evening.startHour}:00 - ${REMINDER_CONFIG.evening.endHour}:00`);
    console.log(`📖 تذكير سورة الكهف: يوم الجمعة طوال اليوم`);
    
  })();

//<!-- نهاية كود تذكير أذكار الصباح والمساء وسورة الكهف -->


//<!-- بداية كود مواقيت الصلاة -->


  (function() {
    const toast = document.getElementById('prayerToast');
    const textEl = document.getElementById('prayerText');
    const iconEl = document.getElementById('prayerIcon');
    const closeBtn = document.getElementById('closePrayerToast');

    // ===== متغيرات التحكم =====
    let currentPrayer = null;
    let currentPrayerTime = null;
    let isToastVisible = false;
    let retryCount = 0;
    const MAX_RETRIES = 3;
    let userCity = 'الرياض';
    let userCountry = 'السعودية';
    let userTimezone = 'Asia/Riyadh';
    
    // إحداثيات الرياض
    const RIYADH_LAT = 24.7136;
    const RIYADH_LNG = 46.6753;
    
    // ===== تخزين الصلوات المغلقة =====
    function getClosedPrayers() {
      try {
        const data = localStorage.getItem('closedPrayers');
        return data ? JSON.parse(data) : {};
      } catch {
        return {};
      }
    }
    
    function setClosedPrayer(prayerName) {
      const closed = getClosedPrayers();
      const today = new Date().toDateString();
      const key = `${today}_${prayerName}`;
      closed[key] = true;
      localStorage.setItem('closedPrayers', JSON.stringify(closed));
    }
    
    function isPrayerClosed(prayerName) {
      const closed = getClosedPrayers();
      const today = new Date().toDateString();
      const key = `${today}_${prayerName}`;
      return closed[key] === true;
    }

    // ===== جلب التوقيت الصحيح من السيرفر =====
    function getAccurateTime() {
      return fetch(`https://worldtimeapi.org/api/timezone/${userTimezone}`)
        .then(response => {
          if (!response.ok) throw new Error('فشل جلب التوقيت');
          return response.json();
        })
        .then(data => {
          if (data && data.utc_datetime) {
            const serverTime = new Date(data.utc_datetime);
            console.log(`🕐 التوقيت الصحيح من السيرفر: ${serverTime.toLocaleString()}`);
            return serverTime;
          }
          throw new Error('تنسيق غير صحيح');
        })
        .catch(() => {
          console.warn('⚠️ فشل جلب التوقيت من السيرفر، استخدام توقيت الجهاز');
          return new Date();
        });
    }

    // ===== جلب الموقع عن طريق IP =====
    function getLocationByIP() {
      console.log('🌐 جاري تحديد الموقع عن طريق IP...');
      
      fetch('https://ip-api.com/json/')
        .then(response => response.json())
        .then(data => {
          console.log('📍 بيانات الموقع:', data);
          
          if (data && data.status === 'success') {
            const lat = data.lat;
            const lng = data.lon;
            const city = data.city || 'الرياض';
            const country = data.country || 'السعودية';
            const timezone = data.timezone || 'Asia/Riyadh';
            
            userCity = city;
            userCountry = country;
            userTimezone = timezone;
            
            console.log(`✅ المدينة: ${city}, الدولة: ${country}`);
            console.log(`🕐 المنطقة الزمنية: ${timezone}`);
            console.log(`📍 الإحداثيات: ${lat}, ${lng}`);
            
            getAccurateTime().then(serverTime => {
              fetchPrayerTimes(lat, lng, serverTime);
            });
          } else {
            console.warn('⚠️ فشل تحديد الموقع، استخدام الرياض');
            userCity = 'الرياض';
            getAccurateTime().then(serverTime => {
              fetchPrayerTimes(RIYADH_LAT, RIYADH_LNG, serverTime);
            });
          }
        })
        .catch(() => {
          console.warn('⚠️ فشل جلب IP، استخدام الرياض');
          userCity = 'الرياض';
          getAccurateTime().then(serverTime => {
            fetchPrayerTimes(RIYADH_LAT, RIYADH_LNG, serverTime);
          });
        });
    }

    // ===== جلب مواقيت الصلاة =====
    function fetchPrayerTimes(lat, lng, currentTime) {
      const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=4`;
      console.log('📡 جاري جلب المواقيت...');
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data && data.code === 200 && data.data && data.data.timings) {
            retryCount = 0;
            const timings = data.data.timings;
            console.log('🕐 مواقيت الصلاة:', timings);
            processPrayerTimes(timings, currentTime);
          } else {
            console.error('❌ تنسيق البيانات غير صحيح');
            handleError();
          }
        })
        .catch(error => {
          console.error('❌ خطأ في جلب البيانات:', error);
          handleError();
        });
    }

    function handleError() {
      retryCount++;
      if (retryCount <= MAX_RETRIES) {
        const waitTime = 5000 * retryCount;
        console.log(`🔄 محاولة ${retryCount}/${MAX_RETRIES} بعد ${waitTime/1000} ثانية`);
        setTimeout(getPrayerTimes, waitTime);
      } else {
        console.error('❌ فشل الاتصال، المحاولة بعد 5 دقائق');
        setTimeout(getPrayerTimes, 300000);
        retryCount = 0;
      }
    }

    function processPrayerTimes(timings, currentTime) {
      const prayerMap = {
        'Fajr': { ar: 'الفجر', color: '#6c5b7b' },
        'Dhuhr': { ar: 'الظهر', color: '#f39c12' },
        'Asr': { ar: 'العصر', color: '#e67e22' },
        'Maghrib': { ar: 'المغرب', color: '#8e44ad' },
        'Isha': { ar: 'العشاء', color: '#2c3e50' }
      };
      
      const prayerMinutes = {};
      const prayerNames = [];
      
      const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
      console.log(`🕐 الوقت الحالي: ${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`);
      console.log(`📍 ${userCity}`);
      
      for (const [en, info] of Object.entries(prayerMap)) {
        const timeStr = timings[en];
        if (timeStr && timeStr.includes(':')) {
          const parts = timeStr.split(':');
          const minutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
          prayerMinutes[info.ar] = minutes;
          prayerNames.push(info.ar);
          console.log(`✅ ${info.ar}: ${timeStr}`);
        }
      }
      
      if (prayerNames.length === 0) {
        handleError();
        return;
      }
      
      let targetPrayer = null;
      let targetTime = null;
      let isAfter = false;
      
      for (const name of prayerNames) {
        const prayerMin = prayerMinutes[name];
        if (prayerMin <= currentMinutes && currentMinutes - prayerMin <= 20) {
          targetPrayer = name;
          targetTime = prayerMin;
          isAfter = true;
          console.log(`✅ ${name} بدأت منذ ${currentMinutes - prayerMin} دقيقة`);
          break;
        }
      }
      
      if (!targetPrayer) {
        for (const name of prayerNames) {
          if (prayerMinutes[name] > currentMinutes) {
            targetPrayer = name;
            targetTime = prayerMinutes[name];
            isAfter = false;
            console.log(`✅ الصلاة القادمة: ${name} بعد ${prayerMinutes[name] - currentMinutes} دقيقة`);
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
      
      let diffMinutes = targetTime - currentMinutes;
      if (isAfter) {
        diffMinutes = currentMinutes - targetTime;
      }
      
      if (isPrayerClosed(targetPrayer)) {
        console.log(`⏭️ ${targetPrayer} مغلقة لهذا اليوم`);
        for (const name of prayerNames) {
          if (prayerMinutes[name] > currentMinutes && !isPrayerClosed(name)) {
            const diff = prayerMinutes[name] - currentMinutes;
            setTimeout(getPrayerTimes, (diff - 20) * 60 * 1000);
            return;
          }
        }
        return;
      }
      
      if ((!isAfter && diffMinutes <= 20 && diffMinutes > 0) || (isAfter && diffMinutes <= 20)) {
        const hoursLeft = Math.floor(diffMinutes / 60);
        const minutesLeft = Math.round(diffMinutes % 60);
        
        let timeString = '';
        if (isAfter) {
          timeString = `منذ ${hoursLeft > 0 ? hoursLeft + ' ساعة و ' : ''}${minutesLeft} دقيقة`;
        } else {
          if (hoursLeft > 0) {
            timeString = `بعد ${hoursLeft} ساعة و ${minutesLeft} دقيقة`;
          } else {
            timeString = `بعد ${minutesLeft} دقيقة`;
          }
        }
        
        let color = '#2d7d46';
        for (const [en, info] of Object.entries(prayerMap)) {
          if (info.ar === targetPrayer) {
            color = info.color;
            break;
          }
        }
        
        const statusText = isAfter ? 'انتهت صلاة' : 'صلاة';
        textEl.innerHTML = `
          <span class="prayer-name" style="color:${color}">${statusText} ${targetPrayer}</span>
          <br>
          <span class="time-remaining">⏱️ ${timeString}</span>
          <br>
          <small style="color:#888;font-size:10px;">📍 ${userCity}</small>
        `;
        
        iconEl.textContent = '🕌';
        iconEl.style.color = color;
        iconEl.style.textShadow = 'none';
        iconEl.style.filter = 'none';
        toast.style.borderTopColor = color;
        
        currentPrayer = targetPrayer;
        currentPrayerTime = targetTime;
        
        if (!isToastVisible) {
          showToast();
        }
        
        clearTimeout(window.autoHideTimer);
        window.autoHideTimer = setTimeout(closeToast, 30000);
        
      } else if (!isAfter && diffMinutes > 20) {
        if (isToastVisible) closeToast();
        const waitTime = (diffMinutes - 20) * 60 * 1000;
        clearTimeout(window.scheduleTimer);
        window.scheduleTimer = setTimeout(getPrayerTimes, Math.max(waitTime, 1000));
        console.log(`⏰ تحديث بعد ${Math.round(waitTime/60000)} دقيقة`);
      }
    }

    function closeToast() {
      toast.classList.remove('show');
      toast.classList.add('hidden');
      isToastVisible = false;
      if (currentPrayer) {
        setClosedPrayer(currentPrayer);
        console.log(`✅ تم إغلاق ${currentPrayer}`);
      }
    }

    function showToast() {
      toast.classList.remove('hidden');
      setTimeout(function() {
        toast.classList.add('show');
        isToastVisible = true;
      }, 150);
    }

    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeToast();
    });

    toast.addEventListener('click', function(e) {
      if (e.target.closest('#closePrayerToast')) return;
      closeToast();
    });

    // ===== بدء التشغيل =====
    function getPrayerTimes() {
      getLocationByIP();
    }
    
    getPrayerTimes();
    setInterval(getPrayerTimes, 60000);

    console.log('✅ مواقيت الصلاة - شغالة 🕌');
    console.log(`📍 المدينة: ${userCity}`);
  })();





//<!-- نهاية كود مواقيت الصلاة -->





