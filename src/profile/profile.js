import React from "react";
function Appl (props) {
    function HandleName(props){
           
           alert('Atig Fadi');
    
       }
    return (
      <div className="clearfix">
        <div className="row">
            <div className="col-md-4 animated fadeIn" >
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={props.imag}
                      className="card-img-top"
                      alt="kk"
                    />
                  </div>
                  <h5 className="card-title">
                  {props.name}
                  </h5>
                  <p className="card-text">
                  {props.bio}
                  <br/>
                  {props.profession}
                    <br />
                    <span className="phone">{props.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          
        </div>
        <button onClick={HandleName}>Button</button>

      </div>
      
    );
  }


export default Appl;