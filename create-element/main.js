const body = document.querySelector("body");

const article = document.createElement("artice")
    article.id = "messages"
    body.appendChild(article)

const messages = document.querySelector("#messages");

const message1 = document.createElement("section")
    message1.className = "message"
    message1.textContent = "Are we doing fireworks this year?"
    article.appendChild(message1)

const message2 = document.createElement("section")
    message2.className = "message"
    message2.textContent = "After last year's tree incident, should we?"
    article.appendChild(message2)

const message3 = document.createElement("section")
    message3.className = "message"
    message3.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire."
    article.appendChild(message3)

const message4 = document.createElement("section")
    message4.className = "message"
    message4.textContent = "We can set them off in the street."
    article.appendChild(message4)

const message5 = document.createElement("section")
    message5.className = "message"
    message5.textContent = "Our neighbors' houses are flammable, too"
    article.appendChild(message5)

