<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import emailjs from "emailjs-com";

const name = ref("");
const email = ref("");
const message = ref("");

const sending = ref(false);
const success = ref(false);
const error = ref(false);

const sendEmail = () => {
  sending.value = true;
  success.value = false;
  error.value = false;

  emailjs
    .send(
      "service_u6uv8jn",
      "template_cxb5opo",
      {
        name: name.value,
        email: email.value,
        message: message.value,
      },
      "VNSRYCIZSZ7PLD0qQ"
    )
    .then(() => {
      sending.value = false;
      success.value = true;

      // Clear form
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch(() => {
      sending.value = false;
      error.value = true;
    });
};
onMounted(() => {
  // Fade in the whole section
  gsap.from(".contact-container", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  });

  // Subtle wave float for the image
  gsap.to(".media", {
    y: 15,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});
</script>

<template>

  <section class="contact-section">
    
    <div class="contact-container shadow-lg rounded-lg">

      <!-- LEFT — IMAGE / VIDEO -->
      <div class="left-media">
        <!-- Replace with your slideshow component or video -->
        <img src="/portfolio9.webp" alt="Contact Visual" class="media" />
      </div>

      <!-- RIGHT — CONTACT FORM -->
      <div class="right-form">
        <h1 class="title">Contact Me</h1>
        <p class="subtitle">Feel free to reach out!</p>

        <form class="form" @submit.prevent="sendEmail">
          <label>
  Full Name
  <input type="text" placeholder="Your name" v-model="name" required />
</label>

<label>
  Email Address
  <input type="email" placeholder="you@example.com" v-model="email" required />
</label>

<label>
  Message
  <textarea placeholder="Enter your message here" v-model="message" required></textarea>
</label>

          <button type="submit" class="submit-btn">{{ sending ? "Sending..." : "Send Message" }}</button>
          <p v-if="success" style="color: green; margin-top: 0.5rem;">
            Message sent successfully!
            </p>

            <p v-if="error" style="color: red; margin-top: 0.5rem;">
            Something went wrong. Please try again.
            </p>
          <!--
        <div class="newsletter-optin">
            <input type="checkbox" id="newsletter">
            <label for="newsletter">I would like to subscribe to the newsletter</label>
        </div>
-->
        </form>
      </div>

    </div>

  </section>

</template>

<style scoped>
.contact-section {
  padding: 4rem 2rem;
  background: var(--color-primary-light);
  display: flex;
  justify-content: center;
}

.contact-container {
  display: flex;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;
}

/* LEFT MEDIA */
.left-media {
  flex: 1;
  border-radius: 1.2rem;
  overflow: hidden;
}

.media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* RIGHT FORM */
.right-form {
  flex: 1;
  background: var(--color-white);
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-black);
}

.subtitle {
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 1.5rem;
  color: var(--color-black);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-black);
}

input,
textarea {
  margin-top: 0.4rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: #fafafa;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-btn {
  background: var(--color-black);
  color: var(--color-white);
  padding: 0.9rem;
  border-radius: 0.6rem;
  font-weight: 600;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  opacity: 0.85;
}
.newsletter-optin {
  display: flex;
 margin: 0; 
  align-items: center;   
  gap: 0.6rem;
  margin-top: 0.5rem;
}
.newsletter-optin input {
  width: 18px;
  height: 18px;
  cursor: pointer;
   margin: 0; 
    accent-color: black;
}

.newsletter-optin label {
  font-size: 0.95rem;
  cursor: pointer;
  opacity: 0.85;
}


/* RESPONSIVE */
@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
  }

  .left-media {
    height: 260px;
  }
}
</style>
