let i = 0;
async function getNews(i) {
    const lang = document.getElementById("dropMenu").value;
    // document.getElementById("firstSlide").style.display="none";
    document.getElementById("post").style.display = "block";
    const preData = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_4f36cf04b0f84354b91a439637662f11&q=recent&language=${lang}`);
    const Data = await preData.json();
    console.log(Data);
    // const loadImg=Data.results[i].image_url;
    // const promise=new Promise((resolve, reject) => {
    //     if(loadImg.onload())
    //         resolve(document.getElementById("ImG").src=Data.results[i].image_url);
    //     else
    //      reject(document.getElementById("ImG").alt="Img Did not load")
    // });
    // await promise;
    document.getElementById("ImG").src = Data.results[i].image_url;
    document.getElementById("heading").innerText = Data.results[i].title;
    document.getElementById("span2").innerText = Data.results[i].source_id;
    document.getElementById("span1").innerText = Data.results[i].pubDate.slice(0, 10);
    document.getElementById("description").innerText = Data.results[i].description;
    document.getElementById("Link").href = Data.results[i].link;

}
// getNews();
const gen = document.getElementById("generate");
gen.addEventListener("click", function () {
    i = 0;
    getNews(i);
});
document.getElementById("next").addEventListener("click", nextNews)

function nextNews() {
    i = i + 1;
    getNews(i)
}