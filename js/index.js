//access-token
const token = "2401409539991540";
//base url
const Url = `https://www.superheroapi.com/api.php/${token}`
//search input bar
const search = document.getElementById('search');
//container which contains the search results
const searchResult = document.getElementById('search-results');
//favourites list
const favourites = 'favourites';
let favouritesList = localStorage.getItem(favourites)?JSON.parse(localStorage.getItem(favourites)):[];
//Option from navbar i.e. home or favourites
let option = 0;
//list of the search items i.e. api response list
let searchList = [];

//function for handling the search 
const handleSearch = async (e) => {
    try{

        //default value
        let searchItem = "a";
        //If value in search bar changes
        if(e){
            searchItem = e.target.value;
        }
        //fetching the data from an api
        const response = await fetch(`${Url}/search/${searchItem}`);
        const data = await response.json();
        //if success
        if(data.response){
            searchList = data.results;
        }else{
            searchList = [];
        }
        renderSearchResults();

    }catch{
        console.log('no result found !!!!!');
    }
}

//function for rendering the search results 
const renderSearchResults = () => {

    //first empty the container contains the search results
    searchResult.innerHTML='';

    let list = searchList;
    //if option choose from navbar is favourites then list contains favourites list otherwise search list
    list = option == 1 && ( !list || list.length==0) ? favouritesList : list;
    //creating the card and append to search results container
    list.forEach(function(hero){
        //hero is present in favourites list or not
        let index = favouritesList.findIndex(favourite => favourite.id == hero.id);
        let li = document.createElement('li');
        li.innerHTML = `
                    <div class="card m-2" style="max-width: 310px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src=${hero.image.url} class="img-fluid rounded-start h-100" alt=${hero.name}>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">
                                    <a class="text-decoration-none" href="/views/superhero.html?id=${hero.id}" target="_blank">${hero.name}</a>
                                </h5>
                                <p class="card-text">${hero.biography.publisher}</p>
                                ${index === -1 ? (
                                    `<button class="btn btn-outline-primary" data-id=${hero.id} type="button">Add To Favourite</button>`
                                ) : (
                                    `<button class="btn btn-outline-danger" data-id=${hero.id} type="button">Remove Favourite</button>`
                                )}
                                </div>
                            </div>
                        </div>
                    </div>`;

        searchResult.append(li);
    });
}

//function for handling click
const handleClick = (e) => {

    //collect the class list of the element
    const classList = e.target.classList; 

    //collect the id associate with the element
    const id = e.target.dataset.id;
    let value = e.target.dataset.option;
    
    if(classList.contains('btn-outline-primary')){
        //add hero in the favourite list
        addToFavourite(id);

    }else if(classList.contains('btn-outline-danger')){

        //removing hero from the favourite list
        removeFromFavourite(id);

    }else if(classList.contains('nav-link')){
        
        //if nav bar options is change
        changeNavBarOption(value);

    }    
}

//function for adding the element in the favourite list
const addToFavourite = (id) => {
    if(!id){
        return;
    }

    let clickedHero = searchList.filter(hero => {
        return hero.id === id;
    })
    favouritesList.push(clickedHero[0]);
    localStorage.setItem(favourites,JSON.stringify(favouritesList));
    renderSearchResults();

}

//function for removing the element from the favourite list
const removeFromFavourite = (id) => {
    if(!id){
        return;
    }

    let updatedList = favouritesList.filter(hero => {
        return hero.id !== id;
    });
    favouritesList = updatedList;
    localStorage.setItem(favourites,JSON.stringify(favouritesList));
    renderSearchResults();
}

//function for handling the change in the navbar
const changeNavBarOption = (value) => {
    search.value = '';
    searchList = [];
    option = value;
    renderSearchResults();
}

//Adding Event listener on the search bar when key is up
search.addEventListener('keyup',handleSearch);
//Adding Event listener for the click on the document
document.addEventListener('click',handleClick);
//Initialize list with default value i.e a
handleSearch();