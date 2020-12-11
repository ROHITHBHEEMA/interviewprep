import React from "react";
import './Footer.css';
import { MDBContainer,  MDBFooter } from "mdbreact";



function Footer() {
    return (
        <div className="colu">
        <MDBFooter  className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                <h5 className="title">Interview Prep</h5>
                    <p>
                    Maintained by Neuromancers society IITBhubaneswar
                    </p>
                &copy; {new Date().getFullYear()} Copyright: Web & Design society IITBhubaneswar
                </MDBContainer>
            </div>
            </MDBFooter>
      </div>
    )
}

export default Footer


// Function Footer(){
//   return (
//       <div className="colu">
//         <MDBFooter  className="font-small pt-4 mt-4">
//             <div className="footer-copyright text-center py-3">
//                 <MDBContainer fluid>
//                 <h5 className="title">Interview Prep</h5>
//                     <p>
//                     Maintained by Neuromancers society IITBhubaneswar
//                     </p>
//                 &copy; {new Date().getFullYear()} Copyright: Web & Design society IITBhubaneswar
//                 </MDBContainer>
//             </div>
//             </MDBFooter>
//       </div>
    
//   );
// }

// export default FooterPage;