const codesRef = firebase.database().ref('codes'); // نشير إلى العقدة "codes"

document.getElementById('add-code-form').addEventListener('submit', (e) => {
  e.preventDefault(); // نمنع الصفحة من إعادة التحميل عند إرسال النموذج
  const codeValue = document.getElementById('code-value').value; // نحصل على قيمة الكود من النموذج

  codesRef.push({ // نضيف كود جديد كعنصر فريد داخل العقدة "codes"
    value: codeValue, // قيمة الكود
    status: 'available', // حالة الكود (متاح)
    addedBy: firebase.auth().currentUser.uid // معرف المستخدم الذي أضاف الكود
  });

  // يمكنك إضافة رسالة تأكيد هنا
});
()