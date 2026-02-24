let slideIndices = {};

function moveSlide(n, projectId) {
    if (!slideIndices[projectId]) slideIndices[projectId] = 0;
    
    const card = document.querySelector(`[data-project="${projectId}"]`);
    const slider = card.querySelector(".slider");
    const slides = slider.querySelectorAll("img");
    
    slideIndices[projectId] += n;
    
    if (slideIndices[projectId] >= slides.length) slideIndices[projectId] = 0;
    if (slideIndices[projectId] < 0) slideIndices[projectId] = slides.length - 1;
    
    slider.style.transform = `translateX(${-slideIndices[projectId] * 100}%)`;
}