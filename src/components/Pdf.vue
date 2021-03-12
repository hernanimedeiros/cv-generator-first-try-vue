<template>
  <b-container class="wrapper p-2">
    <b-row>
      <!-- Sidebar -->
      <b-col cols="3" class="sidebar-wrapper">
        <!-- Personal VIP information -->
        <div class="profile-container px-0">
          <!-- Profile photo -->
          <b-avatar
            class="my-3"
            v-bind:src="profileItemsCheck[0].profilePhoto"
            size="120px"
          />
          <!-- Name and Posittion -->
          <h1 class="name">
            {{ profileItemsCheck[0].profileFirstName }} <br />
            {{ profileItemsCheck[0].profileLastName }}
          </h1>
          <h2 class="tagline">{{ profileItemsCheck[0].profilePosition }}</h2>
        </div>

        <!-- Contacts -->
        <div class="contact-container container-block">
          <ul class="list-unstyled contact-list">
            <!-- Email -->
            <li class="email">
              <b-icon icon="mailbox" />
              <a v-bind:href="mailLink" target="_blank">
                {{ profileItemsCheck[0].profileEmail }}
              </a>
            </li>
            <!-- Phone -->
            <li class="phone">
              <b-icon icon="telephone" />
              <a v-bind:href="phoneLink" target="_blank">
                {{ profileItemsCheck[0].profilePhone }}
              </a>
            </li>
            <!-- Adress -->
            <li class="phone">
              <b-icon icon="house" /> {{ profileItemsCheck[0].profileAddress }}
            </li>
          </ul>
        </div>

        <!-- Strengths -->
        <div class="contact-container container-block">
          <b-icon class="mb-2" icon="award" scale="1.5" />
          <h2 class="container-block-title">
            {{ this.content.profileStrength[this.language] }}
          </h2>
          <ul
            v-for="(elementStrength, index) in profileItemsCheck[0]
              .profileStrength"
            v-bind:key="index"
            class="list-unstyled contact-list"
          >
            <li class="email">{{ elementStrength }}</li>
          </ul>
        </div>

        <!-- Education -->
        <div class="education-container container-block text-center">
          <b-icon class="mb-2" icon="book" scale="1.5" />
          <h2 class="container-block-title">
            {{ this.content.educationTitle[this.language] }}
          </h2>
          <div
            class="item"
            v-for="(elementEducation, index) in educationItemsCheck"
            v-bind:key="index"
          >
            <h3 class="degree">{{ elementEducation.educationDescription }}</h3>
            <div class="time">{{ elementEducation.educationDuration }}</div>
            <h4 class="meta">{{ elementEducation.educationTitle }}</h4>
          </div>
        </div>

        <!-- Social network links -->
        <div class="contact-container container-block">
          <b-icon class="mb-2" icon="broadcast" scale="1.5" animation="throb" />
          <h2 class="container-block-title">
            {{ this.content.profileSocialNetwork[this.language] }}
          </h2>
          <ul
            class="list-unstyled contact-list"
            v-for="(elementSocialNetwork, index) in profileItemsCheck[0]
              .profileSocialNetwork"
            v-bind:key="index"
          >
            <li class="website">{{ elementSocialNetwork }}</li>
          </ul>
        </div>

        <!-- Hobbies -->
        <div class="contact-container container-block">
          <b-icon class="mb-2" icon="bicycle" scale="1.5" animation="cylon" />
          <h2 class="container-block-title">
            {{ this.content.profileHobbie[this.language] }}
          </h2>
          <ul
            class="list-unstyled contact-list"
            v-for="(elementHobbie, index) in profileItemsCheck[0].profileHobbie"
            v-bind:key="index"
          >
            <li class="email">{{ elementHobbie }}</li>
          </ul>
        </div>
      </b-col>

      <b-col cols="9" class="main-wrapper">
        <!-- About me -->
        <section class="section summary-section">
          <b-icon class="mb-2" icon="person-fill" scale="1.5" />
          <h2 class="section-title">
            {{ this.content.profileAbout[this.language] }}
          </h2>
          <div class="summary">
            <p>{{ profileItemsCheck[0].profileAbout }}</p>
          </div>
        </section>

        <!-- Experience -->
        <section class="section experiences-section">
          <b-icon class="mb-2" icon="briefcase-fill" scale="1.5" />
          <h2 class="section-title">
            {{ this.content.experienceTitle[this.language] }}
          </h2>
          <div
            class="item"
            v-for="(elementExperience, index) in experienceItemsCheck"
            v-bind:key="index"
          >
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">
                  {{ elementExperience.experienceSubTitle }}
                </h3>
                <div class="time">
                  {{ elementExperience.experienceDuration }}
                </div>
              </div>
              <div class="company">{{ elementExperience.experienceTitle }}</div>
            </div>
            <div class="details">
              <p>{{ elementExperience.experienceDescription }}</p>
            </div>
          </div>
        </section>

        <!-- Skill -->
        <section class="section experiences-section">
          <b-icon class="mb-2" icon="person-lines-fill" scale="1.5" />
          <h2 class="section-title">
            {{ this.content.skillTitle[this.language] }}
          </h2>
          <div
            class="item"
            v-for="(elementSkill, index) in skillItemsCheck"
            v-bind:key="index"
          >
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">{{ elementSkill.skillTitle }}</h3>
              </div>
            </div>
            <div class="details">
              <p>{{ elementSkill.skillDescription }}</p>
            </div>
          </div>
        </section>

        <!-- Course -->
        <section class="section experiences-section">
          <b-icon class="mb-2" icon="pencil-fill" scale="1.5" />
          <h2 class="section-title">
            {{ this.content.courseTitle[this.language] }}
          </h2>
          <div
            class="item"
            v-for="(elementCourse, index) in courseItemsCheck"
            v-bind:key="index"
          >
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">{{ elementCourse.courseTitle }}</h3>
                <div class="time">{{ elementCourse.courseDuration }}</div>
              </div>
            </div>
            <div class="details">
              <p>{{ elementCourse.courseDescription }}</p>
            </div>
          </div>
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Static",
  props: ["content", "language"],
  computed: {
    preferencesCheck() {
      return this.$store.state.preferences.info;
    },
    profileItemsCheck() {
      return this.$store.state.profile.info;
    },
    skillItemsCheck() {
      return this.$store.state.skill.info;
    },
    experienceItemsCheck() {
      return this.$store.state.experience.info;
    },
    educationItemsCheck() {
      return this.$store.state.education.info;
    },
    courseItemsCheck() {
      return this.$store.state.course.info;
    },
    mailLink() {
      let email = String(this.profileItemsCheck[0].profileEmail).replace(
        /\s+/g,
        ""
      );
      const emailPrefix = "mailto:";
      const emailSubject = "?subject=C.V.%msg:";
      return emailPrefix + email + emailSubject;
    },
    phoneLink() {
      let phone = String(this.profileItemsCheck[0].profileEmail).replace(
        /\s+/g,
        ""
      );
      const phonePrefix = "tel:";
      return phonePrefix + phone;
    },
  },
};
</script>

<style scoped>
b-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #545E6C;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,h2,h3,h4,h5,h6 {
  font-weight: 700;
}

a {
  color: darkslateblue;
}

a:hover {
  text-decoration: underline;
  color: purple;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}

a:focus {
  text-decoration: none;
}

p {
  line-height: 1.5;
}

.wrapper {
  max-width: 100vw;
}

.sidebar-wrapper {
  background: lightseagreen;
  text-align: center;
  color: #ffffff;
}

.sidebar-wrapper a {
  color: #ffffff;
}

.sidebar-wrapper .name {
  font-size: 32px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.sidebar-wrapper .tagline {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 1rem;
}

.sidebar-wrapper .contact-list li {
  margin-bottom: 1rem;
}

.sidebar-wrapper .contact-list li:last-child {
  margin-bottom: 0;
}

.sidebar-wrapper .contact-list .email .svg-inline--fa {
  font-size: 14px;
}

.sidebar-wrapper .container-block {
  padding: 1rem;
}

.sidebar-wrapper .container-block-title {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
}

.sidebar-wrapper .degree {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0.33rem;
}

.sidebar-wrapper .education-container .item {
  margin-bottom: 1rem;
}

.sidebar-wrapper .education-container .item:last-child {
  margin-bottom: 0;
}

.sidebar-wrapper .education-container .meta {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 0;
  font-size: 14px;
}

.sidebar-wrapper .education-container .time {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  margin-bottom: 0px;
  font-size: 14px;
}

.main-wrapper {
  background: whitesmoke;
  text-align: center;
}

.main-wrapper .section-title {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  color: #2d7788;
  position: relative;
  margin-top: 0;
  margin-bottom: 20px;
}

.main-wrapper .section {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.main-wrapper .experiences-section .item {
  margin-bottom: 1rem;
}

.main-wrapper .job-title {
  color: #3F4650;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
}

.main-wrapper .time {
  right: 0;
  top: 0;
  color: #97AAC3;
}

.main-wrapper .company {
  margin-bottom: 10px;
  color: #97AAC3;
}
</style>