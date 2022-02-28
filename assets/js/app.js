function createDate(yyyy, mm, dd) {
    return new Date(yyyy, mm - 1, dd)
}

let date_points = {
    "1start": createDate(2022, 3, 2),
    "1listen": createDate(2022, 4, 7),
    "1first": createDate(2022, 4, 25),
    "1theme": createDate(2022, 5, 16),
    "1second": createDate(2022, 7, 6),
    "1vacation": createDate(2022, 7, 20),

    "2start": createDate(2022, 8, 22),
    "2listen": createDate(2022, 9, 8),
    "2first": createDate(2022, 10, 5),
    "2second": createDate(2022, 11, 29),
    "2vacation": createDate(2022, 12, 30),
    "2end": createDate(2023, 2, 7),
}

window.points = date_points


function milli(milli) {
    let seconds = Math.floor(milli / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let days = Math.floor(hours / 24)

    let rel_seconds = seconds - (minutes * 60)
    let rel_minutes = minutes - (hours * 60)
    let rel_hours = hours - (days * 24)

    return {
        "days": days,
        "hours": rel_hours,
        "minutes": rel_minutes,
        "seconds": rel_seconds,
    }
}

function percent(current, max) {
    return (max - current) / max * 100
}

function get_from(where = document, classname) {
    return where.getElementsByClassName(classname)[0]
}
function get_all_from(where = document, classname) {
    return Array.from(where.getElementsByClassName(classname))
}

function get_percent(date) {
    return percent(
        milli(date - today_date).days,
        milli(date - init_date).days
    )
}

function get_dday(date) {
    return milli(date - today_date).days
}

function get_dday_text(date) {
    let dday = get_dday(date)
    if (dday == 0) {
        return "D - Day"
    } else if (dday > 0) {
        return "D - " + dday
    } else {
        return "D + " + Math.abs(dday)
    }
}

let init_date = createDate(2022, 2, 20)
let today_date = new Date()

// let today_date = createDate(2022, 2, 20)
// setInterval(function () {
//     today_date.setDate(today_date.getDate() + 1)
//     render()
// }, 100)

function render() {
    // 

    let start_date = date_points["1start"]
    let start_dday = get_dday(start_date)
    let start_dday_text = get_dday_text(start_date)
    let start_percent = get_percent(start_date)

    let E_startPR = get_from(document, "card_pr")
    let E_startPR_s = get_from(E_startPR, "pr_s")
    let E_startPR_e = get_from(E_startPR, "pr_e")
    if (start_percent < 100) {
        E_startPR_s.style.width = start_percent + "%"
        E_startPR_e.style.width = 100 - start_percent + "%"
    } else {
        E_startPR_s.style.width = 100 + "%"
        E_startPR_e.style.width = 0 + "%"

        E_startPR_s.style.borderRadius = "17px"
    }


    let E_startCARD = get_from(document, "start card")
    let E_startD = get_from(E_startCARD, "card_d")
    E_startD.innerHTML = start_dday_text

    // 

    let first_date = date_points["1first"]
    let first_dday = get_dday(first_date)
    let first_dday_text = get_dday_text(first_date)
    let first_percent = get_percent(first_date)
    console.log(first_percent)

    let E_firstCARD = get_from(document, "first card")
    let E_firstCIRCLE = get_from(E_firstCARD, "card_circle")
    console.log(E_firstCIRCLE)
    if (first_percent < 100) {

        E_firstCIRCLE.style.background = `
            radial-gradient(closest-side, #FFC2BD 70%, transparent 0 99.9%, #FFC2BD 0),
            conic-gradient(#e9847d calc(${first_percent} * 1%), #f7a9a2 0)`
    } else {
        E_firstCIRCLE.style.background = `
            radial-gradient(closest-side, #FFC2BD 70%, transparent 0 99.9%, #FFC2BD 0),
            conic-gradient(#e9847d calc(100 * 1%), #f7a9a2 0)`
    }
    E_firstCIRCLE.innerHTML = first_dday_text

    // 

    let second_date = date_points["1second"]
    let second_dday = get_dday(second_date)
    let second_dday_text = get_dday_text(second_date)
    let second_percent = get_percent(second_date)

    let E_secondCARD = get_from(document, "second card")
    let E_secondD = get_from(E_secondCARD, "card_d")
    E_secondD.innerHTML = second_dday_text

    let E_secondSECONDL = get_from(document, "card_second_second")
    let E_startVERTPR_s_list = get_all_from(E_secondSECONDL, "vert_pr_s")
    let E_startVERTPR_e_list = get_all_from(E_secondSECONDL, "vert_pr_e")
    console.log(E_startVERTPR_s_list, E_startVERTPR_e_list)

    if (second_percent < 100) {

        E_startVERTPR_s_list.forEach((e) => {
            e.style.height = second_percent + "%"
        })
        E_startVERTPR_e_list.forEach((e) => {
            e.style.height = 100 - second_percent + "%"
        })

    } else {
        E_startVERTPR_s_list.forEach((e) => {
            e.style.height = 100 + "%"
        })
        E_startVERTPR_e_list.forEach((e) => {
            e.style.height = 0 + "%"
        })

        E_startVERTPR_s_list.forEach((e) => {
            e.style.borderRadius = "22px"
        })
    }


    // 

    let listen_date = date_points["1listen"]
    let listen_dday = get_dday(listen_date)
    let listen_dday_text = get_dday_text(listen_date)
    let listen_percent = get_percent(listen_date)

    let E_listenCARD = get_from(document, "listen card")
    let E_listenD = get_from(E_listenCARD, "card_d")
    E_listenD.innerHTML = listen_dday_text

    // 

    let theme_date = date_points["1theme"]
    let theme_dday = get_dday(theme_date)
    let theme_dday_text = get_dday_text(theme_date)
    let theme_percent = get_percent(theme_date)

    let E_themeCARD = get_from(document, "theme card")
    let E_themeD = get_from(E_themeCARD, "card_d")
    E_themeD.innerHTML = theme_dday_text

    let E_themeICON = get_from(document, "theme_icon")
    let E_themeGRA = E_themeICON.getElementsByTagName("linearGradient")[0]
    console.log(E_themeGRA)
    let E_themeGRA_STOP_list = Array.from(E_themeGRA.getElementsByTagName("stop"))
    console.log(E_themeGRA_STOP_list)
    if (theme_percent < 100) {
        E_themeGRA_STOP_list[1].setAttribute('offset', Math.floor(theme_percent) + "%")
        E_themeGRA_STOP_list[2].setAttribute('offset', Math.floor(theme_percent) + "%")

    } else {
        E_themeGRA_STOP_list[1].setAttribute('offset', 100 + "%")
        E_themeGRA_STOP_list[2].setAttribute('offset', 100 + "%")
    }


    // 

    let vacation_date = date_points["1vacation"]
    let vacation_dday = get_dday(vacation_date)
    let vacation_dday_text = get_dday_text(vacation_date)
    let vacation_percent = get_percent(vacation_date)

    let E_vacationCARD = get_from(document, "vacation card")
    let E_vacationD = get_from(E_vacationCARD, "card_d_big")
    if (vacation_dday == 0) {
        E_vacationD.innerHTML = "Today"
    } else {
        E_vacationD.innerHTML = `${vacation_dday} days left`
    }
}

render()

let title = document.getElementsByClassName('title')[0]
title.addEventListener('click', () => {

})


let flane = document.getElementsByClassName('theme_icon')[0]
flane.addEventListener('dblclick', (e) => {
    today_date = createDate(2022, 2, 20)
    setInterval(function () {
        today_date.setDate(today_date.getDate() + 1)
        render()
    }, 50)
})

let paginator_button = document.getElementsByClassName('paginator_button')[0]
paginator_button.addEventListener('click', (e) => {
    alert('아직 구현되지 않았어요')
})