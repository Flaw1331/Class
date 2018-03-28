
d3.json('data/tweets.json', createSpreadsheet);

function createSpreadsheet(data) {
  let tweetData = data.tweets;
  let keyValues = d3.keys(tweetData[0]);
  let values = d3.values(tweetData);
  console.log(values);
  console.log(keyValues);

  let parsedData = values.map(function (row) {
    let returnData = {};
    d3.keys(row).forEach(function (k) {
      if (k === 'content') {
        returnData[k] = 'a_tweet: ' + row[k];
      }
    });
    return returnData;
  });

  console.log(parsedData);

}
