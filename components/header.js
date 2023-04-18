class Header extends HTMLElement {
  constructor() {
    super();
}
 connectedCallback() {
    this.innerHTML = `





 
<header>
            <div class="container">
                <div class="hed">
                    <div class="col-sm-4 logo">
                        <img src="images/logo.png" />
                    </div>
                    <div class="col-sm-4 option">
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="contactus.html">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-4 drop">
                      <ul>
                       <li class="lizt"> <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
<li class="lizt"><div class="dropdown img_dropdown">
  <a class="dropdown-toggle imgg_dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
   <img src="images/Mask Group.png">
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="myprofile.html"><i class="fa-regular fa-user"></i> Profile</a></li>
    <li><a class="dropdown-item" href="myorders.html"><i class="fa-solid fa-tag"></i> Order History</a></li>
    <li><a class="dropdown-item" href="notification.html"><i class="fa-regular fa-bell"></i> Notifications</a></li>
    <li><a class="dropdown-item" href="wishlist.html"><i class="fa-regular fa-heart"></i> Wishlist</a></li>
    <li><a class="dropdown-item" href="faq.html"><i class="fa-regular fa-circle-question"></i> Help</a></li>
        <li><a class="dropdown-item" href="terms.html"><i class="fa-regular fa-note-sticky"></i> Terms & Conditions </a></li><hr>
    <li><a class="dropdown-item" href="home.html"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a></li>

  </ul>
</div></li>
                           
                      <li class="lizt"><a href="cart.html"><button type="button" class="btn btn-dark cart"><img src="images/bag.png" /><span>CART</span></button></a</li>
                  </ul>
                    </div>
                </div>
            </div>
        </header>





  `;
}
  
}
customElements.define('header-component', Header);