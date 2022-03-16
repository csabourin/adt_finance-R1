<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col class="col-12">
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
              <p>For some of the questions in this test, you play the role of a manager of a call center. You will be given scenarios based on this situation.&nbsp;</p>
               <p>As per Treasury Board requirements, passing the test for this course is mandatory before you can exercise financial delegation.&nbsp;</p>
              <p>There are three sections to the test - one for each phase: Plan, Spend and Report<!-- planning, spending and reporting -->.</p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 15 to 20 minutes to complete.&nbsp;</p>
              <p>You can access course materials during the test and you can take it as many times as you need.</p>
              <p>As this is a final test, you will not be provided with feedback on correct or incorrect answers.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Pour certaines des questions de ce test, vous &ecirc;tes dans le r&ocirc;le d’un responsable de centre d’appels. Des scénarios basés sur cette situation vous seront proposés.&nbsp;</p>
              <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir l’examen de ce cours avant de pouvoir exercer la délégation financi&egrave;re.</p>
              <p>Le test comporte trois parties — une à la fin de chaque phase : planification, dépenses et rapports.&nbsp;</p>
              <p>La note de passage est de 80 %, par partie. </p>
              <p>Chaque partie devrait vous prendre environ 15 à 20 minutes.&nbsp;</p>
              <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez reprendre le test autant de fois que vous le désirez.</p>
              <p>Comme il s'agit d'un test final, vous ne recevrez pas d'information sur les réponses correctes ou incorrectes.</p>
            </div>
          </b-alert>
          <!--<p v-if="AlertIsDismissed"><b-button @click="AlertIsDismissed=false">{{$t('ShowInstructions')}}</b-button></p>-->
          <p v-if="AlertIsDismissed"><button @click="AlertIsDismissed=false" class="instructionsBtn" v-b-tooltip.right.hover.focus :title="$t('ShowInstructions')"><span class="v-inv">{{$t('ShowInstructions')}}</span></button></p>
          <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
          <!--<div class="progressBar">
            <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
          </div>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam spend" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,3,0)" />
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,1,2)" />
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="calculateAnswer($event,4,4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,3,5)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[6]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>07
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="calculateAnswer($event,2,6)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[7]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>08
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="calculateAnswer($event,3,7)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[8]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>09
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,2,8)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[9]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>10
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,4,9)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[10]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>11
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="calculateAnswer($event,2,10)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[11]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>12
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="calculateAnswer($event,1,11)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[12]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>13
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="calculateAnswer($event,2,12)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[13]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>14
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q14')" qId="13" :refill="Refill('13')" @response="calculateAnswer($event,3,13)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[14]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>15
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,3,14)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[15]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>16
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q16')" qId="15" :refill="Refill('15')" @response="arraysMatch($event,['1','2','4'],15)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[16]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>17
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q17')" qId="16" :refill="Refill('16')" @response="calculateAnswer($event,2,16)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[17]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>18
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q18')" qId="17" :refill="Refill('17')" @response="calculateAnswer($event,4,17)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[18]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>19
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q19')" qId="18" :refill="Refill('18')" @response="calculateAnswer($event,2,18)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[19]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>20
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q20')" qId="19" :refill="Refill('19')" @response="calculateAnswer($event,3,19)" />
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
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=19">{{$t('nextPage')}}</b-button>
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
      <microlearning path="exam2" time="15" youAreHere size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')"  class="spend" noGrey type="exam" questionNum="20" />
      <microlearning path="exam3" time="15" size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')" class="report" noGrey  type="exam" questionNum="10"/>
    </div>
    <div class="bottomNav spendSection" v-else>
      <div class="spendSectionBar"><span>{{$t('spend')}}</span></div>
      <microlearning path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="spendPart2" imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="spendPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" youAreHere imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>

    <!-- Debugging section -->
    <div v-if="debugging">
      <p>{{allDone}}</p>
      <p>{{answerScore}}</p>
      <ul>
        <li v-for="index in answerScore">Answer {{Refill(index.toString())}} </li>
      </ul>
    </div>
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>

    <b-modal id="missingQuestions" size="lg" okOnly>
      <p class='pageTitle'>{{$t('unanswered')}}</p>
      <p v-if="$i18n.locale=='en'">Your test cannot be marked because the following question(s) has/have not been answered:</p>
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes : </p>
      
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
  name: "examTwo",
  data() {
    return {
      debugging: false,
      isNull:false,
      numQuestions: 20
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
            this.$store.commit('spend/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('spend/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('spend/setComplete', this.checkPercentage())
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
        this.$store.commit('spend/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('spend/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('spend/setScore', [qId.toString(), "01", arr1])
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone(){
      return this.$store.getters['spend/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('spend/dismissAlert') : this.$store.commit('spend/undismissAlert') },
      get() { return this.$store.state.spend.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('spend/setCurrentTab', tabIndex) },
      get() { return this.$store.state.spend.tabIndex }
    },
    answerScore() {
      return this.$store.state.spend.score
    },
    quizLocked() {
      return this.$store.state.spend.quizLocked
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
>>> .qTable td,>>> .qTable th{
  border: 1px solid #4d4d4d;
  padding: .5em;
}
>>> .qTable th{
  background-color: #7d677d;
  color:#fff;
}
/*.spendSection {
  position: relative;
  height: 100px;
}*/

.spendSectionBar {
  text-transform: uppercase;
  position: absolute;
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
  background-color: #7d677d;
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
  background-color: #AFA68E;
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
        "text": "You found a chatbot system that meets your needs. An annual license, plus installation and setup, costs $5,650 including tax. What is the first step in exercising your spending authority?",
        "options": {
          "1": "Contact the provider and order the system using your acquisition card",
          "2": "Ask your team to conduct a thorough product research ",
          "3": "Ensure that you have sufficient funds in your budget to purchase the system",
          "4": "Order the system using a purchase order"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "You have spent $1,800 out of your $2,000 office supplies budget, and you don’t plan on any other purchases for the year. An employee wants to attend a training event on chatbot systems and the registration fee is $150. However, you have spent all of your training budget. What will you do?",
        "options": {
          "1": "Tell the employee that the training budget has been spent",
          "2": "Use the money initially allocated for office supplies",
          "3": "Ask your director for additional funds",
          "4": "Tell the employee you will revisit their request next fiscal year"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Which statement about delegation of financial authority is true?",
        "options": {
          "1": "Authorities can only be delegated to positions",
          "2": "Authorities can only be delegated to persons",
          "3": "Authorities can only be delegated by persons exercising them",
          "4": "Authorities can only be delegated to certain classifications"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Which of these expenses does <span class='bolder' style='text-transform: uppercase; text-decoration: underline;'>not</span> require a responsibility centre manager to exercise delegated expenditure initiation authority?",
        "options": {
          "1": "Hospitality request",
          "2": "Conference registration fees",
          "3": "Small expenses such as a $20 purchase of craft materials",
          "4": "None of the above "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "Your organization’s spending dollar limit when using an acquisition card is $2,500 per transaction. You have found ergonomic chairs that meet both your and your administrative assistant’s needs. The two chairs together are valued at $4,649 including tax. As a manager, what will you do?",
        "options": {
          "1": "Go ahead and authorize the commitment for both chairs",
          "2": "Authorize the purchase for both chairs using your admin’s acquisition card",
          "3": "Ask another manager to purchase the chairs with their acquisition card",
          "4": "Authorize your admin’s chair and have your supervisor authorize your chair"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "This spending mechanism is used to obtain goods or services from a list of pre-qualified vendors, with pre-established terms and conditions. What is it?",
        "options": {
          "1": "Acquisition Card",
          "2": "Competitive Contract",
          "3": "Standing Offer",
          "4": "Supply Arrangement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "Which of the following is a soft commitment? ",
        "options": {
          "1": "When you make an arrangement with a known supplier",
          "2": "When you reserve funds before the supplier is identified",
          "3": "When a transaction has been coded in the financial system",
          "4": "When you have a Memorandum of Understanding with another department"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Which of the following is <span class='bolder' style='text-transform: uppercase; text-decoration: underline;'>not</span> part of a financial coding system?",
        "options": {
          "1": "Budget component",
          "2": "Responsibility centre manager",
          "3": "Performance indicator",
          "4": "Transaction details"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "As a manager authorizing a transaction against your budget under section 34 of the Financial Administration Act, it is essential that you do which of the following?",
        "options": {
          "1": "Get approval from senior management",
          "2": "Stay within your delegated limits",
          "3": "Have section 32 authority pursuant to the FAA",
          "4": "Ask section 33 if you can sign section 34"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Mr. Wong works as a manager for a small department and has delegation under both sections 32 and 34. Which instrument formalizes Mr. Wong’s delegated authorities?",
        "options": {
          "1": "Financial Administration Act",
          "2": "Treasury Board policies",
          "3": "The organization’s delegation chart",
          "4": "His signed delegation card"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Your administrative professional has received an order of office supplies, along with an invoice. The invoice includes 5 whiteboards but she tells you that none were received. What would you do? ",
        "options": {
          "1": "Pay the invoice now",
          "2": "Pay the invoice after all 5 whiteboards are received",
          "3": "Pay the invoice knowing the whiteboards are back-ordered",
          "4": "Pay the invoice now after speaking with the supplier"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "You receive an invoice for an employee's annual professional membership, due in September. What do you do?",
        "options": {
          "1": "Pay the invoice for the full year now",
          "2": "Pay what is due between now and the end of the fiscal year ",
          "3": "Pay what is due between now and the end of the calendar year",
          "4": "Ask them to split the invoice between calendar years"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Who is responsible for financial coding accuracy?",
        "options": {
          "1": "The administrative assistant who records the financial codes",
          "2": "Managers who have delegated financial authorities",
          "3": "The financial officer who performs quality assurance of the file",
          "4": "The Chief Financial Officer’s office"
        },
        "feedback": {
          "wrong": "",
          "right": ""
        }
      },
      "q14": {
        "text": "How much time does the government have to pay for the goods?",
        "options": {
          "1": "Thirty days following acceptance of goods",
          "2": "Thirty days after signing of Section 34 ",
          "3": "Thirty days following receipt of the invoice",
          "4": "Immediately"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "The start date for your new employee has been pushed back. He will only be working 10 months of the fiscal year instead of 12 months. His salary is $60,000. What do you do?",
        "options": {
          "1": "Increase budget by $10,000",
          "2": "Reduce the actual expenditures by $10,000",
          "3": "Reduce annual forecast expenditures by $10,000",
          "4": "Increase commitments by $10,000"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "In which of the following ways can an analysis of variance help?",
        "options": {
          "1": "It aids in the early reallocation of resources",
          "2": "It contributes to reducing the amounts lapsed at year-end",
          "3": "It stops all deficits from happening",
          "4": "It identifies mitigation strategies for risks"
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q17": {
        "text": "Your budget contains the following line item:<br> <div class='tableScrollLTM'> <table class='qTable'> <tbody> <tr><th>&nbsp;</th><th> <p>Budget</p> </th> <th> <p>Commitments</p> </th> <th> <p>Year-to-Date Actuals</p> </th> <th> <p>Annual Forecasted Expenditures</p> </th> </tr> <tr> <td> <p>Travel</p> </td> <td> <p style='text-align: right;'>$8,400</p> </td> <td> <p style='text-align: right;'>$0</p> </td> <td> <p style='text-align: right;'>$2,400</p> </td> <td> <p style='text-align: right;'>$8,400</p> </td> </tr> </tbody> </table> </div> <br>You are in the process of approving $1,500 in travel for an employee for a new initiative that was not originally included in the budget. Looking at the provided line item, which amounts would need to be increased to account for the additional $1,500?",
        "options": {
          "1": "Year-to-Date Actuals and Annual Forecasted Expenditures",
          "2": "Commitments and Annual Forecasted Expenditures",
          "3": "Commitments only",
          "4": "Budget and Year-to-Date Actuals"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "Your budget contains the provided line items:<br> <div class='tableScrollLTM'> <table class='qTable'> <tbody> <tr> <th>&nbsp;</th> <th> <p>Budget</p> </th> <th> <p>Commitments</p> </th> <th> <p>Year-to-Date Actuals</p> </th> <th> <p>Annual Forecasted Expenditures</p> </th> </tr> <tr> <td> <p>Salary</p> </td> <td> <p style='text-align: right;'>$60,000</p> </td> <td> <p style='text-align: right;'>$20,000</p> </td> <td> <p style='text-align: right;'>$40,000</p> </td> <td> <p style='text-align: right;'>$60,000</p> </td> </tr> </tbody> </table> </div> <br>You just remembered that an employee has gone on leave without pay for two months. His yearly salary is $60,000. Where would you change the amount to $50,000?",
        "options": {
          "1": "Budget",
          "2": "Commitments",
          "3": "Year-to-Date Actuals",
          "4": "Annual Forecasted Expenditures"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "What must you have set up to be able to pay your consultant in the new fiscal year using the budget from the previous fiscal year?",
        "options": {
          "1": "Budget carry–forward",
          "2": "Payable At Year-End",
          "3": "Receivable At Year-End",
          "4": "Post-dated cheque"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "It’s April. As a responsibility centre manager, you must have set up a Payable At Year-End (PAYE) to charge your previous year’s budget with the costs associated with which of the following transactions?",
        "options": {
          "1": "All outstanding commitments currently in the system for the fiscal year that just ended March 31, under your cost center.",
          "2": "The annual forecast expenditures that were not spent in the fiscal year that just ended March 31.",
          "3": "The estimated costs associated with goods and services that were delivered on or prior to March 31. ",
          "4": "All costs incurred during the first two weeks of the new fiscal year."
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      }
    }
  },
  "fr": {
    "dismiss": "Faire disparaître",
    "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
    "Answered": "Répondue",
    "markTest": "Corriger mon test",
    "testComplete": "Test complété",
    "tryAgain": "Essayer de nouveau",
    "scoreIs": "Votre note finale est de",
    "unanswered":"Question(s) non-répondue(s)",
    "Questions": {
      "q1": {
        "text": "Vous avez trouvé un système de robot conversationnel qui répond à vos besoins. Une licence annuelle, plus les frais d’installation et de configuration, coûte 5&nbsp;650&nbsp;$, taxes incluses. Quelle est la première étape de l’exercice de votre pouvoir de dépenser?",
        "options": {
          "1": "Communiquer avec le fournisseur et commander le système à l’aide de votre carte d’achat",
          "2": "Demander à votre équipe d’effectuer une recherche approfondie sur le produit ",
          "3": "Vous assurer d’avoir suffisamment de fonds dans votre budget pour acheter le système",
          "4": "Commander le système à l’aide d’une commande d’achat"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Vous avez dépensé 1&nbsp;800&nbsp;$ de votre budget de 2&nbsp;000&nbsp;$ pour les fournitures de bureau et vous ne prévoyez pas d’autres achats pour l’année. Un employé veut assister à une formation sur les systèmes de clavardage et les frais d’inscription sont de 150 $. Cependant, vous avez dépensé la totalité de votre budget de formation. Qu’allez-vous faire?",
        "options": {
          "1": "Dire à l’employé que le budget de formation a été dépensé ",
          "2": "Utiliser l’argent initialement alloué pour les fournitures de bureau",
          "3": "Demander à votre directeur des fonds supplémentaires",
          "4": "Dire à l’employé que vous réexaminerez sa demande au cours du prochain exercice financier"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Lequel des énoncés suivants concernant la délégation des pouvoirs financiers est vrai?",
        "options": {
          "1": "Les pouvoirs ne peuvent être délégués qu’aux postes.",
          "2": "Les pouvoirs ne peuvent être délégués qu’à des personnes.",
          "3": "Les pouvoirs ne peuvent être délégués que par des personnes qui les exercent.",
          "4": "Les pouvoirs ne peuvent être délégués qu’à certaines classifications."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Laquelle de ces dépenses n’exige <span class='bolder' style='text-transform:uppercase;text-decoration:underline;'>pas</span> qu’un gestionnaire de centre de responsabilité exerce le pouvoir délégué d’engager des dépenses?",
        "options": {
          "1": "Demande d’activité d’accueil",
          "2": "Frais d’inscription à une conférence",
          "3": "Petites dépenses telles qu’un achat de 20 $ de matériel d’artisanat",
          "4": "Aucune de ces réponses"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "La limite de dépenses de votre organisation lorsqu’elle utilise une carte d’achat est de 2&nbsp;500&nbsp;$ par transaction. Vous avez trouvé des chaises ergonomiques qui répondent à vos besoins et à ceux de votre adjointe administrative. Les deux chaises ensemble sont évaluées à 4&nbsp;649&nbsp;$, taxes incluses. En tant que gestionnaire, que devriez-vous faire?",
        "options": {
          "1": "Autoriser l’engagement pour les deux chaises",
          "2": "Autoriser l’achat des deux chaises à l’aide de la carte d’achat de votre administrateur",
          "3": "Demander à un autre gestionnaire d’acheter les chaises avec sa carte d’achat",
          "4": "Autoriser la chaise de votre adjointe et demander à votre superviseur d’autoriser votre chaise"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "Ce mécanisme de dépense sert à obtenir des biens ou des services à partir d’une liste de fournisseurs préqualifiés, assortis de conditions préétablies. De quoi s'agit-il?",
        "options": {
          "1": "Une carte d’achat",
          "2": "Un contrat concurrentiel",
          "3": "Une offre à commandes",
          "4": "Un arrangement en matière d’approvisionnement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "Lequel des engagements suivants est un engagement préalable?",
        "options": {
          "1": "Lorsque vous faites un arrangement avec un fournisseur connu",
          "2": "Lorsque vous réservez des fonds avant que le fournisseur ne soit identifié",
          "3": "Lorsqu’une transaction a été codée dans le système financier",
          "4": "Lorsque vous avez un protocole d’entente avec un autre ministère"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Lequel des éléments suivants ne fait <span class='bolder' style='text-transform:uppercase;text-decoration:underline;'>pas</span> partie d’un système de codage financier? ",
        "options": {
          "1": "La composante budgétaire",
          "2": "Le gestionnaire de centre de responsabilité",
          "3": "L'indicateur de rendement",
          "4": "Les détails de la transaction"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "En tant que gestionnaire autorisant une opération sur votre budget en vertu de l’article 34 de la Loi sur la gestion des finances publiques, il est essentiel que vous&hellip;",
        "options": {
          "1": "&hellip;obteniez l’approbation de la haute direction",
          "2": "&hellip;restiez dans les limites des pouvoirs qui vous sont délégués",
          "3": "&hellip;aviez le pouvoir de l’article 32 en vertu de la LGFP",
          "4": "&hellip;demandiez à la section 33 si vous pouvez signer la section 34"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "M. Wong travaille comme gestionnaire d’un petit ministère et a reçu une délégation de pouvoirs en vertu des articles 32 et 34. Quel instrument formalise les pouvoirs délégués à M. Wong?",
        "options": {
          "1": "La <em>Loi sur la gestion des finances publiques</em>",
          "2": "Les politiques du Conseil du Trésor",
          "3": "L'organigramme de délégation de l'organisation",
          "4": "Sa carte de délégation signée"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Votre professionnel administratif a reçu une commande de fournitures de bureau, accompagnée d’une facture. La facture comprend 5 tableaux blancs mais il vous dit qu’aucun n’a été reçu. Que devriez-vous faire?",
        "options": {
          "1": "Payer la facture maintenant",
          "2": "Payer la facture après réception des 5 tableaux blancs",
          "3": "Payer la facture en sachant que les tableaux blancs sont en rupture de stock",
          "4": "Payer la facture maintenant après avoir parlé avec le fournisseur"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Vous recevez une facture pour l’adhésion professionnelle annuelle d’un employé qui doit être payée en septembre. Que devriez-vous faire?",
        "options": {
          "1": "Payer maintenant la facture pour l’année entière",
          "2": "Payer ce qui est dû d’ici la fin de l’exercice financier ",
          "3": "Payer ce qui est dû d’ici la fin de l’année civile ",
          "4": "Leur demander de fractionner la facture entre les années civiles"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Qui est responsable de l’exactitude du codage financier?",
        "options": {
          "1": "L’adjoint administratif qui enregistre les codes financiers",
          "2": "Les gestionnaires qui ont la délégation des pouvoirs financiers",
          "3": "L'agent financier qui effectue l’assurance de la qualité du dossier",
          "4": "Le bureau du directeur financier "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q14": {
        "text": "Combien de temps le gouvernement a-t-il pour payer des biens ou des services?",
        "options": {
          "1": "Trente jours après l'acceptation des biens",
          "2": "Trente jours après la signature de l’article 34",
          "3": "Trente jours après réception de la facture",
          "4": "Il doit les payer immédiatement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "La date de début de votre nouveau salarié a été repoussée. Il ne travaillera que dix mois de l’exercice financier au lieu de douze. Son salaire est de 60&nbsp;000&nbsp;$. Que devez-vous faire?",
        "options": {
          "1": "Augmenter le budget de 10&nbsp;000&nbsp;$.",
          "2": "Réduire les dépenses réelles de 10&nbsp;000&nbsp;$.",
          "3": "Réduire de 10&nbsp;000&nbsp;$ les dépenses annuelles prévues.",
          "4": "Augmenter les engagements de 10&nbsp;000&nbsp;$."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "De quelle façons une analyse de la variance peut-elle aider?",
        "options": {
          "1": "Elle aide à la réaffectation précoce des ressources",
          "2": "Elle contribue à réduire les montants périmés à la fin de l’exercice",
          "3": "Elle empêche tous les déficits de se produire ",
          "4": "Elle identifie les stratégies d’atténuation des risques"
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q17": {
        "text": "Votre budget contient le poste fourni :<br><div class='tableScrollLTM'><table class='qTable'><tbody><tr><th>&nbsp;</th><th><p>Budget</p></th><th><p>Engagements</p></th><th><p>Dépenses réelles depuis le début de l’exercice</p></th><th><p>Dépenses annuelles prévues</p></th></tr><tr><td><p>Voyages</p></td><td><p style='text-align: right;'>8&nbsp;400&nbsp;$</p></td><td><p style='text-align: right;'>0 $</p></td><td><p style='text-align: right;'>2&nbsp;400&nbsp;$</p></td><td><p style='text-align: right;'>8&nbsp;400&nbsp;$</p></td></tr></tbody></table> </div><br>Vous êtes en train d’approuver un voyage de 1&nbsp;500&nbsp;$ pour un employé dans le cadre d’une nouvelle initiative qui n’était pas prévue initialement dans le budget. En examinant le poste budgétaire prévu, quels montants devraient être augmentés pour tenir compte des 1&nbsp;500&nbsp;$  supplémentaires?",
        "options": {
          "1": "Dépenses réelles depuis le début de l’exercice et dépenses annuelles prévues",
          "2": "Engagements et prévisions annuelles des dépenses ",
          "3": "Engagements seulement",
          "4": "Budget et dépenses réelles depuis le début de l’exercice"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "Votre budget contient les postes individuels fournis :<br> <div class='tableScrollLTM'> <table class='qTable'><tbody><tr><th>&nbsp;</th><th><p>Budget</p></th><th><p>Engagements</p></th><th><p>Dépenses réelles depuis le début de l’exercice</p></th><th><p>Dépenses annuelles prévues</p></th></tr><tr><td><p>Salaire</p></td><td><p style='text-align: right;'>60&nbsp;000&nbsp;$</p></td><td><p style='text-align: right;'>20&nbsp;000&nbsp;$</p></td><td><p style='text-align: right;'>40&nbsp;000&nbsp;$</p></td><td><p style='text-align: right;'>60&nbsp;000&nbsp;$</p></td></tr></tbody></table></div> <br>Vous venez de vous rappeler qu’un employé est en congé non payé depuis deux mois. Son salaire annuel est de 60&nbsp;000&nbsp;$. Où changeriez-vous le montant à 50&nbsp;000&nbsp;$?",
        "options": {
          "1": "Dans le budget",
          "2": "Dans les engagements",
          "3": "Dans les dépenses réelles depuis le début de l’exercice",
          "4": "Dans les dépenses annuelles prévues"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "Que devez-vous avoir mis en place pour pouvoir payer votre consultant au cours du nouvel exercice en utilisant le budget de l’exercice précédent?",
        "options": {
          "1": "Report de budget",
          "2": "Créditeur à la fin de l’exercice",
          "3": "Débiteur à la fin de l’exercice",
          "4": "Chèque postdaté"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "Nous sommes au mois d’avril. À titre de gestionnaire de centre de responsabilité, vous devez avoir établi un CAFE (créditeur à la fin de l’exercice) pour imputer à votre budget de l’année précédente les coûts associés à laquelle des transactions suivantes?",
        "options": {
          "1": "Tous les engagements en cours actuellement dans le système au cours de l’exercice précédent qui vient de se terminer le 31 mars, sous votre centre de coûts.",
          "2": "Les dépenses annuelles prévues qui n’ont pas eu lieu au cours de l’exercice financier se terminant le 31 mars.",
          "3": "Les coûts estimatifs associés aux biens et services qui ont été livrés le 31 mars ou avant.",
          "4": "Tous les coûts engagés au cours des deux premières semaines du nouvel exercice financier."
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      }
    }
  }
}</i18n>
