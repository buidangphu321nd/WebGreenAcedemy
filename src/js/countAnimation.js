document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.getElementById("clients-count");
  let hasRun = false;
  let count = 0;
  const targetCount = 30;
  const increment = 1; // Increment by 1
  const duration = 1000; // Duration in milliseconds
  const stepTime = Math.abs(Math.floor(duration / (targetCount / increment)));

  function updateCount() {
    count += increment;
    countElement.textContent = count;
    if (count < targetCount) {
      setTimeout(updateCount, stepTime);
    }
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        setTimeout(updateCount, stepTime);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(countElement);
});

document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.getElementById("business-count");
  let hasRun = false;
  let count = 0;
  const targetCount = 300;
  const increment = 10;
  const duration = 1000;
  const stepTime = Math.abs(Math.floor(duration / (targetCount / increment)));

  function updateCount() {
    count += increment;
    countElement.textContent = count;
    if (count < targetCount) {
      setTimeout(updateCount, stepTime);
    }
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        setTimeout(updateCount, stepTime);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(countElement);
});

document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.getElementById("years-count");
  let hasRun = false;
  let count = 0;
  const targetCount = 8;
  const increment = 1;
  const duration = 1000;
  const stepTime = Math.abs(Math.floor(duration / (targetCount / increment)));

  function updateCount() {
    count += increment;
    countElement.textContent = count;
    if (count < targetCount) {
      setTimeout(updateCount, stepTime);
    }
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        setTimeout(updateCount, stepTime);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(countElement);
});

