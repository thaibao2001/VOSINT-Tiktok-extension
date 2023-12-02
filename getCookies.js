chrome.cookies.getAll({},function(cookies) {
    console.log(cookies);
    var results = [];
    for(var i = 0; i < cookies.length; i++){
        let cookie = cookies[i];
        let name = cookie['name'];
        let value = cookie['value'];
        let domain = cookie['domain']; 
        let path = cookie['path'];
        let httpOnly = cookie['httpOnly'];
        let secure = cookie['secure'];
        let expires;
        if (cookie['session']) expires = -1;
        else if (cookie['expirationDate']) expires = cookie['expirationDate'];
        else expires = 0;
        let sameSite;
        if (cookie['sameSite'] === "no_restriction") sameSite = "None";
        else if (cookie['sameSite'] === "lax") sameSite = "Lax";
        else if (cookie['sameSite'] === "strict") sameSite = "Strict";
        else sameSite = "None";
        var result = {
            "name": name,
            "value": value,
            "domain": domain,
            "path": path,
            "httpOnly": httpOnly,
            "secure": secure,
            "expires": expires,
            "sameSite": sameSite
        }
        results.push(result); 
    }
    prompt('Cookies: ', JSON.stringify(results));
    var content_tag = document.getElementById('content');
    content_tag.innerText = JSON.stringify(results);
});

