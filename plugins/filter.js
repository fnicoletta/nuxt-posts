import Vue from 'vue'
import moment from 'moment'

Vue.filter('momentize', (date, format = "LLL") => {
  if (!date) {
    return ''
  }
  return moment(date).format(format);
})
