const blagues = new BlaguesAPI(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjAyODI0MzE3MzM5Njk3MTgyIiwibGltaXQiOjEwMCwia2V5IjoiNkdIVUNRa2ZVa1doeEU0NzRhM3BaUFBWa0gyVDkzQWtTU3JvYk5ySElONkFQVDRHNzMiLCJjcmVhdGVkX2F0IjoiMjAyNC0wMS0xOVQxNTo1MzowMCswMDowMCIsImlhdCI6MTcwNTY3OTU4MH0.1N9ikbnikK2j5jvFj9iEF8PCTACHftSzXTWryMacWxc"
);

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const title = document.querySelector("h2");
const button = document.querySelector("button");

const generateJoke = async () => {
    button.textContent = "Chargement en cours ...";
    const blague = await blagues.random({
        disallow: [
          blagues.categories.DARK,
          blagues.categories.LIMIT
        ]
    });
    question.textContent = blague.joke;
    answer.textContent = blague.answer;
    title.textContent = blague.type;
    button.textContent = "Générer une nouvelle blague";
};

generateJoke();
button.addEventListener("click", generateJoke);