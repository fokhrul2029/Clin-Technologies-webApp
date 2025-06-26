function Action() {
  return (
    <section id="solutions-in-action" class="App">
      <section>
        <h2 class="section-title">See Our Solutions in Action</h2>
        <div class="section-content">
          <div class="comparison-container ">
            <div class="main-navigation">
              <div class="main-tab active">TranscriptX</div>
              <div class="main-tab ">Chartwright</div>
              <div class="main-tab ">Redactify</div>
              <div class="main-tab ">Validify</div>
            </div>
            <div class="comparison-toggle">Click to collapse comparison</div>
            <div class="sub-navigation active">
              <div class="sub-tab active">Example 1</div>
              <div class="sub-tab ">Example 2</div>
              <div class="sub-tab ">Example 3</div>
              <div class="sub-tab ">Example 4</div>
            </div>
            <div class="content-section active">
              <h3 class="example-title">
                Experience TranscriptX - Effortless, Accurate Medical
                Transcription
              </h3>
              <div
                class="slider-container active"
                style="--slider-position: 50%;"
              >
                <div class="text-panel panel-before">
                  <div class="panel-header header-before">
                    <span class="panel-title">Doctor's Dictation</span>
                    <span class="panel-date">Audio Input</span>
                  </div>
                  <div class="panel-content">
                    <h2 class="section-title">
                      Doctor's Dictation (Audio Input Simulation)
                    </h2>
                    <div class="section-content">
                      <p>
                        "Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen
                        today, October 26th, 2023. Chief complaint... uh...
                        right knee pain, ongoing for about 3 months, worse with
                        activity, especially stairs. Subjective: Patient
                        describes the pain as a dull ache, located medially.
                        Rates it a 6/10 currently, can go up to 8/10 after
                        exercise. Some morning stiffness, lasts maybe 15
                        minutes. No significant swelling reported, denies
                        locking or giving way. Uh... tried over-the-counter
                        Ibuprofen with some partial relief. No history of
                        trauma. Otherwise healthy. Objective: Gait is
                        non-antalgic. Right knee exam: No effusion visible. Mild
                        tenderness to palpation over the medial joint line.
                        McMurray's test is negative. Lachman and drawer tests
                        stable. Range of motion is full, though terminal flexion
                        elicits some discomfort medially. Assessment: Likely
                        medial compartment osteoarthritis of the right knee.
                        Differential includes medial meniscus tear, although
                        less likely given exam findings. Plan: Uh... Obtain
                        bilateral weight-bearing knee X-rays. Recommend
                        continued NSAID use as needed, consider switching to
                        Naproxen. Discussed physical therapy options for
                        strengthening quadriceps and hamstrings. Also
                        discussed... lifestyle modifications, weight management
                        if applicable... oh, patient's BMI is 24, so that's
                        fine. Follow up in 4 weeks with X-ray results to discuss
                        further management, possibly including corticosteroid
                        injection or referral to orthopedics if symptoms
                        persist. End dictation."
                      </p>
                    </div>
                  </div>
                </div>
                <div class="text-panel panel-after">
                  <div class="panel-header header-after">
                    <span class="panel-title">TranscriptX Note</span>
                    <span class="panel-date">AI-Generated Output</span>
                  </div>
                  <div class="panel-content">
                    <h2 class="section-title">
                      TranscriptX - AI-Generated Note
                    </h2>
                    <div class="section-content">
                      <p>Patient: Sarah Chen</p>
                      <p>DOB: 03/22/1978</p>
                      <p>Date of Service: October 26, 2023</p>
                      <h3>Chief Complaint:</h3>
                      <p>Right knee pain x 3 months.</p>
                      <h3>Subjective:</h3>
                      <p>
                        Patient reports right knee pain ongoing for
                        approximately 3 months, described as a dull ache located
                        medially. Pain worsens with activity, particularly stair
                        climbing. Pain rated 6/10 currently, increasing to 8/10
                        post-exercise. Reports approximately 15 minutes of
                        morning stiffness. Denies significant swelling, locking,
                        or episodes of giving way. Partial relief noted with
                        over-the-counter Ibuprofen. No history of trauma.
                        Patient is otherwise healthy.
                      </p>
                      <h3>Objective:</h3>
                      <p>Gait: Non-antalgic.</p>
                      <p>
                        Right Knee Exam: No visible effusion. Mild tenderness to
                        palpation over the medial joint line. Full range of
                        motion; terminal flexion elicits mild medial discomfort.
                        McMurray's test negative. Lachman test negative.
                        Anterior/Posterior Drawer tests negative (knee stable).
                      </p>
                      <p>BMI: 24</p>
                      <h3>Assessment:</h3>
                      <ul>
                        <li>
                          Medial compartment osteoarthritis, right knee
                          (probable).
                        </li>
                        <li>Rule out medial meniscus tear (less likely).</li>
                      </ul>
                      <h3>Plan:</h3>
                      <ul>
                        <li>
                          Order bilateral weight-bearing knee X-rays (AP,
                          lateral, sunrise views).
                        </li>
                        <li>
                          Recommend continued PRN NSAID use (consider trial of
                          Naproxen 500mg BID PRN).
                        </li>
                        <li>
                          Discussed referral for Physical Therapy focusing on
                          quadriceps/hamstring strengthening.
                        </li>
                        <li>Discussed lifestyle modifications.</li>
                        <li>
                          Follow up in 4 weeks to review X-ray results and
                          clinical progress. Consider intra-articular
                          corticosteroid injection or orthopedic referral if
                          symptoms persist or worsen.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="slider-divider"></div>
                <div class="slider-handle"></div>{" "}
                <input
                  type="range"
                  min="0"
                  max="100"
                  class="slider-range"
                  aria-label="Comparison slider"
                  value="50"
                />
              </div>
              <div class="section-arrows">
                <button class="arrow-btn prev-section" disabled="">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M15 18l-6-6 6-6"></path>
                  </svg>
                  Previous Example
                </button>
                <button class="arrow-btn next-section">
                  Next Example
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Action;
