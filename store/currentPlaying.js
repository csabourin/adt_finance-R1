export const state = () => ({
  // score: {},
  showCC: window.localStorage.getItem("showCC") || false,
  volume: window.localStorage.getItem("volume") || 100,
  homepage: parseInt(window.localStorage.getItem("homepage"),10) || 0,
  kmPlan: parseInt(window.localStorage.getItem("kmPlan"),10) || 0,
  kmSpend: parseInt(window.localStorage.getItem("kmSpend"),10) || 0,
  kmReport: parseInt(window.localStorage.getItem("kmReport"),10) || 0,
  buildWP: parseInt(window.localStorage.getItem("buildWP"),10) || 0,
  createBudget: parseInt(window.localStorage.getItem("createBudget"),10) || 0,
  spendPart1: parseInt(window.localStorage.getItem("spendPart1"),10) || 0,
  spendPart2: parseInt(window.localStorage.getItem("spendPart2"),10) || 0,
  spendPart3: parseInt(window.localStorage.getItem("spendPart3"),10) || 0,
  reportPart1: parseInt(window.localStorage.getItem("reportPart1"),10) || 0,
  reportPart2: parseInt(window.localStorage.getItem("reportPart2"),10) || 0,
  buildWP_player: parseInt(window.localStorage.getItem("buildWP_player"),10) || 0,
  createBudget_player: parseInt(window.localStorage.getItem("createBudget_player"),10) || 0,
  spendPart1_player: parseInt(window.localStorage.getItem("spendPart1_player"),10) || 0,
  spendPart2_player: parseInt(window.localStorage.getItem("spendPart2_player"),10) || 0,
  spendPart3_player: parseInt(window.localStorage.getItem("spendPart3_player"),10) || 0,
  reportPart1_player: parseInt(window.localStorage.getItem("reportPart1_player"),10) || 0,
  reportPart2_player: parseInt(window.localStorage.getItem("reportPart2_player"),10) || 0,
  currentModule: window.localStorage.getItem("currentModule") || "",
  chosenScenario: window.localStorage.getItem("chosenScenario") || "takeCourse",
  menuShowing: window.localStorage.getItem("menuShowing") === "true" ? true : false || false
})

export const mutations = {
  setShowCC(state, showCC) {
    window.localStorage.setItem("showCC", showCC)
    state.showCC = showCC
  },
  setVolume(state, volume) {
    window.localStorage.setItem("volume", volume)
    state.volume = volume
  },
  setHomepage(state, playing) {
    window.localStorage.setItem("homepage", playing)
    state.homepage = playing
  },
  setKmPlan(state, playing) {
    window.localStorage.setItem("kmPlan", playing)
    state.kmPlan = playing
  },
  setKmSpend(state, playing) {
    window.localStorage.setItem("kmSpend", playing)
    state.kmSpend = playing
  },
  setKmReport(state, playing) {
    window.localStorage.setItem("kmReport", playing)
    state.kmReport = playing
  },
  setBuildWP(state, playing) {
    window.localStorage.setItem("buildWP", playing)
    state.buildWP = playing
  },
  setCreateBudget(state, playing) {
    window.localStorage.setItem("createBudget", playing)
    state.createBudget = playing
  },
  setSpendPart1(state, playing) {
    window.localStorage.setItem("spendPart1", playing)
    state.spendPart1 = playing
  },
  setSpendPart2(state, playing) {
    window.localStorage.setItem("spendPart2", playing)
    state.spendPart2 = playing
  },
  setSpendPart3(state, playing) {
    window.localStorage.setItem("spendPart3", playing)
    state.spendPart3 = playing
  },
  setReportPart1(state, playing) {
    window.localStorage.setItem("reportPart1", playing)
    state.reportPart1 = playing
  },
  setReportPart2(state, playing) {
    window.localStorage.setItem("reportPart2", playing)
    state.reportPart2 = playing
  },
  setBuildWP_player(state, playing) {
    window.localStorage.setItem("buildWP_player", playing)
    state.buildWP_player = playing
  },
  setCreateBudget_player(state, playing) {
    window.localStorage.setItem("createBudget_player", playing)
    state.createBudget_player = playing
  },
  setSpendPart1_player(state, playing) {
    window.localStorage.setItem("spendPart1_player", playing)
    state.spendPart1_player = playing
  },
  setSpendPart2_player(state, playing) {
    window.localStorage.setItem("spendPart2_player", playing)
    state.spendPart2_player = playing
  },
  setSpendPart3_player(state, playing) {
    window.localStorage.setItem("spendPart3_player", playing)
    state.spendPart3_player = playing
  },
  setReportPart1_player(state, playing) {
    window.localStorage.setItem("reportPart1_player", playing)
    state.reportPart1_player = playing
  },
  setReportPart2_player(state, playing) {
    window.localStorage.setItem("reportPart2_player", playing)
    state.reportPart2_player = playing
  },
  setCurrentModule(state, module) {
    window.localStorage.setItem("currentModule", module)
    state.currentModule = module
  },
  setChosenScenario(state, scenario) {
    window.localStorage.setItem("chosenScenario", scenario)
    state.chosenScenario = scenario
  },
  setMenuShowing(state, menuShowing) {
    window.localStorage.setItem("menuShowing", menuShowing)
    state.menuShowing = menuShowing
  }
}