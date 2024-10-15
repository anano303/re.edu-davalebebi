// 1) Check if a string starts with an uppercase letter.
function startsWithUppercase(str) {
    return /^[A-Z]/.test(str);
}

console.log(startsWithUppercase("Hello")); // true
console.log(startsWithUppercase("hello")); // false



// 2) Test if a string is a valid date in DD/MM/YYYY format
function isValidDate(dateStr) {
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return datePattern.test(dateStr);
}

console.log(isValidDate("15/10/2023")); // true
console.log(isValidDate("32/13/2023")); // false

console.log(isValidDate("15/10/2023")); // true
console.log(isValidDate("32/13/2023")); // false

// 3) Validate a GE phone number in the format 598-12-34-56
function isValidPhoneNumber(phone) {
    const phonePattern = /^598-\d{2}-\d{2}-\d{2}$/;
    return phonePattern.test(phone);
}

console.log(isValidPhoneNumber("598-12-34-56")); // true
console.log(isValidPhoneNumber("598-123-45-67")); // false



// 4) Validate the emails that ends with @example.com 
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@example\.com$/;
    return emailPattern.test(email);
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("user@gmail.com")); // false



// 5) Save the random horoscop data like 10 into localstorage and when user enter the website, display different horoscop to difference day. like  first day first horoscop, second day second horoscop and etc.

const horoscopes = [
    "Horoscope 1", "Horoscope 2", "Horoscope 3", 
    "Horoscope 4", "Horoscope 5", "Horoscope 6", 
    "Horoscope 7", "Horoscope 8", "Horoscope 9", 
    "Horoscope 10"
];

function displayHoroscope() {
    const currentDay = new Date().getDate();
    const horoscopeIndex = (currentDay - 1) % horoscopes.length; // Cyclic display
    document.getElementById("horoscope").textContent = horoscopes[horoscopeIndex];
    localStorage.setItem("lastHoroscope", horoscopes[horoscopeIndex]);
}

window.onload = function() {
    displayHoroscope();
};

// 6) Make a form with three inputs name, email and phone number, when user try to enter each of this field you should save this info into localstorage. if you typing info and refresh the page, the info that you wrote should not be deleted.

window.onload = function() {
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("phone").value = localStorage.getItem("phone") || "";

    document.getElementById("name").oninput = function() {
        localStorage.setItem("name", this.value);
    };

    document.getElementById("email").oninput = function() {
        localStorage.setItem("email", this.value);
    };

    document.getElementById("phone").oninput = function() {
        localStorage.setItem("phone", this.value);
    };
};

// 7) Create a two button En Ka and the random text below, if you choose, en the random text should be translated into english, when you click ka it should be translated into georgian language. use localstorage to save this info. 

const textEn = "This is a random text in English.";
const textKa = "ეს არის შემთხვევითი ტექსტი ქართულად.";

function setLanguage(lang) {
    if (lang === 'en') {
        document.getElementById("randomText").textContent = textEn;
        localStorage.setItem("language", "en");
    } else if (lang === 'ka') {
        document.getElementById("randomText").textContent = textKa;
        localStorage.setItem("language", "ka");
    }
}

window.onload = function() {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        setLanguage("en"); 
    }
};

document.getElementById("enBtn").onclick = function() {
    setLanguage('en');
};

document.getElementById("kaBtn").onclick = function() {
    setLanguage('ka');
};
