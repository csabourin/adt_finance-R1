<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col>
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
              <p>For some of the questions in this test, you play the role of a manager of a call centre. You will be given scenarios based on this situation.&nbsp;</p>
              <p>As per Treasury Board requirements, passing the test for this course is mandatory before you can exercise financial delegation.&nbsp;</p>
              <p>The test is made up of three sections, one for each phase: Plan, Spend, and Report.<!-- planning, spending and reporting --></p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 15 to 20 minutes to complete.&nbsp;</p>
              <p>You are allowed to consult course materials during the test. You may take it as many times as you need to get a passing grade.</p>
              <p>As this is a final test, you will not be provided with feedback on correct or incorrect answers.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Pour certaines des questions de ce test, vous occupez le rôle d’un responsable de centre d’appels. Des scénarios basés sur cette situation vous seront proposés</p>
              <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir l’examen de ce cours avant de pouvoir exercer la délégation financière.</p> 
              <p>Le test comporte trois parties - une à la fin de chaque phase: planification, dépenses et rapports.&nbsp;</p>
              <p>La note de passage est de 80&nbsp;%, par partie.</p>
              <p>Chaque partie devrait vous prendre environ 15 à 20 minutes.</p>
              <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.</p>
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
            <b-tabs card pills v-model="tabIndex" class="exam plan" active-nav-item-class="Qactive">
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,2,2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,2,3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="calculateAnswer($event,3,4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,1,5)" />
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="calculateAnswer($event,1,10)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[11]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>12
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="calculateAnswer($event,4,11)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[12]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>13
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="calculateAnswer($event,3,12)" />
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,2,14)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[15]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>16
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q16')" qId="15" :refill="Refill('15')" @response="calculateAnswer($event,4,15)" />
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q18')" qId="17" :refill="Refill('17')" @response="calculateAnswer($event,3,17)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[18]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>19
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q19')" qId="18" :refill="Refill('18')" @response="calculateAnswer($event,1,18)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[19]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>20
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q20')" qId="19" :refill="Refill('19')" @response="arraysMatch($event,['1','2','3'],19)" />
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
      <microlearning path="exam1" time="15" youAreHere size="140" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('plan')" class="plan" noGrey type="exam" questionNum="20" />
      <microlearning path="exam2" time="15" size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')" class="spend" noGrey type="exam" questionNum="20" />
      <microlearning path="exam3" time="15" size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')" class="report" noGrey  type="exam" questionNum="10"/>
    </div>
    <div class="bottomNav planSection" v-else>
      <div class="planSectionBar"><span>{{$t('plan')}}</span></div>
      <microlearning path="buildwp" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('BuildWorkPlan')" type="video" />
      <microlearning size="140" path="createbudget" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('CreateBudget')" type="video" />
      <microlearning path="planKey" time="5"  size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning size="140" path="exam1" time="15" youAreHere :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" type="exam" questionNum="20" />
    </div>
    <!-- Debugging section -->
    <div v-if="debugging">
      <p>Alldone: {{allDone}}</p>
      <p>{{answerScore}}</p>
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
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes:</p>
      
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
  name: "examOne",
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
            this.$store.commit('plan/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('plan/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('plan/setComplete', this.checkPercentage())
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
        this.$store.commit('plan/setScore', [qId.toString(), "01", answer]) // 01 means right
      } else { this.$store.commit('plan/setScore', [qId.toString(), "'10'", answer]) } // wrong could be whatever
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1]) 
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('plan/setScore', [qId.toString(), "01", arr1]) // 01 means right
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone(){
      return this.$store.getters['plan/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('plan/dismissAlert') : this.$store.commit('plan/undismissAlert') },
      get() { return this.$store.state.plan.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('plan/setCurrentTab', tabIndex) },
      get() { return this.$store.state.plan.tabIndex }
    },
    answerScore() {
      return this.$store.state.plan.score
    },
    quizLocked() {
      return this.$store.state.plan.quizLocked
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
/*.planSection {
  position: relative;
  height: 100px;
}*/

.planSectionBar {
  text-transform: uppercase;
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.planSectionBar span {
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
  background-color: #587C84;
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
  background-color: #B3C295
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
    "tryAgain": "Try again",
    "scoreIs":"Your final score is",
    "unanswered":"Unanswered question(s)",
    "Questions": {
      "q1": {
        "text": "Which of the following is <span class='bolder' style='text-transform: uppercase; text-decoration: underline;'>not</span> included in a work plan?",
        "options": {
          "1": "Activity",
          "2": "Deliverable",
          "3": "Results",
          "4": "Risk"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Where are government priorities first announced?",
        "options": {
          "1": "In the Federal Budget",
          "2": "In the Speech from the Throne",
          "3": "In a Mandate Letter",
          "4": "In a Treasury Board directive"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Where would you find detailed information on what your organization does and what it plans to do over the next three years?",
        "options": {
          "1": "Mandate Letter",
          "2": "Departmental Plan",
          "3": "Departmental Results Report",
          "4": "Management Accountability Framework"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Your 360-degree scan reiterates for you that your organization has a low risk tolerance. At the same time, the Deputy Minister wants to see more innovation. What is the best course of action to take as these opposing forces impact your work plan? ",
        "options": {
          "1": "Wait until others have successfully implemented an innovation project ",
          "2": "Start a small-scale innovation project and learn from it",
          "3": "Commence a highly visible innovation project with current staffing levels",
          "4": "Keep things as they are"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "Which part of the work plan should be updated with &ldquo;Establish collective staffing pools&rdquo; to address call centre risks like high turnover and challenges in staffing?",
        "options": {
          "1": "Likelihood",
          "2": "Impact",
          "3": "Mitigation",
          "4": "Resources"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "Last year, you did not meet your target of answering calls within 30 seconds. Call centres are becoming more automated, an approach favoured by senior management. Which activity is the most appropriate to take as you draft your work plan?",
        "options": {
          "1": "Incorporate digital solutions",
          "2": "Change the target",
          "3": "Hire more staff",
          "4": "Conduct team meetings"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "You’d like to find out if clients are satisfied with the live support provided by the call centre. What deliverable would be added to the activity “Offer live support to clients” to address this?",
        "options": {
          "1": "Create a client satisfaction survey",
          "2": "Resolve a call, text or chat within 2 minutes ",
          "3": "One call, text or chat out of 10 is escalated for resolution",
          "4": "Answer calls within 30 seconds"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "You have added a new activity to your work plan: &quot;Offering support to clients through automated means.&quot; One sub-activity is “Implementing a chatbot system.” The chatbot would respond to customer requests online without involving a live agent, 24 hours per day. What deliverable would be added to the work plan for this activity?",
        "options": {
          "1": "Change call centre operational hours to 24/7",
          "2": "Live chat system operational 99% of the time",
          "3": "30% of online requests resolved by chatbot",
          "4": "Chatbot interactions will be monitored by a call centre agent "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "With any online technology like the chatbot system there is the risk of a privacy breach. To which item could &quot;Secure firewall and encryption&quot; be added in the work plan?",
        "options": {
          "1": "Resource",
          "2": "Mitigation",
          "3": "Impact",
          "4": "Directorate priority"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Which of the following would be a risk for the new activity “Offer support to clients through automated means”? ",
        "options": {
          "1": "Staff turnover ",
          "2": "Not meeting the performance standard ",
          "3": "Operational hours not staffed",
          "4": "System breakdown "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Temporary help to deliver day-to-day activities is paid out of which budget? ",
        "options": {
          "1": "Operating and Maintenance (O&M)",
          "2": "Salary",
          "3": "Grants and Contributions (Gs&Cs)",
          "4": "Capital"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Which of the following details the total projected expenditures of a federal organization for the upcoming fiscal year?",
        "options": {
          "1": "Departmental Results Report",
          "2": "Interim Supply",
          "3": "Supplementary Estimates",
          "4": "Departmental Plan"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Information on the results you achieved on the activities in your work plan would make its way into a year-end report for your organization. What is this report called?",
        "options": {
          "1": "Full Supply",
          "2": "Public Accounts",
          "3": "Departmental Results Report",
          "4": "Departmental Plan"
        },
        "feedback": {
          "wrong": "",
          "right": ""
        }
      },
      "q14": {
        "text": "Your information technology infrastructure costs have increased 10% per year for the past few years. If your current costs are $20,000, what amount will you put in your budget requirements for next year? ",
        "options": {
          "1": "$20,000",
          "2": "$20,200",
          "3": "$22,000 ",
          "4": "$22,220"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "For last year’s office supplies, you set aside $3,000; $2,500 was spent. For the current year, you are forecasting to spend $2,500. What amount will you put in your budget requirements for next year?",
        "options": {
          "1": "$2,000",
          "2": "$2,500",
          "3": "$3,000 ",
          "4": "$5,500"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "You have budgeted $8,000 year after year for call centre agent training. But last year, you spent $5,000 on training. This year, you’re forecasting to spend $10,500. What would you budget for next year?",
        "options": {
          "1": "The amount you forecast to spend this year ($10,500)",
          "2": "The amount you spent last year ($5,000) with a note of your forecast ($10,500)",
          "3": "The amount you’ve asked for year after year ($8,000), then justify any overspending",
          "4": "The amount you forecast after having examined why there’s been a fluctuation"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q17": {
        "text": "You don’t have enough funds in O&M to cover your budget needs, so you decide to transfer $100,000 from Salary to O&M. Which statement is correct?",
        "options": {
          "1": "Salary to O&M can be transferred dollar for dollar ($100,000 in salary equals $100,000 in O&M)",
          "2": "You can complete the transfer but must factor in the Employee Benefit Plan amount",
          "3": "You cannot transfer from Salary to O&M or vice versa"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q18": {
        "text": "The current year’s Salary budget is $760,000. You’re creating a new IT Analyst position to be staffed next year. The annual salary will be $60,000. You’ll need time to hire them and you estimate they will start in June and only work 10 months. What will your Salary budget requirement be next year (assuming everything else remains the same)? ",
        "options": {
          "1": "$760,000",
          "2": "$800,000",
          "3": "$810,000",
          "4": "$820,000"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "The chatbot system implementation will incur $15,000 in information technology costs for hosting, which will be provided by another department on a cost-recovery basis. This will be formalized in a memorandum of understanding between organizations. What will the hosting costs be in your budget?",
        "options": {
          "1": "$15,000 Non-Discretionary ",
          "2": "$15,000 Discretionary ",
          "3": "$15,000 Grants and Contributions",
          "4": "$15,000 Capital"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "You’ve submitted your budget requirements and your director asks you to cut travel costs from $20,000 to $12,000. What action could you take?",
        "options": {
          "1": "Cut some discretionary costs",
          "2": "Explore video conferencing options ",
          "3": "Change the budget requirement to $12,000",
          "4": "Ask Finance to find $8,000"
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
    "scoreIs":"Votre note finale est de",
    "unanswered":"Question(s) sans réponse",
    "Questions": {
      "q1": {
        "text": "Lequel des éléments suivants n’est <span class='bolder' style='text-transform:uppercase;text-decoration:underline;'>pas</span> inclus dans un plan de travail?",
        "options": {
          "1": "Activité",
          "2": "Produit livrable",
          "3": "Résultats",
          "4": "Risque"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Où les priorités du gouvernement sont-elles d’abord annoncées?",
        "options": {
          "1": "Dans le budget fédéral",
          "2": "Dans le discours du Trône",
          "3": "Dans une lettre de mandat",
          "4": "Dans une directive du Conseil du Trésor"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Où trouveriez-vous des renseignements détaillés sur ce que votre organisation fait et ce qu’elle prévoit faire au cours des trois prochaines années?",
        "options": {
          "1": "Lettre de mandat",
          "2": "Plan ministériel",
          "3": "Rapport ministériel sur les résultats ",
          "4": "Cadre de responsabilisation de gestion"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Votre analyse à 360 degrés réitère pour vous que votre organisation a une faible tolérance au risque. En même temps, le sous-ministre veut voir plus d’innovation. Quelle est la meilleure ligne de conduite à adopter, alors que ces forces opposées ont une incidence sur votre plan de travail?",
        "options": {
          "1": "Attendre que d’autres aient mis en œuvre avec succès un projet d’innovation",
          "2": "Lancer un projet d’innovation à petite échelle et en tirer des leçons",
          "3": "Lancer un projet d’innovation très visible avec les effectifs actuels.",
          "4": "Garder les choses telles qu’elles sont"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "Quelle partie du plan de travail devrait être mise à jour avec l'activité &laquo; Établir des bassins de dotation collective &raquo; pour tenir compte des risques liés aux centres d’appels, comme le roulement élevé du personnel et les défis en dotation?",
        "options": {
          "1": "Probabilité",
          "2": "Impact",
          "3": "Atténuation",
          "4": "Ressources"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "L’an dernier, vous n’avez pas atteint votre objectif de répondre aux appels en moins de 30 secondes. La haute direction privilégie de plus en plus les centres d’appels automatisés. Quelle est l’approche la plus appropriée lorsque vous rédigez votre plan de travail?",
        "options": {
          "1": "Incorporer des solutions numériques",
          "2": "Changer la cible",
          "3": "Embaucher plus de personnel",
          "4": "Mener des réunions d’équipe"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },  
      "q7": {
        "text": "Vous aimeriez savoir si les clients sont satisfaits de l’assistance en direct fournie par le centre d’appels. Quel produit livrable serait ajouté à l’activité &laquo; Offrir un soutien en direct aux clients &raquo; pour répondre à cette question? ",
        "options": {
          "1": "Créer un sondage auprès des clients après le soutien",
          "2": "Résoudre un appel, un message texte ou un clavardage en moins de 2 minutes",
          "3": "Un appel, un message texte ou un clavardage sur 10 est souligné pour résolution",
          "4": "Répondre aux appels en moins de 30 secondes"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Vous avez ajouté une nouvelle activité à votre plan de travail: &laquo; Offrir un soutien aux clients par des moyens automatisés &raquo;. L’une des sous-activités est la &laquo; Mise en place d’un système de robot conversationnel &raquo;.  Le robot conversationnel répondrait aux demandes des clients en ligne sans faire intervenir un agent en direct, 24 heures sur 24. Quel livrable serait ajouté au plan de travail pour cette activité?",
        "options": {
          "1": "Modifier les heures d’ouverture du centre d’appel pour qu’il fonctionne 24 heures sur 24, 7 jours sur 7",
          "2": "Système de robot conversationnel en direct opérationnel 99&nbsp;% du temps",
          "3": "30&nbsp;% des demandes en ligne seraient résolues par robot conversationnel ",
          "4": "Les interactions des robots conversationnels seront surveillées par un agent du centre d’appels."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "Avec n’importe quelle technologie en ligne, comme le système de robot conversationnel, il y a le risque d’une atteinte à la vie privée.  À quel titre l’activité &laquo; Pare-feu sécurisé et chiffrement &raquo; pourrait-elle être ajoutée au plan de travail?",
        "options": {
          "1": "Ressource",
          "2": "Atténuation",
          "3": "Impact",
          "4": "Priorité de la Direction"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Lequel des éléments suivants constituerait un risque pour la nouvelle activité &laquo; Offrir un soutien aux clients par des moyens automatisés &raquo;?",
        "options": {
          "1": "Roulement de personnel",
          "2": "Ne répond pas à la norme de rendement",
          "3": "Heures d’ouverture non dotées en personnel",
          "4": "Panne du système"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "L’aide temporaire pour mener à bien les activités quotidiennes est payée à partir de quel budget?",
        "options": {
          "1": "Fonctionnement et entretien (F et E)",
          "2": "Salaire",
          "3": "Subventions et contributions (S et C)",
          "4": "Immobilisations"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Lequel des éléments suivants détaille le total des dépenses prévues pour le prochain exercice financier d’une organisation fédérale?",
        "options": {
          "1": "Rapport ministériel sur les résultats",
          "2": "Approvisionnements provisoires",
          "3": "Budget supplémentaire des dépenses",
          "4": "Plan ministériel"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Les informations sur les résultats que vous avez obtenus dans le cadre des activités prévues dans votre plan de travail figureront dans un rapport de fin d’année pour votre organisation. Quel est le nom de ce rapport?",
        "options": {
          "1": "Approvisionnement complet",
          "2": "Comptes publics",
          "3": "Rapport ministériel sur les résultats ",
          "4": "Plan ministériel"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q14": {
        "text": "Vos coûts d’infrastructure informatique ont augmenté de 10&nbsp;% par an au cours des dernières années. Si vos coûts actuels sont de 20&nbsp;000&nbsp;$, quel montant inscrirez-vous dans votre budget pour l’année prochaine? ",
        "options": {
          "1": "20&nbsp;000&nbsp;$",
          "2": "20&nbsp;200&nbsp;$",
          "3": "22&nbsp;000&nbsp;$",
          "4": "22&nbsp;200&nbsp;$"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "Pour les fournitures de bureau de l’an dernier, vous avez mis de côté 3&nbsp;000&nbsp;$, et 2&nbsp;500&nbsp;$ ont été dépensés. Pour l’année en cours, vous prévoyez dépenser 2&nbsp;500&nbsp;$. Quel montant allez-vous mettre dans votre budget pour l’année prochaine?",
        "options": {
          "1": "2&nbsp;000&nbsp;$",
          "2": "2&nbsp;500&nbsp;$",
          "3": "3&nbsp;000&nbsp;$",
          "4": "5&nbsp;500&nbsp;$"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "Vous avez prévu un budget de 8 000 $ année après année pour la formation des agents des centres d’appel. L’année dernière, vous avez dépensé 5 000 $ pour la formation. Cette année, vous prévoyez dépenser 10 500 $. Quel budget prévoyez-vous pour l’année prochaine?",
        "options": {
          "1": "Le montant que vous prévoyez dépenser cette année (10&nbsp;500&nbsp;$)",
          "2": "Le montant que vous avez dépensé l’année dernière (5&nbsp;000&nbsp;$) avec une note de votre prévision (10&nbsp;500&nbsp;$)",
          "3": "Le même montant que vous avez demandé année après année (8&nbsp;000&nbsp;$) puis vous justifiez tout dépassement",
          "4": "Le montant que vous prévoyez après avoir examiné les raisons de la fluctuation "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q17": {
        "text": "Vous n’avez pas assez de fonds en F et E pour couvrir vos besoins budgétaires et vous décidez de transférer 100&nbsp;000&nbsp;$ de salaires à F et E. Quelle déclaration est la bonne?",
        "options": {
          "1": "Il est possible de transférer le salaire en F et E, dollar pour dollar (100&nbsp;000&nbsp;$ en salaire équivaut à 100&nbsp;000&nbsp;$ en F et E)",
          "2": "Vous pouvez effectuer le transfert, mais vous devez tenir compte du montant de Régime d’avantages sociaux des employés",
          "3": "Vous ne pouvez pas transférer de salaire à F et E ou inversement"
          
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q18": {
        "text": "Le budget salarial de l’année en cours est de 760&nbsp;000&nbsp;$. Vous créez un nouveau poste d’analyste en TI qui sera doté l’an prochain. Le salaire annuel sera de 60&nbsp;000&nbsp;$. Vous aurez besoin de temps pour combler les postes et vous estimez que les employés commenceront en juin et ne travailleront que 10 mois. Quel sera votre budget salarial pour l’année prochaine (en supposant que tout le reste demeure inchangé)?",
        "options": {
          "1": "760&nbsp;000&nbsp;$",
          "2": "800&nbsp;000&nbsp;$",
          "3": "810&nbsp;000&nbsp;$",
          "4": "820&nbsp;000&nbsp;$"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "La mise en œuvre du système de robot conversationnel entraînera des coûts de 15 000 $ en Technologies de l’informatique pour l’hébergement, qui seront fournis par un autre ministère selon le principe du recouvrement des coûts. Cela sera officialisé dans un protocole d’entente entre les organisations. Quels seront les frais d’hébergement dans votre budget?",
        "options": {
          "1": "15&nbsp;000&nbsp;$ non discrétionnaire ",
          "2": "15&nbsp;000&nbsp;$ discrétionnaire ",
          "3": "15&nbsp;000&nbsp;$ subventions et contributions",
          "4": "15&nbsp;000&nbsp;$ immobilisations"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "Vous avez soumis vos exigences budgétaires et votre directeur vous demande de réduire le coût de vos déplacements de 20&nbsp;000&nbsp;$ à 12&nbsp;000&nbsp;$. Quelles mesures pourriez-vous prendre? ",
        "options": {
          "1": "Réduire certains coûts discrétionnaires ",
          "2": "Explorer les options de vidéoconférence",
          "3": "Modifier les exigences budgétaires à 12&nbsp;000&nbsp;$",
          "4": "Demander au service des finances de trouver 8&nbsp;000&nbsp;$."
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      }
    }
  }
}</i18n>
