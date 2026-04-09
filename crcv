
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
        if (isChecked) {
            saveData();
        } else {
            localStorage.removeItem('smart_cv_draft');
        }
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
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'تم نسخ كود السيرة بنجاح!',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
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

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'تم لصق الكود بنجاح!',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
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

    function shareCV() {
        if (navigator.share) {
            navigator.share({
                title: 'السيرة الذاتية',
                text: 'إليك السيرة الذاتية الخاصة بي:',
                url: window.location.href
            }).catch(console.error);
        } else {
            Swal.fire('عذراً', 'جهازك لا يدعم المشاركة المباشرة، يمكنك طباعتها كـ PDF.', 'info');
        }
    }

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
