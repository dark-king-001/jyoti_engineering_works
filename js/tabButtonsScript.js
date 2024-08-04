document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs li');
  let selectedElemet = tabs[0];
  selectedElemet.classList.add('active')
  document.querySelector("#" + selectedElemet.id.replace("Tab", "") + "Content").style.display = "flex"
  
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      if (event.target != selectedElemet){
        // Add active class to the clicked tab
        event.target.classList.add('active');
        document.querySelector("#" + event.target.id.replace("Tab", "") + "Content").style.display = "flex"

        // removing active from previously selected element
        selectedElemet.classList.remove('active')
        document.querySelector("#" + selectedElemet.id.replace("Tab", "") + "Content").style.display = "none"

        // appending tab to the previously selected element
        selectedElemet = event.target
      }
    });
  });
});