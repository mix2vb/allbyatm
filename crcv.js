    // الدوال الأساسية الحالية
    function previewImage(event) {
        const reader = new FileReader();
        reader.onload = function() {
            const imgElement = document.getElementById('profileImage');
            imgElement.src = reader.result;
            saveData(); 
        }
        if(event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    let currentFontSize = 16;
    
    function changeFontSize(delta) {
        currentFontSize += delta;
        if(currentFontSize < 10) currentFontSize = 10;
        if(currentFontSize > 24) currentFontSize = 24;
        document.getElementById('cvContentArea').style.fontSize = currentFontSize + 'px';
        localStorage.setItem('smart_cv_font_size', currentFontSize);
    }

    function getCVData() {
        let data = {};
        document.querySelectorAll('#cvCoreContainer [data-save]').forEach(el => {
            if (el.tagName === 'IMG') {
                data[el.getAttribute('data-save')] = el.src; 
            } else {
                data[el.getAttribute('data-save')] = el.innerHTML; 
            }
        });
        return data;
    }

    function setCVData(data) {
        document.querySelectorAll('#cvCoreContainer [data-save]').forEach(el => {
            let key = el.getAttribute('data-save');
            if(data[key] !== undefined) {
                if (el.tagName === 'IMG') {
                    el.src = data[key];
                } else {
                    el.innerHTML = data[key];
                }
            }
        });
    }

    function toggleAutoSave(isChecked) {
        if (isChecked) { saveData(); } 
        else { localStorage.removeItem('smart_cv_draft'); }
    }

    function saveData() {
        const toggle = document.getElementById('autoSaveToggle');
        if (toggle && toggle.checked) {
            const data = getCVData();
            localStorage.setItem('smart_cv_draft', JSON.stringify(data));
        }
    }

    function exportJSON() {
        const data = getCVData();
        const userName = document.querySelector('[data-save="name"]').innerText.split(' ')[0] || 'User';
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `CV_${userName}.json`;
        link.click();
    }

    function importJSON(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                setCVData(data);
                Swal.fire('تم الاستيراد!', 'تم تحميل بيانات السيرة الذاتية بنجاح.', 'success');
                saveData(); 
            } catch (err) {
                Swal.fire('خطأ!', 'ملف الاستيراد غير صالح.', 'error');
            }
        };
        reader.readAsText(file);
        event.target.value = ""; 
    }

    function copyCVCode() {
        const cvHTML = document.getElementById('cvCoreContainer').innerHTML;
        navigator.clipboard.writeText(cvHTML).then(() => {
            Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'تم نسخ كود السيرة بنجاح!', showConfirmButton: false, timer: 3000, timerProgressBar: true });
        }).catch(err => {
            Swal.fire('خطأ', 'تعذر نسخ الكود.', 'error');
        });
    }

    async function pasteCVCode() {
        try {
            const text = await navigator.clipboard.readText();
            if (text && text.includes('cv-paper')) {
                document.getElementById('cvCoreContainer').innerHTML = text;
                const newUploadInput = document.getElementById('imageUpload');
                if(!newUploadInput) {
                    const inputHTML = `<input type="file" id="imageUpload" style="display:none" accept="image/*" onchange="previewImage(event)">`;
                    document.querySelector('.sidebar').insertAdjacentHTML('beforeend', inputHTML);
                }
                saveData(); 
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'تم لصق الكود بنجاح!', showConfirmButton: false, timer: 3000, timerProgressBar: true });
            } else {
                Swal.fire('خطأ', 'الكود المنسوخ لا يبدو ككود سيرة ذاتية صالح.', 'error');
            }
        } catch (err) {
            Swal.fire('تنبيه', 'يجب السماح للمتصفح بالوصول إلى الحافظة للصق الكود.', 'warning');
        }
    }

    function resetCV() {
        Swal.fire({
            title: 'هل أنت متأكد؟',
            text: "سيتم مسح البيانات المحفوظة والعودة للبيانات الافتراضية.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'نعم، إعادة تعيين',
            cancelButtonText: 'إلغاء',
            confirmButtonColor: '#dc3545'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('smart_cv_draft');
                location.reload();
            }
        });
    }

    // ==========================================
    // الدوال الجديدة: التنزيل والمشاركة
    // ==========================================

    // إعداد مساحة العمل قبل التصوير/الطباعة
    function prepareForExport() {
        document.activeElement.blur(); // إزالة التحديد عن أي نص
        const cvElement = document.getElementById('cvContentArea');
        cvElement.classList.add('exporting'); // إضافة كلاس التصدير لإظهار التوقيع وإخفاء الحدود
        return cvElement;
    }

    function finishExport() {
        const cvElement = document.getElementById('cvContentArea');
        cvElement.classList.remove('exporting'); // إزالة كلاس التصدير للعودة لوضع التعديل
    }

    // 1. تنزيل كصورة
    function downloadImage() {
        Swal.fire({ title: 'جاري التجهيز...', text: 'يتم إنشاء صورة السيرة الذاتية', allowOutsideClick: false, didOpen: () => { Swal.showLoading() }});
        const cvElement = prepareForExport();
        
        setTimeout(() => {
            html2canvas(cvElement, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
                const link = document.createElement('a');
                const userName = document.querySelector('[data-save="name"]').innerText.split(' ')[0] || 'User';
                link.download = `CV_${userName}_ByATM.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                finishExport();
                Swal.close();
            }).catch(err => {
                finishExport();
                Swal.fire('خطأ', 'تعذر إنشاء الصورة.', 'error');
            });
        }, 500); // تأخير بسيط لضمان تطبيق كلاس الـ exporting
    }

    // 2. تنزيل كـ PDF
    function downloadPDF() {
    // إخفاء كل العناصر غير الضرورية فوراً
    const toolbar = document.querySelector('.smart-toolbar');
    const watermark = document.querySelector('.atm-watermark');
    const footer = document.querySelector('.footer-section');
    
    // إظهار توقيع التصدير
    const cvElement = prepareForExport();

    // تشغيل أمر الطباعة (الذي يسمح بحفظ الملف PDF بجودة 100%)
    window.print();

    // إعادة العناصر بعد إغلاق نافذة الطباعة
    setTimeout(() => {
        finishExport();
    }, 500);
}

    // 3. المشاركة المباشرة كصورة
    async function shareAsImage() {
        Swal.fire({ title: 'جاري التجهيز...', text: 'يتم تجهيز الصورة للمشاركة', allowOutsideClick: false, didOpen: () => { Swal.showLoading() }});
        const cvElement = prepareForExport();

        setTimeout(async () => {
            try {
                const canvas = await html2canvas(cvElement, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
                canvas.toBlob(async (blob) => {
                    const file = new File([blob], 'CV_ByATM.png', { type: 'image/png' });
                    
                    finishExport();
                    Swal.close();

                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        await navigator.share({
                            title: 'السيرة الذاتية',
                            text: 'مرحباً، تفضل بالاطلاع على السيرة الذاتية الخاصة بي.',
                            files: [file]
                        });
                    } else {
                        Swal.fire('ملاحظة', 'جهازك أو متصفحك لا يدعم المشاركة المباشرة للصور. سيتم تنزيل الصورة بدلاً من ذلك.', 'info');
                        const link = document.createElement('a');
                        link.download = 'CV_ByATM.png';
                        link.href = canvas.toDataURL('image/png');
                        link.click();
                    }
                }, 'image/png');
            } catch (error) {
                finishExport();
                Swal.fire('خطأ', 'حدث خطأ أثناء التجهيز للمشاركة.', 'error');
            }
        }, 500);
    }

    // التهيئة عند التحميل
    window.onload = function() {
        const savedFontSize = localStorage.getItem('smart_cv_font_size');
        if (savedFontSize) {
            currentFontSize = parseInt(savedFontSize);
            document.getElementById('cvContentArea').style.fontSize = currentFontSize + 'px';
        }

        const savedDraft = localStorage.getItem('smart_cv_draft');
        if (savedDraft) {
            try {
                const data = JSON.parse(savedDraft);
                setCVData(data);
                document.getElementById('autoSaveToggle').checked = true;
            } catch (e) {
                console.error("خطأ في استعادة البيانات المحفوظة");
            }
        }
    };
