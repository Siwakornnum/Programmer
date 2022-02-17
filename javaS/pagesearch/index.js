
// function changeColor()
// {
//     // alert("Change Color Function...")
//     let tcolor = document.querySelector('#textColor').value
//     let bcolor = document.querySelector('#tbackColor').value
//     let bbcolor = document.querySelector('#backgColor').value
//     // alert(tcolor)
//     // alert(bcolor)
//     document.querySelector('h2').style.color = tcolor
//     document.querySelector('h2').style.backgroundColor = bcolor
//     document.querySelector('body').style.backgroundColor = bbcolor
// }

function fIndexOf()
{
    let tIndexOf = document.querySelector('#textIndexOf').value
    let i = 0;
    let p = 0;
    let dataText = "เป็นสโมสรฟุตบอลอาชีพที่ตั้งอยู่ในเขตฟูลัม, ลอนดอน ซึ่งเล่นอยู่ในพรีเมียร์ลีก ลีกสูงสุดของฟุตบอลอังกฤษ ก่อตั้งขึ้นใน ค.ศ. 1905 มีสนามเหย้าคือสแตมฟอร์ดบริดจ์ เชลซีเป็นหนึ่งในสโมสรที่ประสบความสำเร็จมากที่สุดของอังกฤษ โดยชนะเลิศการแข่งขันมากกว่า 30 รายการ รวมทั้งชนะเลิศลีกสูงสุด 6 สมัย[6] และชนะเลิศถ้วยยุโรป 8 รายการ[7]เชลซีชนะเลิศฟุตบอลดิวิชั่นหนึ่งสมัยแรกใน ค.ศ. 1955, ชนะเลิศเอฟเอคัพสมัยแรกใน ค.ศ. 1970 และชนะเลิศถ้วยยุโรปครั้งแรกในรายการยูฟ่าคัพวินเนอร์สคัพ ค.ศ. 1971 ต่อมา สโมสรเข้าสู่ยุคตกต่ำในช่วงปลายทศวรรษ 1970–80 ก่อนจะกลับมาทำผลงานโดดเด่นได้อีกครั้งในช่วงทศวรรษ 90 โดยประสบความสำเร็จในฟุตบอลถ้วยหลายรายการ และตลอดสองทศวรรษที่ผ่านมา(ค.ศ. 2000–20) ถือเป็นยุคทองของสโมสร[8] พวกเขาชนะเลิศพรีเมียร์ลีก 5 สมัย, ยูฟ่าแชมเปียนส์ลีก 2 สมัย และ ยูโรปาลีก 2 สมัยได้ในช่วงเวลานี้ เชลซีเป็นหนึ่งในห้าสโมสรที่ชนะเลิศการแข่งขันรายการหลักของยูฟ่าครบสามรายการ[9](ยูฟ่าแชมเปียนส์ลีก, ยูโรปาลีก และ ยูฟ่าคัพวินเนอร์สคัพ) รวมทั้งเป็นสโมสรเดียวที่ชนะเลิศการแข่งขันสามรายการดังกล่าวได้สองสมัยในแต่ละรายการ และยังเป็นสโมสรเดียวในลอนดอนที่ชนะเลิศยูฟ่าแชมเปียนส์ลีก"
    while (true) {
        i = dataText.indexOf(tIndexOf, i);
        if (i < 0) {
            break
        }
        console.log(i);
        i++
        p++
    }
    console.log(`${p}`)
    document.querySelector('#show').innerText = `มีข้อความ ${tIndexOf} => ${p} ข้อความ `
}

function fStartWith()
{
    let tStartWith = document.querySelector('#textStartWith').value
    let dataText = "เป็นสโมสรฟุตบอลอาชีพที่ตั้งอยู่ในเขตฟูลัม, ลอนดอน ซึ่งเล่นอยู่ในพรีเมียร์ลีก ลีกสูงสุดของฟุตบอลอังกฤษ ก่อตั้งขึ้นใน ค.ศ. 1905 มีสนามเหย้าคือสแตมฟอร์ดบริดจ์ เชลซีเป็นหนึ่งในสโมสรที่ประสบความสำเร็จมากที่สุดของอังกฤษ โดยชนะเลิศการแข่งขันมากกว่า 30 รายการ รวมทั้งชนะเลิศลีกสูงสุด 6 สมัย[6] และชนะเลิศถ้วยยุโรป 8 รายการ[7]เชลซีชนะเลิศฟุตบอลดิวิชั่นหนึ่งสมัยแรกใน ค.ศ. 1955, ชนะเลิศเอฟเอคัพสมัยแรกใน ค.ศ. 1970 และชนะเลิศถ้วยยุโรปครั้งแรกในรายการยูฟ่าคัพวินเนอร์สคัพ ค.ศ. 1971 ต่อมา สโมสรเข้าสู่ยุคตกต่ำในช่วงปลายทศวรรษ 1970–80 ก่อนจะกลับมาทำผลงานโดดเด่นได้อีกครั้งในช่วงทศวรรษ 90 โดยประสบความสำเร็จในฟุตบอลถ้วยหลายรายการ และตลอดสองทศวรรษที่ผ่านมา(ค.ศ. 2000–20) ถือเป็นยุคทองของสโมสร[8] พวกเขาชนะเลิศพรีเมียร์ลีก 5 สมัย, ยูฟ่าแชมเปียนส์ลีก 2 สมัย และ ยูโรปาลีก 2 สมัยได้ในช่วงเวลานี้ เชลซีเป็นหนึ่งในห้าสโมสรที่ชนะเลิศการแข่งขันรายการหลักของยูฟ่าครบสามรายการ[9](ยูฟ่าแชมเปียนส์ลีก, ยูโรปาลีก และ ยูฟ่าคัพวินเนอร์สคัพ) รวมทั้งเป็นสโมสรเดียวที่ชนะเลิศการแข่งขันสามรายการดังกล่าวได้สองสมัยในแต่ละรายการ และยังเป็นสโมสรเดียวในลอนดอนที่ชนะเลิศยูฟ่าแชมเปียนส์ลีก"
    let show = dataText.startsWith(tStartWith)
    let check = (show === true) ? 'ถูกต้อง' : 'ผิด'
    document.querySelector('#show1').innerText = `ข้อความ ${check}`
}





let myarray = [
    { 'name': "N'Golo Kanté", 'No': '7', 'Nation': 'FRA' },
    { 'name': 'Romelu Lukaku', 'No': '9', 'Nation': 'BEL' },
    { 'name': 'Timo Werner', 'No': '11', 'Nation': 'GER' },
    { 'name': 'Kai Havertz', 'No': '29', 'Nation': 'GER' },
    { 'name': 'Reece James', 'No': '24', 'Nation': 'ENG' },
]

$(`#textsearh`).on(`keyup`, function ()
{
    let value = $(this).val()
    console.log('value', value)
    let data = searchTable(value, myarray)
    fArray(data)
})


fArray(myarray)

function searchTable(value, data)
{
    let filterData = []
    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        let name = data[i].name.toLowerCase()

        if (name.includes(value)) {
            filterData.push(data[i])
        }
    }

    return filterData
}

function fArray(data)
{
    let table = document.getElementById('myTableArray')

    table.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].No}</td>
                        <td>${data[i].Nation}</td>
                  </tr>`
        table.innerHTML += row
    }

}

// function fArrayFind()
// {
//     let tfind = document.querySelector('#textFind').value
//     let result = myarray.find(tfind)
//     document.querySelector('#show3').innerText = `ข้อความ ${result}`

// }