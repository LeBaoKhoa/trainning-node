<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2 class="section-title">Liên hệ với tôi</h2>
      <div class="contact-wrapper">
        <div class="contact-info">
          <h3>Hãy kết nối với tôi!</h3>
          <p>Nếu bạn có dự án thú vị hoặc cơ hội hợp tác, đừng ngại liên hệ nhé. 😊</p>
          <ul class="social-links">
            <li>📧 <a href="mailto:your@email.com">your@email.com</a></li>
            <li>💼 <a href="#" target="_blank">LinkedIn</a></li>
            <li>🐙 <a href="#" target="_blank">GitHub</a></li>
          </ul>
        </div>
        <form class="contact-form" @submit.prevent="submit">
          <div class="form-group">
            <label>Tên *</label>
            <input v-model="form.name" type="text" placeholder="Nguyễn Văn A" required />
          </div>
          <div class="form-group">
            <label>Email *</label>
            <input v-model="form.email" type="email" placeholder="example@email.com" required />
          </div>
          <div class="form-group">
            <label>Lời nhắn *</label>
            <textarea v-model="form.message" rows="5" placeholder="Nội dung..." required></textarea>
          </div>
          <button type="submit" class="btn-submit" :disabled="loading">
            {{ loading ? 'Đang gửi...' : 'Gửi tin nhắn 🚀' }}
          </button>
          <p v-if="success" class="success-msg">✅ Gửi thành công! Tôi sẽ phản hồi sớm nhất.</p>
          <p v-if="error" class="error-msg">❌ {{ error }}</p>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { sendContact } from '../services/api';

const form = ref({ name: '', email: '', message: '' });
const loading = ref(false);
const success = ref(false);
const error = ref('');

const submit = async () => {
  loading.value = true; success.value = false; error.value = '';
  try {
    await sendContact(form.value);
    success.value = true;
    form.value = { name: '', email: '', message: '' };
  } catch (e) {
    error.value = e.response?.data?.error || 'Có lỗi xảy ra, vui lòng thử lại.';
  } finally { loading.value = false; }
};
</script>
<style scoped>
.contact-section { background: var(--white); }
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px; align-items: start;
}
.contact-info h3 { font-size: 1.5rem; margin-bottom: 16px; }
.contact-info p { color: var(--gray); margin-bottom: 24px; }
.social-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.social-links li { font-size: 1rem; }
.social-links a { color: var(--primary); font-weight: 600; }
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
label { font-weight: 600; color: var(--dark); }
input, textarea {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px; font-size: 1rem;
  transition: border-color 0.2s;
  font-family: inherit;
}
input:focus, textarea:focus {
  outline: none; border-color: var(--primary);
}
.btn-submit {
  padding: 14px; background: var(--primary);
  color: #fff; border: none; border-radius: 8px;
  font-size: 1rem; font-weight: 700; cursor: pointer;
  transition: background 0.2s;
}
.btn-submit:hover:not(:disabled) { background: #3730a3; }
.btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.success-msg { color: #16a34a; font-weight: 600; }
.error-msg { color: #dc2626; font-weight: 600; }
@media (max-width: 768px) {
  .contact-wrapper { grid-template-columns: 1fr; }
}
</style>
