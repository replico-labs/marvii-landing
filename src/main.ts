import "./style.css"

// Light/dark toggle. With no saved choice the page follows the system setting.
const root = document.documentElement
const isDark = () => (root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark"

document.getElementById("theme")?.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark"
    root.dataset.theme = next
    try {
        localStorage.setItem("marvii.theme", next)
    } catch {
        // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
})
