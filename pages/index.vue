<template>
  <div class="mainWindow">
    <b-row align-h="center">
      <b-col cols="12" lg="8" xl="7">
        <p>&nbsp;</p>
        <div style="margin-left: -30px; margin-right: -30px;">
          <videoplayer enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_ephxllo0/flavorId/0_z42oid4s/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0c7w3dxo/flavorId/0_0zkkoegj/name/a.mp4" posterFile="video_poster.PNG" ccFile="ADT_INTRO_CAPTION.vtt" toResume="setHomepage" :restartAt="thatPoint" />
        </div>
        <div role="tablist" class="transcriptionBox" style="width: 100%;">
          <b-card no-body class="mb-1 text-left">
            <b-card-header header-tag="p" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.translationbox variant="light" class="text-left" >{{$t('IntroTranscript')}}</b-button>
            </b-card-header>
            <b-collapse id="translationbox" accordion="translation-box" role="tabpanel">
              <b-card-body>
                <b-card-text><span v-html="$t('transcriptText')"></span></b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show="true" style="margin-bottom: 25px; margin-top: 25px;">
          <div v-if="$i18n.locale=='en'">
            <p>Thank you for following this new course “Using Public Funds Responsibly .” As this is a work in progress, we are seeking your feedback on the learning experience. We appreciate you taking a few minutes to tell us what worked well, any issues you faced and what we can fix to make it better. It will take you 5 to 10 minutes to complete the questionnaire.</p>
            <p><externalLink link="https://csps-efpc.sondage-survey.ca/f/s.aspx?s=f594eb12-9bd2-4cde-bed9-5d3220a7113b&lang=EN">Questionnaire</externalLink></p>
          </div>
          <div v-if="$i18n.locale=='fr'">
            <p>Merci de suivre le nouveau produit d’apprentissage intitulé « Utiliser les fonds publics de manière responsable  ». Comme celui-ci est dans une phase test, nous aimerions obtenir vos commentaires sur votre expérience d’apprentissage, particulièrement en ce qui a trait à ce qui a bien été, les défis que vous avez rencontrés et vos suggestions pour améliorer l’expérience. Remplir le questionnaire devrait vous prendre entre 5 et 10 minutes.</p>
            <p><externalLink link="https://csps-efpc.sondage-survey.ca/f/s.aspx?s=f594eb12-9bd2-4cde-bed9-5d3220a7113b&lang=FR">Questionnaire</externalLink></p>
          </div>
        </b-alert>
      </b-col>
    </b-row>

    <b-row align-h="center" style="margin-top: 15px;">
      <b-col cols="12" lg="8" xl="7">
        <tip>{{$t('chooseScenario')}}</tip>
      </b-col>
    </b-row>
          
    <!-- <b-row align-h="center" style="margin-bottom: 30px;">
      <b-col cols="12" lg="8" xl="7">
        <b-button-group class="mt-2 d-none d-sm-flex" :aria-label="$t('chooseScenarioLabel')" style="width: 100%;">
          <b-button @click="chosenScenario = 'takeCourse'" :disabled="chosenScenario == 'takeCourse'">{{$t('takeCourse')}}</b-button>
          <b-button @click="chosenScenario = 'refresh'" :disabled="chosenScenario == 'refresh'">{{$t('refresh')}}</b-button>
          <b-button @click="chosenScenario = 'justExam'" :disabled="chosenScenario == 'justExam'">{{$t('justExam')}}</b-button>
        </b-button-group>
        <b-button-group class="mt-2 d-flex d-sm-none" :aria-label="$t('chooseScenarioLabel')" style="width: 100%;" vertical>
          <b-button @click="chosenScenario = 'takeCourse'" :disabled="chosenScenario == 'takeCourse'">{{$t('takeCourse')}}</b-button>
          <b-button @click="chosenScenario = 'refresh'" :disabled="chosenScenario == 'refresh'">{{$t('refresh')}}</b-button>
          <b-button @click="chosenScenario = 'justExam'" :disabled="chosenScenario == 'justExam'">{{$t('justExam')}}</b-button>
        </b-button-group>
      </b-col>
    </b-row> 
    Replaced the accordion with texts -Alex Seguin, 2021
    -->
    <b-row>
      <b-col cols="4">
        <h3 class="text-left">{{$t('takeCourse')}}</h3>
        <p class="text-left">{{$t('takeCourseText')}}</p>
      </b-col>
      <b-col cols="4">
        <h3 class="text-left">{{$t('refreshKnowledge')}}</h3>
        <p class="text-left">{{$t('refreshKnowledgeText')}}</p>
      </b-col>
      <b-col cols="4">
        <h3 class="text-left">{{$t('takeExam')}}</h3>
        <p class="text-left">{{$t('takeExamText')}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h2 class="sideTitle planTitle">{{$t('plan')}}</h2>
        <div role="navigation" class="courseSection planSection" :style="{ backgroundImage: `url(${planbgBarUrl})` }" :aria-label="$t('plan') + ' - Navigation'">
          <microlearning path="buildwp" time="20"  imagePath="BuildWP.svg" :text="$t('BuildWorkPlan')" :completion="$store.state.currentPlaying.buildWP_player" type="video" />
          <microlearning time="20" path="createbudget" imagePath="CreateBud.svg" :text="$t('CreateBudget')" :completion="$store.state.currentPlaying.createBudget_player" type="video" />
          <microlearning path="planKey" time="5" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')"  :completion="$store.state.currentPlaying.kmPlan" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
          <TestTile
  size="140"
  time="15"
  :completion="parseInt($store.getters['plan/getScore'], 10)"
  imagePath="P-Test.svg"
  :text="$t('Test')"
  :highlighted="chosenScenario == 'justExam'"
  type="exam"
  questionNum="20"
  quizUrl="https://app.csps-efpc.gc.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=4150&ou=7781

"
/>
        </div>
        <hr class="planHr">
        <h2 class="sideTitle spendTitle">{{$t('spend')}}</h2>
        <div role="navigation" class="courseSection spendSection" :style="{ backgroundImage: `url(${spendbgBarUrl})` }" :aria-label="$t('spend') + ' - Navigation'">
          <microlearning imagePath="InitiateAuthSpending.svg" path="spendPart1" time="20" :text="$t('InitiateAuthorizeSpending')"  :completion="$store.state.currentPlaying.spendPart1_player" type="video" />
          <microlearning imagePath="ExerciseFinancialAuthority.svg" path="spendPart2" time="20" :text="$t('ExerciseFinancialAuthority')"  :completion="$store.state.currentPlaying.spendPart2_player" type="video" />
          <microlearning time="20" path="spendPart3" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')"  :completion="$store.state.currentPlaying.spendPart3_player" type="video" />
          <microlearning path="spendKey" time="5" imagePath="KeyMessS.svg" :text="$t('KeyMessagesSpend')" :completion="$store.state.currentPlaying.kmSpend" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
          <TestTile
  path="exam2"
  size="140"
  time="15"
  imagePath="S-Test.svg"
  :text="$t('Test')"
  :completion="parseInt($store.getters['spend/getScore'], 10)"
  :highlighted="chosenScenario == 'justExam'"
  type="exam"
  questionNum="20"
  quizUrl="https://app.csps-efpc.gc.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=4152&ou=7781

"
/>
</div>
        <hr class="spendHr">
        <h2 class="sideTitle reportTitle">{{$t('report')}}</h2>
        <div role="navigation" class="courseSection reportSection" :style="{ backgroundImage: `url(${reportbgBarUrl})` }" :aria-label="$t('report') + ' - Navigation'">
          <microlearning imagePath="R-Conduct.svg" path="reportPart1" time="20" :text="$t('ConductPeriodicVarianceReporting')" :completion="$store.state.currentPlaying.reportPart1_player" type="video" />
          <microlearning imagePath="R-Contribute.svg"  path="reportPart2" time="20" :text="$t('ContributeReporting')" :completion="$store.state.currentPlaying.reportPart2_player" type="video" />
          <microlearning imagePath="KeyMessR.svg" path="reportKey" time="5" :text="$t('KeyMessagesReport')" :completion="$store.state.currentPlaying.kmReport" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
          <TestTile
  :completion="parseInt($store.getters['report/getScore'], 10)"
  path="exam3"
  size="140"
  time="15"
  imagePath="R-Test.svg"
  :text="$t('Test')"
  :highlighted="chosenScenario == 'justExam'"
  type="exam"
  questionNum="20"
  quizUrl="https://app.csps-efpc.gc.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=4151&ou=7781

"
/>

</div>
        <hr class="reportHr">
      </b-col>
    </b-row>
  </div>
</template>

<script type="text/javascript">
  
import planbgBarUrl from "~/components/plan_phase_bar.svg"
import spendbgBarUrl from "~/components/spend_phase_bar.svg"
import reportbgBarUrl from "~/components/report_phase_bar.svg"
import microlearning from "~/components/microlearning"
import hamburger from "~/components/hamburger"
import videoplayer from "~/components/interface/videoPlayer"
import externalLink from "~/components/externalLink"
import tip from "~/components/tip"
import TestTile from "../components/testTile.vue"
  
export default {
  data() {
    return {
      planbgBarUrl,
      spendbgBarUrl,
      reportbgBarUrl,
    }
  },
  components: {
    microlearning,
    hamburger,
    videoplayer,
    externalLink,
    tip,
    TestTile
},
  computed:{
    thatPoint(){
      return parseInt(this.$store.state.currentPlaying.homepage)
    },
    planCompleted(){
      return this.$store.getters['plan/getScore']
    },
    reportCompleted(){
      return this.$store.getters['report/getScore']
    },
    spendCompleted(){
      return this.$store.getters['spend/getScore']
    },
    courseComplete(){
      if(this.planCompleted>=80 && this.spendCompleted>=80&&this.reportCompleted>=80){
        return true
      }
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  }
}

</script>

<style scoped>
  
  .pageTitle {
    font-size: 50px;
    margin-top: 1em;
  }

  .planHr {
    border-top: 3px dashed #d1dfe1;
  }

  .spendHr {
    border-top: 3px dashed #cac1ca;
    ;
  }

  .reportHr {
    border-top: 3px dashed #d6c5c1;
  }

  .sideTitle {
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    clear: both;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: -1em;
    margin-left: 50px;
  }
  
  @media(max-width: 768px){
    .sideTitle {
      margin-left: 25px;
    }
  }
  
  @media(max-width: 576px){
    .sideTitle {
      margin-left: 0px;
      font-size: 32px;
    }
  }

  .mainWindow {
    text-align: center;
  }

  #introVideo {
    width: 60vw;
  }

  .videoContain {
    width: 60vw;
    margin: auto;
  }

  .courseSection {
    clear: left;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    background-position-y: 9em;
    background-position-x: 12em;
    background-repeat: no-repeat;
  }
  
  @media (max-width: 576px){
    .courseSection {
      background: none!important;
    }
  }

  .planTitle {
    color: #587C84;
  }

  .spendTitle {
    color: #7d677d;
  }

  .reportTitle {
    color: #865F56;
  }


  .iconText {
    color: #fff;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .sideText:before {
    content: "“";
    color: #fff;
    float: left;
    font-size: 60px;
  }


  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  details {
    text-align: left
  }

</style>

<i18n>
  
  {
    "en":{
      "welcomeText": "Investing money is the process of committing resources in a strategic way to accomplish a specific objective.” ― Alan Gotthardt",
      "letsbegin": "Let's Begin",
      "IntroTranscript":"Introduction video transcript",
      "transcriptText":"<p><strong>[00:00:01 Title is shown on screen.]</strong></p><h2>Introduction</h2><p><strong>Charlaine Lapointe: </strong>Welcome! You’re in the right place if you’re a manager looking to learn about how to make responsible use of public funds.</p><p>There are many reasons why managers like you might take this course. </p><ul><li>You might be a new manager who’s new at financial delegation and you need to learn everything there is to know</li><li>You could be an experienced manager, but new to government and looking to leverage your experience by connecting what you already know</li><li>Maybe you just came back from a parental leave and you could really use a refresher</li><li>Or perhaps you’re an experienced manager in government and you need to recertify every 5 years in order to continue exercising your financial delegation. Maybe you just really want to get to the test! </li></ul><p>Whatever brought you here, you’re in charge of your own learning. Think of this as a “choose your own adventure” kind of experience and take what you need in order to succeed. If all you need is to take the test because you’re already pretty familiar with the content, then, by all means, start with that. </p><p>If you just need an overview or a refresher, then simply review the key messages of each phase to get the key highlights and tools. </p><p>You'll also want to make use of the handy features on your screen, like the toolbox on the top right, which has tools and resources to help you on the job.</p><p>If you’re learning this for the first time, then take the time to go through each section, do the in-depth learning activities, and review the tools and resources. We promise it’s worth the effort! </p><p><strong>[00:01:22 Sample images of module pages are shown on screen.]</strong></p><p>You’re probably wondering about the test. </p> <p>Passing the test for this course is mandatory before you can exercise financial delegation. </p><p>The passing grade is 80% for each of the sections.</p><p><strong>[00:01:43 Sample images of test examples are shown on screen.]</strong></p><p>Each section should take you around 15 to 20 minutes to complete.</p><p>You can access course materials during the test and you can take it as many times as you need. </p><p><strong>[00:01:53 Sample images of module pages are shown on screen.]</strong></p><p>In the end, how you use this course is really up to you! It will remain accessible to you so you can come back to consult different sections and tools, whatever you need on the job! </p><p>We’re rooting for you! Because when you steward public funds well, you succeed in your career. And, more importantly, you serve Canadians well, with transparency and accountability. And that’s the bottom line. </p> ",
      "objectives":"Objectives",
      "HowTo":"How to Navigate",
      "chooseScenario":"Pick one of the following three options based on which type of learning journey you want to take.",
      "takeCourse":"I want to take the full course",
      "takeCourseText":"To take the full course start with the first module of the Plan section by selecting “Build a Work Plan” and continue to move through section by section to complete the entire course.",
      "refreshKnowledge":"I want to refresh my knowledge",
      "refreshKnowledgeText":"For this option, focus on reviewing the Key Messages in each of the Plan, Spend and Report sections.",
      "takeExam":"I just want to take the test",
      "takeExamText":"For this option, you will do three tests, one in the Plan section, one in the Spend section and one in the Report section."
    },
    "fr":{
      "welcomeText": "Bienvenue",
      "letsbegin": "Commençons",
      "IntroTranscript":"Transcription de la vidéo d'introduction",
      "transcriptText":"<p><strong>[00:00:01 : Un titre apparaît à l'écran.]</strong></p><h2>Introduction</h2><p><strong>Charlaine Lapointe : </strong>Bienvenue! Vous êtes au bon endroit si vous êtes un gestionnaire qui cherche à apprendre comment utiliser de façon responsable les fonds publics. Il y a de nombreuses raisons pour lesquelles des gestionnaires comme vous pourraient vouloir suivre ce cours.</p> <ul><li>Par exemple, si vous êtes un nouveau gestionnaire, vous aurez à apprendre de A à Z </li><li>Ou peut-être avez-vous déjà été gestionnaire de carrière, mais ailleurs qu’au gouvernement et que vous avez simplement besoin d’une mise à niveau pour mettre à profit votre expérience</li><li>Peut-être revenez-vous d’un congé parental - et que vous avez simplement besoin de vous rafraîchir la mémoire</li><li>Ou encore, peut-être êtes-vous un gestionnaire d’expérience au gouvernement et vous aimeriez accéder directement au test afin de renouveler votre certification tel qu’il vous est requis de le faire à tous les 5 ans afin de pouvoir continuer à exercer votre délégation financière.</li> </ul> <p>Quelle que soit la raison qui ait pu vous mener ici, vous êtes responsable de votre propre apprentissage. Considérez cela comme une expérience de type « choisissez votre propre aventure » et retirez-en ce dont vous avez besoin pour réussir. Si tout ce dont vous avez besoin, c’est de passer le test parce que le contenu vous est déjà assez familier, alors, sentez-vous bien libre de commencer par là.</p> <p>Si vous n’avez besoin que d'une vue d’ensemble ou d’une remise en mémoire, passez simplement en revue les messages clés de chaque phase pour obtenir les points saillants et les outils clés.</p><p><strong>[00:01:21 : Des exemples de pages de module apparaissent à l'écran.]</strong></p> <p>De plus, vous trouverez d’astucieuses fonctions à l’écran - comme la boîte à outils en haut à droite - où vous trouverez des outils et des documents de référence pour vous aider dans votre travail.</p> <p>Si vous apprenez cela pour la première fois, prenez le temps de parcourir les sections, de faire les activités d’apprentissage en profondeur, et d’examiner les outils et les ressources. Nous vous promettons que cela en vaut la peine!</p> <p>Vous vous posez probablement des questions au sujet du test.</p> <p>Il est obligatoire de réussir l’examen de ce cours afin de pouvoir exercer la délégation financière.</p><p>La note de passage est de 80 % par partie.<p><strong>[00:02:07 : Des exemples de tests apparaissent à l’écran.]</strong></p></p><p>Chaque partie devrait vous prendre environ 15 à 20 minutes.</p> <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.</p><p><strong>[00:02:17 : Des exemples de pages de modules apparaissent à l'écran.]</strong></p> <p>En fin de compte, c’est à vous de décider comment vous allez utiliser ce cours! Il restera accessible pour que vous puissiez revenir et consulter les différentes sections et outils lorsque vous en aurez besoin pour votre travail! </p> <p>Nous vous souhaitons de réussir le cours parce que lorsque vous gérez bien les fonds publics, vous réussissez dans votre carrière. Et, ce qui est peut-être encore plus important, vous servez bien les Canadiens, avec transparence et responsabilité. Et c’est ça l’essentiel.</p>",
      "objectives":"Objectifs",
      "HowTo":"Comment naviguer ce cours",
      "chooseScenario":"Choisissez l’une des trois options suivantes en fonction du type de parcours d’apprentissage que vous voulez suivre.",
      "takeCourse":"Je veux prendre la totalité du cours",
      "takeCourseText":"Pour prendre la totalité du cours, commencez par le premier module de la section Planification en choisissant « Élaborer un plan de travail » et continuez à avancer, section par section pour terminer le cours complet.",
      "refreshKnowledge":"Je veux rafraîchir mes connaissances",
      "refreshKnowledgeText":"Avec cette option, vous examinerez les Messages clés dans chacune des sections Planification, Dépenses et Rapports.",
      "takeExam":"Je veux seulement prendre le test",
      "takeExamText":"Avec cette option, vous ferez trois tests, un dans la section Planification, un dans la section Dépenses et un dans la section Rapports."
    }
  }
  
</i18n>