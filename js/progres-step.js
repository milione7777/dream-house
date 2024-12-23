const progressCircle = document.querySelector(".progress");
const progressText = document.querySelector(".progress-value-step");

const currentSvg = document.getElementById("current-svg");
const currentName = document.getElementById("current-name");
const answerStep = document.querySelector(".answer-step");

const radius = 116; 
const circumference = 2 * Math.PI * radius; 

progressCircle.style.strokeDasharray = `${circumference}`;
progressCircle.style.strokeDashoffset = `${circumference}`;

let currentStep = 0;
const totalSteps = 6; 

const stepsData = [
  {
    svgHref: "./sprite/symbol-defs.svg#icon-aplication",
    name: "DRAFTING AN ESTIMATE",
    answer:
      "DEVELOPMENT OF TERMS OF REFERENCE, 3D VISUALIZATION AND CALCULATION OF THE ESTIMATE",
  },
  {
    svgHref: "./sprite/symbol-defsss.svg#icon-pencil",
    name: "CHECK OUT OF THE MEASURER",
    answer:
      "OUR SPECIALIST COMES TO YOU AT THE OBJECT FOR MEASURING AND PHOTO FIXING",
  },
  {
    svgHref: "./sprite/symbol-defs.svg#icon-drafting",
    name: "DRAFTING AN ESTIMATE",
    answer:
      "DEVELOPMENT OF TERMS OF REFERENCE, 3D VISUALIZATION AND CALCULATION OF THE ESTIMATE",
  },
  {
    svgHref: "./sprite/symbol-defs.svg#icon-contract",
    name: "SIGNING THE CONTRACT",
    answer:
      "AGREEMENT OF THE COST AND DATE OF COMPLETION OF WORKS, SIGNING OF THE CONTRACT",
  },
  {
    svgHref: "./sprite/symbol-defs.svg#icon-icon-5",
    name: "BEGINNING OF WORK",
    answer:
      "START OF REPAIR WORKS UNDER THE SUPERVISION OF A PERSONAL SUPERVISOR",
  },
  {
    svgHref: "./sprite/symbol-defs.svg#icon-completion",
    name: "COMPLETION",
    answer: "COMPLETION OF REPAIRS, REMOVAL OF CONSTRUCTION rubbish",
  },
];

const offsets = [
  630, 
  480, 
  370, 
  250,
  100, 
  0, 
];

function setProgress(step) {
  const offset = offsets[step]; 
  progressCircle.style.strokeDashoffset = offset;
  progressText.textContent = step + 1;

  if (stepsData[step]) {
    const { svgHref, name, answer } = stepsData[step];
    currentSvg.querySelector("use").setAttribute("href", svgHref);
    currentName.textContent = name;
    answerStep.textContent = answer;
  }
}

function incrementProgress() {
  if (currentStep < totalSteps) {
    setProgress(currentStep);
    currentStep++;
  }
}
