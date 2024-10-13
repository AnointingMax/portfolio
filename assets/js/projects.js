/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


(function () {
    "use strict";
    const projects = [
        {
            name: "ClassCube Basic",
            role: "Frontend Developer",
            type: "frontend",
            link: "https://basic.classcube.online/",
            imageCode: "classcube-basic",
            technologies: ["React"],
            description: "An LMS tailor made for primary and secondary schools. Developed to take learning out of the '4-walls' of the primary or secondary school."
        },
        {
            name: "ClassCube Pro",
            role: "Fullstack Developer",
            type: "fullstack",
            link: "https://pro.classcube.online/",
            imageCode: "classcube-pro",
            technologies: ["React", "ExpressJs", "MySQL", "AWS Console"],
            description: "An online marketplace for educational content to be sold. Built to allow content of many kinds (files, videos or text) be shared as well as to allow profit sharing between content creators."
        },
        {
            name: "ExamCentre CBT",
            role: "Fullstack Developer",
            type: "fullstack",
            link: "https://cbt.examcentre.ng/",
            imageCode: "cbt",
            technologies: ["React", "PHP", "MySQL", "AWS Console"],
            description: "An online testing platform, designed to allow educators perform their exams/tests stress and malpractice free. With realtime result collation and score analtyics."
        },
        {
            name: "ExamCentre",
            role: "Frontend Developer",
            type: "frontend",
            link: "https://examcentre.ng/",
            imageCode: "examcentre",
            technologies: ["HTML", "JQuery"],
            description: "A platform created to ease the process of school application and enrolment."
        },
        {
            name: "LocalRamp",
            role: "Frontend Developer",
            type: "frontend",
            link: "https://localramp.co/",
            imageCode: "localramp",
            technologies: ["React", "Typescript"],
            description: "Fintech platform designed to allow users convert their local fiat currencies to a wide array of crypto-currencies."
        },
        {
            name: "Payouts Cash",
            role: "Frontend Developer",
            type: "frontend",
            link: "https://www.payouts.cash/",
            imageCode: "payoutscash",
            technologies: ["React", "Typescript"],
            description: "Fintech platform designed to allow users convert their local fiat currencies to a wide array of crypto-currencies."
        },
        {
            name: "SchoolTeller",
            role: "Fullstack Developer",
            type: "fullstack",
            link: "https://schoolteller.ng/",
            imageCode: "schoolteller",
            technologies: ["React", "PHP"],
            description: "Web application to aid schools with their fee collection and account reconcialtion."
        },
        {
            name: "SendForce",
            role: "Fullstack Developer",
            type: "fullstack",
            link: "https://sendforceng.com/",
            imageCode: "sendforce",
            technologies: ["React", "Laravel"],
            description: "End-to-end logistics and fulfullment application, built to empower businesses ship and track the movement of their products."
        },
    ]

    const projectArray = projects.map(({ name, type, imageCode }) => `
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${type}">
            <div class="portfolio-content h-100">
                <img src="assets/img/projects/${imageCode}.png" class="img-fluid" alt="">
                <div class="portfolio-info">
                    <h4>${name}</h4>
                    <a href="assets/img/projects/${imageCode}.png" title="App 1"
                        data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                            class="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html?project=${name}" title="More Details" class="details-link"><i
                            class="bi bi-link-45deg"></i></a>
                </div>
            </div>
        </div><!-- End Portfolio Item -->
    `)

    const targetDiv = document.getElementById('project-display');

    projectArray.forEach(htmlString => {
        targetDiv.insertAdjacentHTML('beforeend', htmlString);
    });


})();