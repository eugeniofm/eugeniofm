---
title: Localization of Vine Robot Through Obstacle Collision
summary: We predict the tip position of a vine robot at every instant, using collisions to our advantage
tags:
  - Soft Robotics
  - Vine Robots
  - Research
date: '2022-12-25T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: Photo by Eugenio FM
  focal_point: Smart

links:
  - icon: twitter
    icon_pack: fab
    name: Follow
    url: https://twitter.com/eugeniofm_
url_code: ''
url_pdf: ''
url_slides: ''
url_video: 'https://www.youtube.com/watch?v=dF74yGpmTJo'

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: localizationExample
---

Collisions in robot navigation are conventionally avoided. However, complete obstacle avoidance is not always feasible within unstructured, unknown environments, like search and rescue, making life harder for rigid-bodied robots as they can become damaged by unintended collisions. On the other hand, robots with soft bodies which have compliant and deformable structures, can safely interact with the environment they are moving in. One specific soft robot, the vine robot, has exhibited excellent performance while moving through a constrained and unpredictable environment. The ability for these robots to safely interact with obstacles and use them for navigation has already been proved. In spite of this, localizing the robot remains an open challenge. In this research, we use our understanding of the nature of vine robot motion and the mathematical models developed for the same to be able to predict the tip position of the robot at every instant. 

Using this localization model, we analyze the performance of the tip position prediction by observing its interaction with three obstacles. Through these interactions we found results with high quality tracking. Less than 5 percent error was observed on the path prediction (magnitude of error with respect to total length) of a 1.5-meter-long vine robot. It was also found that the accuracy of the localization model decreases with changes in pivot point. This highlights the needs for  (1) understanding the pivot position errors better, and (2) improving the pivot position detection by improving the contact sensor cap. This is accomplished by (1) an experimental setup allowing for the adjustment of individual variables which determine the pivot point, and (2) redesign of the robot cap with improved sensing.