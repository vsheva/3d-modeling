const tabs = () => {
    const tabPanel = document.querySelector(".service-header")
    const tabs = document.querySelectorAll(".service-header-tab ")
    const tabContent = document.querySelectorAll('.service-tab');


    tabPanel.addEventListener("click", (e) => {

        console.log("hello")
        if (e.target.classList.contains("service-header-tab")) {
            tabs.foreEach((elem, index) => {
                console.log(elem)
                console.log(index)
            });
        }
    });

}


export default tabs;
