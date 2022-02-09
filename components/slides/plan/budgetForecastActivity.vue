<template>
  <span>
    <b-row>
      <b-col>
        <p><span v-html="$t('actInstructions')"></span></p>
        <div class="tableScrollLTL">
          <table dir="ltr" border="1" cellspacing="0" cellpadding="5" width="100%" class="AnalyzeBudgetTable">
            <colgroup>
              <col width="132" />
              <col width="70" />
              <col width="70" />
              <col width="120" />
              <col width="90" />
              <col width="351" />
            </colgroup>
            <thead>
              <tr class="qTable">
                <th v-html="$t('budgetTableFill1')" id="budgetTableFill1" scope="col"></th>
                <th v-html="$t('budgetTableFill2')" id="budgetTableFill2" scope="col"></th>
                <th v-html="$t('budgetTableFill3')" id="budgetTableFill3" scope="col"></th>
                <th colspan="2" rowspan="1" v-html="$t('budgetTableFill4')" id="budgetTableFill4" scope="col"></th>
                <th v-html="$t('budgetTableFill5')" id="budgetTableFill5" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td v-html="$t('budgetTableFill6')" headers="budgetTableFill1"></td>
                <td v-html="$t('budgetTableFill7')" headers="budgetTableFill2"></td>
                <td v-html="$t('budgetTableFill8')" headers="budgetTableFill3"></td>
                <th v-html="$t('budgetTableFill9')" id="budgetTableFill9" scope="col" headers="budgetTableFill4"></th>
                <th v-html="$t('budgetTableFill10')" id="budgetTableFill10" scope="col" headers="budgetTableFill4"></th>
                <td v-html="$t('budgetTableFill11')" headers="budgetTableFill5"></td>
              </tr>
              <!--<tr>
                <td v-html="$t('budgetTableFill12')" headers="budgetTableFill1"></td>
                <td v-html="$t('budgetTableFill13')" headers="budgetTableFill2"></td>
                <td v-html="$t('budgetTableFill14')" headers="budgetTableFill3"></td>
                <td v-html="$t('budgetTableFill15')" headers="budgetTableFill4 budgetTableFill9"></td>
                <td v-html="$t('budgetTableFill16')" headers="budgetTableFill4 budgetTableFill10"></td>
                <td v-html="$t('budgetTableFill17')" headers="budgetTableFill5"></td>
              </tr>-->
            </tbody>
            <thead>
              <tr class="qTable">
                <th v-html="$t('budgetTableFill18')" id="budgetTableFill18" scope="col" colspan="6"></th>
              </tr>
            </thead>
            <tbody>
              <!--<tr>
                <td v-html="$t('budgetTableFill24')" headers="budgetTableFill1 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill25')" headers="budgetTableFill2 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill26')" headers="budgetTableFill3 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill27')" headers="budgetTableFill4 budgetTableFill9 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill28')" headers="budgetTableFill4 budgetTableFill10 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill29')" headers="budgetTableFill5 budgetTableFill18"></td>
              </tr>-->
              <tr>
                <th v-html="$t('budgetTableFill30')" id="budgetTableFill30" scope="row"></th>
                <td v-html="$t('budgetTableFill31')" headers="budgetTableFill2 budgetTableFill18 budgetTableFill30"></td>
                <td v-html="$t('budgetTableFill32')" headers="budgetTableFill3 budgetTableFill18 budgetTableFill30"></td>
                <td headers="budgetTableFill4 budgetTableFill9 budgetTableFill18 budgetTableFill30">
                  <span v-html="$t('budgetTableFill33')" />
                </td>
                <td headers="budgetTableFill4 budgetTableFill10 budgetTableFill18 budgetTableFill30"><span v-html="$t('budgetTableFill34')" />
                </td>
                <td v-html="$t('budgetTableFill35')" headers="budgetTableFill5 budgetTableFill18 budgetTableFill30"></td>
              </tr>
              <tr>
                <th v-html="$t('budgetTableFill36')" id="budgetTableFill36" scope="row"></th>
                <td v-html="$t('budgetTableFill37')" headers="budgetTableFill2 budgetTableFill18 budgetTableFill36"></td>
                <td v-html="$t('budgetTableFill38')" headers="budgetTableFill3 budgetTableFill18 budgetTableFill36"></td>
                <td headers="budgetTableFill4 budgetTableFill9 budgetTableFill18 budgetTableFill36"><span v-html="$t('budgetTableFill39')" /></td>
                <td headers="budgetTableFill4 budgetTableFill10 budgetTableFill18 budgetTableFill36"><span v-html="$t('budgetTableFill40')" /></td>
                <td v-html="$t('budgetTableFill41')" headers="budgetTableFill5 budgetTableFill18 budgetTableFill36"></td>
              </tr>
              <!--<tr>
                <td v-html="$t('budgetTableFill42')" headers="budgetTableFill1 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill43')" headers="budgetTableFill2 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill44')" headers="budgetTableFill3 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill45')" headers="budgetTableFill4 budgetTableFill9 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill46')" headers="budgetTableFill4 budgetTableFill10 budgetTableFill18"></td>
                <td v-html="$t('budgetTableFill47')" headers="budgetTableFill5 budgetTableFill18"></td>
              </tr>-->
            </tbody>
            <thead>
              <tr class="qTable">
                <th v-html="$t('budgetTableFill48')" id="budgetTableFill48" scope="col" headers="budgetTableFill1" colspan="6"></th>
              </tr>
            </thead>
            <tbody>
              <!--<tr>
                <td v-html="$t('budgetTableFill54')" headers="budgetTableFill1 budgetTableFill48"></td>
                <td v-html="$t('budgetTableFill55')" headers="budgetTableFill2 budgetTableFill48"></td>
                <td v-html="$t('budgetTableFill56')" headers="budgetTableFill3 budgetTableFill48"></td>
                <td v-html="$t('budgetTableFill57')" headers="budgetTableFill4 budgetTableFill9 budgetTableFill48"></td>
                <td v-html="$t('budgetTableFill58')" headers="budgetTableFill4 budgetTableFill10 budgetTableFill48"></td>
                <td v-html="$t('budgetTableFill59')" headers="budgetTableFill5 budgetTableFill48"></td>
              </tr>-->
              <tr>
                <th v-html="$t('budgetTableFill60')" id="budgetTableFill60" scope="row"></th>
                <td v-html="$t('budgetTableFill61')" headers="budgetTableFill2 budgetTableFill48 budgetTableFill60"></td>
                <td v-html="$t('budgetTableFill62')" headers="budgetTableFill3 budgetTableFill48 budgetTableFill60"></td>
                <td headers="budgetTableFill4 budgetTableFill9 budgetTableFill48 budgetTableFill60"><span v-html="$t('budgetTableFill63')">$3,000</span></td>
                <td headers="budgetTableFill4 budgetTableFill10 budgetTableFill48 budgetTableFill60"><span v-html="$t('budgetTableFill64')" /></td>
                <td v-html="$t('budgetTableFill65')" headers="budgetTableFill5 budgetTableFill48 budgetTableFill60"></td>
              </tr>
              <tr>
                <th v-html="$t('budgetTableFill66')" id="budgetTableFill66" scope="row"></th>
                <td v-html="$t('budgetTableFill67')" headers="budgetTableFill2 budgetTableFill48 budgetTableFill66"></td>
                <td v-html="$t('budgetTableFill68')" headers="budgetTableFill3 budgetTableFill48 budgetTableFill66"></td>
                <td headers="budgetTableFill4 budgetTableFill9 budgetTableFill48 budgetTableFill66"><span v-html="$t('budgetTableFill69')" /></td>
                <td v-html="$t('budgetTableFill70')" headers="budgetTableFill4 budgetTableFill10 budgetTableFill48 budgetTableFill66"></td>
                <td v-html="$t('budgetTableFill71')" headers="budgetTableFill5 budgetTableFill48 budgetTableFill66"></td>
              </tr>
              <tr>
                <th v-html="$t('budgetTableFill72')" id="budgetTableFill72" scope="row"></th>
                <td v-html="$t('budgetTableFill73')" headers="budgetTableFill2 budgetTableFill48 budgetTableFill72"></td>
                <td v-html="$t('budgetTableFill74')" headers="budgetTableFill3 budgetTableFill48 budgetTableFill72"></td>
                <td headers="budgetTableFill4 budgetTableFill9 budgetTableFill48 budgetTableFill72" aria-live="polite"><strong v-if="q1Answer" v-html="$t('budgetTableFill75')"></strong><a v-else v-b-toggle.question-1 href="javascript:" class="questionMark">?</a></td>
                <td headers="budgetTableFill4 budgetTableFill10 budgetTableFill48 budgetTableFill72" aria-live="polite"><strong v-if="q1Answer" v-html="$t('budgetTableFill76')"></strong></td>
                <td v-html="$t('budgetTableFill77')" headers="budgetTableFill5 budgetTableFill48 budgetTableFill72"></td>
              </tr>
              <tr>
                <th v-html="$t('budgetTableFill78')" id="budgetTableFill78" scope="row"></th>
                <td v-html="$t('budgetTableFill79')" headers="budgetTableFill2 budgetTableFill48 budgetTableFill78"></td>
                <td v-html="$t('budgetTableFill80')" headers="budgetTableFill3 budgetTableFill48 budgetTableFill78"></td>
                <td headers="budgetTableFill4 budgetTableFill9 budgetTableFill48 budgetTableFill78" aria-live="polite"><strong v-if="q2Answer" v-html="$t('budgetTableFill81')"></strong></td>
                <td headers="budgetTableFill4 budgetTableFill10 budgetTableFill48 budgetTableFill78" aria-live="polite"><strong v-if="q2Answer" v-html="$t('budgetTableFill82')"></strong><a v-else v-b-toggle.question-2 href="javascript:" class="questionMark">?</a></td>
                <td v-html="$t('budgetTableFill83')" headers="budgetTableFill5 budgetTableFill48 budgetTableFill78"></td>
              </tr>
              <tr>
                <th v-html="$t('budgetTableFill84')" id="budgetTableFill84" scope="row"></th>
                <td v-html="$t('budgetTableFill85')" headers="budgetTableFill2 budgetTableFill48 budgetTableFill84"></td>
                <td v-html="$t('budgetTableFill86')" headers="budgetTableFill3 budgetTableFill48 budgetTableFill84"></td>
                <td v-html="$t('budgetTableFill87')" headers="budgetTableFill4 budgetTableFill9 budgetTableFill48 budgetTableFill84"></td>
                <td v-html="$t('budgetTableFill88')" headers="budgetTableFill4 budgetTableFill10 budgetTableFill48 budgetTableFill84"></td>
                <td v-html="$t('budgetTableFill89')" headers="budgetTableFill5 budgetTableFill48 budgetTableFill84"></td>
              </tr>
              <tr>
                <th><strong v-html="$t('budgetTableFill90')" id="budgetTableFill90" scope="row"></strong></th>
                <td v-html="$t('budgetTableFill91')" headers="budgetTableFill2 budgetTableFill48 budgetTableFill90"></td>
                <td v-html="$t('budgetTableFill92')" headers="budgetTableFill3 budgetTableFill48 budgetTableFill90"></td>
                <td headers="budgetTableFill4 budgetTableFill9 budgetTableFill48 budgetTableFill90">
                  <strong v-if="q1Answer && q2Answer" v-html="$t('budgetTableFill93')"></strong>
                </td>
                <td headers="budgetTableFill4 budgetTableFill10 budgetTableFill48 budgetTableFill90">
                  <strong v-if="q1Answer && q2Answer" v-html="$t('budgetTableFill94')"></strong>
                </td>
                <td v-html="$t('budgetTableFill95')" headers="budgetTableFill5 budgetTableFill48 budgetTableFill90budgetTableFill90"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;">
      <b-col>
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.question-1 variant="light" class="text-left">{{ $t('q1.title') }}</b-button>
            </b-card-header>
            <b-collapse id="question-1" accordion="budgetForecastQuestions" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <p v-html="$t('q1.introduction')"></p>
                  <radioQuiz :question="$t('q1')" @response="q1Answer=$event" qId="1" />
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.question-2 variant="light" class="text-left">{{ $t('q2.title') }}</b-button>
            </b-card-header>
            <b-collapse id="question-2" accordion="budgetForecastQuestions" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <p v-html="$t('q2.introduction')"></p>
                  <checkboxQuiz :question="$t('q2')" qId="2" @response="q2Answer=$event" :Answer="['3','4']" />
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-modal id="question4" okOnly size="lg" :title="$t('q1.title')">
      <p v-html="$t('q1.introduction')"></p>
      <radioQuiz :question="$t('q1')" @response="q1Answer=$event" qId="1" />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal id="question5" :title="$t('q2.title')" size="lg" okOnly>
      <p v-html="$t('q2.introduction')"></p>
      <checkboxQuiz :question="$t('q2')" qId="2" @response="q2Answer=$event" :Answer="['3','4']" />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: {
    radioQuiz,
    checkboxQuiz
  },
  data() {
    return {
      q1Answer: "",
      q2Answer: ""
    }
  },
  methods:{
    scroll(collapseId, isJustShown){
      if(isJustShown && (collapseId == "question-1" || collapseId == "question-2" || collapseId == "question-3")){        
        var options = {
          container: '.modal',
          onStart: function(element) {
            //console.log(element);
          },
          onDone: function(element) {
            //console.log(element);
          },
          onCancel: function() {
            // scrolling has been interrupted
          },
          offset: -50,
          easing: 'ease-in-out',
          x: false,
          y: true
        }
        
        var that = this;
        setTimeout(function(){
          that.$scrollTo("#" + collapseId, 500, options);
        }, 500);
      }
    }
  },
  mounted(){
    this.$root.$on('bv::collapse::state', this.scroll);
    
    this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
      this.$root.$off("bv::collapse::state", this.scroll);
    });
  }
}

</script>
<style type="text/css" scoped>
.AnalyzeBudgetTable td:nth-child(n+2):nth-child(-n+5){
  text-align: right;
}
>>> tr.qTable{
  background-color:#587C84;
  color:#fff;
  font-weight: bold;
  text-align: center;
}
.AnalyzeBudgetTable td {
  position: relative;
}

>>> .trainTable td, >>> .trainTable th[scope="row"]{padding:.5em;}
>>> .trainTable tr:nth-child(even) td:nth-child(n+2):nth-child(-n+4){
  text-align: right;
}
.questionMark {
  display: block;
  font-family: "Roboto", Sans Serif;
  font-weight: 500;
  font-size: 36px;
  position: absolute;
  background-color: #dfe49e;
  color: #4d4d4d;
  border: 2px solid #eee;
  border-radius: 50px;
  text-align: center;
  content: "?";
  box-shadow: 3px 3px 3px rgba(50, 50, 51, .3);
  width: 60px;
  height: 60px;
  left: 20%;
  top: -.25em;
  z-index: 9999;
  cursor: pointer;
}

</style>
<i18n>
  {
  "en": {
    "q1": {
      "introduction": "You have 3 employees who need training to implement the new software at $800 per employee. It has been common practice to send 4 employees on training of their choice at $500 per employee. ",
      "text": "What will your budget requirements be?",
      "options": {
        "1": "$4,400 Non-Discretionary ",
        "2": "$2,400 Non-Discretionary and $2,000 Discretionary",
        "3": "$2,000 Non-Discretionary and $2,400 Discretionary"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is $2,400 Non-Discretionary and $2,000 Discretionary.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is $2,400 Non-Discretionary and $2,000 Discretionary."
      },
      "conclusion": "<p>Training to implement the new software is non-discretionary and the other employee training is discretionary.</p>",
      "title": "Training"
    },
    "q2": {
      "text": "What will your budget requirements be?",
      "options": {
        "1": "$18,000 Discretionary ",
        "2": "$10,000 Non-Discretionary and $8,000 Discretionary",
        "3": "$10,000 Non-Discretionary and $1,600 Discretionary",
        "4": "$11,600 Non-Discretionary"
      },
      "feedback": {
        "right": "<span class='v-right'/> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong'/> <strong>Incorrect.</strong> The correct answers are $10,000 Non-Discretionary and $1,600 Discretionary or $11,600 Non-Discretionary."
      },
      "title": "Travel ",
      "introduction": "<div class='tableScrollLTL'><table border='1' class='trainTable'> <thead> <tr class='qTable'> <th id='1' scope='col'> <p>Travel</p> </th> <th id='2' scope='col'> <p>Budget (A)</p> </th> <th id='3' scope='col'> <p>Actual (B)</p> </th> <th id='4' scope='col'> <p>Variance (C=B-A)</p> </th> <th id='5' scope='col'> <p>Variance Explanation</p> </th> </tr> </thead> <tbody> <tr> <th id='11' scope='row' headers='1'> <p>Previous year&nbsp;</p> </th> <td headers='2 11'> <p>$18,000</p> </td> <td headers='3 11'> <p>$16,000</p> </td> <td headers='4 11'> <p style='color:#af0000;'>($2,000)</p> </td> <td headers='5 11'> <p>Employee on leave without pay, and another did not travel.</p> </td> </tr> </tbody> <thead> <tr class='qTable'> <th id='6' scope='col'>&nbsp;</th> <th id='7' scope='col'> <p>Budget</p> </th> <th id='8' scope='col'> <p>YTD Actual</p> </th> <th id='9' scope='col'> <p>Annual Forecast</p> </th> <th id='10' scope='col'>&nbsp;</th> </tr> </thead> <tbody> <tr> <th id='12' scope='row' headers='6'> <p>Current year at P6</p> </th> <td headers='7 12'> <p>$18,000</p> </td> <td headers='8 12'> <p>$9,000</p> </td> <td headers='9 12'> <p>$18,000</p> </td> <td headers='10 12'>&nbsp;</td> </tr> </tbody> </table></div> <p>Historically, you have&nbsp;</p> <ul> <li>spent $10,000 on travel to conduct inspections</li> <li>budgeted a total of $8,000 for general travel.</li></ul><p>However, you know that 80% of work can now be done virtually.</p>",
      "conclusion": "<p>We need to conduct inspections as part of our business, hence $10,000 is non-discretionary. As per the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228' target='_blank' rel='external' aria-haspopup='true' class='external'>Directive on Travel, Hospitality, Conference, and Event Expenditures</a>, travel should be avoided where appropriate. We will not request a budget for the 80% that can be done virtually. Since there is no indication of what the remaining general travel is for, it could be non-discretionary or discretionary.&nbsp;</p>"
    },
    "actInstructions": "Select any question marks and answer the question that appears.",
    "budgetTableFill1": "Line Item",
    "budgetTableFill2": "Previous Budget",
    "budgetTableFill3": "Current Budget",
    "budgetTableFill4": "Proposed Budget",
    "budgetTableFill5": "Notes for Proposed Budget",
    "budgetTableFill6": "&nbsp;",
    "budgetTableFill7": "&nbsp;",
    "budgetTableFill8": "&nbsp;",
    "budgetTableFill9": "Non-Discretionary",
    "budgetTableFill10": "Discretionary",
    "budgetTableFill11": "&nbsp;",
    "budgetTableFill12": "&nbsp;",
    "budgetTableFill13": "&nbsp;",
    "budgetTableFill14": "&nbsp;",
    "budgetTableFill15": "&nbsp;",
    "budgetTableFill16": "&nbsp;",
    "budgetTableFill17": "&nbsp;",
    "budgetTableFill18": "Salary",
    "budgetTableFill19": "&nbsp;",
    "budgetTableFill20": "&nbsp;",
    "budgetTableFill21": "&nbsp;",
    "budgetTableFill22": "&nbsp;",
    "budgetTableFill23": "&nbsp;",
    "budgetTableFill24": "&nbsp;",
    "budgetTableFill25": "&nbsp;",
    "budgetTableFill26": "&nbsp;",
    "budgetTableFill27": "&nbsp;",
    "budgetTableFill28": "&nbsp;",
    "budgetTableFill29": "&nbsp;",
    "budgetTableFill30": "Salary",
    "budgetTableFill31": "$460,000",
    "budgetTableFill32": "$475,000",
    "budgetTableFill33": "$430,000",
    "budgetTableFill34": "$13,333",
    "budgetTableFill35": "manager, 2 officers, 2 analysts, 1 jr. officer, 1 jr. analyst, admin, 1 officer retiring July 1, casual 4 months",
    "budgetTableFill36": "TOTAL",
    "budgetTableFill37": "$460,000",
    "budgetTableFill38": "$475,000",
    "budgetTableFill39": "$430,000",
    "budgetTableFill40": "$13,333",
    "budgetTableFill41": "&nbsp;",
    "budgetTableFill42": "&nbsp;",
    "budgetTableFill43": " ",
    "budgetTableFill44": " ",
    "budgetTableFill45": " ",
    "budgetTableFill46": " ",
    "budgetTableFill47": "&nbsp;",
    "budgetTableFill48": "O&amp;M",
    "budgetTableFill49": " ",
    "budgetTableFill50": " ",
    "budgetTableFill51": " ",
    "budgetTableFill52": " ",
    "budgetTableFill53": "&nbsp;",
    "budgetTableFill54": "&nbsp;",
    "budgetTableFill55": " ",
    "budgetTableFill56": " ",
    "budgetTableFill57": " ",
    "budgetTableFill58": " ",
    "budgetTableFill59": "&nbsp;",
    "budgetTableFill60": "Software License",
    "budgetTableFill61": "$0",
    "budgetTableFill62": "$0",
    "budgetTableFill63": "$3,000",
    "budgetTableFill64": " ",
    "budgetTableFill65": "new software, annual cost $1,000&nbsp;&times;&nbsp;3 FTEs",
    "budgetTableFill66": "Material and Supplies",
    "budgetTableFill67": "$1,961",
    "budgetTableFill68": "$2,000",
    "budgetTableFill69": "$1,500",
    "budgetTableFill70": " ",
    "budgetTableFill71": "historical spend is $1,500",
    "budgetTableFill72": "Training",
    "budgetTableFill73": "$2,000",
    "budgetTableFill74": "$2,000",
    "budgetTableFill75": "$2,400",
    "budgetTableFill76": "$2,000",
    "budgetTableFill77": "3 FTEs at $800 each for training, 4 FTEs at $500 each for general training",
    "budgetTableFill78": "Travel",
    "budgetTableFill79": "$18,000",
    "budgetTableFill80": "$18,000",
    "budgetTableFill81": "$10,000",
    "budgetTableFill82": "$1,600",
    "budgetTableFill83": "$10K to conduct inspections, $1.6K for general travel",
    "budgetTableFill84": "Temp Help",
    "budgetTableFill85": "$10,000",
    "budgetTableFill86": "$5,000",
    "budgetTableFill87": "$4,000",
    "budgetTableFill88": "$2,000",
    "budgetTableFill89": "to help conduct remote inspections",
    "budgetTableFill90": "TOTAL",
    "budgetTableFill91": "$31,961",
    "budgetTableFill92": "$27,000",
    "budgetTableFill93": "$20,900",
    "budgetTableFill94": "$5,600",
    "budgetTableFill95": "&nbsp;"
  },
  "fr": {
    "q1": {
      "conclusion": "La formation pour utiliser le nouveau logiciel est non discrétionnaire et la formation des autres employés est discrétionnaire.",
      "introduction": "Vous avez 3 employés qui ont besoin de formation pour  utiliser le nouveau logiciel à 800 $ par employé. Il est courant d’envoyer 4 employés suivre la formation de leur choix à raison de 500 $ par employé.",
      "text": "Quels sont vos besoins budgétaires?",
      "options": {
        "1": "4&nbsp;400&nbsp;$ non discrétionnaires",
        "2": "2&nbsp;400&nbsp;$ non discrétionnaires et 2&nbsp;000&nbsp;$ discrétionnaires",
        "3": "2&nbsp;000&nbsp;$ non discrétionnaires et 2&nbsp;400&nbsp;$ discrétionnaires"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est 2&nbsp;400&nbsp;$ non discrétionnaires et 2&nbsp;000&nbsp;$ discrétionnaires</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est 2&nbsp;400&nbsp;$ non discrétionnaires et 2&nbsp;000&nbsp;$ discrétionnaires."
      },
      "title": "Formation"
    },
    "q2": {
      "introduction": "<div class='tableScrollLTL'><table border='1'  class='trainTable'> <thead> <tr class='qTable'> <th id='1' scope='col'> <p>Voyage</p> </th> <th id='2' scope='col'> <p>Budget (A)</p> </th> <th id='3' scope='col'> <p>Réel (B)</p> </th> <th id='4' scope='col'> <p>Variance (C=B-A)</p> </th> <th id='5' scope='col'> <p>Explication de la variance</p> </th> </tr> </thead> <tbody> <tr> <th id='11' scope='row' headers='1'> <p>Année précédente&nbsp;</p> </th> <td headers='2 11'> <p>18&nbsp;000&nbsp;$</p> </td> <td headers='3 11'> <p>16&nbsp;000&nbsp;$</p> </td> <td headers='4 11'> <p style='color:#af0000;'>(2&nbsp;000 $)</p> </td> <td headers='5 11'> <p>Un employé était en congé sans solde, et un autre n’est pas parti en voyage.</p> </td> </tr> </tbody> <thead> <tr class='qTable'> <th id='6' scope='col'>&nbsp;</th> <th id='7' scope='col'> <p>Budget</p> </th> <th id='8' scope='col'> <p>CDA réel&nbsp;</p> </th> <th id='9' scope='col'> <p>Prévisions annuelles</p> </th> <th id='10' scope='col'>&nbsp;</th> </tr> </thead> <tbody> <tr> <th id='12' scope='row' headers='6'> <p>Année en cours à P6</p> </td> <td headers='7 12'> <p>18&nbsp;000&nbsp;$</p> </td> <td headers='8 12'> <p>9&nbsp;000&nbsp;$</p> </td> <td headers='9 12'> <p>18&nbsp;000&nbsp;$</p> </th> <td headers='10 12'>&nbsp;</td> </tr> </tbody> </table></div> <p>Par le passé, vous avez&nbsp;:</p> <ul> <li>dépensé 10&nbsp;000&nbsp;$ en frais de déplacement pour effectuer des inspections;</li> <li>prévu au budget un montant total de 8 000 dollars pour les voyages généraux. </li> </ul><p>Cependant, vous savez que 80 % du travail peut maintenant se faire virtuellement.</p>",
      "text": "Quels seront vos besoins budgétaires?",
      "options": {
        "1": "18&nbsp;000&nbsp;$ discrétionnaires",
        "2": "10&nbsp;000&nbsp;$ non discrétionnaires et 8&nbsp;000&nbsp;$ discrétionnaires",
        "3": "10&nbsp;000&nbsp;$ non discrétionnaires et 1&nbsp;600&nbsp;$ discrétionnaires",
        "4": "11&nbsp;600&nbsp;$ non discrétionnaires"
      },
      "feedback": {
        "wrong": "<span class='v-wrong'/> <strong>Incorrect.</strong> Les bonnes réponses sont 10&nbsp;000&nbsp;$ non discrétionnaires et 1&nbsp;600&nbsp;$ discrétionnaires ou 11&nbsp;600&nbsp;$ non discrétionnaires. ",
        "right": "<span class='v-right'/> <strong>Correct!</strong> "
      },
      "title": "Voyage",
      "conclusion": "<p>Nous devons effectuer des inspections dans le cadre de nos activités, de sorte que 10&nbsp;000&nbsp;$ ne sont pas discrétionnaires. Conformément à la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228' target='_blank' rel='external' aria-haspopup='true' class='external'>Directive sur les dépenses de voyages, d’accueil, de conférences et d’événements</a>, les déplacements devraient être évités lorsque cela est possible. Nous ne demanderons pas un budget pour les 80 p. 100 qui peuvent être réalisés virtuellement. Étant donné qu’il n’y a aucune indication de la raison pour laquelle il reste de l’argent pour les voyages, ces sommes pourraient être non discrétionnaires ou discrétionnaires.</p>"
    },
    "actInstructions": "Sélectionnez les points d’interrogation et répondez à la question qui apparaît. ",
    "budgetTableFill1": "Poste individuel",
    "budgetTableFill2": "Budget Précédent",
    "budgetTableFill3": "Budget Actuel",
    "budgetTableFill4": "Budget proposé",
    "budgetTableFill5": "Notes pour le budget proposé",
    "budgetTableFill6": "&nbsp;",
    "budgetTableFill7": "&nbsp;",
    "budgetTableFill8": "&nbsp;",
    "budgetTableFill9": "Non discrétionnaire",
    "budgetTableFill10": "Discrétionnaire",
    "budgetTableFill11": " ",
    "budgetTableFill12": "&nbsp;",
    "budgetTableFill13": "&nbsp;",
    "budgetTableFill14": "&nbsp;",
    "budgetTableFill15": "&nbsp;",
    "budgetTableFill16": "&nbsp;",
    "budgetTableFill17": "&nbsp;",
    "budgetTableFill18": "Salaire",
    "budgetTableFill19": "&nbsp;",
    "budgetTableFill20": "&nbsp;",
    "budgetTableFill21": "&nbsp;",
    "budgetTableFill22": "&nbsp;",
    "budgetTableFill23": "&nbsp;",
    "budgetTableFill24": "&nbsp;",
    "budgetTableFill25": "&nbsp;",
    "budgetTableFill26": "&nbsp;",
    "budgetTableFill27": "&nbsp;",
    "budgetTableFill28": "&nbsp;",
    "budgetTableFill29": "&nbsp;",
    "budgetTableFill30": "Salaire",
    "budgetTableFill31": "460&nbsp;000&nbsp;$",
    "budgetTableFill32": "475&nbsp;000&nbsp;$",
    "budgetTableFill33": "430&nbsp;000&nbsp;$",
    "budgetTableFill34": "13&nbsp;333&nbsp;$",
    "budgetTableFill35": "gestionnaire, 2 agents, 2 analystes, 1 agent jr., 1 analyste jr., 1 administrateur, 1 agent prenant sa retraite le 1er juillet, occasionnel 4 mois",
    "budgetTableFill36": "TOTAL",
    "budgetTableFill37": "460&nbsp;000&nbsp;$",
    "budgetTableFill38": "475&nbsp;000&nbsp;$",
    "budgetTableFill39": "430&nbsp;000&nbsp;$",
    "budgetTableFill40": "13&nbsp;333&nbsp;$",
    "budgetTableFill41": "&nbsp;",
    "budgetTableFill42": "&nbsp;",
    "budgetTableFill43": " ",
    "budgetTableFill44": " ",
    "budgetTableFill45": " ",
    "budgetTableFill46": " ",
    "budgetTableFill47": "&nbsp;",
    "budgetTableFill48": "F et E",
    "budgetTableFill49": " ",
    "budgetTableFill50": " ",
    "budgetTableFill51": " ",
    "budgetTableFill52": " ",
    "budgetTableFill53": "&nbsp;",
    "budgetTableFill54": "&nbsp;",
    "budgetTableFill55": " ",
    "budgetTableFill56": " ",
    "budgetTableFill57": " ",
    "budgetTableFill58": " ",
    "budgetTableFill59": "&nbsp;",
    "budgetTableFill60": "Licence de logiciel ",
    "budgetTableFill61": "0$",
    "budgetTableFill62": "0$",
    "budgetTableFill63": "3&nbsp;000&nbsp;$",
    "budgetTableFill64": " ",
    "budgetTableFill65": "nouveau logiciel, coût annuel 1&nbsp;000&nbsp;$&nbsp;&times;&nbsp;3 ETP",
    "budgetTableFill66": "Fournitures de bureau",
    "budgetTableFill67": "1&nbsp;961&nbsp;$",
    "budgetTableFill68": "2&nbsp;000&nbsp;$",
    "budgetTableFill69": "1&nbsp;500&nbsp;$",
    "budgetTableFill70": " ",
    "budgetTableFill71": "les dépenses historiques sont de 1&nbsp;500&nbsp;$.",
    "budgetTableFill72": "Formation",
    "budgetTableFill73": "2&nbsp;000&nbsp;$",
    "budgetTableFill74": "2&nbsp;000&nbsp;$",
    "budgetTableFill75": "2&nbsp;400&nbsp;$",
    "budgetTableFill76": "2&nbsp;000&nbsp;$",
    "budgetTableFill77": "3 ETP à 800$ chacun pour la formation, 4 ETP à 500$ chacun pour la formation générale",
    "budgetTableFill78": "Voyage",
    "budgetTableFill79": "18&nbsp;000&nbsp;$",
    "budgetTableFill80": "18&nbsp;000&nbsp;$",
    "budgetTableFill81": "10&nbsp;000&nbsp;$",
    "budgetTableFill82": "1&nbsp;600&nbsp;$",
    "budgetTableFill83": "10&nbsp;000&nbsp;$ pour effectuer des inspections, 1600$ pour les déplacements généraux",
    "budgetTableFill84": "Aide temporaire",
    "budgetTableFill85": "$10,000",
    "budgetTableFill86": "5&nbsp;000&nbsp;$",
    "budgetTableFill87": "4&nbsp;000&nbsp;$",
    "budgetTableFill88": "2&nbsp;000&nbsp;$",
    "budgetTableFill89": "pour aider à effectuer des inspections à distance",
    "budgetTableFill90": "TOTAL",
    "budgetTableFill91": "31&nbsp;961&nbsp;$",
    "budgetTableFill92": "27&nbsp;000&nbsp;$",
    "budgetTableFill93": "20&nbsp;900&nbsp;$",
    "budgetTableFill94": "5&nbsp;600&nbsp;$",
    "budgetTableFill95": "&nbsp;"
  }
}
</i18n>
