(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(e,t,n){var content=n(269);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("d8e00116",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";var o=n(267);n.n(o).a},269:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,'.completed[data-v-08846ca3]{position:absolute;left:0;bottom:1.7em;height:10px;background-color:#000}.completed[data-v-08846ca3]:after{color:#000;background-color:hsla(0,0%,100%,.8);position:absolute;right:0;bottom:0;font-size:12px;content:attr(percent)"%"}.learningElement[data-v-08846ca3]{display:inline-block;position:relative;float:left;margin:50px}.box[data-v-08846ca3]{overflow:hidden;background-color:#fff;display:flex;align-items:bottom;justify-content:center;border-radius:2px;position:relative;border:1px solid #c3bfb6}.timeEstimate[data-v-08846ca3]{position:absolute;bottom:0;left:0;width:100%;height:1.75em;color:#fff;text-align:left}',""])},270:function(e,t,n){"use strict";var o={props:{size:{type:String,default:"200"},time:String,completion:{type:String,default:"0"},path:{type:String,default:"index"},imagePath:{type:String,default:"KeyMessR.png"}},computed:{getImgUrl:function(e){return n(106)("./"+e)},completionBar:function(){return{width:"".concat(this.completion,"%")}},boxSize:function(){return{width:this.size+"px",height:this.size+"px",backgroundImage:"url("+n(106)("./"+this.imagePath)+")",backgroundSize:"cover"}}}},r=(n(268),n(10)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"learningElement"},[n("nuxt-link",{attrs:{to:e.localePath(e.path)}},[n("div",{staticClass:"box",staticStyle:{"background-image":"url('/adt_finance-R1/_nuxt/assets/KeyMessR.png')"},style:e.boxSize},[n("div",{staticClass:"completed",style:e.completionBar,attrs:{percent:e.completion}}),e._v(" "),n("div",{staticClass:"timeEstimate"},[e.time?n("span",[e._v("  "+e._s(e.time)+" Minutes")]):e._e()])]),e._v(" "),n("p",{style:"width:"+e.size+"px"},[e._t("default")],2)])],1)},[],!1,null,"08846ca3",null);t.a=component.exports},279:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"keyPlanQuote":"Great planning leads to great performance.","keyPlanWork":"<h2>Work Plan</h2>  <ul>    <li>A work plan is a detailed schedule of the activities to be carried out, resources to be consumed, and results to be achieved over a one-year period, usually a fiscal year for a responsibility center.</li>    <li>To build one, you review the activities from the previous year’s work plan, budget and reports to identify lessons learned and what needs to be carried over. </li>    <li>Specifically, you define and prioritize the work and activities of your unit, assigning resources and timelines to each activity, making sure the activities align with the organizational priorities and conducting a risk assessment. </li>  </ul>","keyPlanBudget":"<h2>Create a Budget</h2>  <ul>    <li>Budgets are essentially the conversion of the work plans into financial terms. In other words, the budget represents how much you will spend to achieve your plan.</li>    <li>To create one, you review the previous year’s budget to identify what salary and what operations & maintenance expenses you will keep, eliminate and add. </li>    <li>You compare the previous year’s budget to the new work plan, making sure all the expenses linked to the activities are covered. You forecast expenses and submit the proposed new budget for approval, making adjustments throughout the year as activities evolve. </li>  </ul>"},"fr":{"keyPlanQuote":"Une bonne planification mène à une bonne performance.","keyPlanWork":"<h2>Plan de travail</h2>  <p>Un plan de travail est un calendrier détaillé des activités à réaliser, des ressources à consommer et des résultats à atteindre sur une période d\'un an, habituellement un exercice financier pour un centre de responsabilité.</p><p>Pour ce faire, vous passez en revue les activités du plan de travail, du budget et des rapports de l\'année précédente afin d\'identifier les leçons apprises et ce qui doit être reporté.</p>  <p>Plus précisément, vous définissez et hiérarchisez le travail et les activités de votre unité, attribuez des ressources et des échéanciers à chaque activité, veillez à ce que les activités correspondent aux priorités organisationnelles et effectuez une évaluation des risques.","keyPlanBudget":"<h2>Établir un budget</h2>    <p>Les budgets sont essentiellement la conversion des plans de travail en termes financiers. En d\'autres termes, le budget représente le montant que vous dépenserez pour réaliser votre plan.</p>    <p>Pour en créer un, vous passez en revue le budget de l\'année précédente afin de déterminer quel salaire et quelles dépenses de fonctionnement et d\'entretien vous conserverez, éliminerez et ajouterez.</p>    <p>Vous comparez le budget de l\'année précédente au nouveau plan de travail, en vous assurant que toutes les dépenses liées aux activités sont couvertes. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des ajustements tout au long de l\'année à mesure que les activités évoluent.</p>"}}'),delete e.options._Ctor}},297:function(e,t,n){"use strict";var o=n(279),r=n.n(o);t.default=r.a},315:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:n(155)}})])}],r=n(107),l=n(270),c={components:{hamburger:r.a,microlearning:l.a}},d=n(10),v=n(297),component=Object(d.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.$t("KeyMessages")))]),e._v(" "),e._m(0),e._v(" "),n("blockquote",[e._v(e._s(e.$t("keyPlanQuote")))]),e._v(" "),n("b-container",{staticStyle:{"text-align":"left"}},[n("b-row",[n("b-col",{domProps:{innerHTML:e._s(e.$t("keyPlanWork"))}}),e._v(" "),n("b-col",{domProps:{innerHTML:e._s(e.$t("keyPlanBudget"))}})],1)],1),e._v(" "),n("div",{staticClass:"bottomNav planSection"},[n("microlearning",{attrs:{path:"planKey",size:"140",completion:"100",imagePath:"KeyMessP.png"}},[e._v("\n        "+e._s(e.$t("KeyMessages"))+"\n      ")]),e._v(" "),n("microlearning",{attrs:{path:"buildWP",size:"140",time:"20",completion:"80"}},[e._v("\n        "+e._s(e.$t("BuildWorkPlan"))+"\n      ")]),e._v(" "),n("microlearning",{attrs:{size:"140",time:"20",completion:"10",imagePath:"CreateBud.png"}},[e._v("\n        "+e._s(e.$t("CreateBudget"))+"\n      ")]),e._v(" "),n("microlearning",{attrs:{size:"140",time:"15",imagePath:"TestPlan.png"}},[e._v("\n        Test\n      ")])],1)],1)},o,!1,null,null,null);"function"==typeof v.default&&Object(v.default)(component);t.default=component.exports}}]);