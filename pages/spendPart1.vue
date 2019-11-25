<template>
  <div>
    <h1 class="pageTitle" v-html="$t('InitiateAuthorizeSpending')" />
    
    <section>
      <video ref="videoplayer" id="mainPlayer" :poster="require('~/assets/'+ $i18n.locale +'/CreateBudgetPoster.jpg')" :src="require('~/assets/'+ $i18n.locale +'/CreateBudget.mp4')" controls playsinline @loadeddata="resumePosition" @timeupdate="update" @canplaythrough="isReady">
        <track :src="require('~/assets/'+ $i18n.locale +'/SpendPart1.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="cbTranscript-1" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button>
                <span v-if="$i18n.locale=='en'"></span>
                <span v-if="$i18n.locale=='fr'"></span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <ul id="bar" ref="linkBar">
        <li href='#mainPlayer' v-for="(item,index) in navBarTracks" :class="'chaptersLink '+ isItPlaying(index)">
          {{ item }}<br>
          <a href="#mainPlayer" class="playButton" :key="index"  ><img src="~/assets/VideoIcon.svg"  width="48" height="48" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" @click="seek" :title="$t('playSegment') + ' - ' +navBarTracks[index]"></a>
          <a href="javascript:" class="activityButton" @click="accessibleModal(index)" :title="$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]"><img src="~/assets/ActivityIcon.svg" width="48" height="48"> </a>
        </li>
      </ul>
      <div v-if="false"><span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
        <span>endTime : {{endTime}}</span><br>
        <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
        <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span></div>
    </section>
    <section>
      <b-modal no-stacking id="checkYourBudget" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('AnalyzeBudgetKT')}}</template>
    <checkBudget />
        </b-modal>
      <b-modal id="budgetAnalyze" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('checkBudget')}}</template>
        <checkBudget />
      </b-modal>
      <b-modal id="forecastBudget" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('forecastBudgetTitle')}}</template>
        <budgetForecastActivity />
      </b-modal>
      <b-modal no-stacking id="submitBudget" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('submitBudgetTitle')}}</template>
        <submitBudget />
      </b-modal>
      <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('InRealLife')}}</template>
        <span v-html="$t('IRLText')"></span>
      </b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
      <budgetQuiz />
      </b-modal>
    </section>
    <div class="bottomNav spendSection">
      <microlearning path="planKey" size="140" completion="100" imagePath="KeyMessP.png" :text="$t('KeyMessages')" />
      <microlearning path="spendPart1"  youAreHere imagePath="KeyMessR.png" size="140" time="20" completion="80" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning path="buildWP"  imagePath="KeyMessR.png" size="140" time="20" completion="80" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning size="140" path="createBudget" time="20" completion="10" imagePath="CreateBud.png" :text="$t('MonitorControlFinances')" />
      <microlearning size="140" time="15" tmp_imagePath="TestPlan.png" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
import microlearning from '~/components/microlearning'
import checkBudget from '~/components/checkBudget'
import budgetForecastActivity from '~/components/budgetForecastActivity'
import AnalyzeBudgetKT from '~/components/AnalyzeBudgetKT'
import submitBudget from '~/components/submitBudget'
import budgetQuiz from '~/components/budgetQuiz'
import plusIcon from '~/components/icons/PlusSign'
export default {
  data() {
    return {
      currentFrame: 0,
      accessiblePopup: false,
      modalArray: ["checkYourBudget", "", "budgetKeyTerms", "budgetAnalyze", "forecastBudget","submitBudget", "reallife", "quiz"],
      startTime: [],
      endTime: [],
      hasPlayed: {},
      navBarTracks: [],
      isPlayingNow: 0,
      isPlayingSoon: 0,
      byFrame: 0,
      justSeeked: false,
      isItReady: false
    }
  },
  components: {
    microlearning,
    AnalyzeBudgetKT,
    checkBudget,
    budgetForecastActivity,
    submitBudget,
    budgetQuiz,
    plusIcon
  },
  methods: {
    isReady() { this.isItReady = true },
    generate() {
      const c = this.$refs.videoplayer.textTracks[0].cues
      for (let i = 0; i < c.length; i++) {
        this.navBarTracks.push(c[i].text)
        this.startTime[i] = c[i].startTime
        this.endTime[i] = Math.floor(c[i].endTime)
      }
      this.startTime.push(this.startTime[this.startTime.length - 1])
    },
    resumePlay() {
      if (!this.accessiblePopup) {
        const videoPlayer = this.$refs.videoplayer
        setTimeout(function() { videoPlayer.play(); }, 250)
      }
    },
    accessibleModal(i) {
      this.accessiblePopup = true
      this.$refs.videoplayer.pause()
      this.$bvModal.show(this.modalArray[i])
      // this.$refs.videoplayer.currentTime = this.startTime[i + 1]
    },
    showModal(i) {

      if (!this.$refs.videoplayer.paused) {
        this.$refs.videoplayer.pause()
        if (this.startTime[i + 1]) {
          this.$refs.videoplayer.currentTime = this.startTime[i + 1]
        }
        this.$bvModal.show(this.modalArray[i])
      }

    },
    seek(e) {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      this.accessiblePopup = false
      this.justSeeked = true
      const videoPlayer = this.$refs.videoplayer
      const timeData = e.target.getAttribute('data-start')
      videoPlayer.pause()
      this.isPlayingSoon = timeData
      if (!iOS) { videoPlayer.currentTime = timeData } else { videoPlayer.currentTime = timeData + 2 }

      this.isPlayingNow = videoPlayer.currentTime
      const isNow = this.isPlayingNow
      this.currentFrame = this.startTime.findIndex(element => element === isNow)
      localStorage.setItem("CreateBudgetCurrentPlaying", this.currentFrame)
      this.$nextTick(function() {
        setTimeout(function() { videoPlayer.play() }, 250)
        this.justSeeked = false
      })
    },
    resumePosition() {
      const savedPosition = this.startTime[localStorage.getItem("CreateBudgetCurrentPlaying")]
      if (savedPosition) {
        this.$refs.videoplayer.currentTime = savedPosition
      }
    },
    update(e) {
      if (!this.justSeeked) {
        const v = e.target
        this.isPlayingNow = v.currentTime
        const isNow = this.isPlayingNow
        this.hasPlayed = v.played.length
        this.currentFrame = this.endTime.findIndex(element => element > isNow)
        localStorage.setItem("CreateBudgetCurrentPlaying", this.currentFrame)
        this.byFrame = (this.isPlayingNow - this.isPlayingSoon)
        if ((this.isPlayingNow + this.byFrame) > this.endTime[this.currentFrame]) this.showModal(this.currentFrame)
        this.isPlayingSoon = v.currentTime
      } else { window.alert("seeking") }
    },
    isItPlaying(i) {
      const isNow = this.isPlayingNow
      if (i === this.endTime.findIndex(element => element > isNow)) {
        return 'isPlaying'
      } else { return '' }
    }
  }
}
</script>
<style scoped>

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#mainPlayer {
  width: 60vw;
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: space-evenly;
  counter-reset: episode;
}

/*#bar > li.chaptersLink:first-child > a.activityButton { display:none; }*/
/*#bar > li.chaptersLink:nth-child(2) > a.activityButton { display:none; }*/

#bar > li:last-child > a {
  display:none;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  width: 175px;
  height: 150px;
  overflow: hidden;
  padding: 1.2em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
}


.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #587C84;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .5em .25em 0 1em;
  color: white;

}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.playButton, .activityButton {
  position: absolute;
  bottom: 1em;
}

.playButton{left: 20px;}
.activityButton {
    right: 5px;
    /*transform:rotate(45deg);*/
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "submitBudgetTitle":"Activity: Submit and Adjust your Budget",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "AnalyzeBudgetKT":"Activity: Analyze a Budget - Key Terms",
  "checkBudget":"Activity: Analyze Past And Current Year’s Budget",
  "forecastBudgetTitle":"Activity: Forecast Budget Requirements",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Your organization will have their own ways of doing budget requirements. Take time out from the course and talk to your financial management advisor and director. Ask them:&nbsp;</p><ul><li>Do we have a budget template?</li><li>What budgets do we have?</li><ul><li>Operating, which includes Salary and O&amp;M</li><li>Operating and Gs&amp;Cs</li><li>Operating and Capital</li></ul><li>Is the capital budget managed centrally or by each manager?</li></ul>",
  "gotIt":"Continue to next segment",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":""
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "AnalyzeBudgetKT":"Activité: Analyser un budget - Termes clés",
  "checkBudget":"Activité: Analyser les budgets précédents et en cours",
  "submitBudgetTitle":"Activité: Soumettre et ajuster votre budget ",
  "forecastBudgetTitle":"Activité: Prévoyez vos besoins budgétaires",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Votre organisation aura sa propre fa&ccedil;on de faire les exigences budg&eacute;taires. Prenez cong&eacute; du cours et parlez &agrave; votre conseiller en gestion financi&egrave;re et &agrave; votre directeur. Demandez-leur :&nbsp;</p><ul><li>Avons-nous un mod&egrave;le de budget?</li><li>Quels sont nos budgets?</li><ul><li>Fonctionnement, inclus salaire et F&amp;E</li><li>Fonctionnement et subventions et contributions</li><li>Fonctionnement et immobilisations</li></ul><li>Le budget d'investissement est-il g&eacute;r&eacute; de fa&ccedil;on centralis&eacute;e ou par chaque gestionnaire?</li></ul>",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l'activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":""
  }
  }
</i18n>