<template>
    <div class="learningElement">
      <a :href="quizUrl" target="_top">
        <div :class="highlighted ? ['highlighted', 'box'] : 'box'" :style="boxSize" style="color:#212529">
          <div class="inside" :style="size < 150 ? 'font-size: 13px;' : ''">
            <span v-html="text" />
          </div>
          <transition name="highlight-fade">
            <div class="grey hide" v-show="!highlighted && chosenScenario != 'takeCourse' && !noGrey"></div>
          </transition>
  
          <!--<div class="grey complete" v-show="completion == '100'"></div>-->
          <font-awesome-icon icon="check" size="2x" role="presentation" class="check" v-if="completion == '100'" />
          <div class="completed" :style="completionBar" :data-percent="completionBar.width"
            v-if="completion > 0 && type != 'keyMessages'" aria-hidden="true"></div>
        </div>
        <p class="text-left under" :style="size < 150 ? 'font-size: 13px; width:' + size + 'px' : 'width:' + size + 'px'">
          <span v-if="time">{{ $t('about') }} {{ time }} minutes
            <span class="v-inv" v-if="$i18n.locale == 'en' && completion">({{ completion }}% complete)</span>
            <span class="v-inv" v-if="$i18n.locale == 'fr' && completion">(complété à {{ completion }}%)</span>
          </span><br />
          <span>{{ typeText }}</span>
        </p>
        <p v-if="highlighted" class="v-inv">{{ $t('highlighted') }}</p>
        <div v-if="youAreHere" class="floatOver"><img :alt="$t('youAreHere')" :src="require('~/assets/YouAreHere.svg')">
        </div>
      </a>
    </div>
  </template>
  <script type="text/javascript">
  export default {
    props: {
     
      quizUrl: {
        type: String,
        default: ""
      },
  
      text: { type: String, default: "Tile Name" },
      size: {
        type: String,
        default: "200"
      },
      time: String,
      completion: {
        type: Number,
        default: 0
      },
      path: {
        type: String,
        default: "index"
      },
      imagePath: {
        type: String,
        default: "disabledTile.png"
      },
      youAreHere: {
        type: Boolean,
        default: false
      },
      highlighted: {
        type: Boolean,
        default: false
      },
      noGrey: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "video"
      },
      questionNum: {
        type: String,
        default: "0"
      },
  
    },
    methods: {
      openExternalQuiz(url) {
        window.open(url, "_blank");
      },
      setGrey() {
        this.$nextTick(function () {
          var greys = this.$el.querySelectorAll("div.grey");
          for (var i = 0; i < greys.length; i++) {
            greys[i].style.height = this.size + "px";
            greys[i].style.width = this.size + "px";
          }
        });
      },
      addMargin() {
        if (this.completion && this.type != "keyMessages") {
          this.$nextTick(function () {
            var element = this.$el.querySelector(".box")
            var arr = element.className.split(" ");
            var name = "margin";
            if (arr.indexOf(name) == -1) {
              element.className += " " + name;
            }
          });
        }
      }
    },
    computed: {
      getImgUrl(pic) {
        return require('~/assets/' + pic)
      },
      completionBar() {
        this.addMargin()
        if (this.completion) {
          return { width: `${this.completion}%` }
        }
        else {
          return {}
        }
      },
      boxSize() {
        if (this.imagePath == "InitiateAuthSpending.svg" || this.imagePath == "R-Test.svg") {
          return {
            width: this.size + "px",
            height: this.size + "px",
            backgroundImage: "url(" + require('~/assets/' + this.imagePath) + ")",
            backgroundPosition: "50%"
          }
        }
        else {
          return {
            width: this.size + "px",
            height: this.size + "px",
            backgroundImage: "url(" + require('~/assets/' + this.imagePath) + ")"
          }
        }
      },
      chosenScenario: {
        set(scenario) {
          this.$store.commit('currentPlaying/setChosenScenario', scenario);
        },
        get() {
          return this.$store.state.currentPlaying.chosenScenario;
        }
      },
      typeText: function () {
        if (this.type == "exam") {
          return this.questionNum + " questions";
        }
        else {
          return this.$t(this.type);
        }
      }
    },
    watch: {
      highlighted: function (value) {
        if (value) {
          this.setGrey();
        }
        this.addMargin()
      }
    },
    mounted: function () {
      this.setGrey();
    }
  }
  
  </script>
  
  <style type="text/css" scoped>
  a {
    color: #212529;
    transition: transform 0.2s;
    display: block;
    text-decoration: none;
  }
  
  a:hover,
  a:focus {
    text-decoration: none;
    outline: none;
  }
  
  a:hover {
    transform: scale(0.98);
  }
  
  a:focus {
    transform: scale(0.95);
    outline: black solid 1.5px;
  }
  
  
  .floatOver {
    position: absolute;
    top: -36px;
    left: 40%;
    margin: auto;
    width: 32px;
  }
  
  .completed {
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 10px;
    background-color: currentColor;
  }
  
  .completed:after {
    color: #212529;
    background-color: rgba(255, 255, 255, .8);
    position: absolute;
    right: 0;
    bottom: 0px;
    font-size: 10px;
    content: attr(data-percent);
    height: 10px;
    line-height: 10px;
  }
  
  .learningElement {
    display: inline-block;
    position: relative;
    float: left;
    margin: 50px 25px;
  }
  
  @media (max-width: 1200px) {
    .learningElement {
      margin-bottom: 0px;
    }
  }
  
  .box {
    background-color: #fff;
    display: flex;
    align-items: bottom;
    justify-content: center;
    border-radius: 2px;
    position: relative;
    border: 1px solid hsl(42, 10%, 74%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 25%;
    transition: all 0.3s;
    margin-bottom: 10px;
  }
  
  .box.margin {
    margin-bottom: 25px;
  }
  
  .inside {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /*height: 3em;*/
    color: white;
    text-align: left;
    /*border-radius: 0 0 15px 15px;*/
    font-size: 16px;
    font-weight: 700;
    padding: 5px 7px;
    line-height: normal;
  }
  
  .under {
    font-size: 15px;
    line-hieght: normal;
  }
  
  .box.highlighted {
    /*border: 3px solid black;*/
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
  
  .box .grey {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  
  .grey.hide {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .grey.complete {
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .highlight-fade-enter {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s;
  }
  
  .highlight-fade-enter-to {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s;
  }
  
  .highlight-fade-leave {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s;
  }
  
  .highlight-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s;
  }
  
  svg.check {
    position: absolute;
    right: -5%;
    top: -5%;
  }
  </style>
  <i18n>
    {
      "en": {
        "youAreHere": "You are on this page",
        "highlighted": "You should focus on this page as part of the scenario you chose.",
        "about": "About",
    
        "video": "Video and activities",
        "keyMessages": "Notions and files"
      },
      "fr": {
        "youAreHere": "Vous êtes sur cette page",
        "highlighted": "Vous devriez vous concentrer sur cette page dans le cadre du scénario que vous avez choisi.",
        "about": "Environ",
    
        "video": "Vidéo et activités",
        "keyMessages": "Notions et fichiers"
      }
    }
  </i18n>
  