//scoping 
//var scoping ->function scoped or global scoped
//let and const -> block scoped ->{}

var browsserVersion=1.1
{
    var browserName="Chrome"
    let browserVersion= 1.2
    const loadUrl="url"

    console.log("BrowserVersion : "+browserVersion)
    console.log("BrowserName : "+browserName)
    console.log("loadURL : "+loadUrl)

}

    //console.log("BrowserVersion : "+browserVersion) 
        console.log("BrowserName : "+browserName)
        //console.log("loadURL : "+loadUrl)//const