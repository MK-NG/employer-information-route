var motivationCheckboxes = document.querySelectorAll('.motivations input')
for (var i = 0; i < motivationCheckboxes.length; i++) {
  motivationCheckboxes[i].addEventListener('change', filter)
}

var timeCheckboxes = document.querySelectorAll('.times input')
for (var i = 0; i < timeCheckboxes.length; i++) {
  timeCheckboxes[i].addEventListener('change', filter)
}

var payCheckboxes = document.querySelectorAll('.payment input')
for (var i = 0; i < payCheckboxes.length; i++) {
  payCheckboxes[i].addEventListener('change', filter)
}

var qualificationCheckboxes = document.querySelectorAll(
  '.qualifications input'
)
for (var i = 0; i < qualificationCheckboxes.length; i++) {
  qualificationCheckboxes[i].addEventListener('change', filter)
}

filter()
function filter () {
  var i, j
  // Get the selected categories
  var motivationCheckboxes = document.querySelectorAll('.motivations input')
  var motivations = []
  var c
  for (i = 0; i < motivationCheckboxes.length; i++) {
    if (motivationCheckboxes[i].checked) {
      c = motivationCheckboxes[i].value
      motivations.push(c)
    }
  }

  var timeCheckboxes = document.querySelectorAll('.times input')
  var time = []
  var c
  for (i = 0; i < timeCheckboxes.length; i++) {
    if (timeCheckboxes[i].checked) {
      c = timeCheckboxes[i].value
      time.push(c)
    }
  }

  var payCheckboxes = document.querySelectorAll('.payment input')
  var pay = []
  var c
  for (i = 0; i < payCheckboxes.length; i++) {
    if (payCheckboxes[i].checked) {
      c = payCheckboxes[i].value
      pay.push(c)
    }
  }

  var qualificationCheckboxes = document.querySelectorAll(
    '.qualifications input'
  )
  var qualification = []
  var c
  for (i = 0; i < qualificationCheckboxes.length; i++) {
    if (qualificationCheckboxes[i].checked) {
      c = qualificationCheckboxes[i].value
      qualification.push(c)
    }
  }

  // Apply the filter
  var items = document.querySelectorAll('.filterDiv')
  var item, motivationShow, timeShow, payShow, qualificationShow

  for (i = 0; i < items.length; i++) {
    item = items[i]
    if (motivations.length === 0) {
      motivationShow = true
    } else {
      motivationShow = false
      for (j = 0; j < motivations.length; j++) {
        if (item.classList.contains(motivations[j])) {
          motivationShow = true
          break
        } else {
          motivationShow = false
        }
      }
    }

    if (time.length === 0) {
      timeShow = true
    } else {
      timeShow = false
      for (j = 0; j < time.length; j++) {
        if (item.classList.contains(time[j])) {
          timeShow = true
          break
        } else {
          timeShow = false
        }
      }
    }

    if (pay.length === 0) {
      payShow = true
    } else {
      payShow = false
      for (j = 0; j < pay.length; j++) {
        if (item.classList.contains(pay[j])) {
          payShow = true
          break
        } else {
          payShow = false
        }
      }
    }

    if (qualification.length === 0) {
      qualificationShow = true
    } else {
      qualificationShow = false
      for (j = 0; j < qualification.length; j++) {
        if (item.classList.contains(qualification[j])) {
          qualificationShow = true
          break
        } else {
          qualificationShow = false
        }
      }
    }

    if (motivationShow && timeShow && payShow && qualificationShow) {
      item.classList.add('show')
    } else {
      item.classList.remove('show')
    }
  }

  var totalSchemes = document.querySelectorAll('.show').length
  console.log(totalSchemes)
  document.getElementById('numberOfSchemes').innerHTML = totalSchemes
  if (totalSchemes !== 0) {
    $('.noResults').hide()
  } else {
    $('.noResults').show()
  }
}
