function AddTbls(row, col, tb_DOM) {
    let count = 1
    for (let tr = 1; tr <= row; tr++) {
        const newTr = document.createElement('tr')
        for (let td = 1; td <= col; td++) {
            const newTd = document.createElement('td')
            newTd.innerHTML = `<div>${count}</div>`
            newTd.dataset.row = tr
            newTd.dataset.col = td
            newTd.onclick = trackClick
            newTr.appendChild(newTd)
            count++
        }
        tb_DOM.appendChild(newTr)
    }
}

let arrs = []

function trackClick(event) {
    const { row, col } = event.currentTarget.dataset
    const point = [row, col]

    if (arrs.length === 1 && (arrs[0][0] !== point[0] && arrs[0][1] !== point[1])) {
        reset()
        arrs = [point]
    } else if (arrs.length < 2) {
        arrs.push(point)
        if (arrs.length === 2) redColorLine()
    } else {
        reset()
        arrs = [point]
    }
}

function redColorLine() {
    if (arrs.length < 2) return

    let [[start1, end1], [start2, end2]] = arrs

    if (start1 === start2) {
        let [minStart, maxEnd] = [Math.min(end1, end2), Math.max(end1, end2)]
        document.querySelectorAll(`td[data-row="${start1}"]`).forEach(td => {
            let c = td.dataset.col
            if (c >= minStart && c <= maxEnd) td.classList.add('redline')
        })
    } else if (end1 === end2) {
        let [minStart2, maxEnd2] = [Math.min(start1, start2), Math.max(start1, start2)]
        document.querySelectorAll(`td[data-col="${end1}"]`).forEach(td => {
            let r = td.dataset.row
            if (r >= minStart2 && r <= maxEnd2) td.classList.add('redline')
        })
    } else {
        reset()
    }
}

function reset() {
    document.querySelectorAll('.redline').forEach(td => td.classList.remove('redline'))
}

const tableDOM = document.getElementById('tbls')
AddTbls(10, 10, tableDOM)
