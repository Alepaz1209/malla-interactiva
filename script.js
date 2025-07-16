function toggle(subjectDiv) {
  if (subjectDiv.classList.contains("completed")) return;

  subjectDiv.classList.add("completed");

  const completedId = subjectDiv.id;

  const allSubjects = document.querySelectorAll(".subject");

  allSubjects.forEach((subject) => {
    const prereq = subject.getAttribute("data-prereq");
    if (!prereq || subject.classList.contains("completed")) return;

    const prereqIds = prereq.split(",").map((id) => id.trim());
    const allMet = prereqIds.every((id) =>
      document.getElementById(id)?.classList.contains("completed")
    );

    if (allMet) {
      subject.classList.add("unlocked");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const allSubjects = document.querySelectorAll(".subject");

  allSubjects.forEach((subject) => {
    const prereq = subject.getAttribute("data-prereq");
    if (prereq) {
      subject.classList.add("locked");
    }
  });
});
