import { gsap } from "gsap";

const firstProject = document.querySelector("#project-1");
firstProject?.addEventListener("mouseenter", (e) => {
  gsap.to(firstProject, { rotation: 30, duration: 1 });
});
firstProject?.addEventListener("mouseleave", (e) => {
  gsap.to(firstProject, { rotation: 0, duration: 1 });
});

const secondProject = document.querySelector("#project-2");
secondProject?.addEventListener("mouseenter", (e) => {
  gsap.to(secondProject, { rotation: 30, duration: 1 });
});
secondProject?.addEventListener("mouseleave", (e) => {
  gsap.to(secondProject, { rotation: 0, duration: 1 });
});

const thirdProject = document.querySelector("#project-3");
thirdProject?.addEventListener("mouseenter", (e) => {
  gsap.to(thirdProject, { rotation: 30, duration: 1 });
});
thirdProject?.addEventListener("mouseleave", (e) => {
  gsap.to(thirdProject, { rotation: 0, duration: 1 });
});

const fourthProject = document.querySelector("#project-4");
fourthProject?.addEventListener("mouseenter", (e) => {
  gsap.to(fourthProject, { rotation: 30, duration: 1 });
});
fourthProject?.addEventListener("mouseleave", (e) => {
  gsap.to(fourthProject, { rotation: 0, duration: 1 });
});
