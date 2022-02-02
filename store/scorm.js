import {SCORM} from 'pipwerks-scorm-api-wrapper'

export const state = () => ({
  init: SCORM.init(),
  name: SCORM.get('cmi.core.student_name'),
  examSuspend: SCORM.get("cmi.suspend_data"),
  examStatus: SCORM.get("cmi.core.lesson_status"),
  examScore: SCORM.get("cmi.suspend_data"),
  preferredLanguage:SCORM.get("cmi.suspend_data")
})

export const getters = {
  getScore: (state) => {
    try {
      atob(state.examSuspend)
      return JSON.parse(atob(state.examSuspend))
    } catch (e) {
      return undefined
    }

  }
}

export const actions = {
  setSuccess({commit}){
    SCORM.set('cmi.core.lesson_status', 'completed')
    SCORM.set("cmi.core.score.raw", "100")
    SCORM.save()
  },
  setLMSObjectives({ commit, state }) {
    // intention: initialize cmi.objectives.n.id with the 3 objectives, set passage mark at 80
    setObjective(0, 'plan', 80, 100)
    setObjective(1, 'spend', 80, 100)
    setObjective(2, 'report', 80, 100)
  },
  setScores({ commit, state }, scores) {

    for (let i in scores) {
      let objective = "cmi.objectives." + i
      let minScore = doLMSGetValue(objective + ".score.min")
      if (minScore.length !== 0) minScore = parseInt(minScore)

      SCORM.set(objective + ".score.raw", scores[i])
      if (scores[i] >= minScore) {
        //Le cours est passé
        SCORM.set(objective + ".status", "passed")
        SCORM.set("cmi.core.score.raw", scores[i])
        SCORM.set('cmi.core.lesson_status', 'completed')

      } else {
        SCORM.set(objective + ".status", "failed")
        SCORM.set("cmi.core.lesson_status", "incomplete");

      }
    }
   commit('setExamStatus')
  }
}

export const mutations = {
  setName(state, name) {
    state.name = name;
  },
  setProgress(state, score) {
    state.examScore = btoa(JSON.stringify(score))
    SCORM.set('cmi.suspend_data', state.examScore)

  },
  setExamStatus(state){
    state.examStatus= SCORM.get("cmi.core.lesson_status")
  }

}
