
document.addEventListener('DOMContentLoaded', () => {
    const savedNum = localStorage.getItem('byatm_wa_num');
    const btnSave = document.getElementById('btnSaveWa');
    if(savedNum && btnSave) {
        document.getElementById('waNumber').value = savedNum;
        btnSave.classList.add('save-active');
        btnSave.innerHTML = '<i class="fas fa-check"></i>';
    }
});

function showCustomToast(msg, type = 'error') {
    const toast = document.getElementById('toastAlert');
    const msgSpan = document.getElementById('toastMsg');
    const icon = document.getElementById('toastIcon');

    toast.className = `custom-toast show-toast toast-${type}`;
    if(type === 'error') icon.className = 'fas fa-exclamation-triangle';
    else if(type === 'success') icon.className = 'fas fa-check-circle';
    else icon.className = 'fas fa-info-circle';
    
    msgSpan.innerText = msg;
    setTimeout(() => { toast.classList.remove('show-toast'); }, 4000);
}

async function runSmartScan() {
    const urlInput = document.getElementById('mapUrlInput').value.trim();
    if (!urlInput) { showCustomToast("فضلاً، أدخل الرابط أو الإحداثيات أولاً!", "error"); return; }

    const coordRegex = /(-?\d+\.\d{4,})\s*,\s*(-?\d+\.\d{4,})/;
    const match = urlInput.match(coordRegex);
    
    if (match) {
        displayAdvancedResults(match[1], match[2]);
        return;
    }
    processServerScan(urlInput);
}

async function processServerScan(urlInput) {
    const loadBox = document.getElementById('loadingBox');
    const stepText = document.getElementById('loadingStepText');
    const resBox = document.getElementById('successResultBox');
    const btnUrl = document.getElementById('btnScanUrl');
    
    resBox.style.display = 'none';
    loadBox.style.display = 'block';
    btnUrl.disabled = true;

    const scanPhases = ["جارِ الاتصال بالخوادم...", "تحليل الرابط المختصر...", "استخراج البيانات..."];
    let phaseIdx = 0;
    stepText.innerText = scanPhases[0];
    const loadTimer = setInterval(() => { 
        phaseIdx++;
        if(phaseIdx < scanPhases.length) stepText.innerText = scanPhases[phaseIdx]; 
    }, 1000);

    try {
        const SERVER_API = "https://script.google.com/macros/s/AKfycbws2GvGMyVtRaLD2Gi1E1w_fA3JE6Wpsb_6Goe0dQJJlggYS7AnqI28O7CdvFWwzgFr/exec"; 
        const response = await fetch(`${SERVER_API}?url=${encodeURIComponent(urlInput)}`);
        const data = await response.json();
        
        clearInterval(loadTimer);
        btnUrl.disabled = false;

        if (data.success) {
            displayAdvancedResults(data.lat, data.lng);
        } else {
            throw new Error(data.message || "خطأ غير معروف من الخادم");
        }
    } catch (error) {
        clearInterval(loadTimer);
        loadBox.style.display = 'none';
        btnUrl.disabled = false;
        let errMsg = error.message;
        if (errMsg === "Failed to fetch") errMsg = "مشكلة في الاتصال بالإنترنت.";
        showCustomToast("فشل الفحص: " + errMsg, "error");
    }
}

function getMyLocation() {
    if (navigator.geolocation) {
        showCustomToast("جاري البحث عن موقعك، يرجى الموافقة...", "info");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude.toFixed(6);
                const lng = position.coords.longitude.toFixed(6);
                document.getElementById('mapUrlInput').value = `[الموقع: ${lat}, ${lng}]`;
                displayAdvancedResults(lat, lng);
                showCustomToast("تم تحديد موقعك بنجاح!", "success");
            },
            (error) => {
                showCustomToast("تعذر تحديد موقعك. تأكد من تفعيل الـ GPS وصلاحيات المتصفح.", "error");
            },
            { enableHighAccuracy: true }
        );
    } else {
        showCustomToast("متصفحك لا يدعم خاصية تحديد الموقع.", "error");
    }
}

async function displayAdvancedResults(lat, lng) {
    const loadBox = document.getElementById('loadingBox');
    const resBox = document.getElementById('successResultBox');
    const locNameElem = document.getElementById('locationName');
    
    loadBox.style.display = 'none';
    resBox.style.display = 'block';

    // تصحيح عرض الإحداثيات
    document.getElementById('finalOutputCoords').innerText = `${parseFloat(lat).toFixed(6)}, ${parseFloat(lng).toFixed(6)}`;
    
    // تصحيح رابط جوجل ماب (استخدام Backticks و $)
    const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
    document.getElementById('finalMapsLink').value = mapsLink;

    locNameElem.innerText = "جاري جلب اسم المنطقة...";
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`);
        const data = await response.json();
        
        if(data && data.display_name) {
            const parts = data.display_name.split(/,|،/);
            locNameElem.innerText = parts.slice(0, 3).map(p => p.trim()).join('، ');
        } else {
            locNameElem.innerText = "موقع جغرافي (بدون اسم مسجل)";
        }
    } catch(e) {
        locNameElem.innerText = "موقع جغرافي محدد بالإحداثيات";
    }
}

function copyToClip(elementId, successMsg) {
    const txt = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(txt).then(() => { showCustomToast(successMsg, "success"); });
}

function copyInputToClip(elementId, successMsg) {
    const input = document.getElementById(elementId);
    input.select();
    input.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(input.value).then(() => { showCustomToast(successMsg, "success"); });
}

document.getElementById('mapUrlInput').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') runSmartScan();
});

function openMapPin() {
    const coordsText = document.getElementById('finalOutputCoords').innerText;
    // استخراج الأرقام فقط
    const match = coordsText.match(/(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/);
    if(match) {
        window.open(`https://www.google.com/maps?q=${match[1]},${match[2]}`, '_blank');
    } else {
        showCustomToast("لا توجد إحداثيات لفتحها", "error");
    }
}

function showWhatsAppConfig() {
    const configDiv = document.getElementById('whatsappConfig');
    configDiv.style.display = configDiv.style.display === 'none' ? 'block' : 'none';
}

function toggleSaveWa() {
    const numInput = document.getElementById('waNumber').value.trim();
    const btnSave = document.getElementById('btnSaveWa');
    
    if (localStorage.getItem('byatm_wa_num') === numInput && numInput !== "") {
        localStorage.removeItem('byatm_wa_num');
        btnSave.classList.remove('save-active');
        btnSave.innerHTML = '<i class="fas fa-save"></i>';
        showCustomToast("تم إيقاف الحفظ", "info");
    } else {
        if(!numInput) { showCustomToast("أدخل الرقم أولاً", "error"); return; }
        localStorage.setItem('byatm_wa_num', numInput);
        btnSave.classList.add('save-active');
        btnSave.innerHTML = '<i class="fas fa-check"></i>';
        showCustomToast("تم الحفظ بنجاح", "success");
    }
}

function sendToWhatsAppApp() {
    const coordsText = document.getElementById('finalOutputCoords').innerText;
    const match = coordsText.match(/(-?\d+\.\d+),\s*(-?\d+\.\d+)/);
    if(!match) { showCustomToast("لا توجد بيانات للإرسال", "error"); return; }

    const num = document.getElementById('waNumber').value.trim();
    if(!num) { showCustomToast("فضلاً أدخل رقم الواتساب", "error"); return; }

    const lat = match[1]; const lng = match[2];
    const locName = document.getElementById('locationName').innerText;
    
    const text = `📍 تم استخراج الموقع بواسطة ByATM\n\n🏢 المنطقة: ${locName}\n🗺️ الإحداثيات: [الموقع: ${lat}, ${lng}]\n\n🔗 الخريطة:\nhttps://maps.app.goo.gl/pt5hLTNdmHks4Fyg7${lat},${lng}`;
    const encodedText = encodeURIComponent(text);
    
// استخدام البروتوكول المباشر لفتح التطبيق
    const whatsappUrl = `whatsapp://send?phone=${num}&text=${encodedText}`;
    
    // محاولة فتح التطبيق
    window.location.href = whatsappUrl;

    // ملاحظة: إذا لم يفتح التطبيق في بعض المتصفحات، يمكنك استخدام هذا البديل كاحتياطي:
    // window.open(`https://wa.me/${num}?text=${encodedText}`, '_blank');
}

function shareGeneral() {
    const coordsText = document.getElementById('finalOutputCoords').innerText;
    const match = coordsText.match(/(-?\d+\.\d+),\s*(-?\d+\.\d+)/);
    if(!match) { showCustomToast("لا توجد بيانات للمشاركة", "error"); return; }

    const lat = match[1]; const lng = match[2];
    const locName = document.getElementById('locationName').innerText;
    const mapLink = `https://maps.app.goo.gl/pt5hLTNdmHks4Fyg7${lat},${lng}`;
    
    const shareData = {
        title: 'موقع مستخرج بواسطة ByATM',
        text: `🏢 المنطقة: ${locName}\n🗺️ الإحداثيات: [الموقع: ${lat}, ${lng}]\n`,
        url: mapLink
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showCustomToast("تم فتح قائمة المشاركة", "success"))
            .catch((error) => console.log('خطأ في المشاركة', error));
    } else {
        showCustomToast("متصفحك لا يدعم قائمة المشاركة العامة", "error");
    }
}

// 🔴 الدالة المحسنة لاستخراج الإحداثيات من الروابط 🔴
// دالة استخراج ذكية تبحث عن الأرقام العشرية أولاً
function extractCoords(input) {
    if (!input) return null;
    let str = input.trim();
    // البحث عن أرقام عشرية واضحة (24.123, 46.123)
    let regex = /(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/;
    let match = str.match(regex);
    if(match) return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
    
    // محاولة البحث عن أي أرقام عشرية متتالية (بدون فاصلة)
    let looseMatches = str.match(/-?\d+\.\d+/g);
    if (looseMatches && looseMatches.length >= 2) {
        return { lat: parseFloat(looseMatches[0]), lng: parseFloat(looseMatches[1]) };
    }
    return null; // لو مفيش أرقام خالص، هنلجأ للسيرفر في الدالة التالية
}

async function calculateDistance() {
    const p1Input = document.getElementById('point1').value.trim();
    const p2Input = document.getElementById('point2').value.trim();
    const resDiv = document.getElementById('distResult');
    
    if (!p1Input || !p2Input) {
        showCustomToast("يرجى إدخال البيانات في المربعين", "error");
        return;
    }

    // دالة داخلية للحصول على الإحداثيات سواء من النص أو من السيرفر
    async function getPoint(input) {
        let coords = extractCoords(input);
        if (coords) return coords; // لو الأرقام موجودة في النص، استخدمها فوراً

        // لو الأرقام مش موجودة (زي روابط /1)، ابعت للسيرفر يفك الرابط
        try {
            const SERVER_API = "https://script.google.com/macros/s/AKfycbws2GvGMyVtRaLD2Gi1E1w_fA3JE6Wpsb_6Goe0dQJJlggYS7AnqI28O7CdvFWwzgFr/exec"; 
            let response = await fetch(`${SERVER_API}?url=${encodeURIComponent(input)}`);
            let data = await response.json();
            if (data.success) return { lat: parseFloat(data.lat), lng: parseFloat(data.lng) };
        } catch (e) { console.error("Error fetching from server", e); }
        return null;
    }

    showCustomToast("جارِ فحص الروابط وحساب المسافة...", "info");

    const pt1 = await getPoint(p1Input);
    const pt2 = await getPoint(p2Input);

    if (!pt1 || !pt2) {
        showCustomToast("تعذر استخراج الإحداثيات من أحد الروابط، تأكد من صحتها", "error");
        return;
    }

    // حساب المسافة (Haversine Formula)
    const R = 6371; 
    const dLat = (pt2.lat - pt1.lat) * Math.PI / 180;
    const dLon = (pt2.lng - pt1.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(pt1.lat * Math.PI / 180) * Math.cos(pt2.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; 

    resDiv.style.display = 'block';
    resDiv.innerHTML = `<i class="fas fa-route"></i> المسافة التقريبية: <span style="color:#2ecc71">${d.toFixed(2)} كم</span>`;
    showCustomToast("تم الحساب بنجاح", "success");
}
