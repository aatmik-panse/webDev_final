document.addEventListener("DOMContentLoaded", function () {
  const postButton = document.getElementById("post-btn");

  postButton.addEventListener("click", function () {
    const postContent = document.getElementById("post").value.trim();

    if (postContent) {
      const newFeedCard = document.createElement("div");
      newFeedCard.classList.add("feed-card");

      newFeedCard.innerHTML = `
                <div class="main-feed">
                    <div class="feed-img">
                        <img src="profile_image.png" alt="profile-image" />
                    </div>
                    <div class="feed-content">
                        <div class="content-top">
                           <h5>Aatmik</h5>
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="delete"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.5 4.46875C0.5 4.12357 0.779822 3.84375 1.125 3.84375H14.875C15.2202 3.84375 15.5 4.12357 15.5 4.46875C15.5 4.81393 15.2202 5.09375 14.875 5.09375H1.125C0.779822 5.09375 0.5 4.81393 0.5 4.46875Z"
                        fill="#A42137"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.125 7.28125C6.47018 7.28125 6.75 7.56107 6.75 7.90625V12.9062C6.75 13.2514 6.47018 13.5312 6.125 13.5312C5.77982 13.5312 5.5 13.2514 5.5 12.9062V7.90625C5.5 7.56107 5.77982 7.28125 6.125 7.28125Z"
                        fill="#A42137"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.875 7.28125C10.2202 7.28125 10.5 7.56107 10.5 7.90625V12.9062C10.5 13.2514 10.2202 13.5312 9.875 13.5312C9.52982 13.5312 9.25 13.2514 9.25 12.9062V7.90625C9.25 7.56107 9.52982 7.28125 9.875 7.28125Z"
                        fill="#A42137"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.375 3.84375C2.72018 3.84375 3 4.12357 3 4.46875V16.0312H13V4.46875C13 4.12357 13.2798 3.84375 13.625 3.84375C13.9702 3.84375 14.25 4.12357 14.25 4.46875V16.0312C14.25 16.3628 14.1183 16.6807 13.8839 16.9151C13.6495 17.1496 13.3315 17.2812 13 17.2812H3C2.66848 17.2812 2.35054 17.1496 2.11612 16.9151C1.8817 16.6807 1.75 16.3628 1.75 16.0312V4.46875C1.75 4.12357 2.02982 3.84375 2.375 3.84375Z"
                        fill="#A42137"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.79917 1.26792C5.15081 0.916294 5.62772 0.71875 6.125 0.71875H9.875C10.3723 0.71875 10.8492 0.916294 11.2008 1.26792C11.5525 1.61956 11.75 2.09647 11.75 2.59375V4.46875C11.75 4.81393 11.4702 5.09375 11.125 5.09375C10.7798 5.09375 10.5 4.81393 10.5 4.46875V2.59375C10.5 2.42799 10.4342 2.26902 10.3169 2.15181C10.1997 2.0346 10.0408 1.96875 9.875 1.96875H6.125C5.95924 1.96875 5.80027 2.0346 5.68306 2.15181C5.56585 2.26902 5.5 2.42799 5.5 2.59375V4.46875C5.5 4.81393 5.22018 5.09375 4.875 5.09375C4.52982 5.09375 4.25 4.81393 4.25 4.46875V2.59375C4.25 2.09647 4.44754 1.61956 4.79917 1.26792Z"
                        fill="#A42137"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="edit"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9394 1.56354L10.9372 1.56442C10.936 1.56493 10.9348 1.56544 10.9335 1.56594L10.9325 1.56694L1.55937 10.9338C1.55937 10.9338 1.55933 10.9362 1.55933 10.9375V14.431L1.56003 14.4312H5.06919L14.4223 5.07817C14.4302 5.06883 14.4356 5.06182 14.4389 5.05701L14.4395 5.05509L14.4387 5.05288C14.4381 5.05166 14.4376 5.05044 14.4371 5.04921L14.4362 5.04824L10.9627 1.58095C10.9532 1.5729 10.9462 1.56753 10.9413 1.56416L10.9394 1.56354ZM10.4641 0.407404C10.6045 0.349927 10.7646 0.3125 10.9406 0.3125C11.1273 0.3125 11.2804 0.354829 11.4087 0.404159C11.4141 0.406224 11.4194 0.408364 11.4247 0.410577C11.5891 0.479088 11.7177 0.578527 11.8087 0.660441C11.8167 0.667645 11.8245 0.675054 11.8321 0.682662L15.3196 4.16391C15.4221 4.26635 15.5266 4.40424 15.5957 4.57981C15.6532 4.72022 15.6906 4.88031 15.6906 5.05625C15.6906 5.24301 15.6482 5.3961 15.5989 5.52436C15.5969 5.52973 15.5947 5.53507 15.5925 5.54038C15.524 5.70481 15.4245 5.83334 15.3426 5.92435C15.3353 5.9325 15.3278 5.94044 15.32 5.94819L5.76377 15.5044C5.62198 15.6462 5.42443 15.7085 5.23337 15.6812H1.55933C1.21694 15.6812 0.910217 15.5414 0.685736 15.3287C0.681649 15.3248 0.677615 15.3209 0.673634 15.3169C0.433363 15.0767 0.309326 14.7596 0.309326 14.4312V10.9375C0.309326 10.7941 0.331162 10.6276 0.401153 10.4596C0.459447 10.3197 0.54591 10.1795 0.667384 10.0581L10.0486 0.683058C10.1511 0.580663 10.2887 0.47647 10.4641 0.407404Z"
                        fill="#61738E"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99238 2.73306C8.23646 2.48898 8.63219 2.48898 8.87627 2.73306L13.2513 7.10806C13.4953 7.35214 13.4953 7.74786 13.2513 7.99194C13.0072 8.23602 12.6115 8.23602 12.3674 7.99194L7.99238 3.61694C7.74831 3.37286 7.74831 2.97714 7.99238 2.73306Z"
                        fill="#61738E"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.68433 15.05C4.68433 14.7048 4.96415 14.425 5.30933 14.425H14.6843C15.0295 14.425 15.3093 14.7048 15.3093 15.05C15.3093 15.3952 15.0295 15.675 14.6843 15.675H5.30933C4.96415 15.675 4.68433 15.3952 4.68433 15.05Z"
                        fill="#61738E"
                      />
                    </svg>
                        </div>
                        <div class="content-mid">
                            <p>${postContent}</p>
                        </div>
                        <div class="content-bottom">
                             <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="like"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.4388 4.98404C8.5971 4.53583 7.6261 4.3931 6.69102 4.58011C5.75594 4.76713 4.91454 5.27235 4.30996 6.0098C3.70539 6.74726 3.375 7.67141 3.375 8.62501C3.375 11.4673 5.49147 14.1802 7.81422 16.2707C8.95292 17.2955 10.095 18.1296 10.954 18.708C11.3828 18.9967 11.7393 19.2205 11.9871 19.3713C11.9914 19.3739 11.9957 19.3766 12 19.3792C12.0043 19.3766 12.0086 19.3739 12.0129 19.3713C12.2607 19.2205 12.6172 18.9967 13.046 18.708C13.905 18.1296 15.0471 17.2955 16.1858 16.2707C18.5085 14.1802 20.625 11.4673 20.625 8.62501C20.625 7.67141 20.2946 6.74726 19.69 6.0098C19.0855 5.27235 18.2441 4.76713 17.309 4.58011C16.3739 4.3931 15.4029 4.53583 14.5612 4.98404C13.7195 5.43224 13.0591 6.15822 12.6923 7.03847C12.5759 7.31796 12.3028 7.50001 12 7.50001C11.6972 7.50001 11.4241 7.31796 11.3077 7.03847C10.9409 6.15822 10.2805 5.43224 9.4388 4.98404ZM12 20.25C11.6335 20.9044 11.6331 20.9041 11.6331 20.9041L11.6305 20.9027L11.6241 20.8991L11.6012 20.8861C11.5816 20.8749 11.5534 20.8587 11.5171 20.8375C11.4446 20.7952 11.3398 20.7333 11.2073 20.6527C10.9424 20.4915 10.5664 20.2553 10.1163 19.9522C9.21747 19.347 8.01583 18.4702 6.81078 17.3856C4.44603 15.2573 1.875 12.1577 1.875 8.62501C1.875 7.32465 2.32553 6.06445 3.14995 5.05882C3.97437 4.0532 5.12174 3.36426 6.39685 3.10924C7.67196 2.85422 8.99604 3.04886 10.1438 3.66005C10.8766 4.05025 11.5086 4.59484 12 5.25C12.4914 4.59484 13.1234 4.05025 13.8562 3.66005C15.004 3.04886 16.328 2.85422 17.6032 3.10924C18.8783 3.36426 20.0256 4.0532 20.85 5.05882C21.6745 6.06445 22.125 7.32465 22.125 8.62501C22.125 12.1577 19.554 15.2573 17.1892 17.3856C15.9842 18.4702 14.7825 19.347 13.8837 19.9522C13.4336 20.2553 13.0576 20.4915 12.7927 20.6527C12.6602 20.7333 12.5554 20.7952 12.4829 20.8375C12.4466 20.8587 12.4184 20.8749 12.3988 20.8861L12.3759 20.8991L12.3695 20.9027L12.3675 20.9038C12.3675 20.9038 12.3665 20.9044 12 20.25ZM12 20.25L12.3665 20.9044C12.1388 21.0319 11.8608 21.0316 11.6331 20.9041L12 20.25Z"
                        fill="#E22D4C"
                      />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="comment"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5052 3.78641C10.5019 3.66086 8.52172 4.27083 6.93631 5.50182C5.3509 6.7328 4.26932 8.50015 3.89463 10.4721C3.51993 12.444 3.87788 14.4849 4.90128 16.2116C5.00609 16.3884 5.03372 16.6005 4.97773 16.7983L4.09916 19.9017L7.20158 19.0224C7.39942 18.9663 7.6116 18.9939 7.78849 19.0988C9.5152 20.1222 11.5561 20.4801 13.528 20.1054C15.4999 19.7307 17.2673 18.6492 18.4982 17.0637C19.7292 15.4783 20.3392 13.4981 20.2136 11.4948C20.0881 9.49158 19.2356 7.60302 17.8163 6.18372C16.397 4.76441 14.5085 3.91197 12.5052 3.78641ZM6.01638 4.31702C7.8904 2.86195 10.2311 2.14094 12.599 2.28935C14.967 2.43776 17.1993 3.44538 18.877 5.12306C20.5547 6.80073 21.5623 9.03308 21.7107 11.401C21.8591 13.769 21.1381 16.1097 19.683 17.9837C18.228 19.8577 16.1389 21.1362 13.808 21.5791C11.5845 22.0016 9.28678 21.636 7.30804 20.5513L4.5018 21.3466C4.24606 21.4212 3.97496 21.4259 3.71675 21.3601C3.45698 21.2939 3.21988 21.1589 3.03043 20.9693C2.84098 20.7796 2.7062 20.5423 2.64031 20.2825C2.57485 20.0244 2.57977 19.7535 2.65449 19.498L3.44883 16.6921C2.36408 14.7134 1.99848 12.4156 2.42099 10.1921C2.8639 7.86117 4.14236 5.7721 6.01638 4.31702Z"
                        fill="#61738E"
                      />
                    </svg>
                        </div>
                    </div>
                </div>
            `;

      const feedBox = document.querySelector(".feed-box");
      feedBox.appendChild(newFeedCard);

      document.getElementById("post").value = "";
    } else {
      alert("Please write something before posting.");
    }
  });
});
