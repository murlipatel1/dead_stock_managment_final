import React from "react";
import '../Assets/Blogs.css'

function Blogs() {
    return (
      <div className="Parent">
  
              <div className="child1">
                    <div className="title">
                      <div>We are Creative & </div>
                      <p>Innovative<strong id="hero-text">This webstie will help you to manage your stocks</strong></p>
                    </div>
              </div>
  
              
              
              <div className="child2">
                  <div className="text">
                      <div><main>Your online Manager</main></div>
                      <div id="blog-text">Lorem Ipsum is simply dummy text of the printing and 
                           and scrambled it to make a type specimen book
                           typesetting industry. Lorem Ipsum has been the industry's 
                           standard dummy text eto make a type specimen book.
                      </div>
                  </div>
                  <div className="image">
                      <img src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg" alt="" />
                  </div>
               </div>
              <div className="child3">
                  <div className="column">
                      <div className="col">
                      <h5>Mission</h5>
                          <div className="inner-text">
                          “ Our mission is to make people less stressed and better off financially. ”
                          </div>
                      </div>
                      <div className="col">
                          <h5>Vision</h5>
                          <div className="inner-text">
                          “ Manage It is a growing team with a bold vision: We want to automate your entire financial life. ”
                          </div>
                      </div>
                      <div className="col">
                      <h5>Values</h5>
                          <div className="inner-text">
                          “ Don't Say Nothing: Speak your mind. Challenge. Do it honestly, respectfully, and most of all constructively. ”
                          </div>
                          
                      </div>
                      
                  </div>
              </div>
      </div>
    )
  }
  
  export default Blogs;