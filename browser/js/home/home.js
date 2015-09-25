app.config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'js/home/home.html',
        controller: function ($scope, findTweets) {
          $scope.tweets = findTweets;
        },
        resolve: {
            findTweets: function (TweetFactory) {
                return TweetFactory.getAll()
                .then(function(tweets){
                  return tweets;
                });
            }
        }
	});
});
