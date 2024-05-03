# The Report

This is a description of all the practicalities concerning your report.


Be aware as described in the Exam Description on LearnIT ([BSc](https://learnit.itu.dk/local/coursebase/view.php?ciid=1389)/[MSc](https://learnit.itu.dk/local/coursebase/view.php?ciid=1391)), the report forms the basis of your exam. It is a document describing what you have done during the term in this course with regards to everything around your _ITU-MiniTwit_ systems.

---------

## Formal Requirements

Your final report should be maximum 2500 words long. So, try to be brief and concise, but be sure to include all necessary information listed below.

Your main project repository shall contain a directory called `report` containing either a single large or a set of linked ASCIIDOC, MarkDown, or LaTex files forming the report. All images should be collected in a directory called `images`, a sub-directory of `report`.

You convert your report sources to a PDF file via a build step in your CI chain.
For example, in case of ASCIIDOC, you may want to convert your report with [Asciidoctor](https://asciidoctor.org/docs/asciidoctor-pdf/) or [Pandoc](https://pandoc.org/).
In case of LaTeX, you may want to use a GitHub Action like [`xu-cheng/latex-action@v3`](https://github.com/marketplace/actions/github-action-for-latex).
The report has to be build as a single PDF file in directory `report/build`. 

Make sure that you link all artifacts that you consider constitutional to your projects together with short descriptions of the linked artifacts from your reports, i.e., link all necessary repositories, issue trackers, monitoring/logging systems, etc.


### How to hand-in?

Send a pull request to the final release of your _ITU-MiniTwit_, which includes your complete report in source form and built PDF too, to the file [`final_report_urls.py`](https://github.com/itu-devops/lecture_notes/blob/master/final_report_urls.py) in https://github.com/itu-devops/lecture_notes.

**Additionally**, submit the PDF with your report via LearnIT _before_ Wednesday *23/5/2024 14:00*.
The naming convention for the PDF file is (as regular expression): `[B|M]Sc_group_[a-z].pdf`.
That is, valid file names are, e.g., `MSc_group_a.pdf`, `BSc_group_e.pdf`, etc.

---------

## What to include in the report?

### System's Perspective

A description and illustration of the:

  - Design and architecture of your _ITU-MiniTwit_ systems
  - All dependencies of your _ITU-MiniTwit_ systems on all levels of abstraction and development stages. That is, list and briefly describe all technologies and tools you applied and depend on.
  - Important interactions of subsystems
    - For example, via an illustrative UML Sequence diagram that shows the flow of information through your system from user request in the browser, over all subsystems, hitting the database, and a response that is returned to the user.
    - Similarly, another illustrative sequence diagram that shows how requests from the simulator traverse your system.
  - Describe the current state of your systems, for example using results of static analysis and quality assessments.

MSc should argue for the choice of technologies and decisions for at least all cases for which we asked you to do so in the tasks at the end of each session.


### Process' perspective

This perspective should clarify how code or other artifacts come from idea into the running system and everything that happens on the way.

In particular, the following descriptions should be included: 

  - A complete description of stages and tools included in the CI/CD chains, including deployment and release of your systems.
  - How do you monitor your systems and what precisely do you monitor?
  - What do you log in your systems and how do you aggregate logs?
  - Brief results of the security assessment and brief description of how did you harden the security of your system based on the analysis
  - Applied strategy for scaling and upgrades

**Important**: Also, in case you have used AI-assistants during your project briefly explain which system(s) you used during the project and reflect how it supported/hindered your process.



### Lessons Learned Perspective

Describe the biggest issues, how you solved them, and which are major lessons learned with regards to:

  - evolution and refactoring
  - operation, and
  - maintenance

of your _ITU-MiniTwit_ systems. Link back to respective commit messages, issues, tickets, etc. to illustrate these.


Also reflect and describe what was the "DevOps" style of your work. For example, what did you do differently to previous development projects and how did it work?


---------
