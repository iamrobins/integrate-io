const axios = require('axios');


function hashBuilder(article) {
  const devArticle = {
    "article": {
      "title": article.title,
      "published": false,
      "body_markdown": article.content,
    }
  };
}

module.exports = async function postToDev(article, token, platform) {

  const headers = {
    'Content-Type': 'application/json',
    'api-key': token,
  };
  

  const devArticle = {
    "article": {
      "title": article.title,
      "published": false,
      "body_markdown": article.content,
    }
  };

  try {

    let result = await axios.post(
      'https://dev.to/api/articles',
      devArticle,
      { headers },
    )
    console.log(result);
    return result;

  } catch (error) {
    console.log(error);
    
  }

}