let API = "https://api.rss2json.com/v1/api.json?rss_url=";
let userFeedURLs = ["https://rss.app/feeds/6LvpdxI5eZKPv2DD.xml"];
userFeedURLs.forEach(userUrl => {
    $.ajax({
        type: 'GET',
        url: API + userUrl,
        dataType: 'jsonp',
        success: function (data) {
            data.items.forEach(item => {
                var content = document.getElementById('content');

                var newItem = `
                    <div class="card text-white bg-dark mb-3" data-bs-theme="dark">
                        <div class="card-header">
                            <a href="${item.link}" class="text-decoration-none text-reset">
                                <h5 class="card-title">${item.title}</h5>
                            </a>
                            <h6 class="card-subtitle mb-2 text-muted">from ${data.feed.title}</h6>
                        </div>
                        <div class="card-body">
                            ${item.author != "" ? `<h6 class="card-subtitle mb-2 text-muted">By ${item.author}</h6>` : ""}
                            <h6 class="card-subtitle mb-2 text-muted">Published Date: ${item.pubDate}</h6>
                            <p class="card-text">${item.description}</p>
                        </div>
                    </div>`;

                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
});