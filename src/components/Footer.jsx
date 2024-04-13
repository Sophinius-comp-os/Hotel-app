function Footer(){
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: 'rem 0',
        textAlign: 'center',
        margin:'0px',
        width:'100%',
      };
    
      const containerStyle = {
       // maxWidth: '1200px',
        margin: '0 auto',
      };
      const textStyle = {
        fontSize: '16px',
        marginBottom:'0px',
        color:'white',
      };
      const icon={
        backgroundColor:'orange',
      }
      const follow={
        padding:'50px',
        color:'orange',
        textAlign:'center',
      };
      
return(
    <>
    <footer style={footerStyle}>
    <div style={containerStyle}>

    <a href="#"><box-icon name='home-alt-2' class="menus"></box-icon>Home</a><br/>
    <a href="#"><box-icon name='info-circle' class="menus"></box-icon>About</a><br/>
    <a href="#"><box-icon name='phone-call'class="menus" ></box-icon>Contact</a><br/>
    <a href="#"><box-icon name='color-fill' class="menus"></box-icon>Login portal</a><br/>
    <div class="row foots" style={follow}>
    
    <p ></p>
    
    <div class="col-sm-3"> <box-icon name='whatsapp' type='logo' ></box-icon></div>
    <div class="col-sm-3"> <box-icon type='logo' name='facebook-circle'></box-icon></div>
    <div class="col-sm-3"><box-icon name='twitter' type='logo' ></box-icon></div>
    <div class="col-sm-3"><box-icon name='instagram' type='logo' ></box-icon></div>
    </div>
    
    
      <p style={textStyle}>©copywrite 2023 #thirusecondaryschool@gmail.com</p>
    </div>
    </footer>
    </>
    
    
)
}
export default Footer