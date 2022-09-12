

var options = {
  valueNames: [
    "skillname",
    { name: "passion", attr: "data-passion" },
    { name: "theory", attr: "data-theory" },
    { name: "practice", attr: "data-practice" },
  ],
  item: function (values) {
    const listItem = `<li id='${values.skillname}' class='skill-item'><h3 class='skillname'></h3>
<div class='bg'></div>
<div class='stats'>
<div class='stat-container'>
        <div class='stat-wrap passion animate'><div class="icon"></div><div class='bar-bg'>
            <div class='bar bar-color'></div></div>
            </div> 
        <div class='stat-wrap theory animate'><div class="icon"></div>
            <div class='bar-bg'>
                <div class='bar bar-color''></div>
            </div>
        </div>
        <div class='stat-wrap practice animate'><div class="icon"></div>
            <div class='bar-bg'>
                <div class='bar bar-color'></div>
                </div>
            </div>
    </div>
    </div>
    </li>`;
    return listItem;
  },
};

var values = [
  { skillname: "UX", passion: "5", theory: "3", practice: "2" },
  { skillname: "UI", passion: "5", theory: "4", practice: "2" },
  { skillname: "Responsive Design", passion: "4", theory: "3", practice: "2" },
  { skillname: "Illustrator", passion: "2", theory: "3", practice: "1" },
  { skillname: "Indesign", passion: "2", theory: "4", practice: "4" },
  { skillname: "Industrial Design", passion: "2", theory: "4", practice: "3" },
  { skillname: "After Effects", passion: "3", theory: "4", practice: "2" },
  { skillname: "Wordpress", passion: "2", theory: "3", practice: "2" },
  { skillname: "JavaScript", passion: "3", theory: "4", practice: "1" },
  { skillname: "CSS", passion: "3", theory: "5", practice: "4" },
  { skillname: " 3D Printing", passion: "2", theory: "5", practice: "4" },
  {
    skillname: "Architecture 3D Modeling",
    passion: "1",
    theory: "3",
    practice: "3",
  },
  { skillname: "Character Design", passion: "3", theory: "2", practice: "2" },
  { skillname: "Lottie Animation", passion: "3", theory: "3", practice: "2" },
  { skillname: "Coffee", passion: "5", theory: "2", practice: "3" },
  { skillname: "Color Theory", passion: "4", theory: "4", practice: "3" },
  { skillname: "Illustration", passion: "3", theory: "2", practice: "1" },
  { skillname: "Psychology", passion: "3", theory: "4", practice: "1" },
  { skillname: "Figma", passion: "4", theory: "4", practice: "3" },
  { skillname: "Logo Design", passion: "3", theory: "3", practice: "3" },
  { skillname: "Electronics", passion: "2", theory: "2", practice: "2" },
  { skillname: "React", passion: "5", theory: "3", practice: "2" },
];

var hackerList = new List("skills", options, values);

const sortButtons = document.querySelectorAll(".sort");

function handleClick(node) {
  sortButtons.forEach(function (btn) {
    btn.classList.remove("selected-sort");
  });
  setTimeout(node.classList.add("selected-sort"), 100);

  // var bodyrect = document.body.getBoundingClientRect(),
  // element = document.querySelector('.skills').firstChild.scrollTop,
  // offset = element.top - bodyrect.top;
  // window.scrollTo(0, offset);
}
