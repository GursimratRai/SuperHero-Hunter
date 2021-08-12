//access-token 
const token = "2401409539991540";
//base url
const Url = `https://www.superheroapi.com/api.php/${token}`
//container for superhero's information 
const container = document.getElementById('superhero-container');
//params from the url of the page
const URLParams = new URLSearchParams(window.location.search);
const searchId = URLParams.get('id');

//function for getting the superhero's information by the api request
const getInfo = async(id) => {
    try{
        const response = await fetch(`${Url}/${id}`);
        const data = await response.json();
        if(data.response){
           renderData(data);
        }
          
    }catch{
        console.log('error in fetching the data')
    }
}

//function for rendering the information 
const renderData = (hero) => {
    container.innerHTML = `
                <div class="container-fluid m-3">
                    <div class="row">
                        <div class="col-8">
                            <div class="row text-primary">
                                <h2>${hero.name}</h2>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <b class='text-secondary'>  Name :             </b><span>${hero.biography['full-name']}</span><br>
                                    <b class='text-secondary'>  Publisher :        </b><span>${hero.biography.publisher}</span><br>
                                    <b class='text-secondary'>  Base :             </b><span>${hero.work.base}</span><br>
                                    <b class='text-secondary'>  Place of Birth :   </b><span>${hero.biography["place-of-birth"]}</span><br>
                                    <b class='text-secondary'>  First Appearance : </b><span>${hero.biography["first-appearence"]}</span><br>
                                    <b class='text-secondary'>  Occupation :       </b><span>${hero.work.occupation}</span><br>            
                                </div>
                                <div class="col">
                  
                                   <span>Intelligence : </span>
                                    <div class="progress" style='height:10px'>
                                        <div class="progress-bar" role="progressbar" style="width: ${hero.powerstats.intelligence}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                     
                                    <span>Strength : </span>
                                    <div class="progress" style='height:10px'>
                                        <div class="progress-bar bg-success" role="progressbar" style="width: ${hero.powerstats.strength}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                     
                                    <span>Speed : </span>
                                    <div class="progress" style='height:10px'>
                                        <div class="progress-bar bg-info" role="progressbar" style="width: ${hero.powerstats.speed}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                     
                                    <span>Durability : </span>
                                    <div class="progress" style='height:10px'>
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: ${hero.powerstats.durability}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                     
                                    <span>Power : </span>
                                    <div class="progress" style='height:10px'>
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: ${hero.powerstats.power}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                     
                                    <span>Comat : </span>
                                    <div class="progress" style='height:10px'>
                                        <div class="progress-bar bg-secondary" role="progressbar" style="width: ${hero.powerstats.comat}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class='row mt-5'>
                     
                               <h5>  Connections  </h5>
                     
                                <b class='text-secondary'>  Group Affiliation  </b>
                                <span>${hero.connections["group-affiliation"]}</span>
                               
                                <b class='text-secondary'>  Relatives </b>
                                <span>${hero.connections.relatives}</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src=${hero.image.url} class="img-fluid rounded-start h-100" alt="Iron Man">
                        </div>
                    </div>
                </div>`
}

getInfo(searchId);