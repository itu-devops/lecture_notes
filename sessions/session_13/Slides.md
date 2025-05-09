Wclass: center, middle

<img src="https://www.saa-authors.eu/picture/739/ftw_768/saa-mtcwmza4nzq5mq.jpg" width=40%/>

# DevOps, Software Evolution and Software Maintenance

Helge Pfeiffer, Associate Professor,<br>
[Research Center for Government IT](https://www.itu.dk/forskning/institutter/institut-for-datalogi/forskningscenter-for-offentlig-it),<br>
[IT University of Copenhagen, Denmark](https://www.itu.dk)<br>
`ropf@itu.dk`

---

# What to do now?

  * Start writing your [report](./REPORT.md)

But how?

---

## Architectural Viewpoints = Perspectives on a system

<img src="images/architectural_viewpoints.png" width="80%">

Source: Henrik Bærbak Christensen, et al. [_An Approach to Software Architecture Description Using UML_](https://pure.au.dk/ws/portalfiles/portal/15565758/christensen-corry-marius-2007.pdf)

---

## Viewpoints???


- _Static_ view of the system:
  - **Module viewpoint**: _"concerned with how functionality of the system maps
to static development units"_
  - **Allocation viewpoint**: _"concerned with how software entities are mapped to environmental entities"_

- _Dynamic_ view of the system:
  - **Component & Connector viewpoint**: _"concerned with the runtime mapping of functionality to components"_



Adapted from: Henrik Bærbak Christensen, et al. [_An Approach to Software Architecture Description Using UML_](https://pure.au.dk/ws/portalfiles/portal/15565758/christensen-corry-marius-2007.pdf)

---

## Possible Notations


- _Static_ view of the system:
  - **Allocation viewpoint**: UML deployment diagrams
  - **Module viewpoint**: UML [package](https://www.uml-diagrams.org/package-diagrams-overview.html) and [component](https://www.uml-diagrams.org/component-diagrams.html) diagrams
- _Dynamic_ view of the system:
  - **Component & Connector viewpoint:**: UML (Sub-)system [sequence](https://www.uml-diagrams.org/sequence-diagrams.html) diagrams

---

class: center, middle

# Examples

---

## Allocation viewpoint: UML Deployment Diagrams

<img src="https://www.uml-diagrams.org/deployment-diagrams/deployment-diagram-overview-specification.png" width="100%">

Source: https://www.uml-diagrams.org/deployment-diagrams-overview.html

---

## Allocation viewpoint: UML Deployment Diagrams

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Deployment_Diagram.PNG" width="100%">

Source: https://en.wikipedia.org/wiki/Deployment_diagram

---

## Allocation viewpoint: UML Deployment Diagrams

<img src="https://agilemodeling.com/wp-content/uploads/2023/05/deploymentDiagramProjectLevel.gif" width="80%">

Source: https://agilemodeling.com/style/deploymentDiagram.htm

---

## Allocation viewpoint: UML Deployment Diagrams

<img src="https://www.uml-diagrams.org/examples/deployment-example-clusters.png" width="80%">

Source: https://www.uml-diagrams.org/web-application-clusters-uml-deployment-diagram-example.html?context=depl-examples

---

## Component & Connector viewpoint: UML System Sequence Diagrams

<img src="https://www.uml-diagrams.org/sequence-diagrams/sequence-diagram-overview.png" width="80%">

Source: https://www.uml-diagrams.org/sequence-diagrams.html

---

## Component & Connector viewpoint: UML System Sequence Diagrams

<img src="https://www.uml-diagrams.org/examples/sequence-example-dwr-ajax-comments.png" width="80%">

Source: https://www.uml-diagrams.org/pluck-comments-uml-sequence-diagram-example.html

---

## Component & Connector viewpoint: UML System Sequence Diagrams

<img src="https://www.uml-diagrams.org/examples/sequence-example-facebook-authentication.png" width="50%">

Source: https://www.uml-diagrams.org/facebook-authentication-uml-sequence-diagram-example.html

---

## Component & Connector viewpoint: UML System Sequence Diagrams

<img src="https://www.uml-diagrams.org/examples/spring-hibernate-transaction-sequence-diagram-example.png" width="50%">

Source: https://www.uml-diagrams.org/examples/spring-hibernate-transaction-sequence-diagram-example.html

---

---

## Process view: UML Activity Diagrams

<img src="https://www.uml-diagrams.org/examples/activity-examples-process-order.png" width="100%">

Source: https://www.uml-diagrams.org/shopping-process-order-uml-activity-diagram-example.html?context=activity-examples

---

## Process view: UML Activity Diagrams

<img src="https://www.uml-diagrams.org/examples/activity-examples-resolve-issue.png" width="70%">

Source: https://www.uml-diagrams.org/software-resolve-issue-uml-activity-diagram-example.html


---

## Process view: Custom Notation


<img src="https://storage.googleapis.com/gweb-cloudblog-publish/images/image3_oNR0E64.max-1300x1300.png" width="80%">

Source: https://strategicfocus.com/2021/10/06/model-training-as-a-ci-cd-system-part-i/

You’re free to invent your own notation, but then, you should add a legend. And make sure that it makes sense!

---

## Process view: Custom Notation

<img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KarJfifaVtnaR6PDyiEb-A.jpeg" width="70%">

Source: https://medium.com/@ojijosh2002/ci-cd-pipeline-design-and-build-for-a-banking-application-on-azure-devops-9f068c57fefc

---

## Process view: Custom Notation

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fautomated-360.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fdevops-pipeline-overview.png&f=1&nofb=1&ipt=e8afb22218123f7d71119dfb6e6607889fd282729f5830cc28b433eb445256a8" width="80%">

---

class: center, middle

# Formatting Your Report
### Make it as readable as possible

---

## A Report Has a Title and Authors

<img src="images/report_title_page.png" width="100%">

---

## A Report Has a Structure

<img src="images/report_structure.png" width="100%">

---

### Section Numbers Matter

<img src="images/report_sections.png" width="80%">

Use `--number-sections` with pandoc to convert markdown files, see e.g., https://pandoc.org/MANUAL.html or https://github.com/mircealungu/reconstruction/blob/master/tools/md_to_pdf.sh

---

## Figure and Text font sizes should be similar

<img src="images/report_sizes.png" width="100%">


https://github.com/mircealungu/student-projects/blob/master/writing_guidelines/Use_the_Right_Font_Size_in_Images.md

---

# What to do now?


We run an **evaluation** that should be really easy and should consume only a few minutes of your time.
The purpose of the evaluation is to provide feedback so that Mircea and I can improve the course next year.

We would like to ask you to provide up to three negative and up to three positive comments about the course. You can do that here: http://138.68.66.124:8888/
Please note, the kind of evaluation we are running mimics a public paper-based process.
That is, all information that you enter as feedback will be read by Mircea and me, i.e., it is public information.
Please provide your feedback latest by Tuesday (May 6th) 12:00.

Thank you in advance.
