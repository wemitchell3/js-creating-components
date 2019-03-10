const students = [{
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Practice 1

// const studentContainer = document.querySelector("#container")

// const studentComponentPass = (name, subject, info) => {
//     return `
//         <div class="student">
//             <h1 class="xx-large passing">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>
//     `
// }
// const studentComponentFail = (name, subject, info) => {
//     return `
//         <div class="student">
//             <h1 class="xx-large failing">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>
//     `
// }

// for (let i = 0; i < students.length; i++) {
//     if (students[i].score >= 60) {
//             studentContainer.innerHTML += studentComponentPass(
//                 students[i].name,
//                 students[i].subject,
//                 students[i].info,
//                 "passing"
//             )
//         } else {
//             studentContainer.innerHTML += studentComponentFail(
//                 students[i].name,
//                 students[i].subject,
//                 students[i].info,
//                 "failing"
//             )
//         }
//     }


// Practice 2

// const container = document.querySelector("#container")

// let studentComponent = (student) => {
//     if (student.score >= 60) {
//         return `<div class= "student">
//             <h1 class="xx-large passing">${student.name}</h1>
//             <section class="bordered dashed section--padded">${student.subject}</section>
//             <aside class="pushRight">${student.info}</aside>
//       </div>`
//     } else {
//         return `<div class= "student">
//             <h1 class="xx-large failing">${student.name}</h1>
//             <section class="bordered dashed section--padded">${student.subject}</section>
//             <aside class="pushRight">${student.info}</aside>
//       </div>`
//     }
// }

// for (const student of students) {
//     container.innerHTML += studentComponent(student)
// }


// Challenge: Composition of smaller components

// const container = document.querySelector("#container")

// const h1 = (status, content) => {
//     return `<h1 class="xx-large ${status}">${content}</h1>`
// }
// const section = (content) => {
//     return `<section class="bordered dashed section--padded">${content}</section>`
// }
// const aside = (content) => {
//     return `<aside class="pushRight">${content}</aside>`
// }
// status = ""
// const studentComponent = (student) => {
    
//     if (student.score >= 60) {
//         status = "passing"
//         return `<div class="student">
//         ${h1(status, student.name)}
//         ${section(student.subject)} 
//         ${aside(student.info)}
//         </div>`
//     }  else {
//         status = "failing"
//         return  `<div class="student">
//         ${h1(status, student.name)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//         </div>`
//     }
// }

// for (const student of students) {
//     container.innerHTML += studentComponent(student)
// }


// Challenge: Generic HTML Function

const container = document.querySelector("#container")

const element = (type,classValue,content) => {
    return `<${type} class="${classValue}">${content}</${type}>`
}

const studentComponent = (student) => {
    
    if (student.score >= 60) {
        return `<div class="student">
        ${element("h1", "xx-large passing", student.name)}
        ${element("section", "bordered dashed section--padded", student.subject)} 
        ${element("aside", "pushRight", student.info)}
        </div>`
    }  else {
        return `<div class="student">
        ${element("h1", "xx-large failing", student.name)}
        ${element("section", "bordered dashed section--padded", student.subject)} 
        ${element("aside", "pushRight", student.info)}
        </div>`
    }
}

for (const student of students) {
    container.innerHTML += studentComponent(student)
}