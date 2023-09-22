document.addEventListener("DOMContentLoaded",function(){
    //for button
    const button=document.getElementById("getTabTitle");
    //we'wll display tab title
    const tabTitleElement=document.getElementById("tabTitle");
    //click event listener to button
    button.addEventListener("click",function(){
        //using chrome.tabs API to get current tab title
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            const tabTitle=tabs[0].title;
            //display title
            tabTitleElement.textContent=tabTitle;
        });
    });
});