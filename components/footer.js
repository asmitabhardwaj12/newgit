class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `



<footer>
    <div class="container">
    <div class="foot">
<div class="col-sm-4 left">
<a href=""><img src="images/logo.png"></a>
<p>Follow on social</p>
<a href=""><i class="fa-brands fa-facebook"></i></a><a href=""><i class="fa-brands fa-instagram"></i></a>
</div>
<div class="col-sm-4 center">
    <ul>
        <li><a href=""> Our Services</a></li>
        <li><a href=""> Shipping</a></li>
        <li><a href=""> FAQ</a></li>
        <li> <a href=""> Contact</a></li>
    </ul>
    
</div>
<div class="col-sm-4 right">
    <ul>
        <li class="kop">Boarding & Day care</li>
        <li><span>(616)-459-8622</span></li>
        <li><p>2125  Howard Street ,Grand Rapids, MI  Michigan</p></li>
        
    </ul>
</div>
</div>


</div>
<div class="lower"> <hr> © all rights reserved &  design  with love by bharat</div>

</footer>

     
      `;
  }
}

customElements.define('footer-component', Footer);