# Preparation - Your Tasks Before the Session

<img src="https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" width=50%/>

For each of the following three tasks collect your notes in one of your repositories _before_ the next lecture on Thursday (Apr. 23rd). We will need your responses to discuss them during the session. The tasks below replace the usual in-class exercises. Therefore, the session on Thursday will be shorter than usual since I expect you to use the time of in-class exercises beforehand on the following three tasks.


## Software Quality in General

Read the following:

  * Chapter 24.1 and 24.4 from Sommerville _"Software Engineering"_ (9th Ed.) on software quality [`Sommerville_SE9_SWQ.pdf`](https://learnit.itu.dk/mod/resource/view.php?id=118627) and [`Sommerville_SE9_SWQ2.pdf`](https://learnit.itu.dk/mod/resource/view.php?id=118628) on LearnIT
  * [Kitchenham et al. 1996 _Software Quality: The Elusive Target_](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.91.9555&rep=rep1&type=pdf)

Subsequently, perform each of the following tasks:

  * Identify and list qualities of your MiniTwit system from the four perspectives (except of the transcendental) from the Kitchenham paper.
  * Did you focus on any perspective or any qualities, perhaps even without being aware of it? If yes, list these.
  * Rank the identified qualities per perspective by decreasing importance to you and provide an argument for why you choose certain as the most important.
  * Think about and discuss with your group fellows, how you can measure the  qualities that you ranked the most important. That is, try to define a set of metrics that would allow to measure these (multiple metrics per quality can be possible).


## How maintainable are your systems? 

  * How can you identify and measure _maintainability_ of your MiniTwit systems??
  * Is your MiniTwit system _maintainable_?
    - If yes, describe and argue for why it is?
    - If not, describe and argue for why it is not?
  * Collect a set of characteristics that make your system _maintainable_. Try to include more than just the source code.


## Do you have Technical Debt in your systems?

Likely you already heard of the concept "Technical Debt". Without further reading describe:

  * _a)_ what is Technical Debt for you and 
  * _b)_ describe how you could identify and measure it?


Now analyze software quality and technical debt of your MiniTwit with [SonarQube](https://www.sonarqube.org/) ([SonarCloud](https://sonarcloud.io/) is a readily available hosted version of SonarQube). Do the following once per group:

  * Navigate to https://sonarcloud.io/
  * Login via Github
  * Add a new project by clicking the `+` sign on the top right of the window followed by `Analyze new project`
  * And select the repository or the repositories that you want to assess.

After the analysis is complete, try to understand with the [documentation](https://docs.sonarqube.org/latest/user-guide/metric-definitions/#header-4) and if necessary with [Letouzey _"The SQALE method for evaluating technical debt"_](https://www.researchgate.net/profile/Jean_Louis_Letouzey/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt/links/0c9605357748774a21000000/The-SQALE-method-for-evaluating-Technical-Debt.pdf) what is presented as technical debt. Does that correspond to your understanding of technical debt?



<!--
[The SQALE Method](https://www.researchgate.net/profile/Jean_Louis_Letouzey/publication/262863290_The_SQALE_Method_Definition_Document/links/00b7d53907340114f5000000/The-SQALE-Method-Definition-Document.pdf)
-->
