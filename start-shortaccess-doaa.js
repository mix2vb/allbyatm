// كلمات وأدعية وأذكار - بداية

<script>
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

</script>
// كلمات وأدعية وأذكار - نهاية




//<!-- ===== كارت الترحيب - رسالة صغيرة أعلى يسار ===== -->
<script>
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
</script>

//<!-- ===== كارت الترحيب - رسالة صغيرة أعلى يسار ===== -->


//<!-- بداية كود تذكير أذكار الصباح والمساء وسورة الكهف -->

<script>
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
</script>
//<!-- نهاية كود تذكير أذكار الصباح والمساء وسورة الكهف -->


//<!-- بداية كود مواقيت الصلاة -->

<script>
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
    let userTimezone = 'Asia/Riyadh'; // افتراضي
    let userCity = 'مكة المكرمة';
    
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

    // ===== جلب الموقع والتوقيت المحلي عن طريق IP =====
    function getLocationAndTimeByIP() {
      console.log('🌐 جاري تحديد الموقع والتوقيت عن طريق IP...');
      
      // نستخدم ip-api.com للحصول على الموقع والتوقيت معاً
      fetch('http://ip-api.com/json/', {
        mode: 'cors'
      })
      .then(response => {
        if (!response.ok) throw new Error('فشل جلب بيانات IP');
        return response.json();
      })
      .then(data => {
        console.log('📍 بيانات الموقع:', data);
        
        if (data && data.status === 'success') {
          const lat = data.lat;
          const lng = data.lon;
          const city = data.city;
          const country = data.country;
          const timezone = data.timezone;
          
          userCity = city || 'مكة المكرمة';
          userTimezone = timezone || 'Asia/Riyadh';
          
          console.log(`✅ المدينة: ${city}, الدولة: ${country}`);
          console.log(`🕐 المنطقة الزمنية: ${timezone}`);
          console.log(`📍 الإحداثيات: ${lat}, ${lng}`);
          
          // جلب التوقيت المحلي من نفس السيرفر
          fetch(`http://worldtimeapi.org/api/timezone/${timezone}`, {
            mode: 'cors'
          })
          .then(response => response.json())
          .then(timeData => {
            if (timeData && timeData.utc_datetime) {
              const localTime = new Date(timeData.utc_datetime);
              console.log(`🕐 التوقيت المحلي لـ ${city}: ${localTime.toLocaleString()}`);
              fetchPrayerTimes(lat, lng, localTime);
            } else {
              console.warn('⚠️ فشل جلب التوقيت المحلي، استخدام توقيت الجهاز');
              fetchPrayerTimes(lat, lng, new Date());
            }
          })
          .catch(() => {
            console.warn('⚠️ فشل جلب التوقيت من worldtimeapi، استخدام توقيت الجهاز');
            fetchPrayerTimes(lat, lng, new Date());
          });
          
        } else {
          console.warn('⚠️ فشل تحديد الموقع من IP، استخدام موقع مكة كافتراضي');
          fetchPrayerTimes(21.4225, 39.8262, new Date());
        }
      })
      .catch(error => {
        console.warn('⚠️ فشل جلب بيانات IP:', error.message);
        console.log('🔄 محاولة استخدام خدمة IP بديلة...');
        
        // خدمة بديلة
        fetch('https://ipapi.co/json/', {
          mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
          if (data && data.latitude && data.longitude) {
            const lat = data.latitude;
            const lng = data.longitude;
            const city = data.city;
            const timezone = data.timezone;
            
            userCity = city || 'مكة المكرمة';
            userTimezone = timezone || 'Asia/Riyadh';
            
            console.log(`✅ المدينة البديلة: ${city}`);
            console.log(`📍 الإحداثيات: ${lat}, ${lng}`);
            
            fetchPrayerTimes(lat, lng, new Date());
          } else {
            console.warn('⚠️ فشل جميع خدمات IP، استخدام موقع مكة');
            fetchPrayerTimes(21.4225, 39.8262, new Date());
          }
        })
        .catch(() => {
          console.warn('⚠️ جميع خدمات IP فشلت، استخدام موقع مكة');
          fetchPrayerTimes(21.4225, 39.8262, new Date());
        });
      });
    }

    // ===== جلب مواقيت الصلاة =====
    function fetchPrayerTimes(lat, lng, currentTime) {
      // استخدام method=5 (رابطة العالم الإسلامي) مع ضبط المنطقة الزمنية
      const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=5&timezonestring=${userTimezone}`;
      console.log('📡 جاري جلب المواقيت من:', url);
      console.log(`🕐 التوقيت المحلي: ${currentTime.toLocaleString()}`);
      
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('📥 تم استلام بيانات المواقيت بنجاح');
          
          if (data && data.code === 200 && data.data && data.data.timings) {
            retryCount = 0;
            const timings = data.data.timings;
            console.log('🕐 مواقيت الصلاة:', timings);
            
            // استخدام التاريخ المحلي من الـ API
            const date = data.data.date;
            console.log(`📅 التاريخ المحلي: ${date.readable}`);
            
            processPrayerTimes(timings, currentTime);
          } else {
            console.error('❌ تنسيق البيانات غير صحيح:', data);
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
        console.log(`🔄 محاولة إعادة الاتصال (${retryCount}/${MAX_RETRIES}) بعد ${waitTime/1000} ثانية...`);
        setTimeout(getPrayerTimes, waitTime);
      } else {
        console.error('❌ فشل الاتصال بعد عدة محاولات');
        setTimeout(getPrayerTimes, 300000);
        retryCount = 0;
      }
    }

    function processPrayerTimes(timings, currentTime) {
      // ✅ ربط أسماء الصلوات
      const prayerMap = {
        'Fajr': { ar: 'الفجر', color: '#6c5b7b' },
        'Dhuhr': { ar: 'الظهر', color: '#f39c12' },
        'Asr': { ar: 'العصر', color: '#e67e22' },
        'Maghrib': { ar: 'المغرب', color: '#8e44ad' },
        'Isha': { ar: 'العشاء', color: '#2c3e50' }
      };
      
      // تحويل أوقات الصلاة إلى دقائق
      const prayerMinutes = {};
      const prayerNames = [];
      
      for (const [en, info] of Object.entries(prayerMap)) {
        const timeStr = timings[en];
        if (timeStr && typeof timeStr === 'string' && timeStr.includes(':')) {
          const parts = timeStr.split(':');
          if (parts.length === 2) {
            const minutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
            prayerMinutes[info.ar] = minutes;
            prayerNames.push(info.ar);
            console.log(`✅ ${info.ar}: ${timeStr}`);
          }
        }
      }
      
      if (prayerNames.length === 0) {
        console.error('❌ لا توجد أوقات صلاة صالحة');
        handleError();
        return;
      }
      
      // حساب الوقت الحالي من التوقيت المحلي
      const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
      console.log(`🕐 الوقت الحالي: ${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`);
      console.log(`📍 المدينة: ${userCity}`);
      
      // البحث عن الصلاة الحالية أو القادمة
      let targetPrayer = null;
      let targetTime = null;
      let isAfter = false;
      
      // نبحث عن صلاة بدأت خلال الـ 20 دقيقة الماضية
      for (const name of prayerNames) {
        const prayerMin = prayerMinutes[name];
        if (prayerMin <= currentMinutes && currentMinutes - prayerMin <= 20) {
          targetPrayer = name;
          targetTime = prayerMin;
          isAfter = true;
          console.log(`✅ صلاة ${name} بدأت منذ ${currentMinutes - prayerMin} دقيقة`);
          break;
        }
      }
      
      // إذا لم نجد، نبحث عن الصلاة القادمة
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
        
        // لو مفيش صلاة قادمة، يبقى الفجر بكرة
        if (!targetPrayer) {
          targetPrayer = 'الفجر';
          targetTime = prayerMinutes['الفجر'] + 1440;
          isAfter = false;
          console.log('✅ الصلاة القادمة: الفجر غداً');
        }
      }
      
      // حساب الوقت المتبقي أو المنقضي
      let diffMinutes = targetTime - currentMinutes;
      if (isAfter) {
        diffMinutes = currentMinutes - targetTime;
      }
      
      console.log(`🎯 الصلاة المستهدفة: ${targetPrayer}, الفرق: ${diffMinutes} دقيقة`);
      
      // التحقق من أن الصلاة غير مغلقة
      if (isPrayerClosed(targetPrayer)) {
        console.log(`⏭️ صلاة ${targetPrayer} مغلقة لهذا اليوم`);
        for (const name of prayerNames) {
          if (prayerMinutes[name] > currentMinutes && !isPrayerClosed(name)) {
            const diff = prayerMinutes[name] - currentMinutes;
            if (diff > 20) {
              const waitTime = (diff - 20) * 60 * 1000;
              clearTimeout(window.scheduleTimer);
              window.scheduleTimer = setTimeout(getPrayerTimes, Math.max(waitTime, 1000));
            } else {
              setTimeout(getPrayerTimes, 1000);
            }
            return;
          }
        }
        return;
      }
      
      // ===== التحقق من نطاق 20 دقيقة =====
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
        
        // الحصول على لون الصلاة
        let color = '#2d7d46';
        for (const [en, info] of Object.entries(prayerMap)) {
          if (info.ar === targetPrayer) {
            color = info.color;
            break;
          }
        }
        
        // عرض المدينة في التصميم
        updateToastContent(targetPrayer, timeString, color, 'fa-mosque', isAfter);
        currentPrayer = targetPrayer;
        currentPrayerTime = targetTime;
        
        if (!isToastVisible) {
          showToast();
        }
        
        clearTimeout(window.autoHideTimer);
        window.autoHideTimer = setTimeout(function() {
          if (isToastVisible) {
            closeToast();
          }
        }, 30000);
        
      } else if (!isAfter && diffMinutes > 20) {
        if (isToastVisible) {
          closeToast();
        }
        
        const waitTime = (diffMinutes - 20) * 60 * 1000;
        clearTimeout(window.scheduleTimer);
        window.scheduleTimer = setTimeout(getPrayerTimes, Math.max(waitTime, 1000));
        console.log(`⏰ سيتم التحديث بعد ${Math.round(waitTime/60000)} دقيقة`);
        
      } else if (isAfter && diffMinutes > 20) {
        if (isToastVisible) {
          closeToast();
        }
        for (const name of prayerNames) {
          if (prayerMinutes[name] > currentMinutes && !isPrayerClosed(name)) {
            const diff = prayerMinutes[name] - currentMinutes;
            if (diff > 20) {
              const waitTime = (diff - 20) * 60 * 1000;
              clearTimeout(window.scheduleTimer);
              window.scheduleTimer = setTimeout(getPrayerTimes, Math.max(waitTime, 1000));
            } else {
              setTimeout(getPrayerTimes, 1000);
            }
            return;
          }
        }
      }
    }

    function updateToastContent(prayerName, timeString, color, icon, isAfter = false) {
      const statusText = isAfter ? 'انتهت صلاة' : 'صلاة';
      textEl.innerHTML = `
        <span class="prayer-name" style="color:${color}">${statusText} ${prayerName}</span>
        <br>
        <span class="time-remaining">⏱️ ${timeString}</span>
        <br>
        <small style="color:#888;font-size:11px;">📍 ${userCity}</small>
      `;
      iconEl.innerHTML = `<i class="fas fa-mosque"></i>`;
      iconEl.style.color = color;
      toast.style.borderTopColor = color;
    }

    function closeToast() {
      toast.classList.remove('show');
      toast.classList.add('hidden');
      isToastVisible = false;
      if (currentPrayer) {
        setClosedPrayer(currentPrayer);
        console.log(`✅ تم إغلاق صلاة ${currentPrayer} لهذا اليوم`);
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
      closeToast();
    });

    // ===== بدء التشغيل =====
    console.log('🕌 بدء تشغيل كود مواقيت الصلاة...');
    console.log('📌 يعتمد على IP مع التوقيت المحلي للمنطقة');
    
    function getPrayerTimes() {
      getLocationAndTimeByIP();
    }
    
    getPrayerTimes();

    // ===== تحديث كل دقيقتين =====
    setInterval(getPrayerTimes, 120000);

    console.log('✅ تم التفعيل بنجاح 🕌');
  })();
</script>
//<!-- نهاية كود مواقيت الصلاة -->


