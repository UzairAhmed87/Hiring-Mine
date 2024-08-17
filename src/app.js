const searchbtn = document.querySelector("#searchbtn");
searchbtn.addEventListener("click", () => {
  const searchInput = document.querySelector("#jobSearch").value;
  const jobApi = async () => {
    const api = await fetch(
      `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=1000&pageNo=1&keyWord=${searchInput}`
    );
    const response = await api.json();
    const jobs = response.data;
    console.log(jobs);
   

    const jobContainer = document.getElementById("jobContainer");
    jobContainer.innerHTML = "";

    jobs.map((job) => {
       
        
      const jobCard = document.createElement("div");
      jobCard.className =
        "border flex justify-between border-secondary rounded-lg p-4"; // Tailwind classes
        const salary = job.payRangeStart && job.payRangeEnd 
        ? `${job.salaryCurrency} ${job.payRangeStart.toLocaleString()} - ${job.payRangeEnd.toLocaleString()}`
        : "Salary Not Specified";

        const createdAt = new Date(job.createdAt);
        const currentTime = new Date();
        const timeDiff = currentTime - createdAt;

        const minutes = Math.floor(timeDiff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        let timeAgo = '';
        if (days > 0 && days != 1) {
            timeAgo = `${days} day(s) ago`;
        }else if (days == 1) {
            timeAgo = `${days} day ago` 
        }
         else if (hours > 0) {
            timeAgo = `${hours} hour(s) ago`;
        } else {
            timeAgo = `${minutes} minute(s) ago`;
        }

      jobCard.innerHTML = `
                <div>
                    <p id="name">${job.companyName || "Anonymous"}</p>
                    <p id="role">${job.designation || "Designation"}</p>
                    <p id="salary" class="text-secondary font-semibold">${
                     salary
                    }</p>
                    <p id="location">${job.city || ""}</p>
                    <p id="time">${timeAgo|| ""}</p>
                </div>
                <div class="flex flex-col justify-between">
                    <img class="w-14" src="assets/icon.png" alt="Company Logo">
                    <p id="views">${job.views + " " + "views" || "No Views"}</p>
                </div>
            `;

      
      jobContainer.appendChild(jobCard);
    });
  };
  jobApi();
});
