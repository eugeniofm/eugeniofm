---
title: A Soccer Playing Differential Drive Robot
summary: A ME588-Mechatronics Project
tags:
  - Robotics
  - Personal
  - Other
date: '2022-12-26T00:00:00Z'

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
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ME588Example
---

Differential drive robots are used in a variety of different applications, from playing basketball to mole-whacking. For this semester’s course of mechatronics we designed and implemented an autonomous differential drive soccer playing robot. The arena is divided into five different zones of the same size. In the game, robots will move autonomously to acquire a soccer ball which is placed randomly within zone 6 and score as many points as possible, noting that the further the ball is, the more points a goal is worth.
Our strategy was placing the robot in the middle of the furthest zone facing the goal, drive to the edge of zone 8, sweep clockwise and counterclockwise looking for the ball using a Lidar sensor, once the ball is detected, intake it, return to the original location and shoot. Our ball intake mechanism used rollers and rubber bands to guide the ball towards the robot’s center, while our launcher used a choo-choo mechanism to compress springs, then release the spring to shoot.