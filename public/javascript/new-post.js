const submitButton = document.querySelector("#submit-review");
const drinkContainerEl = document.querySelector("#drink-container");

const reviewHandler = async function (event) {
    event.preventDefault();
    // Get The Drinks ID
    const drinkId = drinkContainerEl.getAttribute("data-drinkid");
    const userReviewEl = document.querySelector("#user-review").value.trim();
    const reviewTitleEl = document.getElementById("review-title").value.trim();

    if(userReviewEl && reviewTitleEl) {
        const response = await fetch("/api/posts/", {
            method: "post",
            body: JSON.stringify({
                user_review: userReviewEl,
                drink_id: drinkId,
                review_title: reviewTitleEl
            }),
            headers: {"Content-Type": "application/json"}
        })

        console.log(response)
    
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

submitButton.addEventListener("click", reviewHandler);