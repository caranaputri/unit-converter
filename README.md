# ⚖️ The "Oops, I Only Know One System" Unit Converter

Hey there! Welcome to **my** Metrics/Imperial Unit Converter. 🧙‍♂️✨

Let's be real: trying to figure out how tall you are in feet to fill out an internet form, or figuring out how much a "gallon" of milk actually is can give anyone a headache. I built this handy little web app to solve that exact problem using the holy trinity of the internet: **HTML, CSS, and JavaScript**.

As a [Scrimba student](https://scrimba.com/){target="blank"}, I'm currently diving deep into learning JavaScript, I built this project to be clean, simple, and—most importantly—easy to read. No scary, over-complicated frameworks here; just pure, honest code!

---

## 🔥 Features I Built Into This

* **The Holy Trinity of Conversion:** I didn't want to overwhelm the screen with 400 different units, so I focused on the big three that matter:
  * 📏 **Length:** Meters ⇄ Feet *(For when you need to know how tall you look on paper).*
  * 🧪 **Volume:** Liters ⇄ Gallons *(For when you're trying to drink enough water to stay alive).*
  * 🏋️‍♂️ **Mass:** Kilograms ⇄ Pounds *(For staring at gym equipment in confusion).*
* **The "Convert" Button:** A dedicated button to make the magic happen. No frantic, accidental mid-typing calculations. You type, you click, you get answers. 
* **The "Clear" Button:** Messed up the numbers? Smash this button to instantly wipe the slate clean. It’s like the mistake never even happened. Excellent for keeping the UI tidy!
* **The Anti-Alphabet Shield 🛡️:** Go ahead, try typing the letter "A" or "Z" into the input box. Spoiler: *You can't.* I locked it down so only glorious numbers (and decimals) can pass through. No `NaN` (Not a Number) tragedies in my codebase!
* **Themed Mood Swings (Theme Switcher):** Toggle between Light Mode (for when the sun is actually awake) and Dark Mode (for those 2 AM coding sessions when my eyeballs are literally begging for mercy).

---

## 🛠️ How I Built It

* **HTML5** - Providing the structural bones, the inputs, and the buttons.
* **CSS3** - Making it look pretty and handling the smooth transition between light and dark modes.
* **JavaScript 🧠** - The actual brains of the operation. It handles the math, listens for button clicks, and updates the screen instantly without forcing a page refresh.

---

## 🚀 LIVE PREVIEW



---

## 💡 Code Concepts I Tracked in This Project

Since I'm practicing my JavaScript, here are the core concepts I successfully implemented in the `script.js` file:

* **`addEventListener('click', ...)`**: How the Convert, Clear, and Theme buttons wait around for the user to do something, like loyal digital golden retrievers.
* **Input Restrictions**: Using HTML input attributes to kick letters straight to the curb so the math functions don't explode.
* **DOM Manipulation**: Using `document.getElementById()` to grab an element and change its text on the fly using `.innerText` or `.value`. It's like mind control, but for markup.

---

## 🎨 Next Steps & Future Upgrades

To keep leveling up my coding skills, here are a few challenges I might tackle next in this project:
1. **Use @media rule** to adjust the interface for specific screen width.
2. **Make smooth toggle transition** as of now, the toggle button is to *bleh* with no animation to make it slide.

---

## 📝 License

This project is from [Scrimba](https://scrimba.com/){target="blank"} where you can learn interactively with the videos. Feel free to look through my code, give me feedback, or use it to inspire your own projects! 🚀
