type PubType =
  | 'extended abstract / workshop papers'
  | 'theses / book chapters'
  | 'conference / journal articles'
  | 'posters';
type PubSubtype =
  | 'workshop'
  | 'chapter'
  | 'thesis'
  | 'conference'
  | 'journal'
  | 'short conf.'
  | 'poster'
  | 'ex. abs.';

type linkType =
  | 'paper'
  | 'live'
  | 'about'
  | 'talk'
  | 'osf'
  | 'code'
  | 'poster'
  | 'slides'
  | 'blog post'
  | 'award'
  | 'thesis'
  | 'replicability badge';
export interface Publication {
  link?: string;
  urlTitle: string;
  imgLink: string;
  title: string;
  subtitle?: string;
  shortTitle?: string;
  authors: string;
  journal: string;
  date: string;
  links: {name: linkType; link: string}[];
  abstract: string;
  bibTex: string;
  type: PubType;
  subtype: PubSubtype;
}

export const PUBLICATIONS: Publication[] = [
  {
    link: 'https://arxiv.org/pdf/2207.07998.pdf',
    urlTitle: 'no-grammar',
    imgLink: 'converted-images/no-grammar.jpg',
    title: 'No Grammar to Rule Them All: A Survey of JSON-Style DSLs for Visualization',
    authors: 'Andrew McNutt',
    journal: 'IEEE VIS',
    date: 'October 2022',
    links: [
      {name: 'paper', link: 'https://arxiv.org/pdf/2207.07998.pdf'},
      {name: 'live', link: 'https://vis-json-dsls.netlify.app/'},
      {
        name: 'replicability badge',
        link: 'http://www.replicabilitystamp.org/#https-github-com-mcnuttandrew-no-grammar-supplement'
      }
    ],
    abstract:
      'There has been substantial growth in the use of JSON-based grammars, as well as other standard data serialization languages, to create visualizations. Each of these grammars serves a purpose: some focus on particular computational tasks (such as animation), some are concerned with certain chart types (such as maps), and some target specific data domains (such as ML). Despite the prominence of this interface form, there has been little detailed analysis of the characteristics of these languages.  In this study, we survey and analyze the design and implementation of 57 JSON-style DSLs for visualization. We analyze these languages supported by a collected corpus of examples for each DSL (consisting of 4395 instances) across a variety of axes organized into concerns related to domain, conceptual model, language relationships, affordances, and general practicalities. We identify tensions throughout these areas, such as between formal and colloquial specifications, among types of users, and within the composition of languages. Through this work, we seek to support language implementers by elucidating the choices, opportunities, and tradeoffs in visualization DSL design.',
    bibTex: `TODO`,
    type: 'conference / journal articles',
    subtype: 'journal'
  },
  {
    link: 'https://link.springer.com/article/10.1007/s12064-022-00376-8',
    urlTitle: 'goethe-candolle',
    imgLink: 'converted-images/goethe-candolle.jpg',
    title: 'Goethe and Candolle: National forms of scientific writing?',
    authors: 'Agatha Seo-Hyun Kim, Andrew McNutt ',
    journal: 'Theory in Biosciences',
    date: 'August 2022',
    links: [{name: 'paper', link: 'https://link.springer.com/article/10.1007/s12064-022-00376-8'}],
    abstract:
      'What role does nationality—or the image of a nation—play in how one thinks and receives scientific ideas? This paper investigates the commonly held ideas about “German science” and “French science” in early nineteenth-century France. During the politically turbulent time, the seemingly independent scientific community found itself in a difficult position: first, between the cosmopolitan ideals of scientific community and the invasive political reality, and second, between the popularized image of national differences and the actual comparisons of international scientific ideas. The tension between multiple sets of fictions and realities underscores the fragility of the concept of nationality as a scientific measure. A case study comparing morphological ideas, receptions in France, and the actual scientific texts of J. W. von Goethe and A. P. de Candolle further illustrates this fragility. Goethe and Candolle make an ideal comparative case because they were received in very different lights despite their similar concept of the plant type. Our sentence-classification and visualization methods are applied to their scientific texts, to compare the actual compositions and forms of the texts that purportedly represented German and French sciences. This paper concludes that there was a gap between what French readers assumed they read and what they really read, when it came to foreign scientific texts. The differences between Goethe’s and Candolle’s texts transcended the perceived national differences between German Romanticism and French Classicism.',
    bibTex: `TODO`,
    type: 'conference / journal articles',
    subtype: 'journal'
  },
  {
    link: 'https://www.blaseur.com/papers/rationales-naacl22.pdf',
    urlTitle: 'explaining-why',
    imgLink: 'converted-images/explaining-why.jpg',
    title:
      'Explaining Why: How Instructions and User Interfaces Impact Annotator Rationales When Labeling Text Data',
    authors:
      'Jamar L. Sullivan, Will Brackenbury, Andrew McNutt, Kevin Bryson, Kwam Byll, Yuxin Chen, Michael Littman, Chenhao Tan, Blase Ur',
    journal: 'NAACL',
    date: 'July 2022',
    links: [
      {name: 'paper', link: 'https://www.blaseur.com/papers/rationales-naacl22.pdf'},
      {
        name: 'replicability badge',
        link: 'https://naacl2022-reproducibility-track.github.io/results/'
      }
    ],
    abstract:
      'In the context of data labeling, NLP researchers are increasingly interested in having humans select _rationales_, a subset of input tokens relevant to the chosen label. We conducted a 332-participant online user study to understand how humans select rationales, especially how different instructions and user interface affordances impact the rationales chosen. Participants labeled ten movie reviews as positive or negative, selecting words and phrases supporting their label as rationales. We varied the instructions given, the rationale-selection task, and the user interface. Participants often selected about 12% of input tokens as rationales, but selected fewer if unable to drag over multiple tokens at once. Whereas participants were near unanimous in their data labels, they were far less consistent in their rationales. The user interface affordances and task greatly impacted the types of rationales chosen. We also observed large variance across participants.',
    bibTex: `TODO`,
    type: 'conference / journal articles',
    subtype: 'conference'
  },
  {
    link: 'https://arxiv.org/abs/2109.06007',
    urlTitle: 'vis-4-villainy',
    imgLink: 'converted-images/villainy.jpg',
    title: 'Visualization for Villainy',
    authors: 'Andrew McNutt, Lilian Huang, Kathryn Koenig',
    journal: 'alt.vis',
    date: 'October 2021',
    links: [{name: 'paper', link: 'https://arxiv.org/abs/2109.06007'}],
    abstract:
      'Visualization has long been seen as a dependable and trustworthy tool for carrying out analysis and communication tasks -- a view reinforced by the growing interest in applying it to socially positive ends. However, despite the benign light in which visualization is usually perceived, it carries the potential to do harm to people, places, concepts, and things. In this paper, we capitalize on this negative potential to serve an underrepresented (but technologically engaged) group: villains. To achieve these ends, we introduce a design space for this type of graphical violence, which allows us to unify prior work on deceptive visualization with novel data-driven dastardly deeds, such as emotional spear phishing and unsafe data physicalization. By charting this vile charting landscape, we open new doors to collaboration with terrifying domain experts, and hopefully, make the world just a bit worse.',
    bibTex: `TODO`,
    type: 'extended abstract / workshop papers',
    subtype: 'workshop'
  },
  {
    link: 'https://dl.acm.org/doi/10.1145/3472749.3474736',
    urlTitle: 'kondoCloud',
    imgLink: 'converted-images/kondo.jpg',
    title:
      'KondoCloud: Improving Information Management in Cloud Storage via Recommendations Based on File Similarity',
    authors: 'Will Brackenbury, Andrew McNutt, Kyle Chard, Aaron Elmore, Blase Ur',
    journal: 'ACM UIST',
    date: 'October 2021',
    links: [{name: 'paper', link: 'https://dl.acm.org/doi/10.1145/3472749.3474736'}],
    abstract:
      "Users face many challenges in keeping their personal file collections organized. While current file-management interfaces help users retrieve files in disorganized repositories, they do not aid in organization. Pertinent files can be difficult to find, and files that should have been deleted may remain. To help, we designed KondoCloud, a file-browser interface for personal cloud storage. KondoCloud makes machine learning-based recommendations of files users may want to retrieve, move, or delete. These recommendations leverage the intuition that similar files should be managed similarly.<br/><br/>We developed and evaluated KondoCloud through two complementary online user studies. In our Observation Study, we logged the actions of 69 participants who spent 30 minutes manually organizing their own Google Drive repositories. We identified high-level organizational strategies, including moving related files to newly created sub-folders and extensively deleting files. To train the classifiers that underpin KondoCloud's recommendations, we had participants label whether pairs of files were similar and whether they should be managed similarly. In addition, we extracted ten metadata and content features from all files in participants' repositories. Our logistic regression classifiers all achieved F1 scores of 0.72 or higher. In our Evaluation Study, 62 participants used KondoCloud either with or without recommendations. Roughly half of participants accepted a non-trivial fraction of recommendations, and some participants accepted nearly all of them. Participants who were shown the recommendations were more likely to delete related files located in different directories. They also generally felt the recommendations improved efficiency. Participants who were not shown recommendations nonetheless manually performed about a third of the actions that would have been recommended.",
    bibTex: `TODO`,
    type: 'conference / journal articles',
    subtype: 'conference'
  },
  {
    link: 'https://www.mcnutt.in/zine-potential',
    urlTitle: '',
    shortTitle: 'zine-potential',
    imgLink: 'converted-images/zine-potential.jpg',
    title: 'On The Potential of Zines as a Medium for Visualization',
    authors: 'Andrew McNutt',
    journal: 'IEEE VIS Short Papers',
    date: 'October 2021',
    links: [
      {name: 'about', link: 'https://www.mcnutt.in/zine-potential'},
      {name: 'paper', link: 'https://arxiv.org/abs/2108.02177'},
      {name: 'talk', link: 'https://youtu.be/khhlIrowR_g'}
    ],
    abstract:
      'Zines are a form of small-circulation self-produced publication often akin to a magazine. This free-form medium has a long history and has been used as means for personal or intimate expression, as a way for marginalized people to describe issues that are important to them, and as a venue for graphical experimentation. It would seem then that zines would make an ideal vehicle for the recent interest in applying feminist or humanist ideas to visualization. Yet, there has been little work combining visualization and zines. In this paper we explore the potential of this intersection by analyzing examples of zines that use data graphics and by describing the pedagogical value that they can have in a visualization classroom. In doing so, we argue that there are plentiful opportunities for visualization research and practice in this rich intersectional-medium.',
    bibTex: `TODO`,
    type: 'conference / journal articles',
    subtype: 'short conf.'
  },
  {
    link: 'https://arxiv.org/pdf/2104.04042.pdf',
    urlTitle: 'tacos',
    imgLink: 'converted-images/tacos.jpg',
    title: 'What are Table Cartograms Good for Anyway? An Algebraic Analysis',
    authors: 'Andrew McNutt',
    journal: 'EuroVis 🏆 Honorable Mention for Best Paper 🏆 (Juried Selection, 1 awarded)',
    date: 'June 2021',
    links: [
      {name: 'about', link: '#/research/tacos'},
      {name: 'paper', link: 'https://arxiv.org/pdf/2104.04042.pdf'},
      {name: 'talk', link: 'https://www.youtube.com/watch?v=ozBn5bLsGQw&t=2594s'}
    ],
    abstract: `Unfamiliar or esoteric visual forms arise in many areas of visualization. While such forms can be intriguing, it can be unclear how to make effective use of them without long periods of practice or costly user studies. In this work we analyze the table cartogram—a graphic which visualizes tabular data by bringing the areas of a grid of quadrilaterals into correspondence with the input data, like a heat map that has been *area-ed* rather than colored. Despite having existed for several years, little is known about its appropriate usage. We mend this gap by using Algebraic Visualization Design to show that they are best suited to relatively small tables with ordinal axes for some comparison and outlier identification tasks. In doing so we demonstrate a discount theory-based analysis that can be used to cheaply determine best practices for unknown visualizations.
    `,
    type: 'conference / journal articles',
    subtype: 'journal',
    bibTex: 'todo'
  },
  {
    link: 'https://arxiv.org/pdf/2101.07902.pdf',
    urlTitle: 'ivy',
    imgLink: 'converted-images/ivy.jpg',
    title: 'Integrated Visualization Editing via Parameterized Declarative Templates',
    authors: 'Andrew McNutt, Ravi Chugh',
    // journal: 'Proceedings of the 2021 ACM annual conference on Human Factors in Computing Systems',
    journal: 'ACM CHI',
    date: 'May 2021',
    links: [
      {name: 'about', link: '#/research/ivy'},
      {name: 'live', link: 'https://github.com/mcnuttandrew/ivy'},
      {name: 'paper', link: 'https://arxiv.org/pdf/2101.07902.pdf'},
      {name: 'osf', link: 'https://osf.io/cture/'},
      {name: 'talk', link: '      https://www.youtube.com/watch?v=FzIdVnSi9Po'}
    ],
    abstract: `
Interfaces for creating visualizations typically embrace one of several common forms. Textual specification enables fine-grained control, shelf building facilitates rapid exploration, while chart choosing promotes immediacy and simplicity. Ideally these approaches could be unified to integrate the user- and usage-dependent benefits found in each modality, yet these forms remain distinct.

<br />
We propose parameterized declarative templates, a simple abstraction mechanism over JSON-based visualization grammars, as a foundation for multimodal visualization editors. We demonstrate how templates can facilitate organization and reuse by factoring the more than 160 charts that constitute Vega-Lite's example gallery into approximately 40 templates. We exemplify the pliability of abstracting over charting grammars by implementing—as a template—the functionality of the shelf builder Polestar (a simulacra of Tableau) and a set of templates that emulate the Google Sheets chart chooser. We show how templates support multimodal visualization editing by implementing a prototype and evaluating it through an approachability study.`,
    bibTex: `TODO`,
    type: 'conference / journal articles',
    subtype: 'conference'
  },
  {
    link: 'https://arxiv.org/pdf/2009.02384.pdf',
    urlTitle: 'nearby',
    imgLink: 'converted-images/nearby-preview.jpg',
    title:
      'Supporting Expert Close Analysis of Historical Scientific Writings: A Case Study for Near-by Reading',
    authors: 'Andrew McNutt, Agatha Seo-Hyun Kim, Sergio Elahi, Kazutaka Takahashi',
    journal: '2020 IEEE 5th Workshop on Visualization for the Digital Humanities (VIS4DH)',
    date: 'October 2020',
    links: [
      {name: 'about', link: '#/research/nearby'},
      {name: 'paper', link: 'https://arxiv.org/pdf/2009.02384.pdf'},
      {name: 'code', link: 'https://github.com/mcnuttandrew/sci-text-compare'},
      {name: 'live', link: 'https://goetheanddecandolle.rcc.uchicago.edu/'}
    ],
    abstract:
      'Distant reading methodologies make use of computational processes to aid in the analysis of large text corpora which might not be pliable to traditional methods of scholarly analysis due to their volume. While these methods have been applied effectively to a variety of types of texts and contexts, they can leave unaddressed the needs of scholars in the humanities disciplines like history, who often engage in close reading of sources. Complementing the close analysis of texts with some of the tools of distant reading, such as visualization, can resolve some of the issues. We focus on a particular category of this intersection—which we refer to as near-by reading—wherein an expert engages in a computer-mediated analysis of a text with which they are familiar. We provide an example of this approach by developing a visual analysis application for the near-by reading of 19th-century scientific writings by J. W. von Goethe and A. P. de Candolle. We show that even the most formal and public texts, such as scientific treatises, can reveal unexpressed personal biases and philosophies that the authors themselves might not have recognized.',
    bibTex: `TODO`,
    type: 'extended abstract / workshop papers',
    subtype: 'workshop'
  },
  {
    link: 'https://www.mcnutt.in/table-cartogram/',
    urlTitle: 'table-cartogram',
    imgLink: 'converted-images/tc-preview.jpg',
    title: 'A Minimally Constrained Optimization Algorithm for Table Cartograms',
    authors: 'Andrew McNutt, Gordon Kindlmann',
    journal:
      'VIS 2020 - InfoVIS Poster Track 🏆 Honorable Mention for Best Poster Research 🏆 (Juried Selection, 2 awarded)',
    date: 'October 2020',
    links: [
      {name: 'about', link: '#/research/table-cartogram'},
      {name: 'paper', link: 'https://osf.io/kem6j/'},
      {name: 'code', link: 'https://github.com/mcnuttandrew/table-cartogram'},
      {name: 'poster', link: './assets/table-cartogram-poster.pdf'},
      {name: 'live', link: 'https://www.mcnutt.in/table-cartogram/'}
    ],
    abstract:
      'Table cartograms are a recent type of data visualization that encodes numerical tabular data as a grid of quadrilaterals whose area areb rought into correspondence with the input data. The overall effect is similar to that of a heat map that has been ‘area-ed‘ rather than shaded. There exist several algorithms for creating these structures—variously utilizing techniques such as computational geometry and numerical optimization —yet each of them impose aesthetically-motivated conditions that impede fine tuning or manipulation of the visual aesthetic of the output. In this work we contribute an optimization algorithm for creating table cartograms that is able to compute a variety of table cartograms layouts for a single dataset. We make our web-ready implementation available as table-cartogram.ts',
    bibTex: `TODO`,
    type: 'posters',
    subtype: 'poster'
  },
  {
    link: 'https://arxiv.org/pdf/2001.02316.pdf',
    urlTitle: 'mirage',
    imgLink: 'converted-images/surfacing-visualization-mirages.jpg',
    title: 'Surfacing Visualization Mirages',
    authors: 'Andrew McNutt, Gordon Kindlmann, Michael Correll',
    // journal:
    //   'Proceedings of the 2020 ACM annual conference on Human Factors in Computing Systems <br/> 🏆 Honorable Mention for Best Paper 🏆 (Top 5% of papers)',
    journal: 'ACM CHI <br/> 🏆 Honorable Mention for Best Paper 🏆 (Top 5% of papers)',
    date: 'April 2020',
    links: [
      {name: 'about', link: '#/research/mirage'},
      {
        name: 'blog post',
        link: 'https://medium.com/multiple-views-visualization-research-explained/surfacing-visualization-mirages-8d39e547e38c'
      },
      {name: 'paper', link: 'https://arxiv.org/pdf/2001.02316.pdf'},
      {name: 'live', link: 'https://metamorphic-linting.netlify.com/'},
      {name: 'code', link: 'https://github.com/tableau/Visualization-Linting'},
      {name: 'osf', link: 'https://osf.io/je3x9'},
      {name: 'slides', link: './talks/mirage-talk.pdf'},
      {name: 'talk', link: 'https://www.youtube.com/watch?v=arHbVFbq-mQ'}
    ],
    abstract:
      'Dirty data and deceptive design practices can undermine, invert, or invalidate the purported messages of charts and graphs. These failures can arise silently: a conclusion derived from a particular visualization may look plausible unless the analyst looks closer and discovers an issue with the backing data, visual specification, or their own assumptions. We term such silent but significant failures visualization mirages. We describe a conceptual model of mirages and show how they can be generated at every stage of the visual analytics process. We adapt a methodology from software testing, metamorphic testing, as a way of automatically surfacing potential mirages at the visual encoding stage of analysis through modifications to the underlying data and chart specification. We show that metamorphic testing can reliably identify mirages across a variety of chart types with relatively little prior knowledge of the data or the domain.',
    bibTex: `TODO`,
    type: 'conference / journal articles',
    subtype: 'conference'
  },
  {
    link: 'https://research.tableau.com/paper/divining-insights-visual-analytics-through-cartomancy',
    imgLink: 'converted-images/vis-tarot.jpg',
    urlTitle: 'tarot',
    title: 'Divining Insights: Visual Analytics Through Cartomancy',
    authors: 'Andrew McNutt, Anamaria Crisan, Michael Correll',
    journal: 'alt.CHI',
    date: 'April 2020',
    links: [
      {name: 'about', link: '#/research/tarot'},
      {
        name: 'paper',
        link: 'https://research.tableau.com/paper/divining-insights-visual-analytics-through-cartomancy'
      },
      {name: 'live', link: 'https://vis-tarot.netlify.com/'},
      {name: 'code', link: 'https://github.com/mcorrell/vis-tarot'},
      {name: 'slides', link: './talks/tarot-talk.pdf'},
      {name: 'talk', link: 'https://www.youtube.com/watch?v=fRA42BjyG_Q'}
    ],
    abstract:
      'Our interactions with data, visual analytics included, are increasingly shaped by automated or algorithmic systems. An open question is how to give analysts the tools to interpret these “automatic insights” while also inculcating critical engagement with algorithmic analysis. We present a system, Sortilège, that uses the metaphor of a Tarot card reading to provide an overview of automatically detected patterns in data in a way that is meant to encourage critique, reflection, and healthy skepticism.',
    bibTex: `TODO`,
    type: 'extended abstract / workshop papers',
    subtype: 'ex. abs.'
  },
  {
    imgLink: 'converted-images/agathas-thing.jpg',
    urlTitle: 'goethe-poster',
    title: 'Textual Analysis & Comparison National Forms of Scientific Texts: Goethe + de Candolle',
    authors: 'Agatha Seo-Hyun Kim, Andrew McNutt, Sergio Elahi, Kazutaka Takahashi, Robert J Richards',
    journal: 'MindBytes Research Symposium. <br/> 🏆 Best Poster in Visualization 🏆',
    date: 'November 2019',
    links: [
      {name: 'poster', link: 'assets/posterkim102519.pdf'},
      // {name: 'live', link: 'https://goetheanddecandolle.rcc.uchicago.edu/'},
      {
        name: 'award',
        link: 'https://rcc.uchicago.edu/about-rcc/news-features/mind-bytes-2019-tipping-point-computational-and-ai-research'
      }
    ],
    abstract:
      "When the 19th-century European scientists were evaluating each other's ideas, they frequently validated their opinions by referring to the nationality of a given scientist as an explanatory type. Is there such a thing as 'national science'? This project examines widely-held ideas about the German and French styles of science in early 19th-century France. During this politically volatile period scientists found themselves in a difficult position. Between the aggressive political reality and the ideals of the cosmopolitan scientific community; as well as between the popularized image of national differences and the actual comparisons of the scientific ideas across national borders. As a case study, Goethe's and Candolle's botanical ideas, their receptions in France, and their actual texts are compared. We contrast these texts in detail through several types of interactive visualizations.",
    type: 'posters',
    subtype: 'poster',
    bibTex: 'todo'
  },
  // link to award: https://rcc.uchicago.edu/about-rcc/news-features/mind-bytes-2019-tipping-point-computational-and-ai-research
  {
    link: 'assets/forum-explorer-paper.pdf',
    imgLink: 'converted-images/forested-tree-view-example.jpg',
    title:
      'Improving the Scalability of Interactive Visualization Systems for Exploring Threaded Conversations',
    authors: 'Andrew McNutt, Gordon Kindlmann',
    urlTitle: 'forum-explorer-eurovis',
    // journal: 'Proceedings of the Eurographics Conference on Visualization "EuroVis" - Posters',
    journal: 'EuroVis - Posters',
    date: 'June 2019',
    links: [
      {name: 'paper', link: 'https://diglib.eg.org/xmlui/bitstream/handle/10.2312/eurp20191144/053-055.pdf'},
      {name: 'poster', link: 'assets/forum-explorer-poster.pdf'},
      {name: 'live', link: 'https://www.mcnutt.in/forum-explorer/'},
      {name: 'code', link: 'https://github.com/mcnuttandrew/forum-explorer'},
      {name: 'osf', link: 'https://osf.io/nrhqw/'}
    ],
    abstract:
      'Large threaded conversations, such as those found on YCombinator’s HackerNews, are typically presented in a way that shows individual comments clearly, but can obscure larger trends or patterns within the conversational corpus. Previous research has addressed this problem through graphical-overviews and NLP-generated summaries. These efforts have generally assumed a particular (and modest) data size, which limits their utility for large or deeply-nested conversations, and often require non-trivial offline processing time, which makes them impractical for day-to-day usage. We describe here Forum Explorer, a Chrome extension that combines and expands upon prior art through a collection of techniques that enable this type of representation to handle wider ranges of data in real time. Materials for this project are available at https://osf.io/nrhqw/.',
    bibTex: `
    @inproceedings{McNuttKindlmannForumExplorerPoster,
      title={Improving the Scalability of Interactive Visualization Systems for Exploring Threaded Conversations},
      author={McNutt, Andrew and Kindlmann, Gordon},
      booktitle={Poster Abstracts of the EG/VGTC Conference on Visualization (EuroVis)},
      year={2019}
    }`,
    type: 'posters',
    subtype: 'poster'
  },
  {
    link: 'assets/McNutt_Kindlmann_2018.pdf',
    imgLink: 'converted-images/lint-pic.jpg',
    urlTitle: 'linting-visguides',
    title: 'Linting for Visualization: Towards a Practical Automated Visualization Guidance System',
    authors: 'Andrew McNutt, Gordon Kindlmann',
    journal:
      '2nd IEEE VIS Workshop on Creation, Curation, Critique and Conditioning of Principles and Guidelines in Visualization ("VisGuides")',
    date: 'October 2018',
    links: [
      {name: 'paper', link: 'assets/McNutt_Kindlmann_2018.pdf'},
      {name: 'code', link: 'https://github.com/mcnuttandrew/vislint_mpl'},
      {name: 'slides', link: 'talks/vis-lint-talk.pdf'}
    ],
    abstract:
      ' Constructing effective charts and graphs in a scientific setting is a nuanced task that requires a thorough understanding of visualization design; a knowledge that may not be available to all practicing scientists. Previous attempts to address this problem have pushed chart creators to pore over large collections of guidelines and heuristics, or to relegate their entire workflow to end-to-end tools that provide automated recommendations. In this paper we bring together these two strains of ideas by introducing the use of lint as a mechanism for guiding chart creators towards effective visualizations in a manner that can be configured to taste and task without forcing users to abandon their usual workflows. The programmatic evaluation model of visualization linting (or vis lint) offers a compelling framework for the automation of visualization guidelines, as it offers unambiguous feedback during the chart creation process, and can execute analyses derived from machine vision and natural language processing. We demonstrate the feasibility of this system through the production of vislint_mpl, a prototype visualization linting system, that evaluates charts created in matplotlib.',
    bibTex: `
    @misc{mcnuttKindlmannLinting,
      Author = {McNutt, Andrew and Kindlmann, Gordon},
      Howpublished = {IEEE VIS Workshop: \href{https://c4pgv.dbvis.de/}{VisGuides: 2nd Workshop on the Creation, Curation, Critique and Conditioning of Principles and Guidelines in Visualization}},
      Month = oct,
      Title = {Linting for Visualization: Towards a Practical Automated Visualization Guidance System},
      Year = {2018}}
    `,
    type: 'extended abstract / workshop papers',
    subtype: 'workshop'
  },
  {
    link: 'https://link.springer.com/protocol/10.1007/978-1-4939-7724-6_14',
    imgLink: 'converted-images/cdd-pic.jpg',
    urlTitle: 'reporter-assays',
    title: 'Data Mining and Computational Modeling of High-Throughput Screening Datasets',
    authors: `Sean Ekins, Alex M. Clark, Krishna Dole, Kellan Gregory, Andrew McNutt,
    Anna Coulon Spektor, Charlie Weatherall, Nadia K Litterman, Barry A Bunin`,
    journal: 'Reporter Gene Assays',
    date: '2018',
    links: [{name: 'paper', link: 'https://link.springer.com/protocol/10.1007/978-1-4939-7724-6_14'}],
    abstract:
      'We are now seeing the benefit of investments made over the last decade in high-throughput screening (HTS) that is resulting in large structure activity datasets entering public and open databases such as ChEMBL and PubChem. The growth of academic HTS screening centers and the increasing move to academia for early stage drug discovery suggests a great need for the informatics tools and methods to mine such data and learn from it. Collaborative Drug Discovery, Inc. (CDD) has developed a number of tools for storing, mining, securely and selectively sharing, as well as learning from such HTS data. We present a new web based data mining and visualization module directly within the CDD Vault platform for high-throughput drug discovery data that makes use of a novel technology stack following modern reactive design principles. We also describe CDD Models within the CDD Vault platform that enables researchers to share models, share predictions from models, and create models from distributed, heterogeneous data. Our system is built on top of the Collaborative Drug Discovery Vault Activity and Registration data repository ecosystem which allows users to manipulate and visualize thousands of molecules in real time. This can be performed in any browser on any platform. In this chapter we present examples of its use with public datasets in CDD Vault. Such approaches can complement other cheminformatics tools, whether open source or commercial, in providing approaches for data mining and modeling of HTS data.',
    type: 'theses / book chapters',
    subtype: 'chapter',
    bibTex: 'todo'
  },
  {
    link: 'https://arxiv.org/abs/1501.07537',
    imgLink: 'converted-images/qgrav-pic.jpg',
    title: 'The Schrodinger-Newton System with Self-field Coupling',
    authors: 'Joel Franklin, Youdan Guo, Andrew McNutt, Allison Morgan',
    urlTitle: 'qgrav',
    journal: 'Journal of Classical and Quantum Gravity',
    date: '2015',
    links: [
      {name: 'paper', link: 'https://arxiv.org/abs/1501.07537'},
      {name: 'slides', link: 'assets/QGravPresentation.pdf'}
    ],
    abstract:
      "We study the Schrodinger-Newton system of equations with the addition of gravitational field energy sourcing - such additional nonlinearity is to be expected from a theory of gravity (like general relativity), and its appearance in this simplified scalar setting (one of Einstein's precursors to general relativity) leads to significant changes in the spectrum of the self-gravitating theory. Using an iterative technique, we compare the mass dependence of the ground state energies of both Schrodinger-Newton and the new, self-sourced system and find that they are dramatically different. The Bohr method approach from old quantization provides a qualitative description of the difference, which comes from the additional nonlinearity introduced in the self-sourced case. In addition to comparison of ground state energies, we calculate the transition energy between the ground state and first excited state to compare emission frequencies between Schrodinger-Newton and the self-coupled scalar case.",
    type: 'conference / journal articles',
    subtype: 'journal',
    bibTex: 'todo'
  },
  {
    link: 'http://pubs.acs.org/doi/abs/10.1021/acs.jcim.5b00143',
    imgLink: 'converted-images/cdd-models-pic.jpg',
    title: 'Open source Bayesian models. 1. Application to ADME/Tox and drug discovery datasets',
    urlTitle: 'bayes-models',
    authors: `Alex M. Clark, Krishna Dole, Anna Coulon-Spektor, Andrew McNutt,
    George Grass, Joel S. Freundlich, Robert C. Reynolds, and Sean Ekins`,
    journal: 'Journal of Chemical Information and Modeling',
    date: '2015',
    links: [{name: 'paper', link: 'http://pubs.acs.org/doi/abs/10.1021/acs.jcim.5b00143'}],
    abstract:
      'On the order of hundreds of absorption, distribution, metabolism, excretion, and toxicity (ADME/Tox) models have been described in the literature in the past decade which are more often than not inaccessible to anyone but their authors. Public accessibility is also an issue with computational models for bioactivity, and the ability to share such models still remains a major challenge limiting drug discovery. We describe the creation of a reference implementation of a Bayesian model-building software module, which we have released as an open source component that is now included in the Chemistry Development Kit (CDK) project, as well as implemented in the CDD Vault and in several mobile apps. We use this implementation to build an array of Bayesian models for ADME/Tox, in vitro and in vivo bioactivity, and other physicochemical properties. We show that these models possess cross-validation receiver operator curve values comparable to those generated previously in prior publications using alternative tools. We have now described how the implementation of Bayesian models with FCFP6 descriptors generated in the CDD Vault enables the rapid production of robust machine learning models from public data or the user’s own datasets. The current study sets the stage for generating models in proprietary software (such as CDD) and exporting these models in a format that could be run in open source software using CDK components. This work also demonstrates that we can enable biocomputation across distributed private or public datasets to enhance drug discovery.',
    type: 'conference / journal articles',
    subtype: 'journal',
    bibTex: 'todo'
  },
  {
    link: 'assets/thesis.pdf',
    imgLink: 'converted-images/thesis-pic.jpg',
    title: 'Nonequivalent Lagrangian Mechanics',
    urlTitle: 'nonequiv',
    authors: 'Andrew McNutt (Advised by Nelia Mann)',
    journal: 'Undergraduate thesis. Reed College',
    date: 'June 2014',
    links: [
      {name: 'thesis', link: 'assets/thesis.pdf'},
      {name: 'slides', link: './assets/nlm-talk.pdf'}
    ],
    abstract:
      'In this thesis we study a modern formalism known as Nonequivalent Lagrangian Mechanics, that is constructed on top of the traditional Lagrangian theory of mechanics. By making use of the non-uniqueness of the Lagrangian representation of dynamical systems, we are able to generate conservation laws in a way that is novel and, in many cases much faster than the traditional Noetherian analysis. In every case that we examine, these invariants turn out to be Noetherian invariants in disguise. We apply this theory to a wide variety of systems including predator-prey dynamics and damped driven harmonic motion.',
    type: 'theses / book chapters',
    subtype: 'thesis',
    bibTex: 'todo'
  }
];