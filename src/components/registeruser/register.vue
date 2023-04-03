<template>
    <!-- <div  class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> -->
      <div>
        <section class="h-100 bg-danger">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                  <div class="card card-registration my-4">
                    <div class="row g-0">
                      <div class="col-xl-6 d-none d-xl-block">
                        <img src="https://images.pexels.com/photos/8837560/pexels-photo-8837560.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt="Sample photo" class="img-fluid"
                          style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                      </div>
                      <div class="col-xl-6">
                        <div class="card-body p-md-5 text-black">
                          <h3 class="mb-5 text-uppercase font-weight-bold font-italic"><i><b class="text-danger">Payhouse User Registration</b></i></h3>
          
                          <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1m">First name</label>
                                <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                                
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1n">Last name</label>
                                <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                                
                              </div>
                            </div>
                          </div>
          
                          <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1m1">Salutation</label>
                                <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                                
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1n1">Email</label>
                                <input type="email" id="form3Example1n1" class="form-control form-control-lg" />
                               
                              </div>
                            </div>
                          </div>
          
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example8">Phone Number</label>
                            <input type="tel" id="form3Example8" class="form-control form-control-lg" />
                           
                          </div>
          
                          <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
          
                            <h6 class="mb-0 me-4">Gender: </h6>
          
                            <div class="form-check form-check-inline mb-0 me-4">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="option1" />
                              <label class="form-check-label" for="femaleGender">Female</label>
                            </div>
          
                            <div class="form-check form-check-inline mb-0 me-4">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="option2" />
                              <label class="form-check-label" for="maleGender">Male</label>
                            </div>
          
                            <div class="form-check form-check-inline mb-0">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="option3" />
                              <label class="form-check-label" for="otherGender">Other</label>
                            </div>
          
                          </div>
          
                          <div class="row">
                            <div class="col-md-6 mb-4">
          
                              <select class="select form-select">
                                <option value="1">Branch </option>
                                <option value="2">Kisumu</option>
                                <option value="3">Nairobi </option>
                                <option value="4">Mombasa </option>
                              </select>
          
                            </div>
                            <div class="col-md-6 mb-4">
          
                              <select class="select form-select ">
                                <option value="1">Area</option>
                                <option value="2">Kamkunji</option>
                                <option value="3">Mathare</option>
                                <option value="4">CBD</option>
                              </select>
          
                            </div>
                          </div>
          
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example9">Date Of birth</label>
                            <input type="Date" id="form3Example9" class="form-control form-control-lg" />
                           
                          </div>
          
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example90">Secondary Phone</label>
                            <input type="text" id="form3Example90" class="form-control form-control-lg" />
                            
                          </div>
          
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example99">Course</label>
                            <input type="text" id="form3Example99" class="form-control form-control-lg" />
                            
                          </div>
          
          
                          <div class="d-flex justify-content-end pt-3">
                            <div class="container  btn-btn-warning">  <button type="button" class="btn btn-warning btn-lg">Reset all</button></div>
                            <div class="container">
                            <button type="button" class="btn btn-primary btn-lg ms-2">Submit form</button>
                            </div>
                          </div>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    </div>
</template>

<script>
    export default {
        name:"registerusersPage"
        
    }
</script>

<style lang="scss" scoped>

</style>