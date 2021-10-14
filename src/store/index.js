import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        redIsActive: false,
        yellowIsActive: false,
        greenIsActive: false,
        redDuration: 10,
        yellowDuration: 3,
        greenDuration: 15
    },
    mutations: {
        switchToRed(state) {
            state.redIsActive = true;
            state.yellowIsActive = false;
            state.greenIsActive = false;
        },
        switchToYellow(state) {
            state.redIsActive = false;
            state.yellowIsActive = true;
            state.greenIsActive = false;
        },
        switchToGreen(state) {
            state.redIsActive = false;
            state.yellowIsActive = false;
            state.greenIsActive = true;
        },
    }
})
