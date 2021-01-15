export class UI{
    constructor(){
        this.content=document.getElementById("content");
    }

    removeInnerHtml(){
        this.content="";
    }

    loadFirstPage(){
  
        this.content.innerHTML=` <div class="row d-flex  align-items-center  mt-5 ">
        <div class="col-md-6 text-center ">
            <h2>Best Sushi Restaurant in Town</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, unde! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Cum quam est harum eum perspiciatis porro repudiandae
                    necessitatibus, sequi molestiae reiciendis.</p>
        </div>
        <div class="col-md-6"><img class="img-fluid" src="/images/moreprodukty-rolly-sushi-ryba.jpg" alt=""></div>
    </div>
    <div class="row text-center mt-5 ">
        <div class="col-4">
            <i style="font-size: 5rem; color:rgb(217, 73,41);" class="far fa-heart"></i>
            <h5>Tasty and Beautiful Sushi</h1>
        </div>
        <div class="col-4">
            <i style="font-size: 5rem; color:rgb(217, 73,41);" class="fas fa-fish"></i>
            <h5>Delicious Sea Food</h2>
        </div>

        <div class="col-4"><i style="font-size: 5rem; color:rgb(217, 73,41);" class="far fa-smile"></i>
            <h5>Amazing Services</h5>
        </div>
    </div>  `

    }
    loadSecondPage(){
  
        this.content.innerHTML=` 
        <div class="row d-flex justify-content-center align-items-center text-center ">
        <div class="col-md-4 mt-2  mb-2">
            <div class="card" style="width: 18rem;">
                <img src="/images/sushi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Basic Sushi</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>

                </div>
            </div>
        </div>
        <div class="col-md-4 mt-2 mb-2">
            <div class="card" style="width: 18rem;">
                <img src="/images/sushitarihi-yemekveyasam-kapakverywell-fit.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>

                </div>
            </div>
        </div>
        <div class="col-md-4 mt-2  mb-2">
            <div class="card" style="width: 18rem;">
                <img src="/images/421676350-H.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>

                </div>
            </div>
        </div>
        <div class="col-md-4 mt-2  mb-2">
            <div class="card" style="width: 18rem;">
                <img src="/images/images.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>

                </div>
            </div>
        </div>
        <div class="col-md-4 mt-2  mb-2">
            <div class="card" style="width: 18rem;">
                <img src="/images/images-2.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>

                </div>
            </div>
        </div>
        <div class="col-md-4 mt-2  mb-2">
            <div class="card" style="width: 18rem;">
                <img src="/images/cook-and-keep-octopus-tender-2018813-3-73d93aab17194986aa1c8037eba0bcd1.jpg"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>

                </div>
            </div>
        </div>


    </div>
    
    `

    }
    loadThirdPage(){
        this.content.innerHTML=` <div class="row mt-5 text-center align-items-center">
        <div class="col-6"><iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103939.09451866196!2d139.6099323001369!3d35.50188697382901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japonya!5e0!3m2!1str!2str!4v1610567566505!5m2!1str!2str"
                width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe></div>
        <div class="col-6"><h2>Samurai Sushi</h2>
            <h5>Kawasaki street, Yokohoma TOKYO/JAPAN</h5>
            <h6>Phone Number:1111111111111</h6>
        </div>
    </div>`
    }
}