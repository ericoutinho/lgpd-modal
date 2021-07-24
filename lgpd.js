let lgpdUrl = "https://jsonplaceholder.typicode.com/posts";

let lgpdHtml = `
    <div class="lgpd">
        <div class="lgpd--left">
            Nosso site utiliza cookies para melhorar a experiência do usuário. <br>
            Para conferir detalhadamente os cookies utilizados acesse nossa <a href="#">política de privacidade</a>.
        </div>
        <div class="lgpd--right">
            <button>Ok</button>
        </div>
    </div>
    <link rel="stylesheet" href="./lgpd.css">
`

let lsContent = localStorage.getItem("lgpd");

if (!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector(".lgpd");
    let lgpdButton = lgpdArea.querySelector("button");

    lgpdButton.addEventListener("click", async () => {

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if (json.error !== '') {
            let id = "paçocas"
            localStorage.setItem("lgpd", id);
            lgpdArea.remove();
        }

    })

}