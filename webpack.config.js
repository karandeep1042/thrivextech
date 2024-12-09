module.exports = {
    resolve: {
        fallback: { stream: require.resolve("stream-browserify") },
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
            stream: require.resolve("stream-browserify"),
            "crypto": require.resolve("crypto-browserify")
        }
        // fallback : {stream: false}
    }
}