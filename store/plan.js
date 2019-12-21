export const state = () => ({
  // score: {}
  score: {},
  tabIndex:0,
  AlertIsDismissed:false,
  quizLocked:false,
  allDone:undefined
})

export const mutations = {
	setComplete(state,score)
	{ state.allDone=score},
	lockQuiz(state){
		state.quizLocked=true
	},
	resetQuiz(state){
		state.quizLocked=false
		state.score={}
		state.tabIndex=0
		state.allDone=undefined
	},
  setScore(state, qId) {
  	let thatThing=new Object
  	thatThing[qId[0]]=[qId[1],qId[2]]
  	state.score=Object.assign({},state.score,thatThing)
  	window.localStorage.setItem("planScore",thatThing[qId[0]])
  },
  setCurrentTab(state,currentTab){
  	state.tabIndex=currentTab
  },
  dismissAlert(state){
  	state.AlertIsDismissed=true
  }
}