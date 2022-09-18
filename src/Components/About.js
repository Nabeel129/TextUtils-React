import React from 'react'

function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '.25px solid black'
    // })
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '.25px solid black'
    //         });
    //         setbtnText("Enable Dark Mode");
    //         document.body.style.backgroundColor = 'white';
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '.25px solid white'
    //         });
    //         setbtnText("Enable Light Mode");
    //         document.body.style.backgroundColor = '#212529';
    //     }
    // }
    return (
        <>
            <div className="container my-3" style={props.myStyle}>
                <div className="container d-flex justify-content-between">
                    <h2>About Us</h2>
                    {/* <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
                    </div> */}
                </div>
                <div className="accordion" style={props.myStyle} id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button style={props.myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div style={props.myStyle} id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={props.myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={props.myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div style={props.myStyle} className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button style={props.myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div style={props.myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <p> </p>
            </div>
        </>
    )
}

export default About
