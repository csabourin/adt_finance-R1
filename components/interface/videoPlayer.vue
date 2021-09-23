<template>
  <b-container>
    <b-row>
      <b-col>
        <figure style="clear:both;position:relative;background-color: #000; margin-bottom: 0;">
          <Spinner v-if="!canPlay" />
          <video :id="vId" @waiting="loading" @cuechange="readCaptions" @click="setPlaying" ref="videoplayer" :src="videoUrl" :poster="posterUrl" playsinline @loadedmetadata="resumePosition" @timeupdate="update" @ended="isPaused=!isPaused">
            <track :key="'chap'+$i18n.locale" v-if="chapterFile" kind="chapters" :src="chapterUrl" @load="generate" default="">
            <track :key="'sub'+$i18n.locale" kind="metadata" :src="ccUrl" :srclang="$i18n.locale" label="captions" @cuechange="readCaptions">
          </video>
          <transition name="overlay-fade" appear>
            <div class="overlay" v-show="showPlayOverlay && !videoDone"><font-awesome-icon icon="play" role="presentation" size="5x" /></div>
          </transition>
          <transition name="overlay-fade" appear>
            <div class="overlay done" v-show="videoDone"><font-awesome-icon icon="check" role="presentation" size="5x" /><p class="text-center">{{$t('videoDone')}}</p></div>
          </transition>
          <transition name="expand">
            <figcaption class="CC" v-if="CCactive">
              <p aria-live="polite">{{Captions}}</p>
            </figcaption>
          </transition>
          <div ref="video-controls" class="controls" data-state="hidden">
            <transition name="tooltip-fade" appear>
              <div id="timeline-tooltip" v-show="showTooltip">{{ mousePosition | formatTime }}</div>
            </transition>
            <progress tabindex="0" @click="setTime" ref="progress" @mousemove="changeTime" @mouseover="changeTime" @mouseout="showTooltip = false" :value="PlayTime" min="0" max="100" @keyup.arrow-left="goBackwards" @keyup.arrow-right="goForward" :aria-label="$t('timeline')">
              <span class="progress" ref="progress-bar" :style="'width:'+PlayTime+'%'"></span>
            </progress>
            <button class="videoControls" ref="playpause" @click="setPlaying" type="button" :aria-label="isPaused?$t('play'):$t('pause')" :title="isPaused?$t('play'):$t('pause')">
              <font-awesome-icon :icon="isPaused?'play':'pause'" role="presentation" />
            </button>
            <button class="videoControls" ref="stop" @click="stopVideo" type="button" :aria-label="$t('stop')" :title="$t('stop')">
              <font-awesome-icon icon="stop" role="presentation" />
            </button>
            <button class="videoControls" ref="backward" @click="goBackwards" type="button" :aria-label="$t('backward')" :title="$t('backward')">
              <font-awesome-icon icon="backward" role="presentation" />
            </button>
            <button class="videoControls" ref="forward" @click="goForward" type="button" :aria-label="$t('forward')" :title="$t('forward')">
              <font-awesome-icon icon="forward" role="presentation" />
            </button>
            <!-- <button type="button" data-state="go-fullscreen"><i class="fas fa-compress"></i></button> -->
            <p class="mediaTime">{{isPlayingNow | formatTime}} / {{totalTime | formatTime}}</p>
            <span class="showVolume">
              <button class="videoControls" ref="mute" @click="isMuted=!isMuted" type="button" :title="isMuted?$t('unmute'):$t('mute')" :aria-label="isMuted?$t('unmute'):$t('mute')">
                <font-awesome-icon :icon="isMuted?'volume-mute':'volume-up'" role="presentation" />
              </button>
              <label><input class="setVolume" type="range" v-model="setVolume" :title="'Volume: '+setVolume+'%'" :aria-label="'Volume: '+setVolume+'%'"><span class="v-inv">Volume</span></label>
            </span>
            <button class="videoControls" :aria-pressed="CCactive" style="margin-left: auto;" @click="showCC" type="button" :title="(CCactive?$t('hide'):$t('show'))+$t('closedcaptionning')" :aria-label="(CCactive?$t('hide'):$t('show'))+$t('closedcaptionning')">
              <font-awesome-icon :icon="[solidOrRegular,'closed-captioning']" role="presentation" />
            </button>
          </div>
          <span class="v-inv">{{$t('sr_transcriptlocation')}}</span>
        </figure>
      </b-col>
    </b-row>
    <transition @enter="tipEnter" @after-enter="tipAfterEnter" @leave="tipLeave" @after-leave="tipAfterLeave" :css="false">
      <b-row v-show="videoDone" class="tipRow">
        <b-col>
          <tip aria-live="polite" v-if="$i18n.locale=='en'">Select the continue icon button ( <img src="~/assets/ContinueIcon.svg" :alt="$t('continueIcon')" style="display: inline; width: 30px; height: 30px;" /> ) in the video segments below to continue to the next section.</tip>
          <tip aria-live="polite" v-if="$i18n.locale=='fr'">Sélectionnez le bouton de l'icône «&nbsp;continuer&nbsp;» ( <img src="~/assets/ContinueIcon.svg" :alt="$t('continueIcon')" style="display: inline; width: 30px; height: 30px;" /> ) dans les segments vidéo ci-dessous pour continuer à la section suivante.</tip>
        </b-col>
      </b-row>
    </transition>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h2 v-if="chapters">{{$t('segmentsTitle')}}</h2>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <ul v-if="chapters" class="bar" ref="linkBar">
          <li v-for="(item,index) in navBarTracks" :class="['chaptersLink '+ isItPlaying(index),$store.state.currentPlaying.currentModule]">
            <p>{{ item }}</p><br>

            <!-- Play button -->
            <button v-if="modalArray[index]" @click="seek" class="playButton" :key="index" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" :title="$t('playSegment') + ' - ' +navBarTracks[index]" v-b-tooltip.hover.bottom="$t('playSegment')"><img src="~/assets/VideoIcon.svg" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" :alt="$t('playIcon')" width="48" height="48"><span class="v-inv">{{$t('playSegment')}}: {{navBarTracks[index]}}</span></button>

            <!-- If the popup is a quiz -->
            <button v-if="modalArray[index] && isInArray(index, currentPageQuiz)" class="activityButton" @click.prevent="accessibleModal(index)" :title="$t('jumpQuiz') + ' - ' + navBarTracks[index]" v-b-tooltip.hover.bottom="$t('jumpQuiz')"><img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="48" height="48"></button>

            <!-- If the popup is a reference -->
            <button v-else-if="modalArray[index] && isInArray(index, currentPageReferences)" class="activityButton" @click.prevent="accessibleModal(index)" :title="$t('jumpReference') + ' - ' + navBarTracks[index]" v-b-tooltip.hover.bottom="$t('jumpReference')"><img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="48" height="48"></button>

            <!-- If the popup is an info -->
            <button v-else-if="modalArray[index] && isInArray(index, currentPageInfos)" class="activityButton" @click.prevent="accessibleModal(index)" :title="$t('jumpInfo') + ' - ' + navBarTracks[index]" v-b-tooltip.hover.bottom="$t('jumpInfo')"><img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="48" height="48"></button>

            <!-- If the popup is an activity -->
            <button v-else-if="modalArray[index]" class="activityButton" @click.prevent="accessibleModal(index)" :title="$t('jumpModalPartsWP') + ' - ' + navBarTracks[index]" v-b-tooltip.hover.bottom="$t('jumpModalPartsWP')"><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="48" height="48"></button>

            <!-- Continue to next page button -->
            <nuxt-link v-else :to="nextPage.link" class="playButton" :title="$t('continue') + ' - ' + nextPage.title" v-b-tooltip.hover.bottom="$t('continue')"><img src="~/assets/ContinueIcon.svg" :alt="$t('continueIcon')" width="48" height="48"><!--<span class="v-inv">{{$t('continue') + ' - ' + nextPage.title}}</span>--></nuxt-link>
          </li>
        </ul>
      </b-col>
    </b-row>
    <!-- Used for troublehooting video set debugging to true in data-->
    <div v-if="debugging">
      <span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
      <span>endTime : {{endTime}}</span><br>
      <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
      <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span>
    </div>
    <!-- Used for troublehooting video -->
  </b-container>
</template>

<script type="text/javascript">
import Spinner from "~/components/icons/Spinner"
import tip from "~/components/tip"
export default {
  components: {
    Spinner,
    tip
  },
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js' }
      ]
    }
  },
  props: {
    vId: { type: String, default: 'mainPlayer' },
    restartAt: { type: Number, default: 0 },
    toResume: { type: String, default: 'setHomepage' },
    chapters: { type: Boolean, default: false },
    enVideoFile: { type: String, required: true, default: 'IntroVideoPrototype.mp4' },
    frVideoFile: { type: String, required: true, default: 'IntroVideoPrototype.mp4' },
    posterFile: { type: String, default: 'video_poster.PNG' },
    chapterFile: { type: String, default: '' },
    ccFile: { type: String, default: '' },
    modalArray: { type: Array, default () { return [] } }
  },
  data() {
    return {
      accessiblePopup: false,
      byFrame: 0,
      canPlay: false,
      Captions: "",
      CCactive: false,
      currentFrame: 0,
      debugging: false,
      endTime: [],
      hasPlayed: {},
      isMuted: false,
      isPaused: true,
      isPlayingNow: 0,
      isPlayingSoon: 0,
      justSeeked: false,
      mousePosition:0,
      navBarTracks: [],
      oldVolume: this.$store.state.currentPlaying.volume,
      PlayTime: 0,
      playToPercent: 0,
      posterUrl: require('~/assets/' + this.$i18n.locale + '/' + this.posterFile),
      ready: false,
      setVolume: this.$store.state.currentPlaying.volume,
      startTime: [],
      totalTime: 0,
      Captions: "",
      changeButton: false,
      popups: {
        buildWP: {
          references: [1],
          infos: [0],
          quiz: [8]
        },
        createBudget: {
          references: [1],
          infos: [0],
          quiz: [7]
        },
        spendPart1: {
          references: [],
          infos: [],
          quiz: [4]
        },
        spendPart2: {
          references: [],
          infos: [],
          quiz: []
        },
        spendPart3: {
          references: [],
          infos: [],
          quiz: [3]
        },
        reportPart1: {
          references: [],
          infos: [],
          quiz: []
        },
        reportPart2: {
          references: [],
          infos: [],
          quiz: [3]
        }
      },
      videoDone: false,
      tipheight: 0,
      showPlayOverlay: false,
      showTooltip: false
    }
  },
  filters: {
    formatTime(time) {
      let minutes = Math.floor(time / 60),
        seconds = Math.floor(time - minutes * 60),
        minuteValue, secondValue

      if (minutes < 10) {
        minuteValue = "0" + minutes;
      } else {
        minuteValue = minutes;
      }

      if (seconds < 10) {
        secondValue = "0" + seconds;
      } else {
        secondValue = seconds;
      }

      return minuteValue + ":" + secondValue
    }
  },
  computed: {
    videoUrl() { return this.$i18n.locale == 'en' ? this.enVideoFile : this.frVideoFile },
    solidOrRegular() {
      return this.CCactive ? 'far' : 'fas'
    },
    ccUrl() {
      if (this.ccFile) {
        return require('~/assets/' + this.$i18n.locale + '/' + this.ccFile)
      }
    },
    chapterUrl() {
      if (this.chapterFile) {
        return require('~/assets/' + this.$i18n.locale + '/' + this.chapterFile)
      }
    },
    trackNumber() {
      if (this.chapters) { return 1 } else { return 0 }
    },
    nextPage() {
      var links = [];
      var titles = [];

      var menus = document.querySelectorAll("menu");
      for (var i = 0; i < menus.length; i++) {
        var menuLinks = menus[i].querySelectorAll("a");
        for (var j = 0; j < menuLinks.length; j++) {
          links.push(menuLinks[j].getAttribute("href"));
          titles.push(menuLinks[j].innerHTML);
        }
      }

      for (var k = 0; k < links.length; k++) {
        var linkToString = links.map(item=>item.toLowerCase()); //To account that the browser is dumb and lower case the links >:(
        if (linkToString[k].indexOf(this.$route.path.toLowerCase()) >= 0) {
          var link = links[k + 1];
          if(link.indexOf("cninv")){
            var pos = link.indexOf("cninv");
            pos = link.indexOf("/", pos);
            link = link.substr(pos);
          }
          return { title: titles[k + 1], link: link };
        }
      }  
      return { title: "", link: "" };
    },
    currentPageReferences(){
      var path = this.$route.path;
      var pos = path.indexOf(this.$i18n.locale) + 3;
      var currentPage = path.substr(pos);
      
      switch(currentPage){
        case "buildWP":
          return this.popups.buildWP.references;
        case "createBudget":
          return this.popups.createBudget.references;
        case "spendPart1":
          return this.popups.spendPart1.references;
        case "spendPart2":
          return this.popups.spendPart2.references;
        case "spendPart3":
          return this.popups.spendPart3.references;
        case "reportPart1":
          return this.popups.reportPart1.references;
        case "reportPart2":
          return this.popups.reportPart2.references;
      }
    },
    currentPageInfos(){
      var path = this.$route.path;
      var pos = path.indexOf(this.$i18n.locale) + 3;
      var currentPage = path.substr(pos);
      
      switch(currentPage){
      case "buildWP":
          return this.popups.buildWP.infos;
        case "createBudget":
          return this.popups.createBudget.infos;
        case "spendPart1":
          return this.popups.spendPart1.infos;
        case "spendPart2":
          return this.popups.spendPart2.infos;
        case "spendPart3":
          return this.popups.spendPart3.infos;
        case "reportPart1":
          return this.popups.reportPart1.infos;
        case "reportPart2":
          return this.popups.reportPart2.infos;
      }
    },
    currentPageQuiz(){
      var path = this.$route.path;
      var pos = path.indexOf(this.$i18n.locale) + 3;
      var currentPage = path.substr(pos);
      
      switch(currentPage){
      case "buildWP":
          return this.popups.buildWP.quiz;
        case "createBudget":
          return this.popups.createBudget.quiz;
        case "spendPart1":
          return this.popups.spendPart1.quiz;
        case "spendPart2":
          return this.popups.spendPart2.quiz;
        case "spendPart3":
          return this.popups.spendPart3.quiz;
        case "reportPart1":
          return this.popups.reportPart1.quiz;
        case "reportPart2":
          return this.popups.reportPart2.quiz;
      }
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
  watch: {
    playToPercent(newValue) {
      this.$emit('timeupdate', newValue)
    },
    isMuted() {
      const video = this.$refs.videoplayer
      if (this.isMuted) {
        this.oldVolume = this.setVolume
        this.setVolume = 0
        video.muted = true

      } else {
        video.muted = false
        this.setVolume = this.oldVolume
        video.volume = this.setVolume / 100
      }
    },
    setVolume(volume) {
      const video = this.$refs.videoplayer
      if (volume == 0) {
        this.isMuted = true
      } else {
        this.isMuted = false
        video.volume = (volume / 100)
        this.oldVolume = this.setVolume
      }
      this.$store.commit('currentPlaying/setVolume', volume)
    },
    PlayTime(time){
      if(time >= 99.5 && this.chapters){
        this.videoDone = true;
      }
      else{
        this.videoDone = false;
      }
    },
    MenuShowing(newVal){
      var that = this;
      setTimeout(function(){
        that.setOverlayHeight();
      }, 500);
    }
  },
  methods: {
    loading() {
      this.canPlay = false
    },
    readCaptions(e) {
      if (this.$refs.videoplayer) {
        const v = e.target.parentNode
        const tt = v.textTracks[this.trackNumber]
        const cuesThere = tt.activeCues
        if (cuesThere.length > 0) { this.Captions = tt.activeCues[0].text } else { this.Captions = "" }
      }
    },
    showCC() {
      this.CCactive = !this.CCactive
      this.$store.commit('currentPlaying/setShowCC', this.CCactive)
      if (this.CCactive) {
        this.$refs.videoplayer.textTracks[this.trackNumber].mode = "showing"
      } else {
        this.$refs.videoplayer.textTracks[this.trackNumber].mode = "hidden"
      }
    },
    generate() {
      this.$nextTick(() => {
        if (this.$refs.videoplayer) {
          this.navBarTracks = []
          const c = this.$refs.videoplayer.textTracks[0].cues
          for (let i = 0; i < c.length; i++) {
            this.navBarTracks.push(c[i].text)
            this.startTime[i] = c[i].startTime
            this.endTime[i] = Math.floor(c[i].endTime)
            this.startTime.push(this.startTime[this.startTime.length - 1])
          }
        }
      })
      this.resumePosition()
      
      this.showPlayOverlay = false
      this.setOverlayHeight()
    },
    resumePlay() {
      if (!this.accessiblePopup) {
        const videoPlayer = this.$refs.videoplayer
        setTimeout(function() { videoPlayer.play(); }, 250)
      }
    },
    accessibleModal(i) {
      const videoPlayer = this.$refs.videoplayer
      this.accessiblePopup = true
      videoPlayer.pause()
      this.isPaused = true
      this.$bvModal.show(this.modalArray[i])
    },
    showModal(i) {
      this.accessiblePopup = false;
      if (!this.$refs.videoplayer.paused) {
        this.$refs.videoplayer.pause()
        if (this.startTime[i + 1]) {
          this.$refs.videoplayer.currentTime = this.startTime[i + 1]
        }
        
        this.$root.$on('bv::modal::shown', (bvEvent, modalId) => {
          if(modalId == this.modalArray[i] && this.changeButton){
            document.getElementById(this.modalArray[i]).querySelector(".modal-footer .btn").innerHTML = this.$i18n.t('continueButton');
            this.changeButton = false;
          }
        });
        
        this.changeButton = true;
        this.$bvModal.show(this.modalArray[i]);
      }
    },
    seek(e) {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      this.accessiblePopup = false
      this.justSeeked = true
      this.ready = false
      const videoPlayer = this.$refs.videoplayer
      const timeData = e.target.getAttribute('data-start')
      videoPlayer.pause()
      this.isPlayingSoon = timeData
      if (!iOS) { videoPlayer.currentTime = timeData } else { videoPlayer.currentTime = timeData + 2 }
      this.isPlayingNow = videoPlayer.currentTime
      const isNow = this.isPlayingNow
      this.currentFrame = this.startTime.findIndex(element => element === isNow)
      this.$store.commit('currentPlaying/' + this.toResume, this.currentFrame)
      this.$nextTick(function() {
        this.isPaused = false
        var that = this;
        setTimeout(function() {
          videoPlayer.play()
          that.showPlayOverlay = false;
          this.$refs.vId.focus({preventScroll: true})
        }, 250)
        this.justSeeked = false

      })
    },
    resumePosition() {
      if (this.$refs.videoplayer) {
        this.canPlay = true
        this.totalTime = this.$refs.videoplayer.duration
        this.$refs.videoplayer.volume = this.setVolume / 100
        const savedPosition = this.startTime[this.restartAt]
        if (savedPosition) {
          this.$refs.videoplayer.currentTime = savedPosition
        }
        if(!this.chapters){
          this.showPlayOverlay = false;
          this.setOverlayHeight()
        }
      }
    },
    update(e) {
      let currentTime = e.target.currentTime
      let duration = e.target.duration
      this.canPlay = true
      this.PlayTime = (currentTime / duration) * 100
      this.playToPercent = 10 * (parseInt(Math.ceil(this.PlayTime / 10)))
      if (!this.justSeeked) {
        const v = e.target
        v.volume = this.setVolume / 100
        this.isPlayingNow = v.currentTime
        const isNow = this.isPlayingNow
        this.hasPlayed = v.played.length
        this.currentFrame = this.endTime.findIndex(element => element > isNow)
        this.$store.commit('currentPlaying/' + this.toResume, this.currentFrame)
        this.byFrame = (this.isPlayingNow - this.isPlayingSoon)
        if ((this.isPlayingNow + this.byFrame) > this.endTime[this.currentFrame]) this.showModal(this.currentFrame)
        this.isPlayingSoon = v.currentTime
      }
    },
    isItPlaying(i) {
      const isNow = this.isPlayingNow
      if (i === this.endTime.findIndex(element => element > isNow)) {
        return 'isPlaying'
      } else { return '' }
    },
    stopVideo() {
      const video = this.$refs.videoplayer
      video.currentTime = 0
      this.$refs.videoplayer.pause()
      this.isPaused = true
    },

    setTime(e) {
      const video = this.$refs.videoplayer
      var pos = (e.pageX - (this.$refs.progress.getBoundingClientRect().left)) / this.$refs.progress.offsetWidth;
      video.currentTime = pos * video.duration;

    },
    isReady() { this.ready = true },
    goBackwards() {
      const video = this.$refs.videoplayer
      if (this.isPlayingNow) {
        if (this.isPlayingNow - 10 >= 0) { video.currentTime -= 10 } else { video.currentTime = 0 }
      }
    },
    goForward() {
      const video = this.$refs.videoplayer
      if (this.isPlayingNow || (video.currentTime == 0 && this.totalTime >= 10)) {
        if (this.isPlayingNow + 10 < this.totalTime) { video.currentTime += 10 } else {
          video.pause()
          video.currentTime = this.totalTime
        }
      }
    },
    setPlaying() {
      this.isPaused = !this.isPaused;
      this.showPlayOverlay = false;
      if (!this.isPaused) {
        this.$refs.videoplayer.play()
      } else {
        this.$refs.videoplayer.pause()
      }
    },
    isInArray(val, arr){
      if(arr){
        for (var i = 0; i < arr.length; i++){
          if(arr[i] == val){
            return true;
          }
        }
      }
      return false;
    },
    changeTime(e){
      let rect = e.target.getBoundingClientRect()
      let rectSize=rect.right-rect.left
      let mousePos=e.clientX-rect.left
      let toPercent=mousePos/rectSize*this.totalTime
      this.mousePosition=toPercent;
      
      this.showTooltip = true;
      this.$el.querySelector("#timeline-tooltip").style.left = (mousePos - 30) + "px";
    },
    tipEnter(el, done) {
      var that = this;
      el.style.display = "flex";
      
      this.$nextTick(function(){
        that.tipheight = el.offsetHeight;
        el.style.height = 0;

        done();
      });
    },
    tipAfterEnter(el) {
      var height = this.tipheight
      Velocity(el, { height: height + "px" }, {duration: 300});
    },
    tipLeave(el, done) {
      Velocity(el, { height: "0px" }, { duration: 300 });
      setTimeout(function(){
        done();
      }, 300)
    },
    tipAfterLeave(el) {
      var height = this.tipheight
      el.style.height = height + "px";
      el.style.display = "none";
    },
    setOverlayHeight(){
      if (this.$refs.videoplayer) {
        var videoHeight = this.$refs.videoplayer.offsetHeight;
        var overlays = document.querySelectorAll(".overlay");
        for(var l = 0; l < overlays.length; l++){
          overlays[l].style.height = videoHeight + "px";
        }
      }
    }
  },
  mounted(){
    window.onresize  = this.setOverlayHeight;
  }
}

</script>
<i18n>
  {
  "en":{
  "play":"Play",
  "pause":"Pause",
  "stop":"Stop",
  "forward":"Forward 10 seconds",
  "backward":"Rewind 10 seconds",
  "timeline": "Video timeline, use the left and right arrows to skip backwards or forwards 10 seconds",
  "mute":"Mute",
  "unmute":"Unmute",
  "show":"Show ",
  "hide":"Hide ",
  "closedcaptionning":"Closed Captions",
  "jumpModalPartsWP":"Jump to activity",
  "jumpReference":"Jump to reference",
  "jumpInfo":"Jump to information box",
  "jumpQuiz":"Jump to quiz",
  "playSegment":"Play video segment",
  "continue":"Continue to next section",
  "sr_transcriptlocation":"The transcript can be found after the segments list.",
  "segmentsTitle": "Video Segments",
  "videoDone": "You have completed this section."
  },
  "fr":{
  "play":"Jouer",
  "pause":"Pause",
  "stop":"Arrêter",
  "forward":"Avancer 10 secondes",
  "backward":"Reculer 10 secondes",
  "timeline": "Barre de temps vidéo, utilisez les flèches gauche et droite pour reculer ou avancer de 10 secondes",
  "mute":"Désactiver le son",
  "unmute":"Activer le son",
  "show":"Afficher le ",
  "hide":"Cacher le ",
  "closedcaptionning":"sous-titrage codé",
  "jumpModalPartsWP":"Sauter à l’activité",
  "jumpReference":"Sauter à la référence",
  "jumpInfo":"Sauter à la boîte d'information",
  "jumpQuiz":"Sauter au quiz",
  "playSegment":"Faire jouer le segment vidéo",
  "continue":"Continuer à la section suivante",
  "sr_transcriptlocation":"Le transcript peut être trouvé après la liste des segments.",
  "segmentsTitle": "Segments vidéo",
  "videoDone": "Vous avez complété cette section."
  }
  }
</i18n>
<style type="text/css" scoped>
video {
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);*/
  background: #transparent;
  cursor: pointer;
}

.mediaTime {
  color: #fff;
  background-color: #000;
  position: relative;
  display: inline-block;
  padding: .5em;
  margin: 0px;
  flex: 0 0 auto;
}
  
@media(max-width: 576px){
  .mediaTime{
    font-size: 0.8em;
  }
}

  .bar {
    counter-reset: WPepisode;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    position: relative;
    color: #CCC;
    justify-content: flex-start;
    padding: 0;
    margin-left: -0.5%;
    margin-right: -0.5%;
  }

  .bar>li {
    list-style-type: none;
    flex: 0 0 19%;
  }
  
  @media (max-width: 1400px){
    .bar>li {
      flex: 0 0 24%;
    }
  }
  
  @media (max-width: 1200px){
    .bar>li {
      flex: 0 0 32.3333333333%;
    }
  }
  
  @media (max-width: 992px){
    .bar>li {
      flex: 0 0 49%;
    }
  }
  
  @media (max-width: 650px){
    .bar>li {
      flex: 0 0 99%;
    }
  }
  

.bar>li>p {
  display: inline-block;
  height: 2.6em;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  /*width: 200px;*/
  height: 171px;
  overflow: hidden;
  padding: 1.8em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 0 0.5% 10px 0.5%;
  font-weight: bolder;
}

/*.chaptersLink:before {
  counter-increment: WPepisode;
  content: counter(WPepisode);
  position: absolute;
  background-color: #575757;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .1em .25em 0 .5em;
  color: white;
}*/

/*.chaptersLink.plan:before {
  background-color: #587C84;
}

.chaptersLink.spend:before {
  background-color: #7d677d;
}

.chaptersLink.report:before {
  background-color: #865f56;
}

.chaptersLink:nth-child(-n+9):before {
  content: "0"counter(WPepisode);
}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}*/

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.playButton,
.activityButton {
  display: inline-block;
  width: 58px;
  height: min-content;
  background-color: transparent;
  float: none;
}

.playButton:hover,
.activityButton:hover,
.playButton:focus,
.activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity: 0.8;
  background-color: transparent;
}

.playButton {
  left: 20px;
}

.activityButton {
  right: 20px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}

.CC {
  height: 4em;
  padding: .5em;
  padding-top: 1.5em;
  background-color: #000;
  color: #FFF;
  font-family: sans-serif;
  text-align: center;
  width: 100%;

}

.expand-enter-active,
.expand-leave-active {
  transition: all 1s ease;
  padding: 0 10px;
  overflow: hidden;
  max-height: 15em;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave-to {
  height: 0px;
  padding: 0 10px;
  opacity: 0;
}

label{
  margin: 0;
}
  
input[type=range] {
  -webkit-appearance: none;
  background: 0 0;
  display: inline-block;
  height: 2.5em;
  padding: 0;
  width: 7em;
  margin: 0;
}

input[type=range]:focus {
  outline-offset: 0
}

input[type=range]::-webkit-slider-runnable-track {
  background: #aaa;
  height: 4px
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #707070;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0.7em;
  margin-top: -5px;
  width: 10px
}

input[type=range]::-moz-range-track {
  background: #aaa;
  border: 0
}

input[type=range]::-moz-range-thumb {
  background: #fff;
  border: 1px solid #707070;
  border-radius: 0;
  height: 1.3em;
  width: 10px
}

input[type=range]::-ms-track {
  border: 0;
  color: transparent;
  height: 4px
}

input[type=range]::-ms-fill-upper {
  background: #aaa
}

input[type=range]::-ms-fill-lower {
  background: #aaa
}

input[type=range]::-ms-thumb {
  background: #fff;
  border: 1px solid #707070;
  height: 1.3em;
  width: 10px
}

.showVolume{
  position: relative;
  display: flex;
  transition: all 1s;
  align-items:center;
  width: 180px;
}

/* To have volume bar invisible until hover
.showVolume input[type=range]{
  position:absolute;
  top:0;
  left:0;
  width:1px;
  height:1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  transition: width 0.5s, opacity 0.5s;
  opacity: 0;
}
*/

.showVolume:hover input[type=range],
.showVolume input[type=range]:focus{
  position:relative;
  height:1em;
  width: min-content;
  overflow: inherit;
  opacity: 1;
}

.setVolume:focus {
  outline: 1px dashed white;
  outline-offset: 5px;
}

.fd-slider {
  display: inline-block;
  height: 100%;
  margin-top: 10px;
  width: 7em
}

.fd-slider-handle {
  background: #fff;
  border: 1px solid #707070;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  width: 10px;
}

progress {
  -webkit-appearance: none;
  background: #000;
  background-clip: padding-box;
  border: 2px solid #4d4d4d;
  color: #b54142;
  display: block;
  left: 0;
  padding: 2px;
  position: relative;
  clear: both;
  top: 0;
  width: 100%
}

.videoControls {
  margin: .6em 3px;
  background-color: #000;
  color: #fff;
}
  
@media(max-width: 576px){
  .videoControls{
    font-size: 0.7em;
    width: auto;
  }
}

.videoControls:hover,
.videoControls:focus {
  color: #6d6d6d;
}

.videoControls:active {
  color: #b54142;
}

.videoControls:focus {
  outline: 1px dashed white;
}


progress::-moz-progress-bar {
  background: -moz-linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%);
  background: linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2));
  border-radius: 50px;
  background-color: #b54142;
  background-image: (45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%), (to right, #bc1339, #4a0000);
  background-size: 25px 14px, 100% 100%, 100% 100%;
}

.progress {
  height: 14px
}

progress {
  flex: 0 0 100%;
  height: 14px;
  margin: 0 auto;
  display: block;
  /* Important Thing */
  -webkit-appearance: none;
  border: none;
  border-bottom: 1px solid #4d4d4d;
}

progress:focus {
  outline: 1px dashed white;
}

progress::-webkit-progress-bar {
  background: #000;
  border-radius: 50px;
  padding: 2px;
}

progress::-webkit-progress-value {
  border-radius: 50px;
  transition: width 1s;
  background:
    linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    linear-gradient(to right, #b54142, #b54142);
  background-size: 25px 14px, 100% 100%, 100% 100%;
}

.player {
  width: 480px;
  margin: 10px auto;
  border: 1px solid #ccc;
}

video,
audio,
.controls {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

button {
  display: block;
  border: 0;
  margin-right: 3px;
  width: 40px;
  cursor: pointer;
  flex: 0 0 auto;
}

input[type=range] {
  margin-left: 5px;
  flex: 0 0 auto;
}

/*button:hover,
button:focus {
  background-color: #ddd;
}

button:active {
  background-color: #ccc;
}*/

.controls div {
  font-size: 12px;
  display: inline-block;
  line-height: 36px;
  width: 45px;
}

video {
  margin-bottom: -5px;
}
  
  .tipRow{
    /*transition: height 0.3s; */
    overflow: hidden;
  }
  
  
  .overlay{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
    
    transition: opacity 0.3s;
  }
  
  .overlay.done{
    background-color: rgba(0, 0, 0, 0.7);
    transition: opacity 1s;
  }
  
  .overlay > svg{
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 35px);
    color: white;
  }
  
  .overlay > p{
    position: absolute;
    top: calc(50% + 70px);
    color: white;
    display: block;
    width: 100%;
  }
  
  .overlay-fade-enter{
    opacity: 0;
  }
  .overlay-fade-enter-to{
    opacity: 1;
  }
  .overlay-fade-leave{
    opacity: 1;
  }
  .overlay-fade-leave-to{
    opacity: 0;
  }
  
  #timeline-tooltip{
    position: absolute;
    top: -43px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 12px;
    width: 60px!important;
    transition: left 0.2s, top 0.3s, opacity 0.3s;
    text-align: center;
  }
  
  #timeline-tooltip:after{
    content: "";
    position: absolute;
    top: 100%;
    left: 25px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-top: 7px solid rgba(0, 0, 0, 0.7);
    border-right: 5px solid transparent;
  }
  
  .tooltip-fade-enter{
    opacity: 0;
    top: -33px!important;
  }
  .tooltip-fade-enter-to{
    opacity: 1;
    top: -43px!important;
  }
  .tooltip-fade-leave{
    opacity: 1;
    top: -43px!important;
  }
  .tooltip-fade-leave-to{
    opacity: 0;
    top: -33px!important;
  }

</style>
