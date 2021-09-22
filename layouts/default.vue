<template>
  <div>
  	<div class="invSkip" role="navigation" :aria-label="$t('bypass')">
      <a href="#mainContent" class="skipToMain">{{$t('skipToMain')}}</a>
    </div>
    <b-container fluid style="overflow:hidden;">
      <b-row class="navBar" role="banner">
        <b-col cols="5" sm="2" class="text-left">
          <!-- <hamburger @menu-toggle="ShowMenu" :MenuShowing="MenuShowing" style="margin-right: 10px;" /> -->
          <nuxt-link :to="localePath('index')">
            <homebutton v-bind:iconWidth="50" v-bind:iconTitle="$t('homePage')" />
          </nuxt-link>
          <button class="successIcon" v-b-modal.completionModal v-if="courseComplete"><img src="~/assets/successIcon.png" width="50" height="50" role="presentation" alt=""><strong class="completeCaption" v-html="$t('courseComplete')" /></button>
        </b-col>
        <b-col cols="2" sm="8" style="justify-content: center;">
          <h1 class="mainTitle"><img src="../components/SymbolicIdentifier.svg" width="55" :alt="$t('symbolicIdentifier')" role="presentation"> <span class="d-none d-sm-block">{{$t('finRoles')}}</span> <span class="v-inv d-block d-sm-none">{{$t('finRoles')}}</span></h1>
        </b-col>
        <b-col cols="5" sm="2" class="text-right" style="justify-content: flex-end">
          <fileMenu />
          <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
            <span class="v-inv">{{$t('languageToggle')}}</span>
            <langswitch v-bind:iconWidth="60" v-bind:displayLang="locale.code" :lang="locale.code" v-bind:iconTitle="locale.name" />
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <!-- <transition-group tag="div" name="fade" class="grid"> -->
        <b-col :class="MenuShowing?['col-12', 'col-sm-4', 'col-md-3','sideMenu']:['closedMenu','sideMenu']">
          <transition appear mode="in-out" name="fade">
            <content-map :currentState="MenuShowing" @menu-toggle="ShowMenu"/>
          </transition>
        </b-col>
        <b-col>
          <main id="mainContent">
            <nuxt />
          </main>
        </b-col>
        <!-- </transition-group> -->
      </b-row>
    </b-container>
    <b-modal OkOnly centered okOnly id="completionModal" modal-class="successModal" body-class="successBody" header-class="successHeadFoot" footer-class="successHeadFoot" content-class="successContent">
      <div class="successImage" />
      <div v-html="$t('congratulations')"></div>
      <div>{{learnerName}}</div>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import langswitch from "~/components/icons/language_icon"
import hamburger from "~/components/hamburger"
import contentMap from "~/components/contentMap"
import homebutton from "~/components/icons/home_icon"
import fileMenu from "~/components/fileMenu"
export default {
  name: "mainPage",
  head() {
    return {
      htmlAttrs: { lang: this.$i18n.locale},
      title: (this.$i18n.locale=="en") ? "Responsible Use of Public Funds - " + this.currentPage : "La saine gestion des fonds publics - " + this.currentPage
    }
  },
  data() {
    return {
      currentPage: ""
    }
  },
  components: {
    langswitch,
    homebutton,
    hamburger,
    fileMenu,
    contentMap
  },
  computed: {
    learnerName(){
      return this.$store.state.scorm.name
    },
    thatPoint() {
      return parseInt(this.$store.state.currentPlaying.homepage)
    },
    planCompleted() {
      return this.$store.getters['plan/getScore']
    },
    reportCompleted() {
      return this.$store.getters['report/getScore']
    },
    spendCompleted() {
      return this.$store.getters['spend/getScore']
    },
    courseComplete() {
      if (parseInt(this.planCompleted, 10) >= 80 && parseInt(this.spendCompleted, 10) >= 80 && parseInt(this.reportCompleted, 10) >= 80) {
        this.$store.dispatch('scorm/setSuccess')
        return true
      }
    },
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    MenuShowing:{
      get(){
        return this.$store.state.currentPlaying.menuShowing;
      },
      set(val){
        this.$store.commit('currentPlaying/setMenuShowing', val);
      }
    }
  },
  methods: {
    ShowMenu() {
      this.MenuShowing = !this.MenuShowing;
    },
    setAriaCurrent() {
      this.$nextTick(function() {
        let app = this.$el,
          currents = app.querySelectorAll("[aria-current]");
        if (currents) {
          currents.forEach(current => {
            current.removeAttribute("aria-current");
          });
        }
        app.querySelectorAll(".contentMap .nuxt-link-exact-active").forEach(current => {
          current.setAttribute("aria-current", "page");
        });
      });
    },
    getCurrentPageTitle(){
      var links = [];
      var titles = []

      var menus = document.querySelectorAll("menu");
      for (var i = 0; i < menus.length; i++) {
        var menuLinks = menus[i].querySelectorAll("a")
        for (var j = 0; j < menuLinks.length; j++) {
          links.push(menuLinks[j].getAttribute("href"));
          titles.push(menuLinks[j].innerHTML);
        }
      }

      for (var k = 0; k < links.length; k++) {
        if (links[k] == this.$route.path || links[k] == this.$route.path.slice(0, -1) || links[k].toLowerCase() == this.$route.path || links[k].toLowerCase() == this.$route.path.slice(0, -1)) {
          var title = titles[k]
          title = title.replace("<span class=\"v-inv\">", "")
          title = title.replace("</span>", "")
          title = title.replace("&nbsp;", " ")
          this.currentPage = title; 
        }
      }
    }
  },
  watch: {
    courseComplete: {
      immediate: true,
      handler(isCompleted) {
        if (isCompleted) {
          this.$bvModal.show('completionModal')
        }
      }

    },
    $route: function(to) {
      // $nextTick = DOM updated
      this.$nextTick(function() {
        // setAriaCurrent in navigation only after focus management
        this.setAriaCurrent();
      });
      
      this.getCurrentPageTitle()
    },
  },
  mounted() {
    this.setAriaCurrent();
    
    this.$nextTick(function() {
      this.getCurrentPageTitle();
    });
  }
}

</script>
<style>
  
  .review{
    color: deeppink!important;
  }  
  
  img.review{
    outline: 2px solid deeppink;
    outline-offset: 2px;
  }

html {
  width: 100%;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.invSkip {
  width: 100%;
  text-align: center;
}

.skipToMain,.skipToMain:hover {
  left: 0;
  position: absolute;
  text-align: center;
  top: 10px;
  width: 100%;
  color: #fff;
  background-color: #000;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
}

.skipToMain:focus {
  clip: rect(auto, auto, auto, auto);
  height: inherit;
  margin: inherit;
  overflow: inherit;
  position: static;
  width: inherit;
}

.v-right:before {
  content: "\1f600";
  font-size: larger;
}

.v-wrong:before {
  content: "\1f61e";
  font-size: larger;
}

/*.exam .card-header {
  display: none;
}*/
  
  .exam .card-header{
    background-color: transparent;
    border: none;
  }
  
  .exam .card-header li.nav-item a{
    border-radius: 0px;
    font-size: .9em;
    font-weight: bold;
    background-color: #DDD;
    color: #4d4d4d;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  
  .exam .card-header li.nav-item a:focus{
    outline: 1px dashed black;
  }
  
  .exam.plan .card-header li.nav-item a.filled{
      background-color: #587C84;
      color: #fff;
  }
  
  .exam.plan .card-header li.nav-item a.Qactive{
    background-color: #e0e59e;
    box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid #fff;
    color: #000;
  }
  
  .exam.plan .card-header li.nav-item a.filled.Qactive{
    background-color: #B3C295;
  }
  
  .exam.spend .card-header li.nav-item a.filled{
    background-color: #7d677d;
    color: #fff;
  }
  
  .exam.spend .card-header li.nav-item a.Qactive{
    background-color: #e0e59e;
    box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid #fff;
    color: #000;
  }
  
  .exam.spend .card-header li.nav-item a.filled.Qactive{
    background-color: #AFA68E;
  }
  
  .exam.report .card-header li.nav-item a.filled{
    background-color: #865F56;
    color: #fff;
  }
  
  .exam.report .card-header li.nav-item a.Qactive{
    background-color: #e0e59e;
    box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid #fff;
    color: #000;
  }
  
  .exam.report .card-header li.nav-item a.filled.Qactive{
    background-color: #B3A27A;
  }

body {
  background-color: #fff;
  width: calc(100vw - (100vw - 100%));
  margin: 0;
  padding: 0;
  /*There's gotta be a better way to override things from BS's _reboot.scss... *CSPS-TD* */
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.card {
  border:0
}

legend {
  font-size: 1em;
}

a {
  color: #1000ff;
}
  
a.external{
  text-decoration: underline;
}
  
a.external:hover, a.external:focus{
  text-decoration: none;
}
  
a.external:after {
  background: url("../assets/icon_external_link.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  overflow: hidden;
  color: transparent;
  display: inline-block;
  margin-left: 3px;
}
  
html[lang="en"] a.external:after{
  content: "(This content will open in a new window)";
}
  
html[lang="fr"] a.external:after{
  content: "(Ce contenu ouvrira dans une nouvelle fenêtre)";
}
  
  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6{
    font-weight: 700;
  }
  
  span.bolder{
    font-weight: 900;
  }
  
  /* Tables that scroll horizontally */
  
  /* Less than xlarge (1200px) */
  @media (max-width: 1200px){
    .tableScrollLTXL {
      display: block;
      position:relative;
      width:100%;
      overflow-x: auto;
      white-space: nowrap;
    }

    .tableScrollLTXL table{
      width:100%;
    }  
  }
  
  /* Less than large (992px) */
  @media (max-width: 992px){
    .tableScrollLTL {
      display: block;
      position:relative;
      width:100%;
      overflow-x: auto;
      white-space: nowrap;
    }

    .tableScrollLTL table{
      width:100%;
    }  
  }
  
  /* Less than medium (768px) */
  @media (max-width: 768px){
    .tableScrollLTM {
      display: block;
      position:relative;
      width:100%;
      overflow-x: auto;
      white-space: nowrap;
    }

    .tableScrollLTM table{
      width:100%;
    }  
  }
  
  /* Less than small 576px) */
  @media (max-width: 576px){
    .tableScrollLTS {
      display: block;
      position:relative;
      width:100%;
      overflow-x: auto;
      white-space: nowrap;
    }

    .tableScrollLTS table{
      width:100%;
    }  
  }

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.completeCaption {
  font-size: 12px;
  width: 60px;
  display: inline-block;
  text-align: center;
  vertical-align: bottom;


}

.successImage {
  background-image: url('~assets/successIcon.svg');
  display: block;
  position: absolute;
  width: 55px;
  height: 55px;
  top: 46px;
  left: -30px;
}

.successIcon {
  background-color: transparent;
  border: 0;
}

.successModal {
  background-image: linear-gradient(135deg, #7a474e 45.45%, #8f5e65 45.45%, #8f5e65 50%, #7a474e 50%, #7a474e 95.45%, #8f5e65 95.45%, #8f5e65 100%);
  background-size: 11.00px 11.00px;
  color: #fff;
}

.successHeadFoot {
  border: 0;
}

.successHeadFoot .close {
  color: #fff;
}

.successBody {
  text-align: center;
  padding: 1em;
  border: 2px solid #fff;
  border-radius: 10px;
  /*background-image: url('~assets/successIcon.svg');*/
  background-repeat: no-repeat;
  background-size: 50px 50px;
}

.successContent {
  background-color: transparent;
  background-image: url('~assets/SuccessPaper.svg');
  background-size: contain;
  padding: .5em 3em;
  border: 0;
}

.row.navBar {
  background-color: #fff;
  color: #000;
  text-align: right;
  box-shadow: rgba(0, 0, 0, .5) 0px 3px 8px;
  width: 100%;
  margin: 0;
}
  
.row.navBar > div{
  display: flex;
  align-items: center;
}

.row {
  margin: 0;
}

.col.sideMenu{ 
     padding-left: 0px;
     transition: all .30s ease-out;
   }

.col.closedMenu.sideMenu{ 
  width: 75px;
  max-width: 75px;
}
  
@media (min-width: 576px){
  .col.closedMenu.sideMenu{ 
    margin-right: 50px;
  }
}

h2,
.h2 {
  font-size: 1.6em;
}

h3,
.h3 {
  font-size: 1.2em;
}

img {
  vertical-align: -30%;
}

.transcriptionBox {
  width: 100%;
  margin: auto;
}

.transcriptionBox .btn {
  text-align: left;
}

.planSection .inside {
  background-color: #587C84;
}


.spendSection .inside {
  background-color: #7d677d;
}


.reportSection .inside {
  background-color: #865F56;
}

.bottomNav {
  position: relative;
  padding-left: 10%;
}
  
@media(max-width: 992px){
  .bottomNav{
    padding-left: 20%;
  }
}
  @media(max-width: 576px){
  .bottomNav{
    padding-left: 40%;
  }
}

.bottomNav:before {
  content: " ";
  color: #4d4d4d;
  text-align: left;
  font-weight: bold;
  padding-left: 1.5em;
  height: 30px;
  width: 100vw;
  position: absolute;
  z-index: -1;
  margin-top: 110px;
  right: 0;
}

.v-inv {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
}

.leftSide {
  display: flex;
  align-content: flex-start;
}

.navBar>span {
  padding: 1.5em;
}

.bottomNav {
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-left: auto;
}

.spendSection {
  position: relative;
}

.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

  .generalSectionBar {
    position: absolute;
    background-color: rgba(96, 114, 147, 0.7);
    width: 100vw;
    height: 30px;
    text-align: left;
    left: -15px;
    top: 38%;
  }

  .generalSectionBar span {
    padding: 2px 10px 0;
    color: #4d4d4d;
    font-weight: bold;
    background-color: #fff;
    display: inline-block;
    height: 100%;
    margin-left: 15px;
    text-transform: uppercase;
  }
  
  @media(max-width: 1200px){
    .generalSectionBar, .planSectionBar, .spendSectionBar, .reportSectionBar{
      top: 50px!important;
      left: 25px!important;
      width: 30px!important;
      height: 100%!important;
    }
    .generalSectionBar span, .planSectionBar span, .spendSectionBar span, .reportSectionBar span{
      padding: 10px 2px!important;
      margin-left: 0!important;
      margin-top: 30px!important;
      height: auto!important;
      display: block!important;
      width: 120px!important;
      text-align: center!important;
      position: relative!important;
      left: calc(50% - 60px)!important;
    }
  }
  
  @media(max-width: 576px){
    .generalSectionBar span, .planSectionBar span, .spendSectionBar span, .reportSectionBar span{
      font-size: 14px;
    }
  }
  
  .generalSection .plan .inside{
    background-color: #587C84;
  }
  .generalSection .spend .inside{
    background-color: #7d677d;
  }
  .generalSection .report .inside{
    background-color: #865F56;
  }
  
.rightSide {
  display: flex;
  align-content: flex-end;
}

.container-fluid {
  padding: 0;
}
  
@media(max-width: 576px){
  .container{
    padding: 0;
  }
}

.pageTitle,
.mainTitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  display: block;
  font-size: 45px;
  color: #4D4D4D;
  letter-spacing: -1px;
  text-align: center;
  padding-top: 20px;
}

.mainTitle {
  font-size: 30px;
  padding: 0;
  position: relative;
  padding-left: 60px;
  display: inline-block;
  height: 80px;
  line-height: 80px;
  margin: 0;
}

.mainTitle img {
  position: absolute;
  left: 0;
  top: calc(50% - 22px);
}

.scrollMe {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
  
@media only screen and (max-width: 768px) {
  .mainTitle {
    font-size: 20px;
  }
}

/* always present */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

/* Transitions using the page hook */
.page-enter-active,
.page-leave-active {
  transition: all .30s ease-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.pageHeader {
  width: 100%;
  background-color: #4D4D4D;
  color: white;
  padding: 2em;
  display: block;
  vertical-align: center;

}

.pure-checkbox input[type="checkbox"],
.pure-radiobutton input[type="checkbox"],
.workplan-table input[type="checkbox"],
.pure-checkbox input[type="radio"],
.pure-radiobutton input[type="radio"],
.workplan-table input[type="radio"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.pure-checkbox input[type="checkbox"]:focus+label:before,
.pure-radiobutton input[type="checkbox"]:focus+label:before,
.workplan-table input[type="checkbox"]:focus+label:before,
.pure-checkbox input[type="radio"]:focus+label:before,
.pure-radiobutton input[type="radio"]:focus+label:before,
.workplan-table input[type="radio"]:focus+label:before,
.pure-checkbox input[type="checkbox"]:hover+label:before,
.pure-radiobutton input[type="checkbox"]:hover+label:before,
.workplan-table input[type="checkbox"]:hover+label:before,
.pure-checkbox input[type="radio"]:hover+label:before,
.pure-radiobutton input[type="radio"]:hover+label:before,
.workplan-table input[type="radio"]:hover+label:before {
  border-color: #4d4d4d;
  background-color: #f2f2f2;
  outline:blue solid 1px;
}

.pure-checkbox input[type="checkbox"]:active+label:before,
.pure-radiobutton input[type="checkbox"]:active+label:before,
.workplan-table input[type="checkbox"]:active+label:before,
.pure-checkbox input[type="radio"]:active+label:before,
.pure-radiobutton input[type="radio"]:active+label:before,
.workplan-table input[type="radio"]:active+label:before {
  transition-duration: 0s;
}

.pure-checkbox input[type="checkbox"]+label,
.pure-radiobutton input[type="checkbox"]+label,
.workplan-table input[type="checkbox"]+label,
.pure-checkbox input[type="radio"]+label,
.pure-radiobutton input[type="radio"]+label,
.workplan-table input[type="radio"]+label {
  position: relative;
  padding-left: 2em;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}

.pure-checkbox input[type="checkbox"]+label:before,
.pure-radiobutton input[type="checkbox"]+label:before,
.workplan-table input[type="checkbox"]+label:before,
.pure-checkbox input[type="radio"]+label:before,
.pure-radiobutton input[type="radio"]+label:before,
.workplan-table input[type="radio"]+label:before {
  box-sizing: content-box;
  content: '';
  color: #4d4d4d;
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 14px;
  margin-top: -9px;
  border: 2px solid #4d4d4d;
  text-align: center;
  transition: all 0.4s ease;
  background-color: white;
}

.pure-checkbox input[type="checkbox"]+label:after,
.pure-radiobutton input[type="checkbox"]+label:after,
.workplan-table input[type="checkbox"]+label:after,
.pure-checkbox input[type="radio"]+label:after,
.pure-radiobutton input[type="radio"]+label:after,
.workplan-table input[type="radio"]+label:after {
  box-sizing: content-box;
  content: '';
  background-color: #4d4d4d;
  position: absolute;
  top: 50%;
  left: 4px;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  transform: scale(0);
  transform-origin: 50%;
  transition: transform 200ms ease-out;
}

.pure-checkbox input[type="checkbox"]:disabled+label:before,
.pure-radiobutton input[type="checkbox"]:disabled+label:before,
.workplan-table input[type="checkbox"]:disabled+label:before,
.pure-checkbox input[type="radio"]:disabled+label:before,
.pure-radiobutton input[type="radio"]:disabled+label:before,
.workplan-table input[type="radio"]:disabled+label:before {
  border-color: #cccccc;
}

.pure-checkbox input[type="checkbox"]:disabled:focus+label:before,
.pure-radiobutton input[type="checkbox"]:disabled:focus+label:before,
.workplan-table input[type="checkbox"]:disabled:focus+label:before,
.pure-checkbox input[type="radio"]:disabled:focus+label:before,
.pure-radiobutton input[type="radio"]:disabled:focus+label:before,
.workplan-table input[type="radio"]:disabled:focus+label:before,
.pure-checkbox input[type="checkbox"]:disabled:hover+label:before,
.pure-radiobutton input[type="checkbox"]:disabled:hover+label:before,
.workplan-table input[type="checkbox"]:disabled:hover+label:before,
.pure-checkbox input[type="radio"]:disabled:hover+label:before,
.pure-radiobutton input[type="radio"]:disabled:hover+label:before,
.workplan-table input[type="radio"]:disabled:hover+label:before {
  background-color: inherit;
}

.pure-checkbox input[type="checkbox"]:disabled:checked+label:before,
.pure-radiobutton input[type="checkbox"]:disabled:checked+label:before,
.workplan-table input[type="checkbox"]:disabled:checked+label:before,
.pure-checkbox input[type="radio"]:disabled:checked+label:before,
.pure-radiobutton input[type="radio"]:disabled:checked+label:before,
.workplan-table input[type="radio"]:disabled:checked+label:before {
  background-color: #cccccc;
}

.pure-checkbox input[type="checkbox"]+label:after,
.pure-radiobutton input[type="checkbox"]+label:after,
.workplan-table input[type="checkbox"]+label:after {
  background-color: transparent;
  top: 50%;
  left: 4px;
  width: 8px;
  height: 3px;
  margin-top: -4px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0 0 3px 3px;
  border-image: none;
  transform: rotate(-45deg) scale(0);
}

.pure-checkbox input[type="checkbox"]:checked+label:after,
.pure-radiobutton input[type="checkbox"]:checked+label:after,
.workplan-table input[type="checkbox"]:checked+label:after {
  content: '';
  transform: rotate(-45deg) scale(1);
  transition: transform 200ms ease-out;
}

.pure-checkbox input[type="radio"]:checked+label:before,
.pure-radiobutton input[type="radio"]:checked+label:before,
.workplan-table input[type="radio"]:checked+label:before {
  animation: borderscale 300ms ease-in;
  background-color: white;
}

.pure-checkbox input[type="radio"]:checked+label:after,
.pure-radiobutton input[type="radio"]:checked+label:after,
.workplan-table input[type="radio"]:checked+label:after {
  transform: scale(1);
}

.pure-checkbox input[type="radio"]+label:before,
.pure-radiobutton input[type="radio"]+label:before,
.workplan-table input[type="radio"]+label:before,
.pure-checkbox input[type="radio"]+label:after,
.pure-radiobutton input[type="radio"]+label:after,
.workplan-table input[type="radio"]+label:after {
  border-radius: 50%;
}

.pure-checkbox input[type="checkbox"]:checked+label:before,
.pure-radiobutton input[type="checkbox"]:checked+label:before,
.workplan-table input[type="checkbox"]:checked+label:before {
  animation: borderscale 200ms ease-in;
  background: #4d4d4d;
}

.pure-checkbox input[type="checkbox"]:checked+label:after,
.pure-radiobutton input[type="checkbox"]:checked+label:after,
.workplan-table input[type="checkbox"]:checked+label:after {
  transform: rotate(-45deg) scale(1);
}

@keyframes borderscale {
  50% {
    box-shadow: 0 0 0 2px #4d4d4d;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateX(-100%);
  width: 0;
}

.btn-primary {
  /* background-color: #0051A8; */
  background-color: #587C84;
  border-color: #365A62;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #365A62;
  border-color: #365A62;
}

.btn-primary:not(:disabled):not(.disabled):active {
  background-color: #365A62;
  border-color: #365A62;
}

.btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #000000;
}

/* ***************************************
 * new table style for build a workplan
 * **************************************/


.workplan-table .row {
  clear: both;
}

.workplan-table .row:nth-child(1) {
  counter-reset: section;
}

/* ------------ WORKPLAN TITLES -------------*/
.workplan-table .encadrage {
  border: 1px #eaeaea solid;
  display: block;
  padding: 10px;
}

.workplan-table h3 {
  font-size: 1.2em;
}

.workplan-table .row:nth-child(1) h3:after,
.workplan-table .row:nth-child(2) h3:after,
.workplan-table .row:nth-child(3) h3:after {
  content: ' – ';
}

.workplan-table .encadrage h4 {

  margin: 0px -10px 15px -10px;
  padding: 20px 15px;
  -webkit-box-shadow: 0px 7px 5px -7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 5px -7px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 5px -7px rgba(0, 0, 0, 0.5);
  /*border-top:#587c84 3px solid;*/
}


.workplan-table>.row:nth-child(1) .encadrage {
  border-top: 4px solid #6C076C;
  border-top: 4px solid #6C076C;
  background-color: #e1c8e1;
}

.workplan-table>.row:nth-child(2) .encadrage {
  border-top: 4px solid #167777;
  background-color: #c7e0e0;
}

.workplan-table>.row:nth-child(3) .encadrage {
  border-top: 4px solid #6F1E0D;
  background-color: #e2ceca;
}

.workplan-table>.row:nth-child(4) .encadrage {

  padding: 0px;
  margin: 0px;
  border: none;
  padding-right: 0px;

}

.workplan-table>.row:nth-child(4) .encadrage h3 {
  border-top: 4px solid #577a90;
  background-color: #e2e8ec;
  margin: 0px;
  padding: 10px;

}

.workplan-table>.row:nth-child(5) .encadrage {
  padding-top: 0px;
}


.workplan-table>.row:nth-child(1) .encadrage>p,
.workplan-table>.row:nth-child(2) .encadrage>p,
.workplan-table>.row:nth-child(3) .encadrage>p,
.workplan-table>.row:nth-child(1) .encadrage>h3,
.workplan-table>.row:nth-child(2) .encadrage>h3,
.workplan-table>.row:nth-child(3) .encadrage>h3 {
  display: inline;
  min-height: 40px;
}

/* ------------ ACTIVITIES TITLES -------------*/

.workplan-table .encadrage h4 {
  background-color: #e2e8ec;
  font-size: 1.1em;
  border-top:1px solid #577a90;
  margin-top:1px;
}

.workplan-table .encadrage h4:nth-child(1){

}

.workplan-table .encadrage h5 {
  padding: 5px 30px;
  border-left: 2px solid #587c84;
  background-color: #f9f9f9;
}

.workplan-table h5 {
  font-size: 1em;
}

.workplan-table>.row:nth-child(5) .encadrage>*:not(h4) {
  margin: 0px 5px;
}

.workplan-table>.row:nth-child(5) .encadrage>p {
  margin-left: 20px;
}

.workplan-table ul {
  list-style: circle;
}

.workplan-table .encadrage select{
    display:block;
    position: relative;
    width: 100%;;
}
  
  
  
  .modal-header h3.h5{
    line-height: 28px;
  }
  
  
  .alert.alert-info button.close{
    color: black!important;
    opacity: 1;
    font-size: 30px;
  }
  
  .alert.alert-info button.close:hover, .alert.alert-info button.close:focus{
    opacity: 0.6
  }

  /* Background for not-collapsed buttons  */
  /*.not-collapsed{
    background-color:black;
  }*/

a:hover,
a:focus {
  text-decoration: underline;
}

</style>
<i18n>

  {
    "en": {
      "bypass": "Bypass blocks"
    },
    "fr": {
      "bypass": "Blocs de contournement"
    }
  }

</i18n>