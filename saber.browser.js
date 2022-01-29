// saber.browser.js
export default ({
                    setHead
                }) => {
    setHead({
        script: [{
            src: '/__/firebase/6.6.1/firebase-app.js',
            body: true
        },
            {
                src: '/__/firebase/init.js',
                body: true
            }
        ]
    })
}
