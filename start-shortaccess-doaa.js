// dua-toast.js - ملف مستقل للدعاء
(function() {
    'use strict';
    
    // بيانات الأدعية
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
    if (!toast) return;

    var textEl = document.getElementById('toastText');
    var iconEl = document.getElementById('toastIcon');
    var closeBtn = document.getElementById('closeToast');

    if (!textEl || !iconEl) return;

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
                    if (!isVisible) showToast();
                }, 3000);
            }
        }, 30000);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeToast();
            setTimeout(function() {
                if (!isVisible) showToast();
            }, 3000);
        });
    }

    toast.addEventListener('click', function(e) {
        if (e.target.closest('.close')) return;
        closeToast();
        setTimeout(function() {
            if (!isVisible) showToast();
        }, 3000);
    });

    showToast();
})();
