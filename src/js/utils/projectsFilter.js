function filter(value){
    const workCard = document.querySelectorAll('.workCard');
    workCard.forEach(item =>{
        let tags = item.dataset.tags;
        if(value == "All"){
            item.classList.remove('d-none'); 
        }else if(value != "All" && value != tags){
            item.classList.add('d-none');
        }else if(value != "All" && value == tags){
            item.classList.remove('d-none');
        }
    })
};
function getButtonsValues(){
    document.querySelectorAll('.filter-button').forEach(item => {
        let value = item.dataset.filter;
        item.addEventListener('click', function(){
            filter(value);
        });
    });
};