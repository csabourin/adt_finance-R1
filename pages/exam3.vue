<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col>
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
              <p>For some of the questions in this test, you play the role of a manager of a call center. You will be given scenarios based on this situation.&nbsp;</p>
              <p>As per Treasury Board requirements, passing the test for this course is mandatory before you can exercise financial delegation.&nbsp;</p>
              <p>There are three sections to the test - one for each phase: Plan, Spend and Report<!-- planning, spending and reporting -->.</p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 10 to 15 minutes to complete.&nbsp;</p>
              <p>You can access course materials during the test and you can take it as many times as you need.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Pour certaines des questions de ce test, vous &ecirc;tes dans le r&ocirc;le d’un responsable de centre d’appels. Des scénarios basés sur cette situation vous seront proposés.&nbsp;</p>
              <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir l’examen de ce cours avant de pouvoir exercer la délégation financi&egrave;re.</p>
              <p>Le test comporte trois parties — une à la fin de chaque phase : planification, dépenses et rapports.</p>
              <p>La note de passage est de 80 %, par partie.&nbsp;</p>
              <p>Chaque partie devrait vous prendre environ 10 à 15 minutes.&nbsp;</p>
              <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez reprendre le test autant de fois que vous le désirez.</p>
            </div>
          </b-alert>
          <!--<p v-if="AlertIsDismissed"><b-button @click="AlertIsDismissed=false">{{$t('ShowInstructions')}}</b-button></p>-->
          <p v-if="AlertIsDismissed"><button @click="AlertIsDismissed=false" class="instructionsBtn" v-b-tooltip.right.hover.focus :title="$t('ShowInstructions')"><span class="v-inv">{{$t('ShowInstructions')}}</span></button></p>
          <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
          <!--<div class="progressBar" >
            <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
          </div>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam report" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,1,0)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[1]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>02
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,2,1)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[2]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>03
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,3,2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,4,3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="arraysMatch($event,['2','4'],4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,4,5)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[6]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>07
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="calculateAnswer($event,1,6)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[7]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>08
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="calculateAnswer($event,2,7)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[8]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>09
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,4,8)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[9]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>10
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,3,9)" />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group class="mt-2" :aria-label="$t('questionNav')">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=9">{{$t('nextPage')}}</b-button>
          </b-button-group>
        </div>
        <transition name="fade">
            <div style="margin-top: 50px;">
              <hr />
              <p><b-button @click="markTest">{{$t('markTest')}}</b-button> <b-button @click="resetQuiz">{{$t('tryAgain')}}</b-button></p>
            </div>
          </transition>
      </b-col>
    </b-row>
    </b-container>

    <div class="bottomNav generalSection" v-if="chosenScenario == 'justExam'">
      <div class="generalSectionBar"><span>{{$t('justExamShort')}}</span></div>
      <microlearning path="exam1" time="15" size="140" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('plan')" class="plan" noGrey type="exam" questionNum="20" />
      <microlearning path="exam2" time="15" size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')" class="spend" noGrey type="exam" questionNum="20" />
      <microlearning path="exam3" time="15" youAreHere size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')"  class="report" noGrey type="exam" questionNum="10" />
    </div>
    <div class="bottomNav reportSection" v-else>
      <div class="reportSectionBar"><span>{{$t('report')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="reportKey" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" time="5" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning youAreHere :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" type="exam" questionNum="10" />
    </div>

    <!-- Debugging section -->
    <!--<div v-if="debugging">
      <p>{{allDone}}</p>
      <p>{{answerScore}}</p>
      <ul>
        <li v-for="index in answerScore">Answer {{Refill(index.toString())}} </li>
      </ul>
    </div>-->
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link>
      </p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link>
      </p>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>

    <b-modal id="missingQuestions" size="lg" okOnly>
      <p class='pageTitle'>{{$t('unanswered')}}</p>
      <p v-if="$i18n.locale=='en'">Your test cannot be marked because the following question(s) has/have not been answered:</p>
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes :</p>
      
      <ul>
        <li v-for="question, index in unansweredQuestions" :key="question">Question {{question}}</li>
      </ul>
      
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import microlearning from "~/components/microlearning"
export default {
  name: "examThree",
  data() {
    return {
      debugging: false,
      isNull: false,
      numQuestions: 10
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz,
    microlearning
  },
  methods: {
    resetQuiz() {
      this.$bvModal.msgBoxConfirm(this.$t('warnReset'), { cancelTitle: this.$t('cancel') }).then(trigger => {
          if (trigger) {
            this.isNull = !this.isNull
            this.$store.commit('report/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('report/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('report/setComplete', this.checkPercentage())
      }
      else{
        this.$bvModal.show('missingQuestions');
      }
    },
    checkPercentage() {
      var count = 0;
      for (let i in this.answerScore) {
        if (this.answerScore[i][0] == "01") // 01 means correct answer
          count++;
      }
      const score = parseInt(count / this.numQuestions * 100)
      return score
    },
    Refill(qId) {
      if (this.answerScore[qId]) { return this.answerScore[qId][1] } else { return undefined }
    },
    calculateAnswer(answer, correct, qId) {
      if (answer == correct) {
        this.$store.commit('report/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('report/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('report/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('report/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('report/setScore', [qId.toString(), "01", arr1])
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone() {
      return this.$store.getters['report/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('report/dismissAlert') : this.$store.commit('report/undismissAlert') },
      get() { return this.$store.state.report.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('report/setCurrentTab', tabIndex) },
      get() { return this.$store.state.report.tabIndex }
    },
    answerScore() {
      return this.$store.state.report.score
    },
    quizLocked() {
      return this.$store.state.report.quizLocked
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    },
    unansweredQuestions(){
      var unanswered = [];
      for (var i = 0; i < this.numQuestions; i++){
        if(!this.answerScore[i]){
          unanswered.push(i+1);
        }
      }
      return unanswered;
    },
    allAnswered(){
      const answers = Object.keys(this.answerScore).length
      return answers === this.numQuestions
    }
  },
}

</script>

<style type="text/css" scoped>
/*Using a scoped 'deep' selector*/
>>>.qTable td,
>>>.qTable th {
  border: 1px solid #4d4d4d;
  padding: .5em;
}

>>>.qTable th[scope="col"] {
  background-color: #865F56;
  color: #fff;
}

/*.reportSection {
  position: relative;
  height: 100px;
}*/

.reportSectionBar {
  text-transform: uppercase;
  background-color: #e5dddc;
  position: absolute;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.reportSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

.progressBar {
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;
}

.square {
  font-size: .9em;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  width: 42px;
  height: 22px;
  background-color: #DDD;
  cursor: pointer;
  color: #4d4d4d;
}

.filled {
  background-color: #865F56;
  color: #fff;
}

.Qactive {
  background-color: #e0e59e;
  box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
  outline: 1px solid #fff;
  color: #212529;
  /*outline: 2px solid #1000ff33;*/
}

.filled.Qactive {
  background-color: #B3A27A;
}
  
  .alert{
    padding-top: 1.5rem;
  }
  
  .alert h3{
    font-size: 22px;
  }
  
  .instructionsBtn{
    display: block;
    width: 60px;
    height: 60px;
    background: url('~assets/instructionsIcon.svg') center center no-repeat;
    border: none;
    appearance: none;
    -webkit-appearance: none;
  }
  
  .instructionsBtn:hover, .instructionsBtn:focus{
    opacity: 0.8;
    outline: none;
  }

</style>
<i18n>{
  "en": {
  "dismiss": "Dismiss",
  "warnReset":"This will erase your answer and score for this test, are you certain?",
  "Answered": "Answered",
  "markTest": "Mark my test",
  "testComplete": "Test Completed",
  "tryAgain": "Try Again",
  "scoreIs": "Your final score is",
  "unanswered":"Unanswered Question(s)",
  "Questions": {
  "q1": {
  "text": "<div class='tableScrollLTM' style='margin-bottom: 15px;'><table class='qTable' style='font-weight: 400;'> <tbody> <tr style='background-color: #865F56; color: white;'> <td> <p>Budget </p> </td> <td> <p>Commitments </p> </td> <td> <p>Year-To-Date Actuals</p> </td> <td> <p>Annual Forecast</p> </td> <td> <p>Surplus / Deficit</p> </td> </tr> </tbody> </table> </div> <br>These are the column headings for the financial situation report. How is the surplus/deficit calculated?",
      "options": {
      "1": "Annual Forecast – Budget = Surplus/Deficit",
      "2": "Commitments – Budget = Surplus/Deficit",
      "3": "Commitments + Year-to-Date Actuals = Surplus/Deficit",
      "4": "Year-to-Date Actuals + Annual Forecast = Surplus/Deficit"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q2": {
      "text": "It is P6 and you are reviewing the financial situation report. Over the last four months, three of your positions have been vacant so there is a substantial salary surplus. As a short-term solution, you are hiring two students until the end of the fiscal year. However, it will take an additional month to process their security clearances. As a manager, how do you forecast, given this situation?",
      "options": {
      "1": "Forecast the costs of two student salaries, add this amount to your budget total and update the Year-to-Date Actuals to reflect this change.",
      "2": "Forecast the costs of two student salaries from P7 to P12 (end of fiscal year) and update the Commitments in the financial system.",
      "3": "Forecast the costs of two student salaries, deduct them from your budget total and update the Year-to-Date Actuals to reflect this change.",
      "4": "Forecast the costs of two student salaries from P6 to P12 (end of fiscal year) and update the Commitments in the financial system."
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q3": {
      "text": "It’s P6 and you’re preparing your financial situation report. Three of your positions have been vacant for the last four months, and you now expect they will be vacant for another five months. There is a growing salary surplus. What will you do?",
      "options": {
      "1": "Keep forecasting the budgeted amount for salary and acquire temporary help because it’s quicker.",
      "2": "Transfer the salary surplus to O&amp;M, even though you do not forecast an O&amp;M deficit.",
      "3": "Tell your manager that you have a surplus in your salary budget, so it can be used elsewhere in the organization.",
      "4": "Do not change the salary forecast and hold onto the funds until P12, just in case the staffing situation changes."
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q4": {
      "text": "Since all your funds have been committed, last month you were granted an additional $5,000 to train employees on new software as a result of a changing priority. Upon reviewing the financial situation report just received from Finance, you see that these funds are not included in the budget totals. Knowing that the forecast is due in two weeks, what do you do?",
      "options": {
      "1": "Increase the budget in the financial system by $5,000.",
      "2": "Create a commitment in the financial system for $5,000.",
      "3": "Wait for the next FSR to see if the budget totals are updated.",
      "4": "Forecast the $5,000 and follow up with Finance."
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q5": {
      "text": "<div class='tableScrollLTL'><table class='qTable' style='font-weight: 400;'> <thead> <tr> <th id='1' scope='col'>&nbsp;</th> <th id='2' scope='col'> <p style='text-align: center;'>P6 Budget&nbsp;</p> </th> <th id='3' scope='col'> <p style='text-align: center;'>P6 Commitments&nbsp;</p> </th> <th id='4' scope='col'> <p style='text-align: center;'>P6 Year-To-Date Actuals</p> </th> <th id='5' scope='col'> <p style='text-align: center;'>P5 Annual Forecast</p> </th> <th id='6' scope='col'> <p style='text-align: center;'>P6 Annual Forecast</p> </th> <th id='7' scope='col'> <p style='text-align: center;'>Surplus / Deficit</p> </th> </tr> </thead> <tbody> <tr> <th id='8' scope='row' headers='1'> <p>Chatbot software</p> </th> <td headers='2 8'> <p style='text-align: right;'>$3,000</p> </td> <td headers='3 8'> <p style='text-align: right;'>$1,500</p> </td> <td headers='4 8'> <p style='text-align: right;'>$1,500</p> </td> <td headers='5 8'> <p style='text-align: right;'>$3,500</p> </td> <td headers='6 8'>&nbsp;</td> <td headers='7 8'> <p style='text-align: right;'>$0</p> </td> </tr> <tr> <th id='9' scope='row' headers='1'> <p>Hospitality</p> </th> <td headers='2 9'> <p style='text-align: right;'>$15,000</p> </td> <td headers='3 9'> <p style='text-align: right;'>$9,500</p> </td> <td headers='4 9'> <p style='text-align: right;'>$8,000</p> </td> <td headers='5 9'> <p style='text-align: right;'>$15,000</p> </td> <td headers='6 9'>&nbsp;</td> <td headers='7 9'> <p style='text-align: right;'>$0</p> </td> </tr> </tbody> </table></div><p>&nbsp;</p> Looking at the financial situation report provided, for which of the following would you need to get more information?",
      "options": {
      "1": "Added together, the P6 chatbot software commitments and year-to-date actuals are equal to the budget.",
      "2": "The P6 hospitality commitments and year-to-date actuals together add up to more than the budget.",
      "3": "The hospitality P5 annual forecast is the same as the P6 budget.",
      "4": "The chatbot software P5 annual forecast is higher than the P6 budget."
      },
      "feedback": {
      "wrong": "",
      "right": ""
      }
      },
      "q6": {
      "text": "Which report publishes information on the departmental websites related to travel, hospitality, contracts, position reclassifications, wrongdoing, grants and contributions? ",
      "options": {
      "1": "Departmental Results Report",
      "2": "Quarterly Financial Report",
      "3": "Internal Audit",
      "4": "Proactive Disclosure"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q7": {
      "text": "What do Performance Information Profiles contain?",
      "options": {
      "1": "Performance indicators and targets ",
      "2": "Snapshot of finances and commitments",
      "3": "Compliance results and recommendations",
      "4": "Performance assessments of policies"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q8": {
      "text": "Near year-end, your planning unit requests that you report on results for the “Digitization of services.” What information would you provide?",
      "options": {
      "1": "All (100%) of the postal mail received was answered within 1 day instead of 3 days.",
      "2": "The chatbot system resolved 30% of online support requests.",
      "3": "Seventy percent (70%) of call centre agents were trained on performance standards.",
      "4": "Call centre absenteeism is down 20%."
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q9": {
      "text": "Which of the following is a valid performance indicator?",
      "options": {
      "1": "Call centre being staffed from 9 am to 5 pm Monday to Friday",
      "2": "Live chat support requests being answered as soon as possible",
      "3": "Budget of $9,000 for IT infrastructure",
      "4": "Emails being answered within one business day 90% of the time"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q10": {
      "text": "You have been asked to contribute information for the Departmental Results Report. What information will you provide?",
      "options": {
      "1": "The audit recommendations for my program",
      "2": "The three-year plan for my program",
      "3": "The performance information for my program",
      "4": "The financial forecast information for my program"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      }
      }
      },
      "fr": {
      "dismiss": "Faire disparaître",
      "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
      "Answered": "Répondue",
      "markTest": "Corriger mon test",
      "testComplete": "Examen complété",
      "tryAgain": "Essayer de nouveau",
      "scoreIs": "Votre note finale est de",
      "unanswered":"Question(s) sans réponse",
      "Questions": {
      "q1": {
      "text": "<div class='tableScrollLTM' style='margin-bottom: 15px;'><table class='qTable' style='font-weight: 400;'>        <tbody>          <tr style='background-color: #865F56; color: white;'>            <td>              <p>Budget </p>            </td>            <td>              <p>Engagements</p>            </td>            <td>              <p>Dépenses réelles depuis le début de l’exercice</p>            </td>            <td>              <p>Prévisions annuelles</p>            </td>            <td>              <p>Excédent / Déficit</p>            </td>          </tr>          </tbody></table></div> Voici les titres des colonnes du rapport sur la situation financière. Comment l’excédent et le déficit sont-ils calculés?",
          "options": {
          "1": "Prévisions annuelles - Budget = Excédent/Déficit ",
          "2": "Engagements - Budget = Excédent/Déficit",
          "3": "Engagements + Dépenses réelles depuis le début de l'exercice = Excédent/Déficit",
          "4": "Dépenses réelles depuis le début de l’exercice + Prévisions annuelles = Excédent/Déficit"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q2": {
          "text": "Nous sommes au P6 et vous examinez le rapport sur la situation financière. Au cours des quatre derniers mois, trois de vos postes ont été vacants, de sorte qu’il y a un important excédent salarial. Toutefois, vous embauchez deux étudiants à titre de solution provisoire jusqu’à la fin de l’exercice financier. Cependant, il faudra un mois de plus pour compléter le traitement de leur autorisation de sécurité. En tant que gestionnaire, que devriez-vous prévoir, compte tenu de la situation?",
          "options": {
          "1": "Prévoir les coûts de deux salaires d’étudiants, ajouter ce montant au total de votre budget et modifier les chiffres réels à ce jour pour refléter cette situation",
          "2": "Prévoir les coûts de deux salaires d’étudiants de P7 à P12 (fin de l’exercice financier) et mettre à jour les engagements dans le système financier",
          "3": "Prévoir les coûts de deux salaires d’étudiants et les déduire du total de votre budget et modifier les chiffres réels de l’année en cours pour en tenir compte",
          "4": "Prévoir les coûts de deux salaires d’étudiants de P6 à P12 (fin de l’exercice financier) et mettre à jour les engagements dans le système financier"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q3": {
          "text": "Nous sommes au P6 et vous préparez votre rapport sur la situation financière. Trois de vos postes ont été vacants au cours des quatre derniers mois, et vous vous attendez maintenant à ce qu’ils le soient encore pour cinq mois. Il y a un surplus de salaire croissant. Qu’allez-vous faire?",
          "options": {
          "1": "Continuer à prévoir le montant prévu pour le salaire et faire appel à de l’aide temporaire, car c’est plus rapide",
          "2": "Transférer l’excédent salarial au F et E, même si vous ne prévoyez pas de déficit de F et E",
          "3": "Dire à votre gestionnaire que vous avez un surplus dans votre budget salarial, afin qu’il puisse être utilisé ailleurs dans l’organisation",
          "4": "Ne pas modifier les prévisions salariales et conserver les fonds jusqu’au P12, au cas où le contexte de la dotation changerait"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q4": {
          "text": "Comme tous vos fonds ont été engagés, vous avez reçu le mois dernier un montant supplémentaire de 5&nbsp;000&nbsp;$ pour former les employés sur les nouveaux logiciels en raison d’un changement de priorité. En examinant le rapport sur la situation financière que vous venez de recevoir des Finances, vous constatez que ces fonds ne sont pas inclus dans les totaux du budget. Sachant que la prévision est due dans deux semaines, que devriez-vous faire?",
          "options": {
          "1": "Augmenter le budget dans le système financier de 5&nbsp;000&nbsp;$",
          "2": "Créer un engagement dans le système financier pour 5&nbsp;000&nbsp;$.",
          "3": "Attendez le prochain RSF pour voir si les totaux de budget sont mis à jour",
          "4": "Prévoir les 5&nbsp;000&nbsp;$ et faire le suivi avec les Finances"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q5": {
          "text": "<div class='tableScrollLTL'><table class='qTable' style='font-weight: 400;'> <thead> <tr> <th id='1' scope='col'>&nbsp;</th> <th id='2' scope='col'> <p style='text-align: center;'>P6 Budget</p> </th> <th id='3' scope='col'> <p style='text-align: center;'>P6 Engagements</p> </th> <th id='4' scope='col'> <p style='text-align: center;'>P6<br> Dépenses réelles depuis le début de l’exercice</p> </th> <th id='5' scope='col'> <p style='text-align: center;'>P5 Prévisions annuelles</p> </th> <th id='6' scope='col'> <p style='text-align: center;'>P6 Prévisions annuelles</p> </th> <th id='7' scope='col'> <p style='text-align: center;'>Excédent / Déficit</p> </th> </tr> </thead> <tbody> <tr> <th id='8' scope='row' headers='1'> <p>Logiciel de robot conversationnel</p> </th> <td headers='2 8'> <p style='text-align: right;'>3&nbsp;000&nbsp;$</p> </td> <td headers='3 8'> <p style='text-align: right;'>1&nbsp;500&nbsp;$</p> </td> <td headers='4 8'> <p style='text-align: right;'>1&nbsp;500&nbsp;$</p> </td> <td headers='5 8'> <p style='text-align: right;'>3&nbsp;500&nbsp;$</p> </td> <td headers='6 8'>&nbsp;</td> <td headers='7 8'> <p style='text-align: right;'>0$</p> </td> </tr> <tr> <th id='9' scope='row' headers='1'> <p>Accueil</p> </th> <td headers='2 9'> <p style='text-align: right;'>15&nbsp;000&nbsp;$</p> </td> <td headers='3 9'> <p style='text-align: right;'>9&nbsp;500&nbsp;$</p> </td> <td headers='4 9'> <p style='text-align: right;'>8&nbsp;000&nbsp;$</p> </td> <td headers='5 9'> <p style='text-align: right;'>15&nbsp;000&nbsp;$</p> </td> <td headers='6 9'> <p>&nbsp;</p> </td> <td headers='7 9'> <p style='text-align: right;'>0$</p> </td> </tr> </tbody> </table></div> <p>&nbsp;</p> En examinant le rapport sur la situation financière fourni, pour lesquels des éléments suivants auriez-vous besoin d’obtenir plus de renseignements?",
          "options": {
          "1": "La somme des engagements du logiciel de robot conversationnel P6 et des dépenses réelles depuis le début de l’exercice est égale au budget",
          "2": "La somme des engagements de P6 en matière d’accueil et des dépenses réelles depuis le début de l’exercice dépasse le budget",
          "3": "La prévision annuelle du P5 pour l’accueil est la même que celle du P6",
          "4": "La prévision annuelle du logiciel de robot conversationnel P5 est supérieure au budget P6"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q6": {
          "text": "Quel rapport publie sur les sites Web des ministères les renseignements concernant les voyages, l’accueil, les contrats, les reclassifications de postes, les actes répréhensibles, les subventions et les contributions?",
          "options": {
          "1": "Rapport sur les résultats ministériels",
          "2": "Rapport financier trimestriel",
          "3": "Vérification interne",
          "4": "Divulgation proactive"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q7": {
          "text": "Que contiennent les profils de l’information sur le rendement?",
          "options": {
          "1": "Indicateurs et cibles de rendement ",
          "2": "Aperçu des finances et des engagements",
          "3": "Résultats de la conformité et recommandations",
          "4": "Évaluations de la performance des politiques"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q8": {
          "text": "Vers la fin de l’année, votre unité de planification vous demande de rendre compte des résultats de la &laquo; Numérisation des services &raquo;. Quels renseignements fourniriez-vous?",
          "options": {
          "1": "100 % du courrier reçu par la poste a reçu une réponse dans un délai de 1 jour au lieu de 3 jours",
          "2": "Le système de robot conversationnel a résolu 30 % des demandes de soutien en ligne",
          "3": "70 % des agents des centres d’appels ont été formés sur les normes de rendement",
          "4": "L'absentéisme dans les centres d’appels a diminué de 20 %"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q9": {
          "text": "Lequel des éléments suivants est un indicateur de rendement valide?",
          "options": {
          "1": "Centre d’appels avec personnel de 9 h à 17 h du lundi au vendredi",
          "2": "Répondre aux demandes d’assistance par clavardage en direct dès que possible",
          "3": "Budget de 9&nbsp;000&nbsp;$ pour l'infrastructure informatique",
          "4": "90 % du temps, les courriels reçoivent une réponse dans un délai d’un jour ouvrable"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q10": {
          "text": "On vous a demandé de fournir des renseignements pour le Rapport sur les résultats ministériels. Quels renseignements allez-vous fournir?",
          "options": {
          "1": "Les recommandations de vérification de mon programme",
          "2": "Le plan triennal de mon programme",
          "3": "Les renseignements sur le rendement du programme",
          "4": "Les renseignements sur les prévisions financières du programme "
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          }
          }
          }
          }</i18n>
