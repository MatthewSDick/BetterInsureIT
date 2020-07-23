import React, { useState } from 'react'
import bootstrap from 'bootstrap'

const SubPlanContent = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        assumenda quis deserunt voluptas tenetur et quia suscipit placeat
        obcaecati, fugit accusantium consequatur culpa minima dignissimos sit
        nihil ex dolor laboriosam?
      </p>
      <div class="container py-3">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="accordion" id="faqExample">
              <div class="card">
                <div class="card-header p-2" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Q: What is a quality life insurance policy??
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#faqExample"
                >
                  <div class="card-body">
                    <b>Answer:</b> Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Repellat, in. Eos animi eum tempora
                    quisquam reiciendis nesciunt tenetur ipsum labore.
                    Reiciendis, optio et! Enim ut iste sapiente beatae ratione
                    mollitia.
                  </div>
                </div>
                <div class="card-header p-2" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Q: Life Insurance FAQs
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#faqExample"
                >
                  <div class="card-body">
                    <b>Answer:</b> Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Repellat, in. Eos animi eum tempora
                    quisquam reiciendis nesciunt tenetur ipsum labore.
                    Reiciendis, optio et! Enim ut iste sapiente beatae ratione
                    mollitia.
                  </div>
                </div>
                <div class="card-header p-2" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Q: Life Insurance Terms and Conditions
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#faqExample"
                >
                  <div class="card-body">
                    <b>Answer:</b> Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Repellat, in. Eos animi eum tempora
                    quisquam reiciendis nesciunt tenetur ipsum labore.
                    Reiciendis, optio et! Enim ut iste sapiente beatae ratione
                    mollitia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubPlanContent
