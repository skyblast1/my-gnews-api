'use strict'
const log = console.log;







const articleContainer = document.querySelector('.article-container');
const form = document.getElementById('form');

const myToken = '07e6fded0ab089a90360fb12d25e4dbd';

const testData = { "totalArticles": 330769, "articles": [{ "title": "First case of diphtheria detected in NSW this century", "description": "A case of diphtheria of the throat, a contagious and potentially deadly disease, has been confirmed in a two-year-old in northern NSW.", "content": "A case of diphtheria of the throat, a contagious and potentially deadly disease, has been confirmed in a two-year-old in northern NSW.\nIt is the first time the disease has been detected in NSW this century.\nThe child, who was not vaccinated, is curre... [321 chars]", "url": "https://www.smh.com.au/healthcare/first-case-of-diphtheria-detected-in-nsw-this-century-20220702-p5aylj.html", "image": "https://static.ffx.io/images/$zoom_0.2163%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_69/t_crop_custom/q_86%2Cf_auto/t_smh_no_label_no_age_social_wm/705bfdf7ed94e99d34df1b7185a06ba450c0680c", "publishedAt": "2022-07-02T12:18:06Z", "source": { "name": "Sydney Morning Herald", "url": "https://www.smh.com.au" } }, { "title": "Oneplus Nord 2T 5G With 80w Fast Charging, Dimensity 1300 Soc Launched In India: Price, Specifications", "description": "The OnePlus Nord 2T has been officially launched in India. The Nord 2T was launched back in May globally and now.", "content": "New Delhi: The OnePlus Nord 2T has been officially launched in India. The Nord 2T was launched back in May globally and now, the brand has been launched the same in India. The OnePlus Nord 2T 5G is an incremental upgrade over the last year’s mid-rang... [1720 chars]", "url": "https://pragativadi.com/oneplus-nord-2t-5g-with-80w-fast-charging-dimensity-1300-soc-launched-in-india-price-specifications/", "image": "https://pragativadi.com/wp-content/uploads/2022/07/onepluse.png", "publishedAt": "2022-07-02T12:04:59Z", "source": { "name": "Pragativadi", "url": "https://pragativadi.com" } }, { "title": "Hugo Speer has been sacked from The Full Monty reboot", "description": "Hugo Speer has been sacked from Disney's upcoming The Full Monty reboot series after allegations of \"inappropriate conduct\".", "content": "Hugo Speer has been sacked from Disney's upcoming The Full Monty reboot series after allegations of \"inappropriate conduct\".\nThe 53-year-old was due to reprise the role of Guy 25 years on from the release of the original film, which followed a group ... [1142 chars]", "url": "https://www.rte.ie/entertainment/2022/0702/1308072-hugo-speer-has-been-sacked-from-the-full-monty-reboot/", "image": "https://img.rasset.ie/001c006f-1600.jpg", "publishedAt": "2022-07-02T11:34:48Z", "source": { "name": "RTE.ie", "url": "https://www.rte.ie" } }, { "title": "5 safety tips for online payments that will save your money", "description": "Sometimes making online payments can cause you monetary losses, if you are not careful. Hence in order to avoid such situations here are 5 safety tips for online payments that you must always follow.", "content": "Sometimes making online payments can cause you monetary losses, if you are not careful. Hence in order to avoid such situations here are 5 safety tips for online payments that you must always follow.\nDoing online transactions has now become one of th... [1305 chars]", "url": "https://tech.hindustantimes.com/how-to/5-safety-tips-for-online-payments-that-will-save-your-money-71656761183412.html", "image": "https://images.hindustantimes.com/tech/img/2022/07/02/1600x900/E9J8PFmVoAAl9Um_1637412495778_1656761289283.jpg", "publishedAt": "2022-07-02T11:34:06Z", "source": { "name": "HT Tech", "url": "https://tech.hindustantimes.com" } }, { "title": "Texas Supreme Court blocks order that allowed abortions to resume", "description": "Texas Attorney General Ken Paxton has said he is committed to making the state “fully pro-life.”", "content": "Roe v. Wade and abortion access in America\nRoe v. Wade overturned: The Supreme Court has struck down Roe v. Wade, which for nearly 50 years has protected the right to abortion. Read the full decision here.\nWhat happens next?: The legality of abortion... [816 chars]", "url": "https://www.washingtonpost.com/nation/2022/07/02/texas-supreme-court-order-abortion/", "image": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YIHBZXXZKYI6ZAO3VQD2HFFINM.jpg&w=1440", "publishedAt": "2022-07-02T11:23:17Z", "source": { "name": "The Washington Post", "url": "https://www.washingtonpost.com" } }, { "title": "Wallabies full-back Tom Banks taken off in first-half of Optus Stadium test after horrible arm injury", "description": "Wallabies full-back Tom Banks has suffered a gruesome arm injury in an ugly incident in the early stages of their Optus Stadium test against England. WARNING: GRAPHIC", "content": "They lost Quade Cooper just minutes before the kick-off and now Wallabies full-back Tom Banks is out of the Optus Stadium test with a gruesome arm injury.\nBanks rose in pursuit of a high-ball, but was tunnelled by a pack and lost control in the air. ... [1836 chars]", "url": "https://www.perthnow.com.au/sport/rugby-union/wallabies-full-back-tom-banks-taken-off-in-first-half-of-optus-stadium-test-after-horrible-arm-injury-c-7382880", "image": "https://images.perthnow.com.au/publication/C-7382880/6ac3e0ef90d364c305105fd088650f585db7ca77-16x9-x0y482w2001h1126.jpg?imwidth=1200", "publishedAt": "2022-07-02T10:59:00Z", "source": { "name": "PerthNow", "url": "https://www.perthnow.com.au" } }, { "title": "Koffee With Karan trailer: Samantha blames Karan for ‘unhappy marriages’. Watch", "description": "Karan Johar has shared the first trailer for the upcoming seventh season of his hit chat show, Koffee With Karan. It features Alia Bhatt, Ranveer Singh, Samantha Ruth Prabhu, Akshay Kumar, Tiger Shroff, Sara Ali Khan, Janhvi Kapoor, and others. | Web Series", "content": "The first trailer for Koffee With Karan season 7 is out and it promises a ton of gossip and star power. Among those who will be seen taking the couch on the new season are Alia Bhatt with Ranveer Singh, Akshay Kumar with Samantha Ruth Prabhu, Anil Ka... [1508 chars]", "url": "https://www.hindustantimes.com/entertainment/web-series/koffee-with-karan-season-7-trailer-samantha-ruth-prabhu-blames-karan-johar-alia-bhatt-ranveer-singh-appear-101656758556778.html", "image": "https://images.hindustantimes.com/img/2022/07/02/1600x900/koffee_with_karan_trailer_1656758702512_1656758702674.jpg", "publishedAt": "2022-07-02T10:58:50Z", "source": { "name": "Hindustan Times", "url": "https://www.hindustantimes.com" } }, { "title": "July internationals: Clinical All Blacks power past Ireland in Auckland", "description": "New Zealand drew first blood in their three-Test series against Ireland when they sealed a deserved 42-19 win in Auckland on Saturday.", "content": "The All Blacks made a statement of intent when they clinched a 42-19 victory against Ireland in their July international at Eden Park in Auckland on Saturday.\nAs the scoreline suggests, New Zealand were deserved winners as they dominated proceedings ... [4467 chars]", "url": "https://www.planetrugby.com/july-internationals-clinical-all-blacks-power-past-ireland-in-auckland/", "image": "https://d3gbf3ykm8gp5c.cloudfront.net/content/uploads/2022/07/02101609/Jordie-Barrett-NZ-v-Ireland-2021-PA.jpg", "publishedAt": "2022-07-02T10:48:01Z", "source": { "name": "planetrugby.com", "url": "https://www.planetrugby.com" } }, { "title": "Fan reimagines Genshin Impact x Fortnite crossover and we can't move our eyes off it", "description": "A fan has reimagined Genshin Impact x Fortnite Battle Royale crossover with a new game mode called the \"Fortnite Battle Royale.\"", "content": "What would happen if the worlds of Genshin Impact and Fortnite collided? One fan decided to find out, reimagining a crossover between Genshin Impact x Fortnite that quickly went viral on Twitter and the results are truly amazing. What would it be lik... [2311 chars]", "url": "https://gamingonphone.com/culture/fan-reimagines-genshin-impact-x-fortnite-crossover/", "image": "https://gamingonphone.com/wp-content/uploads/2022/07/Genshin-Impact-Fortnite-collab-cover.jpg", "publishedAt": "2022-07-02T10:47:00Z", "source": { "name": "GamingonPhone", "url": "https://gamingonphone.com" } }, { "title": "Victorian MP Jane Garrett dies, aged 49", "description": "Former minister Jane Garrett has died from cancer, aged 49. A family statement said her breast cancer recently returned after some time in remission. The Victorian Government has offered a state funeral.", "content": "“We will remember Jane always for her contagious love of life and people; her intense compassion and the drive which made her a very fierce advocate for women and those most disadvantaged. Her intellect, wit, and generosity are irreplaceable, and her... [3337 chars]", "url": "https://www.theage.com.au/politics/victoria/victorian-mp-jane-garrett-dies-aged-49-20220702-p5aykk.html", "image": "https://static.ffx.io/images/$zoom_0.353%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_93/t_crop_custom/q_86%2Cf_auto/t_theage_no_label_no_age_social_wm/77846771bbe3439b31a44c91115cdb6fff0c27be", "publishedAt": "2022-07-02T10:42:12Z", "source": { "name": "The Age", "url": "https://www.theage.com.au" } }] };

/// отрисовка
function editContent(text) {
    /// ищем, где заканчивается подстрока и всё, что до нее, удаляем
    const newText = text.replace(text.slice(text.lastIndexOf('...') - text.length + 3), '');
    return newText;
}

// получение запроса из формы
function searchByQuery(event) {
    event.preventDefault();

    const string = form.querySelector('.query');
    const query = string.value.trim();
    
    getDataBySearch(query);
}
/////////////////////////////////

// отправка запроса к API и получение данных
const getDataBySearch = function (query) {

    // fetch(`https://gnews.io/api/v4/{endpoint}?token=07e6fded0ab089a90360fb12d25e4dbd`, {
    //     //mode: "no-cors"
    // });
    fetch(`https://gnews.io/api/v4/search?q=${query}&token=${123}`)
        .then(
            response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                response.json()
            }
            
        )
        .then(
            data => {
                displayBlockNews(data.articles);
                
            }
        ).catch(
            error => {
                displayErrorMessage(`Что-то пошло не так. ${error}`);
            }
        )
        .finally( () => displayBlockNews(testData.articles)
            //displayBlockNews(testData.articles)
        )
}
///////////////////////////////////////

// отрисовка html блока с данными
const displayBlockNews = function (data) {

    clear(articleContainer);

    for (const obj of data) {
        //const key = Object.keys(obj);
        //onsole.log()
        const content = editContent(obj.content);
        let htmlBlockArticle = `
        <div class="article">
                <h3 class="title">${obj.title}</h3>
                <div class="imageBlock"><img src="${obj.image}"></div>
                <p class="date">${obj.publishedAt}</p>
                <p class="description">${obj.description}</p>
                <p class="content">${content}</p>
                <a href="${obj.url}">Read more</a>
                
                
            </div>`;
        //console.log(htmlBlockArticle);

        articleContainer.insertAdjacentHTML('beforeend', htmlBlockArticle);
    }


}

// очистка DOM
function clear(elem) {
    log(elem.children);
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}
// отображение сообщения об ошибке
const displayErrorMessage = function(message) {
    articleContainer.insertAdjacentText('beforeend', message);
}

form.addEventListener('submit', () => searchByQuery(event));



